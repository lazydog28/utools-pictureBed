(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e33fcc14"],{1276:function(e,t,n){"use strict";var a=n("d784"),r=n("44e7"),s=n("825a"),o=n("1d80"),i=n("4840"),u=n("8aa5"),c=n("50c4"),l=n("14c3"),p=n("9263"),d=n("d039"),f=[].push,g=Math.min,m=4294967295,h=!d((function(){return!RegExp(m,"y")}));a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(o(this)),s=void 0===n?m:n>>>0;if(0===s)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,s);var i,u,c,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=new RegExp(e.source,d+"g");while(i=p.call(h,a)){if(u=h.lastIndex,u>g&&(l.push(a.slice(g,i.index)),i.length>1&&i.index<a.length&&f.apply(l,i.slice(1)),c=i[0].length,g=u,l.length>=s))break;h.lastIndex===i.index&&h.lastIndex++}return g===a.length?!c&&h.test("")||l.push(""):l.push(a.slice(g)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=o(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,r,n):a.call(String(r),t,n)},function(e,r){var o=n(a,e,this,r,a!==t);if(o.done)return o.value;var p=s(e),d=String(this),f=i(p,RegExp),v=p.unicode,b=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),y=new f(h?p:"^(?:"+p.source+")",b),w=void 0===r?m:r>>>0;if(0===w)return[];if(0===d.length)return null===l(y,d)?[d]:[];var x=0,k=0,S=[];while(k<d.length){y.lastIndex=h?k:0;var O,I=l(y,h?d:d.slice(k));if(null===I||(O=g(c(y.lastIndex+(h?0:k)),d.length))===x)k=u(d,k,v);else{if(S.push(d.slice(x,k)),S.length===w)return S;for(var $=1;$<=I.length-1;$++)if(S.push(I[$]),S.length===w)return S;k=x=O}}return S.push(d.slice(x)),S}]}),!h)},"1e4b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"20px"}},[n("a-row",{attrs:{type:"flex",justify:"center"}},[n("div",{attrs:{id:"file-area"},on:{click:e.openFiles,dragenter:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),t.stopPropagation(),e.fileBoxDrag(t)},dragover:function(e){e.preventDefault()},dragleave:function(e){e.preventDefault()}}},[n("a-icon",{attrs:{type:"cloud-upload"}})],1)]),n("a-row",{staticStyle:{"margin-top":"30px"},attrs:{type:"flex",justify:"space-between"}},[n("a-col",{attrs:{span:16}},[n("a-row",[n("a-col",{attrs:{span:8}},[n("a-select",{staticStyle:{width:"100%"},on:{change:e.selectModeChange},model:{value:e.image.selectFileMode,callback:function(t){e.$set(e.image,"selectFileMode",t)},expression:"image.selectFileMode"}},e._l(e.fileModeKey,(function(t,a){return n("a-select-option",{key:a,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),n("a-col",{attrs:{span:12}},[n("div",{staticStyle:{display:"flex","align-items":"center","margin-left":"10px"}},[n("a-select",{staticStyle:{width:"100%"},model:{value:e.configure.autoCopy.mode,callback:function(t){e.$set(e.configure.autoCopy,"mode",t)},expression:"configure.autoCopy.mode"}},[n("a-select-option",{attrs:{value:"url"}},[e._v(" url ")]),n("a-select-option",{attrs:{value:"md"}},[e._v(" md ")]),n("a-select-option",{attrs:{value:"html"}},[e._v(" html ")])],1),n("a-tooltip",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" 自动复制开关 ")]},proxy:!0}])},[n("a-switch",{staticStyle:{"margin-left":"10px"},model:{value:e.configure.autoCopy.enabled,callback:function(t){e.$set(e.configure.autoCopy,"enabled",t)},expression:"configure.autoCopy.enabled"}})],1),n("div",{staticStyle:{width:"150px","padding-left":"10px"}},[e._v("时间戳:")]),n("a-tooltip",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" 是否增加时间戳 ")]},proxy:!0}])},[n("a-switch",{staticStyle:{"margin-left":"10px"},model:{value:e.configure.timeStamp,callback:function(t){e.$set(e.configure,"timeStamp",t)},expression:"configure.timeStamp"}})],1)],1)])],1)],1),n("a-col",{attrs:{span:5}},[n("a-row",{attrs:{type:"flex",justify:"start"}},[n("a-col",{attrs:{span:12}},[n("a-button",{on:{click:e.settingShow}},[e._v("设置")])],1),n("a-col",{attrs:{span:12}},[n("a-button",{on:{click:e.clearImage}},[e._v("清空")])],1)],1)],1)],1),n("a-row",{staticStyle:{"padding-top":"10px"},attrs:{type:"flex",justify:"start"}},e._l(e.image.data,(function(t,a){return n("a-col",{key:a,staticClass:"item",staticStyle:{padding:"15px"}},[n("a-spin",{attrs:{tip:"Loading...",spinning:t.loading}},[n("img",{staticStyle:{"border-radius":"10px"},attrs:{src:t.image,width:"200px"}}),t.loading?e._e():n("div",{staticClass:"options"},[n("span",{on:{click:function(n){return e.copy(t.image)}}},[e._v("URL")]),n("span",{on:{click:function(n){return e.htmlCopy(t.image)}}},[e._v("HTML")]),n("span",{on:{click:function(n){return e.mdCopy(t.image)}}},[e._v("MD")]),n("span",{on:{click:function(n){return e.deleteItem(t.id)}}},[e._v("删除")]),n("span",[e._v(e._s(t.createTime))])])])],1)})),1)],1)},r=[],s=(n("99af"),n("4160"),n("caad"),n("4d63"),n("ac1f"),n("25f0"),n("2532"),n("159b"),n("96cf"),n("1da1")),o=n("5530"),i=n("2f62"),u=n("2b0e");n("d3b7");function c(){}c.uploadImage=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("fileToUpload",t),a.append("reqtype","fileupload"),e.next=5,fetch("https://catbox.moe/user/api.php",{method:"POST",body:a}).then((function(e){return e.text()})).then((function(e){return{status:200,url:e,id:n}})).catch((function(){return{status:403,message:"上传失败"}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var l=c,p=n("4360");function d(){}d.uploadImage=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("image",t),r.append("apiType",a),r.append("token",p["a"].state.oss.rruu.token),e.next=6,fetch("https://img.rruu.net/api/upload",{method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){return{status:200,url:e.data.url[a],id:n}})).catch((function(){return{status:403,message:"上传失败"}}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();var f=d;function g(){}g.uploadImage=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("file",t),e.next=4,fetch("https://imgurl.org/upload/ftp",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){return{status:200,url:e.url,id:n}})).catch((function(){return{status:403,message:"上传失败"}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var m=g;n("b0c0"),n("5319"),n("1276");function h(){}h.uploadImage=function(e,t){return console.log("g",e),new Promise((function(n,a){var r="".concat(Date.now(),"-").concat(e.name),s=new FileReader;s.readAsDataURL(e),s.onloadend=function(a){var s=a.target.result.split(",")[1];console.log(s);var o={message:"图床",content:s};fetch("https://api.github.com/repos/".concat(p["a"].state.oss.GitHub.project,"/contents").concat(p["a"].state.oss.GitHub.path,"/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"token ".concat(p["a"].state.oss.GitHub.token)},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(a){if(a.content&&a.content.download_url)if(e.size>=20971520)n({status:200,url:a.content.download_url,id:t});else{var r="";r=p["a"].state.oss.GitHub.at?a.content.download_url.replace("/master/","@").replace("https://raw.githubusercontent.com",""):a.content.download_url.replace("/master/","/").replace("https://raw.githubusercontent.com","");var s="https://cdn.jsdelivr.net/gh".concat(r);n({status:200,url:s,id:t})}else n({status:403,message:"上传失败"})})).catch((function(){n({status:403,message:"上传失败"})}))}}))};var v=h;function b(){}b.uploadImage=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("image_field",t),e.next=4,fetch("https://www.niupic.com/index/upload/process",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){return 200===e.code?{status:200,url:"https://".concat(e.data),id:n}:{status:403,message:"上传失败"}})).catch((function(){return{status:403,message:"上传失败"}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var y=b;function w(){}w.uploadImage=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("smfile",t),e.next=4,fetch("https://sm.ms/api/v2/upload",{method:"POST",headers:{Authorization:p["a"].state.oss.smMs.token},body:a}).then((function(e){return e.json()})).then((function(e){return e.success?{status:200,url:e.data.url,id:n}:{status:403,message:"已经上传过一样的图片"}})).catch((function(){return{status:403,message:"上传失败"}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var x=w,k=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,s,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=p["a"].state.image.selectFileMode,e.t0=r,e.next="猫盒"===e.t0?4:"牛图网"===e.t0?7:"smMs"===e.t0?10:"GitHub"===e.t0?13:"如优-阿里图床"===e.t0?16:"如优-头条"===e.t0?19:"如优-网易"===e.t0?22:"如优-掘金"===e.t0?25:"如优-搜狗"===e.t0?28:"如优-Postimages"===e.t0?31:"imgUrlOrg"===e.t0?34:37;break;case 4:return e.next=6,l.uploadImage(t,n);case 6:return e.abrupt("return",e.sent);case 7:return e.next=9,y.uploadImage(t,n);case 9:return e.abrupt("return",e.sent);case 10:return e.next=12,x.uploadImage(t,n);case 12:return e.abrupt("return",e.sent);case 13:return e.next=15,v.uploadImage(t,n);case 15:return e.abrupt("return",e.sent);case 16:return e.next=18,f.uploadImage(t,n,"ali");case 18:return e.abrupt("return",e.sent);case 19:return e.next=21,f.uploadImage(t,n,"toutiao");case 21:return e.abrupt("return",e.sent);case 22:return e.next=24,f.uploadImage(t,n,"neteasy");case 24:return e.abrupt("return",e.sent);case 25:return e.next=27,f.uploadImage(t,n,"juejin");case 27:return e.abrupt("return",e.sent);case 28:return e.next=30,f.uploadImage(t,n,"sougou");case 30:return e.abrupt("return",e.sent);case 31:return e.next=33,f.uploadImage(t,n,"postimages");case 33:return e.abrupt("return",e.sent);case 34:return e.next=36,m.uploadImage(t,n);case 36:return e.abrupt("return",e.sent);case 37:if("阿里云OSS"!==r){e.next=49;break}if(s=u["a"].prototype.$aliOss,console.log("11111111111111"),s.client){e.next=44;break}if(o=s.getClient(),o){e.next=44;break}return e.abrupt("return",{status:403,message:"请重新配置 ali-oss"});case 44:return e.next=46,s.uploadFile(t,n);case 46:return e.abrupt("return",e.sent);case 49:if("腾讯云OSS"!==r){e.next=58;break}if(i=u["a"].prototype.$tencentOss,i.client){e.next=55;break}if(c=i.getClient(),c){e.next=55;break}return e.abrupt("return",{status:403,message:"请重新配置 tencent-oss"});case 55:return e.next=57,i.uploadFile(t,n,a);case 57:return e.abrupt("return",e.sent);case 58:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),S=(n("d81d"),"xiaou-bookmark-"),O=["oss","image","configure"];function I(){}function $(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=utools.db.get("".concat(S).concat(e));return console.log(n),!!n&&(t?n.data:n)}function _(e,t){var n,a=$(e,!1);n=utools.db.put({_id:"".concat(S).concat(e),data:t,_rev:a._rev}),console.log("update"+n.toString())}I.save=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.map((function(e){var t=p["a"].state[e];_(e,t)}))},I.readAll=function(){console.log("load...."),I.read.apply(I,O)},I.read=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.map((function(e){var t=$(e);console.log(e),console.log(t),t&&(p["a"].state[e]=t)}))},window.saveALL=function(){console.log("保存"),I.save.apply(I,O)},I.playPromptTone=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Audio;if(n.loop=!1,t){n.play();var a=!0;n.addEventListener("ended",(function(){a&&(n.src="https://xiaou520.gitee.io/sound/".concat(e),n.play(),a=!1)}),!1)}else n.src="https://xiaou520.gitee.io/sound/".concat(e),n.play()},I.isNewVersion=function(){var e=window.pluginInfo;if(console.log(e),$("version")!==e.version){if(I.playPromptTone("update.wav"),window.pluginInfo.update){console.log("更新数据");var t=$("oss");if(t){var n=t,a=p["a"].state.oss;a.aliOss=n.aliOss,a.tencentOss=n.tencentOss,a.rruu=n.rruu,n.GitHub&&(a.GitHub=n.GitHub),n.smMs&&(a.smMs=n.smMs),t.aliOss.uploadDirectory||(a.aliOss.uploadDirectory=""),void 0===t.GitHub.at&&(a.GitHub.at=!1),I.save("oss")}}return _("version",e.version),window.createUpdateWindow(),!0}return console.log("false"),!1};var F=I,C="猫盒",M={data:function(){return{fileModeKey:["阿里云OSS","腾讯云OSS","GitHub","猫盒","imgUrlOrg","牛图网","smMs","如优-Postimages","如优-阿里图床","如优-头条","如优-网易","如优-掘金","如优-搜狗"]}},computed:Object(o["a"])({},Object(i["b"])(["image","configure"])),created:function(){var e=this;utools.onPluginReady((function(){F.isNewVersion(),F.readAll()})),utools.onPluginOut((function(){window.saveALL()})),utools.onPluginEnter((function(t){t.code;var n=t.type,a=t.payload;t.optional;if(e.$store.commit("clearInvalidImage"),console.log(a),"files"===n)console.log(a),a.forEach((function(t){e.uploadFilePath(t.path)}));else if("img"===n){/data:image\/(.*?);/.test(a);var r=window.dataURLtoFile(a,"".concat(Date.now(),".").concat(RegExp.$1));e.uploadImageHandler(r)}}))},methods:{uploadImageHandler:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,s,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.fileModeKey.includes(t.image.selectFileMode)){n.next=3;break}return t.$message.warning("该源已经下线,请选择其他源"),n.abrupt("return");case 3:if(a=Date.now(),t.image.data.unshift({id:a,image:"",loading:!0}),"腾讯云OSS"!==t.image.selectFileMode){n.next=11;break}return n.next=8,k(e,a,(function(e){if(200===e.status){var n=e.url,a=e.id;t.$store.commit("setImage",{url:n,id:a}),t.$message.success("上传成功"),t.autoCopy(n)}else t.$message.warning(e.message)}));case 8:r=n.sent,n.next=15;break;case 11:return n.next=13,k(e,a);case 13:r=n.sent,200===r.status?(s=r,o=s.url,i=s.id,t.$store.commit("setImage",{url:o,id:i}),t.$message.success("上传成功"),t.autoCopy(o)):t.$message.warning(r.message);case 15:case"end":return n.stop()}}),n)})))()},autoCopy:function(e){if(this.configure.autoCopy.enabled)switch(this.configure.autoCopy.mode){case"url":this.copy(e);break;case"md":this.mdCopy(e);break;case"html":this.htmlCopy(e);break}},settingShow:function(){this.$router.push({name:"aliOss"})},selectModeChange:function(e){console.log(e),"阿里云OSS"===e?this.$store.state.oss.aliOss.accessKeySecret||(this.$message.warning("使用 「阿里云OSS」 在设置中需要配置"),this.image.selectFileMode=C):"腾讯云OSS"===e?this.$store.state.oss.tencentOss.secretKey||(this.$message.warning("使用 「腾讯云OSS」 在设置中需要配置"),this.image.selectFileMode=C):e.includes("如优")?this.$store.state.oss.rruu.token||(this.$message.warning("使用 「如优」 需要在设置中需要配置 token"),this.image.selectFileMode=C):"GitHub"===e?this.$store.state.oss.GitHub.token&&this.$store.state.oss.GitHub.project||(this.$message.warning("使用 「GitHub」 需要在设置中需要配置 token 和 仓库名"),this.image.selectFileMode=C):"smMs"===e&&(this.$store.state.oss.smMs.token||(this.$message.warning("使用 「sm.ms」 需要在设置中需要配置 token"),this.image.selectFileMode=C))},uploadFilePath:function(e){var t=this.configure.timeStamp&&"GitHub"!==this.selectFileMode,n=window.readFile(e,t);this.uploadImageHandler(n)},openFiles:function(){var e=this,t=window.selectFile();t instanceof Array?t.forEach((function(t){e.uploadFilePath(t)})):this.uploadFilePath(t)},clearImage:function(){this.$store.commit("clearImage")},deleteItem:function(e){this.$store.commit("deleteImageItem",e)},copy:function(e){var t=this;console.log(e),console.log(this),this.$copyText(e).then((function(){t.$message.success("复制成功")}))},htmlCopy:function(e){var t='<img src="'.concat(e,'"  />');this.copy(t)},mdCopy:function(e){var t="![](".concat(e,")");this.copy(t)},fileBoxDrag:function(e){var t=this,n=[];[].forEach.call(e.dataTransfer.files,(function(e){n.push(e)}),!1),console.log(n),n.forEach((function(e){var n=["image/png","image/jpeg","image/gif"];n.includes(e.type)?t.uploadImageHandler(e):t.$message.warning("不支持该格式")}))}}},j=M,R=(n("98a8"),n("2877")),H=Object(R["a"])(j,a,r,!1,null,"cea8735e",null);t["default"]=H.exports},2532:function(e,t,n){"use strict";var a=n("23e7"),r=n("5a34"),s=n("1d80"),o=n("ab13");a({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(s(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,n){var a=n("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"79af":function(e,t,n){},"98a8":function(e,t,n){"use strict";var a=n("79af"),r=n.n(a);r.a},ab13:function(e,t,n){var a=n("b622"),r=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(a){}}return!1}},caad:function(e,t,n){"use strict";var a=n("23e7"),r=n("4d64").includes,s=n("44d2"),o=n("ae40"),i=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!i},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},d81d:function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").map,s=n("1dde"),o=n("ae40"),i=s("map"),u=o("map");a({target:"Array",proto:!0,forced:!i||!u},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);