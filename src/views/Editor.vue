<template>
  <div class="container" v-resize="onContainerResize">
    <div id="scene"></div>
    <div class="menu">
      <Row>
        <ButtonGroup>
          <Button type="primary" icon="md-folder-open" @click="load"></Button>
          <Button type="primary" icon="md-archive" @click="save"></Button>
          <Button type="primary" icon="md-cloud-download" @click="loadCache"></Button>
          <Button type="primary" icon="md-cloud-upload" @click="saveCache"></Button>
          <Button type="primary" icon="md-add-circle" @click="zoomIn"></Button>
          <Button type="primary" icon="md-remove-circle" @click="zoomOut"></Button>
          <Button type="primary" icon="md-refresh-circle" @click="reset"></Button>
          <Button type="primary" icon="md-undo" @click="undo"></Button>
          <Button type="primary" icon="md-redo" @click="redo"></Button>
          <Button type="primary" icon="md-trash " @click="clear"></Button>

          <Dropdown @on-click="handleAddCommand">
              <Button type="error" icon="ios-cube">
               <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem v-for="(val, key) in nodeTypes" :name="key">{{val}}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
      </Row>
    </div>
    
    <input type="file" id="hydrusfile" ref="hydrusfile" style="display: none" @change="loadLocalFile">

    <Modal :title="dialogs.elementModel.title" v-model="dialogs.elementModel.visible" :closable="false" width="60%">
        <EditElement :model="dialogs.elementModel" ref="editElement"></EditElement>
        <div slot="footer" class="dialog-footer">
            <Button @click="dialogs.elementModel.visible = false">Cancel</Button>
            <Button type="primary" @click="handleElementModel">Ok</Button>
        </div>
    </Modal>
    <Modal :title="dialogs.entityModel.title" v-model="dialogs.entityModel.visible" :closable="false" width="60%">
        <EditEntity :model="dialogs.entityModel" ref="editEntity"></EditEntity>
        <div slot="footer">
            <Button @click="dialogs.entityModel.visible = false">Cancel</Button>
            <Button type="primary" @click="handleEntityModel">Ok</Button>
        </div>
    </Modal>

  </div>
</template>

<style scoped>
.container {
  overflow: hidden;
  height: 100%;
}

#scene {
  width: 100%;
  height: 100%;
  background-color: black;
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  text-align: left;
  margin-left: 40px;
  margin-top: 10px;
}

.ivu-dropdown {
  margin-left: 10px;
}
</style>

<script>
  import resize from 'vue-resize-directive'
  import FileSaver from 'file-saver'
  import LocalForage from "localforage"
  import Corvus from '../components/corvus/index'
  import EditElement from '../components/EditElement.vue'
  import EditEntity from '../components/EditEntity.vue'
  import Aquila from 'orion-aquila'

  export default {
    components: { EditElement, EditEntity },
    data: function () {
      return {
        size: {
          width: 0,
          height: 0
        },
        scene: {
          stage: null,
          cachekey: 'hydruscache',
          editables: ['task', 'decorator', 'service']
        },
        nodeTypes: {
          selector: 'Selector',
          sequence: 'Sequence',
          parallel: 'Parallel',
          task: 'Task',
          decorator: 'Decorator',
          service: 'Service'
        },
        dialogs: {
          elementModel: {
            visible: false,
            host: null,
            action: 'add',
            title: '',
            form: {
              parent: '',
              title: '',
              script: '',
              subtitles: [],
              type: '',
              invert: false,
              parameters: []
            }
          },
          entityModel: {
            visible: false,
            host: null,
            action: 'add',
            title: '',
            form: {
              parent: '',
              title: '',
              script: '',
              subtitles: [],
              type: '',
              parameters: []
            }
          }
        }
      }
    },
    directives: {
      resize,
    },
    computed: {
    },
    methods: {
      onContainerResize() {
        this.size.width = this.$el.clientWidth
        this.size.height = this.$el.clientHeight
        this.scene.stage.resize(this.size.width, this.size.height)
      },
      handleEditCommand(node){
        if (!node) {
          return
        }
        let parent = node.parent()
        let command = node.nodeType()
        let model = null
        if (node.isType('label')) {
          model = this.dialogs.elementModel
          model.form.subtitles = [].concat(node.getSubtitles())
          model.form.title = node.getTitle()
          model.form.script = node.getScript()
          console.log("handleEditCommand1", JSON.stringify(model.form.parameters), JSON.stringify(node.getScriptParameters()), node, node.nodeType());
          model.form.parameters = [].concat(node.getScriptParameters())
          model.form.invert = node.getInvert()
        } else if (node.isType('entity')) {
          model = this.dialogs.entityModel
          model.form.subtitles = [].concat(node.label().getSubtitles())
          model.form.title = node.label().getTitle()
          model.form.script = node.label().getScript()
          console.log("handleEditCommand2", JSON.stringify(node.label().getScriptParameters()), node, node.nodeType(), model.form.title);
          model.form.parameters = [].concat(node.label().getScriptParameters())
        } else {
          this.$Message.error({
            content: 'Unknown node - ' + command
          })
          return
        }

        model.title = 'Edit ' + this.nodeTypes[command]
        model.form.parent = parent.label().getTitle()
        model.host = node
        model.action = 'edit'
        model.form.type = command
        model.visible = true
      },
      handleAddCommand(command) {
        // 获取当前选中节点
        let parent = this.scene.stage.selectedNode()
        if (parent && parent.isType('label')) {
          parent = parent.parent()
        }
        let model = null
        if (command === 'decorator') {
          if (!parent.canAcceptDecorator()){
            this.$Message.error({
              content: 'Selected Node can not add ' + command
            })
            return
          }
          model = this.dialogs.elementModel
          model.form.subtitles = ['condition']
          model.form.invert = false
        } else if (command === 'service') {
          if (!parent.canAcceptService()){
              this.$Message.error({
               content: 'Selected Node can not add ' + command
              })
             return
          }
          model = this.dialogs.elementModel
          model.form.subtitles = [command]
        } else if (command === 'selector') {
          if (!parent.canAcceptChild()){
            this.$Message.error({
              content: 'Selected Node can not add ' + command
            })
            return
          }
          model = this.dialogs.entityModel
          model.form.subtitles = [command]
        } else if (command === 'sequence') {
           if (!parent.canAcceptChild()){
            this.$Message.error({
              content: 'Selected Node can not add ' + command
            })
             return
          }
          model = this.dialogs.entityModel
          model.form.subtitles = [command]
        } else if (command === 'parallel') {
           if (!parent.canAcceptChild()){
            this.$Message.error({
              content: 'Selected Node can not add ' + command
            })
            return
          }
          model = this.dialogs.entityModel
          model.form.subtitles = [command]
        } else if (command === 'task') {
           if (!parent.canAcceptChild()){
             this.$Message.error({
               content: 'Selected Node can not add ' + command
             })
             return
          }
          model = this.dialogs.entityModel
          model.form.subtitles = [command]
        } else {
          this.$Message.error({
            content: 'Unknown Command - ' + command 
          })
          return
        }

        model.title = 'Add ' + this.nodeTypes[command]
        model.form.parent = parent.label().getTitle()
        model.host = parent
        model.action = 'add'
        model.form.type = command
        model.visible = true
      },
      handleElementModel(){
        let model = this.dialogs.elementModel
        console.log("handleElementModel", model.action);
         if (model.action === 'add'){
          // 检测合法性
          this.$refs['editElement'].validate((valid) => {
              if (valid) {
                // 添加Element
                let config = {
                  title: model.form.title,
                  subtitles: model.form.subtitles,
                  script: model.form.script,
                  invert: model.form.invert,
                  parameters: model.form.parameters
                }
                
                if (model.form.type === 'decorator') {
                  model.host.addDecorator(config)
                } else if (model.form.type === 'service') {
                  model.host.addService(config)
                }
                this.scene.stage.updateOrder()
                this.scene.stage.refresh()
                this.scene.stage.snapshot()
                model.visible = false
                this.saveCache();
              }
          })
         } else if (model.action === 'edit') {
          
           this.$refs['editElement'].validate((valid) => {
             if (valid || (model.form.type === 'decorator' && model.form.parameters && model.form.parameters.length >= 0)) {
              // 修改节点属性
              model.host.setTitle(model.form.title)
              model.host.setSubtitles(model.form.subtitles)
              model.host.setScript(model.form.script, model.form.parameters)
              if (model.form.type === 'decorator') {
                model.host.setInvert(model.form.invert)
              }
              model.host.parent().adjust()
              this.scene.stage.refresh()
              this.scene.stage.snapshot()
              model.visible = false
              this.saveCache();
             }
           })
         } else { // 其余动作

         }
      },
      handleEntityModel(){
        let model = this.dialogs.entityModel
        console.log("handleEntityModel", model.action);
         if (model.action === 'add'){
          // 检测合法性
          this.$refs['editEntity'].validate((valid) => {
              if (valid) {
                // 添加Element
                let data = {
                  type: model.form.type,
                  config: {
                    label: {
                      title: model.form.title,
                      subtitles: model.form.subtitles,
                      script: model.form.script,
                      parameters: model.form.parameters
                    }
                  }
                }

                let child = this.scene.stage.createEntity(data)
                model.host.addChild(child)
                this.scene.stage.updateOrder()
                this.scene.stage.refresh()
                this.scene.stage.snapshot()
                model.visible = false
                this.saveCache();
              }
          })
         } else if (model.action === 'edit') {
          
           this.$refs['editEntity'].validate((valid) => {
             console.log("handleEntityModel2", model.host, model.host.label(), model.form.title, valid);
             if (valid || (model.form.parameters && model.form.parameters.length >= 0)) {
                // 修改节点属性
                model.host.label().setTitle(model.form.title)
                model.host.label().setScript(model.form.script, model.form.parameters)
                model.host.label().setSubtitles(model.form.subtitles)
                model.host.config.label.title = model.form.title;
                model.host.config.label.script = model.form.script;
                model.host.config.label.parameters = model.form.parameters;
                model.host.config.label.subtitles = model.form.subtitles;
                model.host.adjust()
                this.scene.stage.refresh()
                this.scene.stage.snapshot()
                model.visible = false
                this.saveCache();
             }
           })

         } else {

         }
      },
      loadLocalFile() {
        let selectedFile = this.$el.querySelector('#hydrusfile').files[0]
        let name = selectedFile.name
        let size = selectedFile.size //读取选中文件的大小
        if (size === 0){
            this.$Message.error({
              content: `File <${name}> is empty`,
              duration: 2
            })
           return
        }
        let reader = new FileReader()

        reader.onload = () => {
          let json = JSON.parse(reader.result)
          this.$store.commit('updateInternalCache', json)
          this.scene.stage.loadFromJson(json)
        }
        reader.readAsText(selectedFile)
      },
      load(){
        // this.$el.querySelector('#hydrusfile').click()
        this.$refs.hydrusfile.dispatchEvent(new MouseEvent('click'))
        // console.log("hydrusfile", this.$refs.hydrusfile);
      },
      save(){
        this.scene.cache = this.scene.stage.saveToJson()
        this.$store.commit('updateInternalCache', this.scene.cache);
        let time;
        // 保存到本地文件
        if (this.scene.cache.root) {
          let filename = this.scene.cache.root.config.label.title
          let blob = new Blob([JSON.stringify(this.scene.cache)], {type: "text/plain;charset=utf-8"});
          time = Aquila.Utils.common.currentDateString(true);
          FileSaver.saveAs(blob, filename + '-' + time + ".json")
        } else {
          console.error("没有文件需要保存");
          this.$Message.error({
              content: '没有文件需要保存',
              duration: 2
          });
        }
        let json = this.$store.getters.internalCache;
        if (json) {
          json = this.convert(json);
          let filename = `${this.scene.cache.root.config.label.title}-bttree-${time}.json`;
          let blob = new Blob([JSON.stringify(json)], {type: "text/plain;charset=utf-8"});
          FileSaver.saveAs(blob, filename);
        } else {
            console.error("缓存没有保存");
             this.$Message.error({
              content: '缓存没有保存',
              duration: 2
          });
        }
      },

      convert (json) {
        let tree = {}
        const walk = (node) => {
          let n = {
            type: node.type,
          }
          let idx = this.scene.editables.indexOf(n.type)
          n.label = idx > 0 ? node.config.title : node.config.label.title

          if (idx >= 0) {
            n.actor = {
              id: n.type === 'task' ? node.config.label.script : node.config.script
            }
            let params = (n.type === 'task') ? node.config.label.parameters : node.config.parameters
            if (params) {
              n.actor.params = [].concat(params)
            }
          }

          // 处理孩子节点
          n.elements = []
          if (node.elements) {
            for (let elem of node.elements) {
              n.elements.push(walk(elem))
            }
          }

          n.children = []
           if (node.children) {
            for (let child of node.children) {
              n.children.push(walk(child))
            }
          }
          return n
        }
        tree.root = walk(json.root)
        return tree;
      },

      loadCache(){
        LocalForage.getItem(this.scene.cachekey, (err, value) => {
          if (err) {
            this.$Message.warning({
              content: 'Cache data is empty',
              duration: 2
            })
            return
          }
          let json = JSON.parse(value)
          this.scene.stage.loadFromJson(json)
          this.$store.commit('updateInternalCache', json)
        })
      },
      saveCache(){
        let json = this.scene.stage.saveToJson()
        this.saveInternalCache(this.scene.cachekey, json)
        this.$store.commit('updateInternalCache', json)
      },
      loadInternalCache(){
        let json = this.$store.getters.internalCache
        if (json) {
          this.scene.stage.loadFromJson(json)
        }
      },
      saveInternalCache(key, json) {
        LocalForage.setItem(key, JSON.stringify(json), (err) => {
          if (err) {
            this.$Message.error({
              content: `Save Cache [${key}] failed`,
              duration: 2
            })
            return
          } 
        })
      },
      zoomIn(){
        this.scene.stage.zoomIn()
      },
      zoomOut(){
        this.scene.stage.zoomOut()
      },
      reset(){
        
        this.scene.stage.reset()
      },
      undo(){
        window["autoUid"]--;
        this.scene.stage.undo()
      },
      redo(){
        this.scene.stage.redo()
      },
      clear(){
       
         this.$Modal.confirm({
           content: 'Are you sure?',
           title: 'Tip', 
           okText: 'Ok',
           cancelText: 'Cancel',
           onOk: () => {
              window["autoUid"] = 2;
              this.scene.stage.clear()
          }})
      },
      test(){
        // Demo Tree JSON
        const demo = {
          root: {
            type: 'selector',
            config: {
              label: {
                title: '战士AI'
              }
            },
            children: [
              {
                type: 'sequence',
                config: {
                  label: {
                    title: '驾驶'
                  }
                },
                children: [
                  {
                    type: 'task',
                    config: {
                      label: {
                        title: '驾驶汽车'
                      },
                    },
                    elements: [
                      {
                        type: 'decorator',
                        config: {
                          title: '5米距离内有汽车'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type: 'sequence',
                config: {
                  label: {
                    title: '撤退'
                  }
                },
                children: [
                  {
                    type: 'selector',
                    config: {
                      label: {
                        title: '或'
                      }
                    },
                    elements: [
                      {
                        type: 'decorator',
                        config: {
                          title: '我方人数小于3'
                        }
                      },
                      {
                        type: 'decorator',
                        config: {
                          title: '敌方人数倍数大于5'
                        }
                      }
                    ]
                  },
                  {
                    type: 'task',
                    config: {
                      label: {
                        title: '撤退'
                      }
                    }
                  }
                ]
              },
              {
                type: 'selector',
                config: {
                  label: {
                    title: '自卫'
                  }
                },
                children: [
                  {
                    type: 'sequence',
                    config: {
                      label: {
                        title: '使用手雷'
                      }
                    },
                    elements: [
                      {
                        type: 'decorator',
                        config: {
                          title: '前方15米内敌方人数小于4'
                        }
                      }
                    ],
                    children: [
                      {
                        type: 'task',
                        config: {
                          label: {
                            title: '扔手雷'
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }

        let sel1 = this.scene.stage.addSelectorNode()

        let dec = sel1.addDecorator({
          title: 'AAA',
          subtitles: ['zzzz']
        })
    
        let dec2 = sel1.addDecorator({
          title: 'CCC',
          subtitles: ['cccccc:sdffd']
        })
   
        let ser = sel1.addService({
          title: 'BBB',
          subtitles: ['xxzz: sdfsf']
        })
    
        this.scene.stage.addSelectorNode({
          parent: sel1.id()
        })
        this.scene.stage.addSequenceNode({
          parent: sel1.id()
        })

        let sel2 = this.scene.stage.addSelectorNode()
        this.scene.stage.addTaskNode({
          parent: sel2.id()
        })

        this.scene.stage.addParallelNode()
        
        // 从文件加载
        this.scene.stage.loadFromJson(demo)
        this.scene.stage.refresh()

      }
    },
    mounted: function () {
      // 随窗口动态改变大小
      this.size.width = this.$el.clientWidth
      this.size.height = this.$el.clientHeight

      this.scene.stage = Corvus.init({
        container: 'scene',    //container 用来容纳舞台的容器
        width: this.size.width,
        height: this.size.height,
        events: {
          edit: (node) => {
            console.log("mounted edit", node.config.uid);
            this.handleEditCommand(node)
          }
        }
      })

      // 默认加载内部缓存数据
      this.loadInternalCache()
    }
  }
</script>
