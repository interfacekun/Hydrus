 <template>
    <div class="container" id="script">
            <Form :model="model.form" :label-width="120" :rules="rules" ref="form">
                <FormItem label="Parent">
                    <Tag color="success">{{ model.form.parent }}</Tag>
                </FormItem>
                 <FormItem label="Type" prop="type">
                   <Tag color="primary">{{ model.form.type }}</Tag>
                </FormItem>
                <FormItem label="Title" prop="title" >
                    <Input v-model="model.form.title" placeholder="Enter title" :readonly="true"></Input>
                </FormItem>
                <FormItem label="Script" prop="script" >
                    <Input v-model="model.form.script" placeholder="Enter script function"></Input>
                </FormItem>
                <FormItem label="Parameters">
                    <Tag
                        :key="tag"
                        color="warning"
                        v-for="(tag, i) in model.form.parameters"
                        closable
                        @on-close="handleParametersClose(tag)">
                      {{tag}}
                    </Tag>
                    <Input
                      class="input-new-tag"
                      v-if="inputArgsVisible"
                      v-model="inputArgsValue"
                      ref="saveParametersInput"
                      size="small"
                      @keyup.enter.native="handleParametersInputConfirm"
                      @on-blur="handleParametersInputConfirm"
                    >
                    </Input>
                     <Button v-else  icon="ios-add" size="small" @click="showParametersInput">
                    </Button>
                </FormItem>
                <FormItem label="Invert">
                     <i-switch v-model="model.form.invert" size="small" :disabled="model.form.type === 'service' ">
                        <span slot="open"></span>
                        <span slot="close"></span>
                    </i-switch>
                </FormItem>
            </Form>
    </div>        
 </template>
<style scoped>
    .container {
      text-align: left;
    }

    .el-tag + .el-tag {
      margin-left: 10px;
    }
   
    .el-tag {
      margin-top: 4px;
    }

    .input-new-tag {
      width: 90px;
      margin-left: 10px;
    }

</style>

<script>
  export default {
    props: ["model"],
    data: function () {
      return {
        nodeTypes: {
            decorator: 'Decorator',
            service: 'Service',
            task: 'Task'
        },
        inputVisible: false,
        inputValue: '',
        inputArgsVisible: false,
        inputArgsValue: '',
        rules:{
            script: [{ type: 'string', required: true, message: '格式不合法，只能包含大小写字母、数字和下划线', pattern: /^[a-zA-Z0-9_]+$/, trigger: 'blur' }],
            title: [{ type: 'string', required: true, message: '不能为空', trigger: 'blur' }],
            type: [{ required: true, message: '不能为空', trigger: 'change' }]
        }
      }
    },
    methods: {
      handleTagClose(tag) {
        this.model.form.parameters.splice(this.model.form.parameters.indexOf(tag), 1);
      },
      showTagInput() {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs['saveTagInput'].$refs.input.focus()
        })
      },
      handleTagInputConfirm() {
        let inputValue = this.inputValue
        if (inputValue) {
          this.model.form.parameters.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      },

      handleParametersClose(tag) {
        console.log("EditScript.vue handleParametersClose", tag);
        this.model.form.parameters.splice(this.model.form.parameters.indexOf(tag), 1);
      },

      showParametersInput() {
        this.inputArgsVisible = true
        this.$nextTick(_ => {
          this.$refs['saveParametersInput'].$refs.input.focus()
        });
      },

      handleParametersInputConfirm() {
        let inputValue = this.inputArgsValue
        if (inputValue) {
          this.model.form.parameters.push(inputValue)
        }
        this.inputArgsVisible = false
        this.inputArgsValue = ''
      },

      validate(cb) {
          this.$refs['form'].validate((valid) => {
             cb && cb(valid)
          })
      }
    },
    mounted: function () {
    }
  }

</script>
