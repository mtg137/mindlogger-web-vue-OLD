!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var r in t)("object"==typeof exports?exports:n)[r]=t[r]}}("undefined"!=typeof self?self:this,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=12)}([function(n,e,t){"use strict";var r=t(7);e.a={name:"login",props:{apiHost:{type:String}},data:function(){return{status:"ready",form:{username:null,password:null},errors:{message:null,show:!1,code:null}}},methods:{onSubmit:function(n){var e=this;n.preventDefault(),this.status="loading",r.a.signIn({apiHost:this.apiHost,user:this.form.username,password:this.form.password}).then(function(n){e.$emit("login",n.data),e.status="ready"}).catch(function(n){e.errors.code=n.response,401===e.errors.code.status?e.errors.message="We have no record of your username. Please create a new account!":e.errors.message=n.message,e.errors.show=!0,e.status="ready"})}}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),o=t(10),s=t(11),a=!1;var i=function(n){a||t(2)},u=Object(s.a)(r.a,o.a,o.b,!1,i,null,null);u.options.__file="src/components/Login/Login.vue",e.default=u.exports},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,t(5).default)("6594581a",r,!1,{})},function(n,e,t){(n.exports=t(4)(!0)).push([n.i,"\n#login {\n  /* min-height: 100vh; */\n}\n#signupForm {\n  max-width: 400px;\n  padding: 20px;\n  margin-top: 20px;\n  box-shadow: 0px 0 7px 0px #80808036;\n}\n","",{version:3,sources:["../../../../../../../src/components/Login/Login.vue"],names:[],mappings:";AAkDA;EACA,wBAAA;CACA;AAEA;EACA,iBAAA;EACA,cAAA;EACA,iBAAA;EACA,oCAAA;CACA",file:"Login.vue",sourcesContent:['<template name="login">\n  <div id="login" class="text-center mb-0">\n    <h1> Log In </h1>\n\n    <div id="signupForm" class="container fluid">\n      <b-alert :show="errors.show" variant="danger">{{errors.message}}</b-alert>\n      <b-form @submit="onSubmit">\n        <b-form-group id="usernameInputGroup"\n                      label="Username:"\n                      label-for="username"\n                      >\n          <b-form-input id="username"\n                        v-model="form.username"\n                        required\n                        placeholder="Enter email">\n          </b-form-input>\n        </b-form-group>\n\n\n        <b-form-group id="passwordInputGroup"\n                      label="Password:"\n                      label-for="passwordInput">\n          <b-form-input id="passwordInput"\n                        type="password"\n                        v-model="form.password"\n                        required\n                        placeholder="Password">\n          </b-form-input>\n        </b-form-group>\n\n\n        <b-button type="submit" variant="primary" :disabled="status===\'loading\'">\n          <span v-if="status===\'ready\'">Submit</span>\n          <span v-else>Logging in...</span>\n        </b-button>\n\n      </b-form>\n\n      <p class="mt-3">\n        Don\'t have an account? <router-link to="/signup">Create one</router-link>\n      </p>\n      <p class="mt-3">\n        Forgot your password? <router-link to="/forgot">Reset it</router-link>\n      </p>\n    </div>\n\n  </div>\n</template>\n\n<style>\n  #login {\n    /* min-height: 100vh; */\n  }\n\n  #signupForm {\n    max-width: 400px;\n    padding: 20px;\n    margin-top: 20px;\n    box-shadow: 0px 0 7px 0px #80808036;\n  }\n</style>\n\n<script>\nimport api from \'../../lib/api/\';\n\n/**\n * # Login\n *\n * This is the login UI component for\n * mindlogger.\n *\n * ** note ** this component requires the bootstrap-vue library\n * as a globally registered component.\n *\n * ## Props\n *\n * * `apiHost` : the URL for the girder-api, ending with `/api/v1`\n *\n * ## Events\n *\n * * `login` : returns a promise with the data from the authentcation route.\n */\n\nexport default {\n  name: \'login\',\n  props: {\n    /**\n     * the girder API endpoint\n     */\n    apiHost: {\n      type: String,\n    },\n  },\n  data() {\n    return {\n      /**\n       * ### status\n       *\n       * status of the component, \'ready\' or\n       * set to \'loading\' during login\n       */\n      status: \'ready\',\n      /**\n       * ### form\n       *\n       * An object with `username` and `passord`\n       * to store and eventually send to the endpoint.\n       */\n      form: {\n        username: null,\n        password: null,\n      },\n      /**\n       * ### errors\n       *\n       * An object to store error messages, code,\n       * and whether or not to show the error.\n       */\n      errors: {\n        message: null,\n        show: false,\n        code: null,\n      },\n    };\n  },\n  methods: {\n    /**\n     * ### onSubmit(e)\n     *\n     * Method to submit data to the api library.\n     * Sets the status to \'loading\', attempts to sign in\n     * and then displays an error if something went wrong.\n     */\n    onSubmit(e) {\n      e.preventDefault();\n      this.status = \'loading\';\n      api.signIn({ apiHost: this.apiHost,\n        user: this.form.username,\n        password: this.form.password }).then((resp) => {\n        this.$emit(\'login\', resp.data);\n        this.status = \'ready\';\n      }).catch((err) => {\n        this.errors.code = err.response;\n        if (this.errors.code.status === 401) {\n          this.errors.message = \'We have no record of your username. Please create a new account!\';\n        } else {\n          this.errors.message = err.message;\n        }\n        this.errors.show = true;\n        this.status = \'ready\';\n      });\n    },\n  },\n};\n<\/script>\n'],sourceRoot:""}])},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),s=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(s).concat([o]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e,t,o){p=t,l=o||{};var a=Object(r.a)(n,e);return m(a),function(e){for(var t=[],o=0;o<a.length;o++){var i=a[o];(u=s[i.id]).refs--,t.push(u)}for(e?m(a=Object(r.a)(n,e)):a=[],o=0;o<t.length;o++){var u;if(0===(u=t[o]).refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete s[u.id]}}}};var r=t(6),o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,p=!1,d=function(){},l=null,c="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(n){for(var e=0;e<n.length;e++){var t=n[e],r=s[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(g(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var a=[];for(o=0;o<t.parts.length;o++)a.push(g(t.parts[o]));s[t.id]={id:t.id,refs:1,parts:a}}}}function h(){var n=document.createElement("style");return n.type="text/css",a.appendChild(n),n}function g(n){var e,t,r=document.querySelector("style["+c+'~="'+n.id+'"]');if(r){if(p)return d;r.parentNode.removeChild(r)}if(f){var o=u++;r=i||(i=h()),e=b.bind(null,r,o,!1),t=b.bind(null,r,o,!0)}else r=h(),e=function(n,e){var t=e.css,r=e.media,o=e.sourceMap;r&&n.setAttribute("media",r);l.ssrId&&n.setAttribute(c,e.id);o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,r),t=function(){r.parentNode.removeChild(r)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else t()}}var v=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function b(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=v(e,o);else{var s=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(s,a[e]):n.appendChild(s)}}},function(n,e,t){"use strict";e.a=function(n,e){for(var t=[],r={},o=0;o<e.length;o++){var s=e[o],a=s[0],i=s[1],u=s[2],p=s[3],d={id:n+":"+o,css:i,media:u,sourceMap:p};r[a]?r[a].parts.push(d):t.push(r[a]={id:a,parts:[d]})}return t}},function(n,e,t){"use strict";var r=t(8);t.d(e,"a",function(){return r.a})},function(n,e,t){"use strict";var r=t(9),o=t.n(r);e.a={signIn:({apiHost:n,user:e,password:t})=>o()({method:"get",url:`${n}/user/authentication`,headers:{"Girder-Authorization":`Basic ${btoa(`${e}:${t}`)}`}}),sendActivityData:({apiHost:n,token:e,data:t})=>o()({method:"post",url:`${n}/`,headers:{"Girder-Token":e},body:t})}},function(n,e){n.exports=require("axios")},function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"text-center mb-0",attrs:{id:"login"}},[t("h1",[n._v(" Log In ")]),n._v(" "),t("div",{staticClass:"container fluid",attrs:{id:"signupForm"}},[t("b-alert",{attrs:{show:n.errors.show,variant:"danger"}},[n._v(n._s(n.errors.message))]),n._v(" "),t("b-form",{on:{submit:n.onSubmit}},[t("b-form-group",{attrs:{id:"usernameInputGroup",label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",required:"",placeholder:"Enter email"},model:{value:n.form.username,callback:function(e){n.$set(n.form,"username",e)},expression:"form.username"}})],1),n._v(" "),t("b-form-group",{attrs:{id:"passwordInputGroup",label:"Password:","label-for":"passwordInput"}},[t("b-form-input",{attrs:{id:"passwordInput",type:"password",required:"",placeholder:"Password"},model:{value:n.form.password,callback:function(e){n.$set(n.form,"password",e)},expression:"form.password"}})],1),n._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary",disabled:"loading"===n.status}},["ready"===n.status?t("span",[n._v("Submit")]):t("span",[n._v("Logging in...")])])],1),n._v(" "),t("p",{staticClass:"mt-3"},[n._v("\n      Don't have an account? "),t("router-link",{attrs:{to:"/signup"}},[n._v("Create one")])],1),n._v(" "),t("p",{staticClass:"mt-3"},[n._v("\n      Forgot your password? "),t("router-link",{attrs:{to:"/forgot"}},[n._v("Reset it")])],1)],1)])},o=[];r._withStripped=!0},function(n,e,t){"use strict";e.a=function(n,e,t,r,o,s,a,i){var u=typeof(n=n||{}).default;"object"!==u&&"function"!==u||(n=n.default);var p,d="function"==typeof n?n.options:n;e&&(d.render=e,d.staticRenderFns=t,d._compiled=!0);r&&(d.functional=!0);s&&(d._scopeId=s);a?(p=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},d._ssrRegister=p):o&&(p=i?function(){o.call(this,this.$root.$options.shadowRoot)}:o);if(p)if(d.functional){d._injectStyles=p;var l=d.render;d.render=function(n,e){return p.call(e),l(n,e)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,p):[p]}return{exports:n,options:d}}},function(n,e,t){n.exports=t(1)}])});