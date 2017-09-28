webpackJsonp([1],{"H/e7":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container"},[i("h1",{staticClass:"ui header separator"},[t._v("Bookmarklet Generator")]),t._v(" "),i("div",{staticClass:"ui grid"},[i("div",{staticClass:"nine wide column"},[i("div",{staticClass:"ui form "},[i("div",{staticClass:"ui field"},[i("label",[t._v("Bookmarklet name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"ui field"},[i("label",[t._v("Script")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.script,expression:"script"}],domProps:{value:t.script},on:{input:function(e){e.target.composing||(t.script=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"ui field"},[i("label",[t._v("Load External Scripts")]),t._v(" "),i("small",[t._v("Add the javascript library url you want to include (https is recommended)")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.externalScript,expression:"externalScript"}],domProps:{value:t.externalScript},on:{input:function(e){e.target.composing||(t.externalScript=e.target.value)}}}),t._v(" "),i("br"),i("br"),t._v(" "),i("button",{staticClass:"ui mini blue button right floated",on:{click:function(e){t.addScript()}}},[t._v("[+] Add script")]),t._v(" "),i("ul",t._l(t.externalScripts,function(e,r){return i("li",[i("a",{attrs:{href:e}},[t._v(" "+t._s(e)+" ")]),i("a",{staticClass:"remove",staticStyle:{color:"red",cursor:"pointer"},on:{click:function(e){t.removeScript(r)}}},[i("small",[t._v("[x] Remove")])])])}))])])]),t._v(" "),i("div",{staticClass:"seven wide column"},[i("div",{staticClass:"ui form "},[i("div",{staticClass:"ui field"},[i("label",[t._v("Result")]),t._v(" "),i("span",[t._v("Drag this link to your bookmarks bar: ")]),i("a",{staticClass:"ui large green button",attrs:{href:"javascript: "+t.bScript}},[t._v(t._s(t.name))]),t._v(" "),i("br"),i("br"),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bScript,expression:"bScript"}],attrs:{disabled:""},domProps:{value:t.bScript},on:{input:function(e){e.target.composing||(t.bScript=e.target.value)}}})])])])])])},a=[],n={render:r,staticRenderFns:a};e.a=n},M93x:function(t,e,i){"use strict";function r(t){i("k1p0")}var a=i("xJD8"),n=i("gdmq"),s=i("VU/8"),c=r,o=s(a.a,n.a,c,null,null);e.a=o.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7+uW"),a=i("M93x");r.a.config.productionTip=!1,new r.a({el:"#app",template:"<App/>",components:{App:a.a}})},QjNQ:function(t,e,i){"use strict";var r=i("mvHQ"),a=i.n(r);e.a={name:"generator",data:function(){return{name:"My Bookmarklet",script:"",url:"",bScript:"",externalScript:"",externalScripts:["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"]}},methods:{addScript:function(){this.externalScripts.push(this.externalScript),this.externalScript=""},removeScript:function(t){this.externalScripts.splice(t,1)},generate:function(){var t=window.location.host,e="http://"+t+"/static/bookmarklet-init.js",i=a()({script:this.script,urls:this.externalScripts});this.bScript=encodeURIComponent("var BOOKMARKLET_CONFIG = "+i+';var s = document.createElement("script");s.type = "text/javascript";s.src="'+e+'";document.body.appendChild(s);')}},mounted:function(){this.generate()},watch:{externalScripts:function(){this.generate()},script:function(){this.generate()}}}},er6K:function(t,e,i){"use strict";function r(t){i("otYE")}var a=i("QjNQ"),n=i("H/e7"),s=i("VU/8"),c=r,o=s(a.a,n.a,c,null,null);e.a=o.exports},gdmq:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("generator")],1)},a=[],n={render:r,staticRenderFns:a};e.a=n},k1p0:function(t,e){},otYE:function(t,e){},xJD8:function(t,e,i){"use strict";var r=i("er6K");e.a={name:"app",components:{Generator:r.a}}}},["NHnr"]);
//# sourceMappingURL=app.2b7cf5a3677d13fe8427.js.map