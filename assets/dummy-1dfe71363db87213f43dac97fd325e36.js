"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,n,t,a,r){var i=void 0;n["default"].MODEL_FACTORY_INJECTIONS=!0,i=n["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:t["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,n,t){var a=t["default"].APP.name,r=t["default"].APP.version;e["default"]=n["default"].extend({version:r,name:a})}),define("dummy/components/x-range-input",["exports","emberx-range-input/components/x-range-input"],function(e,n){e["default"]=n["default"]}),define("dummy/controllers/application",["exports","ember"],function(e,n){e["default"]=n["default"].Controller.extend({number:5,actions:{updateValue:function(e){this.set("number",e)}}})}),define("dummy/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){e["default"]={name:"App Version",initialize:(0,n["default"])(t["default"].APP.name,t["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function a(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var a,r=t["default"].exportApplicationGlobal;a="string"==typeof r?r:n["default"].String.classify(t["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var a=n["default"].Router.extend({location:t["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var a=e.createTextNode("Emberx-range-input");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("p"),a=e.createTextNode("Basic range input:");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","spec-number");var a=e.createComment("");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var a=new Array(2);return a[0]=e.createMorphAt(n,4,4,t),a[1]=e.createMorphAt(e.childAt(n,[6]),0,0),a},statements:[["inline","x-range-input",[],["min",0,"max",100,"step",1,"value",["subexpr","@mut",[["get","number",["loc",[null,[4,43],[4,49]]]]],[],[]],"action",["subexpr","action",["updateValue"],[],["loc",[null,[4,57],[4,79]]]]],["loc",[null,[4,0],[4,81]]]],["content","number",["loc",[null,[6,25],[6,35]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",a=e["default"].$('meta[name="'+t+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app")["default"].create({name:"emberx-range-input",version:"1.0.0+c30e6072"});