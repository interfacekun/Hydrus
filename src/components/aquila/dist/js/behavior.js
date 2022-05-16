"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Task=exports.Service=exports.Decorator=exports.Composite=exports.BehaviorStatus=exports.Behavior=void 0;var _logger=_interopRequireDefault(require("./logger")),_utils=_interopRequireDefault(require("./utils"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=_superPropBase(e,t);if(o)return o=Object.getOwnPropertyDescriptor(o,t),o.get?o.get.call(arguments.length<3?e:r):o.value}).apply(this,arguments)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _createForOfIteratorHelper(e,t){var r,o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return o&&(e=o),r=0,{s:t=function(){},n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,a=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,n=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var BehaviorStatus={Idle:-1,Failure:0,Success:1,Running:2},Behavior=(exports.BehaviorStatus=BehaviorStatus,function(){function u(e,t,r){if(_classCallCheck(this,u),this.parent=e,this.status=BehaviorStatus.Idle,t){if(this.config=t,this.context=r,this.convert(r,t),this.decorators=[],this.services=[],t.elements){var o,n=_createForOfIteratorHelper(t.elements);try{for(n.s();!(o=n.n()).done;){var i=o.value;"decorator"===i.type?this.decorators.push(new Decorator(this,i,r)):"service"===i.type&&this.services.push(new Service(this,i,r))}}catch(e){n.e(e)}finally{n.f()}}if(this.children=[],t.children){var a,s=_createForOfIteratorHelper(t.children);try{for(s.s();!(a=s.n()).done;){var c=a.value;"task"===c.type?this.children.push(new Task(this,c,r)):this.children.push(new Composite(this,c,r))}}catch(e){s.e(e)}finally{s.f()}}}else _logger.default.error("Behavior::constructor error -- config is null")}return _createClass(u,[{key:"update",value:function(e){_logger.default.debug("Execute Behavior -- ".concat(this.config.label));var t,r=_createForOfIteratorHelper(this.decorators);try{for(r.s();!(t=r.n()).done;)if(t.value.update(e)!==BehaviorStatus.Success)return BehaviorStatus.Failure}catch(e){r.e(e)}finally{r.f()}var o,n=_createForOfIteratorHelper(this.services);try{for(n.s();!(o=n.n()).done;)o.value.update(e)}catch(e){n.e(e)}finally{n.f()}return BehaviorStatus.Success}},{key:"reset",value:function(){this.status=BehaviorStatus.Idle;var e,t=_createForOfIteratorHelper(this.decorators);try{for(t.s();!(e=t.n()).done;)e.value.reset()}catch(e){t.e(e)}finally{t.f()}var r,o=_createForOfIteratorHelper(this.services);try{for(o.s();!(r=o.n()).done;)r.value.reset()}catch(e){o.e(e)}finally{o.f()}var n,i=_createForOfIteratorHelper(this.children);try{for(i.s();!(n=i.n()).done;)n.value.reset()}catch(e){i.e(e)}finally{i.f()}}},{key:"convert",value:function(e,t){if(this.__func__=null,e){if(t.actor){var r=null,o={};if(_utils.default.common.isString(t.actor))o={id:t.actor};else{if(!_utils.default.common.isObject(t.actor)||!_utils.default.common.isString(t.actor.id))return void _logger.default.error("Behavior::bind failed -- [".concat(t.label,"] config.actor is invalid"));o=t.actor}if("decorator"===t.type)r=e.$decorators[o.id];else if("service"===t.type)r=e.$services[o.id];else{if("task"!==t.type)return;r=e.$tasks[o.id]}this.__func__=r.bind(e.$blackboard)}}else _logger.default.error("Behavior::bind failed -- [".concat(t.label,"] context is null"))}}]),u}()),Decorator=(exports.Behavior=Behavior,function(){_inherits(n,Behavior);var o=_createSuper(n);function n(e,t,r){return _classCallCheck(this,n),o.call(this,e,t,r)}return _createClass(n,[{key:"update",value:function(e){_logger.default.debug("Execute Decorator -- ".concat(this.config.label));var t=!0;return this.__func__&&(e=[e].concat(this.config.actor.params||[]),t=this.__func__.apply(null,e)),!0===this.config.invert&&(t=!t),this.context.log({type:"decorator",node:this.config.label,action:"judge",result:t}),t?BehaviorStatus.Success:BehaviorStatus.Failure}}]),n}()),Service=(exports.Decorator=Decorator,function(){_inherits(n,Behavior);var o=_createSuper(n);function n(e,t,r){return _classCallCheck(this,n),o.call(this,e,t,r)}return _createClass(n,[{key:"update",value:function(e){_logger.default.debug("Execute Service -- ".concat(this.config.label)),this.__func__&&(e=[e].concat(this.config.actor.params||[]),this.__func__.apply(null,e)),this.context.log({type:"service",node:this.config.label,action:"execute"})}}]),n}()),Composite=(exports.Service=Service,function(){_inherits(n,Behavior);var o=_createSuper(n);function n(e,t,r){return _classCallCheck(this,n),(e=o.call(this,e,t,r)).isComposite=!0,e.lastRunning=-1,e.__cache__=[],e}return _createClass(n,[{key:"update",value:function(e){var t=_get(_getPrototypeOf(n.prototype),"update",this).call(this,e);return t===BehaviorStatus.Success&&0<this.children.length?"selector"===this.config.type?this.updateSelector(e):"sequence"===this.config.type?this.updateSequence(e):"parallel"===this.config.type?this.updateParallel(e):BehaviorStatus.Error:t}},{key:"updateSelector",value:function(e){var t=BehaviorStatus.Success,r=0<=this.lastRunning?this.lastRunning:0;for(this.lastRunning=-1;r<this.children.length;r++)if(t=this.children[r].update(e),console.log(r,t),t!==BehaviorStatus.Failure){if(t===BehaviorStatus.Success)break;if(t===BehaviorStatus.Running){this.lastRunning=r;break}}return t}},{key:"updateSequence",value:function(e){var t=BehaviorStatus.Success,r=0<=this.lastRunning?this.lastRunning:0;for(this.lastRunning=-1,r=this.lastRunning;r<this.children.length&&(t=this.children[r].update(e))!==BehaviorStatus.Failure;r++)if(t!==BehaviorStatus.Success&&t===BehaviorStatus.Running){this.lastRunning=r;break}return t}},{key:"updateParallel",value:function(e){for(var t=BehaviorStatus.Success,r=this.config.threshold?Number(this.config.threshold):-1,o=(r<0&&(r=this.children.length),r=_utils.default.lodash.clamp(r,0,this.children.length),0),n=0,i=0;i<this.children.length;i++)null!=this.__cache__[i]&&this.__cache__[i]!==BehaviorStatus.Running||(t=this.children[i].update(e),(this.__cache__[i]=t)===BehaviorStatus.Running&&n++),this.__cache__[i]===BehaviorStatus.Success&&o++;return t=0===n?o===r?BehaviorStatus.Success:BehaviorStatus.Failure:BehaviorStatus.Running}},{key:"reset",value:function(){_get(_getPrototypeOf(n.prototype),"reset",this).call(this),this.lastRunning=-1,this.__cache__=[]}}]),n}()),Task=(exports.Composite=Composite,function(){_inherits(n,Behavior);var o=_createSuper(n);function n(e,t,r){return _classCallCheck(this,n),o.call(this,e,t,r)}return _createClass(n,[{key:"update",value:function(e){_logger.default.debug("Execute Task -- ".concat(this.config.label));var t=_get(_getPrototypeOf(n.prototype),"update",this).call(this,e);return t!==BehaviorStatus.Success||(t=BehaviorStatus.Success,this.__func__&&(e=[e].concat(this.config.actor.params||[]),t=this.__func__.apply(null,e)),this.context.log({type:"task",node:this.config.label,action:"execute"})),t}}]),n}());exports.Task=Task;