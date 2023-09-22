/*! For license information please see 2683.ad4b7d28.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[2683],{"./dist/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>createUseClassName});var _tools_clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/tools/clsx.js"),_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tools/useConstCallback.js");function createUseClassName(params){var defaultClasses=params.defaultClasses;return{useGetClassName:function useGetClassName(params){var classes=params.classes;return{getClassName:(0,_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_1__.O)((function(classKey){return(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_0__.W)(classKey,defaultClasses[classKey],null==classes?void 0:classes[classKey])}))}}}}},"./dist/login/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>useGetClassName});var useGetClassName=(0,__webpack_require__("./dist/lib/useGetClassName.js").a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},"./dist/login/pages/WebauthnAuthenticate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>WebauthnAuthenticate});__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array-buffer.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array-buffer.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.uint8-array.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.copy-within.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.every.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.last-index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reduce-right.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.set.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.subarray.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.to-locale-string.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./dist/tools/clsx.js"),lib=__webpack_require__("./node_modules/rfc4648/lib/index.js");lib.YU,lib.pJ,lib.eV,lib.US;const base64url=lib.tH;lib.Y2;var useConstCallback=__webpack_require__("./dist/tools/useConstCallback.js"),useGetClassName=__webpack_require__("./dist/login/lib/useGetClassName.js"),assert=__webpack_require__("./node_modules/tsafe/esm/assert.mjs"),is=__webpack_require__("./node_modules/tsafe/esm/is.mjs"),typeGuard=__webpack_require__("./node_modules/tsafe/esm/typeGuard.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function WebauthnAuthenticate(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,getClassName=(0,useGetClassName.v)({doUseDefaultCss,classes}).getClassName,url=kcContext.url,msg=i18n.msg,msgStr=i18n.msgStr,authenticators=kcContext.authenticators,challenge=kcContext.challenge,shouldDisplayAuthenticators=kcContext.shouldDisplayAuthenticators,userVerification=kcContext.userVerification,rpId=kcContext.rpId,createTimeout=Number(kcContext.createTimeout),isUserIdentified="true"==kcContext.isUserIdentified,formElementRef=(0,react.useRef)(null),webAuthnAuthenticate=(0,useConstCallback.O)(_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){var submitForm,allowCredentials,publicKey,result,response,_clientDataJSON,_authenticatorData,_signature;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(isUserIdentified){_context2.next=2;break}return _context2.abrupt("return");case 2:if(submitForm=function(){var _ref2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var formElement;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null!==(formElement=formElementRef.current)){_context.next=5;break}return _context.next=4,new Promise((function(resolve){return setTimeout(resolve,100)}));case 4:return _context.abrupt("return",submitForm());case 5:formElement.submit();case 6:case"end":return _context.stop()}}),_callee)})));return function submitForm(){return _ref2.apply(this,arguments)}}(),allowCredentials=authenticators.authenticators.map((function(authenticator){return{id:base64url.parse(authenticator.credentialId,{loose:!0}),type:"public-key"}})),window.PublicKeyCredential){_context2.next=8;break}return setError(msgStr("webauthn-unsupported-browser-text")),submitForm(),_context2.abrupt("return");case 8:return publicKey={rpId,challenge:base64url.parse(challenge,{loose:!0})},0!==createTimeout&&(publicKey.timeout=1e3*createTimeout),allowCredentials.length&&(publicKey.allowCredentials=allowCredentials),"not specified"!==userVerification&&(publicKey.userVerification=userVerification),_context2.prev=12,_context2.next=15,navigator.credentials.get({publicKey});case 15:if((result=_context2.sent)&&"public-key"==result.type){_context2.next=18;break}return _context2.abrupt("return");case 18:if((0,assert.h)((0,is.is)(result)),"authenticatorData"in result.response){_context2.next=21;break}return _context2.abrupt("return");case 21:response=result.response,_clientDataJSON=response.clientDataJSON,(0,assert.h)((0,typeGuard.z)(response,"signature"in response&&response.authenticatorData instanceof ArrayBuffer),"response not an AuthenticatorAssertionResponse"),_authenticatorData=response.authenticatorData,_signature=response.signature,setClientDataJSON(base64url.stringify(new Uint8Array(_clientDataJSON),{pad:!1})),setAuthenticatorData(base64url.stringify(new Uint8Array(_authenticatorData),{pad:!1})),setSignature(base64url.stringify(new Uint8Array(_signature),{pad:!1})),setCredentialId(result.id),setUserHandle(base64url.stringify(new Uint8Array(response.userHandle),{pad:!1})),_context2.next=36;break;case 33:_context2.prev=33,_context2.t0=_context2.catch(12),setError(String(_context2.t0));case 36:submitForm();case 37:case"end":return _context2.stop()}}),_callee2,null,[[12,33]])})))),_useState2=_slicedToArray((0,react.useState)(""),2),clientDataJSON=_useState2[0],setClientDataJSON=_useState2[1],_useState4=_slicedToArray((0,react.useState)(""),2),authenticatorData=_useState4[0],setAuthenticatorData=_useState4[1],_useState6=_slicedToArray((0,react.useState)(""),2),signature=_useState6[0],setSignature=_useState6[1],_useState8=_slicedToArray((0,react.useState)(""),2),credentialId=_useState8[0],setCredentialId=_useState8[1],_useState10=_slicedToArray((0,react.useState)(""),2),userHandle=_useState10[0],setUserHandle=_useState10[1],_useState12=_slicedToArray((0,react.useState)(""),2),error=_useState12[0],setError=_useState12[1];return(0,jsx_runtime.jsx)(Template,Object.assign({},{kcContext,i18n,doUseDefaultCss,classes},{headerNode:msg("webauthn-login-title")},{children:(0,jsx_runtime.jsxs)("div",Object.assign({id:"kc-form-webauthn",className:getClassName("kcFormClass")},{children:[(0,jsx_runtime.jsxs)("form",Object.assign({id:"webauth",action:url.loginAction,ref:formElementRef,method:"post"},{children:[(0,jsx_runtime.jsx)("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON",value:clientDataJSON}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"authenticatorData",name:"authenticatorData",value:authenticatorData}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"signature",name:"signature",value:signature}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"credentialId",name:"credentialId",value:credentialId}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"userHandle",name:"userHandle",value:userHandle}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"error",name:"error",value:error})]})),(0,jsx_runtime.jsxs)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:[authenticators&&(0,jsx_runtime.jsx)("form",Object.assign({id:"authn_select",className:getClassName("kcFormClass")},{children:authenticators.authenticators.map((function(authenticator){return(0,jsx_runtime.jsx)("input",{type:"hidden",name:"authn_use_chk",value:authenticator.credentialId},authenticator.credentialId)}))})),authenticators&&shouldDisplayAuthenticators&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[authenticators.authenticators.length>1&&(0,jsx_runtime.jsx)("p",Object.assign({className:getClassName("kcSelectAuthListItemTitle")},{children:msg("webauthn-available-authenticators")})),(0,jsx_runtime.jsx)("div",Object.assign({className:getClassName("kcFormClass")},{children:authenticators.authenticators.map((function(authenticator){return(0,jsx_runtime.jsxs)("div",Object.assign({id:"kc-webauthn-authenticator",className:getClassName("kcSelectAuthListItemClass")},{children:[(0,jsx_runtime.jsx)("div",Object.assign({className:getClassName("kcSelectAuthListItemIconClass")},{children:(0,jsx_runtime.jsx)("i",{className:(0,clsx.W)((className=getClassName(authenticator.transports.iconClass),className.includes(" ")?className:[className,getClassName("kcWebAuthnDefaultIcon")]),getClassName("kcSelectAuthListItemIconPropertyClass"))})})),(0,jsx_runtime.jsxs)("div",Object.assign({className:getClassName("kcSelectAuthListItemBodyClass")},{children:[(0,jsx_runtime.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-label",className:getClassName("kcSelectAuthListItemHeadingClass")},{children:authenticator.label})),authenticator.transports&&authenticator.transports.displayNameProperties.length&&(0,jsx_runtime.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-transport",className:getClassName("kcSelectAuthListItemDescriptionClass")},{children:authenticator.transports.displayNameProperties.map((function(transport,index){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:msg(transport)}),index<authenticator.transports.displayNameProperties.length-1&&(0,jsx_runtime.jsx)("span",{children:", "})]})}))})),(0,jsx_runtime.jsxs)("div",Object.assign({className:getClassName("kcSelectAuthListItemDescriptionClass")},{children:[(0,jsx_runtime.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created-label"},{children:msg("webauthn-createdAt-label")})),(0,jsx_runtime.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created"},{children:authenticator.createdAt}))]}))]})),(0,jsx_runtime.jsx)("div",{className:getClassName("kcSelectAuthListItemFillClass")})]}));var className}))}))]}),(0,jsx_runtime.jsx)("div",Object.assign({id:"kc-form-buttons",className:getClassName("kcFormButtonsClass")},{children:(0,jsx_runtime.jsx)("input",{id:"authenticateWebAuthnButton",type:"button",onClick:webAuthnAuthenticate,autoFocus:!0,value:msgStr("webauthn-doAuthenticate"),className:(0,clsx.W)(getClassName("kcButtonClass"),getClassName("kcButtonPrimaryClass"),getClassName("kcButtonBlockClass"),getClassName("kcButtonLargeClass"))})}))]}))]}))}))}},"./dist/tools/clsx.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>clsx});__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var tsafe_assert__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/tsafe/esm/assert.mjs"),tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/tsafe/esm/typeGuard.mjs");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var clsx=function clsx(){for(var len=arguments.length,i=0,cls="";i<len;i++){var arg=i<0||arguments.length<=i?void 0:arguments[i];if(null!=arg){var toAdd=void 0;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=clsx.apply(void 0,_toConsumableArray(arg));else for(var k in(0,tsafe_assert__WEBPACK_IMPORTED_MODULE_11__.h)(!(0,tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_12__.z)(arg,!1)),toAdd="",arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k);break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}}return cls}},"./node_modules/core-js/modules/es.array-buffer.slice.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),ArrayBufferModule=__webpack_require__("./node_modules/core-js/internals/array-buffer.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),toAbsoluteIndex=__webpack_require__("./node_modules/core-js/internals/to-absolute-index.js"),toLength=__webpack_require__("./node_modules/core-js/internals/to-length.js"),speciesConstructor=__webpack_require__("./node_modules/core-js/internals/species-constructor.js"),ArrayBuffer=ArrayBufferModule.ArrayBuffer,DataView=ArrayBufferModule.DataView,DataViewPrototype=DataView.prototype,nativeArrayBufferSlice=uncurryThis(ArrayBuffer.prototype.slice),getUint8=uncurryThis(DataViewPrototype.getUint8),setUint8=uncurryThis(DataViewPrototype.setUint8);$({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:fails((function(){return!new ArrayBuffer(2).slice(1,void 0).byteLength}))},{slice:function slice(start,end){if(nativeArrayBufferSlice&&void 0===end)return nativeArrayBufferSlice(anObject(this),start);for(var length=anObject(this).byteLength,first=toAbsoluteIndex(start,length),fin=toAbsoluteIndex(void 0===end?length:end,length),result=new(speciesConstructor(this,ArrayBuffer))(toLength(fin-first)),viewSource=new DataView(this),viewTarget=new DataView(result),index=0;first<fin;)setUint8(viewTarget,index++,getUint8(viewSource,first++));return result}})},"./node_modules/core-js/modules/web.set-interval.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout})},"./node_modules/core-js/modules/web.timers.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./node_modules/rfc4648/lib/index.js":(__unused_webpack_module,exports)=>{"use strict";function parse(string,encoding,opts){var _opts$out;if(void 0===opts&&(opts={}),!encoding.codes){encoding.codes={};for(var i=0;i<encoding.chars.length;++i)encoding.codes[encoding.chars[i]]=i}if(!opts.loose&&string.length*encoding.bits&7)throw new SyntaxError("Invalid padding");for(var end=string.length;"="===string[end-1];)if(--end,!(opts.loose||(string.length-end)*encoding.bits&7))throw new SyntaxError("Invalid padding");for(var out=new(null!=(_opts$out=opts.out)?_opts$out:Uint8Array)(end*encoding.bits/8|0),bits=0,buffer=0,written=0,_i=0;_i<end;++_i){var value=encoding.codes[string[_i]];if(void 0===value)throw new SyntaxError("Invalid character "+string[_i]);buffer=buffer<<encoding.bits|value,(bits+=encoding.bits)>=8&&(bits-=8,out[written++]=255&buffer>>bits)}if(bits>=encoding.bits||255&buffer<<8-bits)throw new SyntaxError("Unexpected end of data");return out}function stringify(data,encoding,opts){void 0===opts&&(opts={});for(var _opts$pad=opts.pad,pad=void 0===_opts$pad||_opts$pad,mask=(1<<encoding.bits)-1,out="",bits=0,buffer=0,i=0;i<data.length;++i)for(buffer=buffer<<8|255&data[i],bits+=8;bits>encoding.bits;)bits-=encoding.bits,out+=encoding.chars[mask&buffer>>bits];if(bits&&(out+=encoding.chars[mask&buffer<<encoding.bits-bits]),pad)for(;out.length*encoding.bits&7;)out+="=";return out}var base16Encoding={chars:"0123456789ABCDEF",bits:4},base32Encoding={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bits:5},base32HexEncoding={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bits:5},base64Encoding={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},base64UrlEncoding={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bits:6},base16={parse:function parse$1(string,opts){return parse(string.toUpperCase(),base16Encoding,opts)},stringify:function stringify$1(data,opts){return stringify(data,base16Encoding,opts)}},base32={parse:function parse$1(string,opts){return void 0===opts&&(opts={}),parse(opts.loose?string.toUpperCase().replace(/0/g,"O").replace(/1/g,"L").replace(/8/g,"B"):string,base32Encoding,opts)},stringify:function stringify$1(data,opts){return stringify(data,base32Encoding,opts)}},base32hex={parse:function parse$1(string,opts){return parse(string,base32HexEncoding,opts)},stringify:function stringify$1(data,opts){return stringify(data,base32HexEncoding,opts)}},base64={parse:function parse$1(string,opts){return parse(string,base64Encoding,opts)},stringify:function stringify$1(data,opts){return stringify(data,base64Encoding,opts)}},base64url={parse:function parse$1(string,opts){return parse(string,base64UrlEncoding,opts)},stringify:function stringify$1(data,opts){return stringify(data,base64UrlEncoding,opts)}},codec={parse,stringify};exports.YU=base16,exports.pJ=base32,exports.eV=base32hex,exports.US=base64,exports.tH=base64url,exports.Y2=codec},"./node_modules/tsafe/esm/typeGuard.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function typeGuard(_value,isMatched){return isMatched}__webpack_require__.d(__webpack_exports__,{z:()=>typeGuard})}}]);