import{_ as c,e as h,o as n,c as s,f as u,a as _,b as t,d as m}from"./app.ec47483e.js";var g="/examples/android_tm.png",f="/examples/android_vt.jpg",v="/examples/ios15.mp4";const w=h({__name:"ViaInstall",setup(d){const o=async()=>{let e=!1;try{window.webkit.messageHandlers.jsExtensionContent.postMessage!=null&&(e=!0)}catch{}if(typeof window.via!="undefined"&&typeof window.via.addon!="undefined")try{window.via.addon(await i())}catch(a){alert("\u5B89\u88C5\u5931\u8D25"+a)}else if(e)try{let a={type:"via",source:await i()};console.info(a),window.webkit.messageHandlers.jsExtensionContent.postMessage(a)}catch(a){alert("\u5B89\u88C5\u5931\u8D25"+a)}else alert("\u4E0D\u662F Via\uFF0C Alook \u6216\u9CA8\u9C7C\u6D4F\u89C8\u5668")};function r(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(C,p){return String.fromCharCode("0x"+p)}))}async function i(){let e={author:"maggch@outlook.com",code:r(await l()),id:1656139986,name:"Video Together",url:"*"};return r(JSON.stringify(e))}async function l(){let e="https://cdn.jsdelivr.net/gh/VideoTogether/VideoTogether@latest/release/extension.user.js?timestamp="+Date.now();return await(await fetch(e)).text()}return(e,a)=>(n(),s("button",{class:"btn",onClick:o},"\u5B89\u88C5 VideoTogether"))}});var k=c(w,[["__scopeId","data-v-25adf2c6"]]);const x=_('<h1 id="\u5B89\u88C5\u8BF4\u660E" tabindex="-1">\u5B89\u88C5\u8BF4\u660E <a class="header-anchor" href="#\u5B89\u88C5\u8BF4\u660E" aria-hidden="true">#</a></h1><p>\u6B22\u8FCE\u52A0\u5165\u6211\u4EEC\u7684\u4EA4\u6D41\u7FA4\u3002QQ\u7FA4\uFF1A 170200260 \uFF0CTelegram\uFF1A<a href="https://t.me/videotogether_group" target="_blank" rel="noopener noreferrer">https://t.me/videotogether_group</a></p><h2 id="windows-macos" tabindex="-1">Windows / macOS <a class="header-anchor" href="#windows-macos" aria-hidden="true">#</a></h2><p>Windows / macOS \u7528\u6237\u63A8\u8350\u4F7F\u7528\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668</p><ol><li><p>\u4F7F\u7528 Edge \u6D4F\u89C8\u5668\u8BBF\u95EE <a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd" target="_blank" rel="noopener noreferrer">Tampermonkey \u63D2\u4EF6\u5B89\u88C5\u94FE\u63A5</a> \u5B89\u88C5 Tampermonkey \u63D2\u4EF6</p></li><li><p>\u4F7F\u7528 Edge \u6D4F\u89C8\u5668\u8BBF\u95EE <a href="https://cdn.jsdelivr.net/gh/maggch97/VideoTogether@latest/release/extension.user.js" target="_blank" rel="noopener noreferrer">VideoTogether \u63D2\u4EF6\u5B89\u88C5\u94FE\u63A5</a> \uFF0C\u70B9\u51FB \u5B89\u88C5 \u6309\u94AE\u5373\u53EF\u5B89\u88C5 VideoTogether \u63D2\u4EF6</p></li></ol><h2 id="\u5B89\u5353" tabindex="-1">\u5B89\u5353 <a class="header-anchor" href="#\u5B89\u5353" aria-hidden="true">#</a></h2><p>\u5B89\u5353\u63A8\u8350\u4F7F\u7528 <a href="https://www.coolapk.com/apk/296754" target="_blank" rel="noopener noreferrer">\u7334\u72D0\u6D4F\u89C8\u5668</a></p><ol><li>\u8BF7\u4F7F\u7528 \u7334\u72D0\u6D4F\u89C8\u5668 \u8BBF\u95EE\u672C\u9875\uFF0C\u70B9\u51FB <a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd" target="_blank" rel="noopener noreferrer">Tampermonkey</a> \u63D2\u4EF6 \u6309\u4E0B\u56FE\u5B89\u88C5 Tampermonkey \u63D2\u4EF6</li></ol><img src="'+g+'" style="max-width:500px;"><ol start="2"><li>\u4F7F\u7528 \u7334\u72D0\u6D4F\u89C8\u5668 \u8BBF\u95EE\u672C\u9875\uFF0C\u70B9\u51FB <a href="https://cdn.jsdelivr.net/gh/maggch97/VideoTogether@latest/release/extension.user.js" target="_blank" rel="noopener noreferrer">VideoTogether \u63D2\u4EF6\u5B89\u88C5\u94FE\u63A5</a> \uFF0C\u6309\u4E0B\u56FE\u5B89\u88C5</li></ol><img src="'+f+'" style="max-width:300px;"><h2 id="ios-15-ipad-os-15-\u53CA\u4EE5\u4E0A\u7248\u672C" tabindex="-1">IOS 15 / iPad OS 15 \u53CA\u4EE5\u4E0A\u7248\u672C <a class="header-anchor" href="#ios-15-ipad-os-15-\u53CA\u4EE5\u4E0A\u7248\u672C" aria-hidden="true">#</a></h2><ol><li><p>IOS 15 \u53CA\u4EE5\u4E0A\u7248\u672C\u7684\u82F9\u679C\u7528\u6237\u63A8\u8350\u4F7F\u7528 <a href="https://apps.apple.com/app/userscripts/id1463298887" target="_blank" rel="noopener noreferrer">userscripts</a> \u63D2\u4EF6\uFF0C\u5B89\u88C5\u540E\u53EF\u5728 Safari \u6D4F\u89C8\u5668\u4F7F\u7528</p></li><li><p>\u542F\u7528 userscripts \u63D2\u4EF6\u540E\uFF0C\u70B9\u51FB <a href="https://cdn.jsdelivr.net/gh/maggch97/VideoTogether@latest/release/extension.user.js" target="_blank" rel="noopener noreferrer">VideoTogether \u63D2\u4EF6\u5B89\u88C5\u94FE\u63A5</a> \u8FDB\u884C\u5B89\u88C5</p></li></ol><video id="video" controls="" preload="none"><source id="mp4" src="'+v+'" type="video/mp4"></video><h2 id="ios-14-ipad-os-14-\u53CA\u4EE5\u4E0B\u7248\u672C" tabindex="-1">IOS 14 / iPad OS 14 \u53CA\u4EE5\u4E0B\u7248\u672C <a class="header-anchor" href="#ios-14-ipad-os-14-\u53CA\u4EE5\u4E0B\u7248\u672C" aria-hidden="true">#</a></h2><ol><li><p>\u4E0B\u8F7D <a href="https://apps.apple.com/app/id1271984698" target="_blank" rel="noopener noreferrer">\u9CA8\u9C7C\u6D4F\u89C8\u5668</a></p></li><li><p>\u8BF7\u5173\u95ED\u9CA8\u9C7C\u6D4F\u89C8\u5668\u7684\u89C6\u9891\u6D6E\u7A97\u64AD\u653E\u529F\u80FD\uFF0C\u5426\u5219\u63D2\u4EF6\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C</p></li></ol>',16),b=t("h2",{id:"\u5176\u4ED6\u7CFB\u7EDF\u4EE5\u53CA\u6D4F\u89C8\u5668",tabindex:"-1"},[m("\u5176\u4ED6\u7CFB\u7EDF\u4EE5\u53CA\u6D4F\u89C8\u5668 "),t("a",{class:"header-anchor",href:"#\u5176\u4ED6\u7CFB\u7EDF\u4EE5\u53CA\u6D4F\u89C8\u5668","aria-hidden":"true"},"#")],-1),T=t("p",null,"\u7406\u8BBA\u4E0A\u6240\u6709\u652F\u6301\u5B89\u88C5\u811A\u672C\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u5B89\u88C5 VideoTogether\u3002",-1),V=t("p",null,"\u4F46\u662F\u4F7F\u7528\u63A8\u8350\u7684\u5B89\u88C5\u65B9\u5F0F\u80FD\u591F\u83B7\u5F97\u6700\u597D\u7684\u517C\u5BB9\u6027\uFF0C\u5E76\u4E14\u63D2\u4EF6\u7684\u4E00\u4E9B\u529F\u80FD\u4F9D\u8D56\u7279\u5B9A\u7684\u6D4F\u89C8\u5668\u3002\u6211\u4EEC\u4E0D\u4FDD\u8BC1\u63D2\u4EF6\u80FD\u591F\u5728\u5176\u4ED6\u6D4F\u89C8\u5668\u5F88\u597D\u7684\u8FD0\u884C\u3002",-1),S=t("p",null,[t("a",{href:"https://cdn.jsdelivr.net/gh/maggch97/VideoTogether@latest/release/extension.user.js",target:"_blank",rel:"noopener noreferrer"},"VideoTogether \u811A\u672C\u5730\u5740")],-1),O=JSON.parse('{"title":"\u5B89\u88C5\u8BF4\u660E","description":"","frontmatter":{},"headers":[{"level":2,"title":"Windows / macOS","slug":"windows-macos"},{"level":2,"title":"\u5B89\u5353","slug":"\u5B89\u5353"},{"level":2,"title":"IOS 15 / iPad OS 15 \u53CA\u4EE5\u4E0A\u7248\u672C","slug":"ios-15-ipad-os-15-\u53CA\u4EE5\u4E0A\u7248\u672C"},{"level":2,"title":"IOS 14 / iPad OS 14 \u53CA\u4EE5\u4E0B\u7248\u672C","slug":"ios-14-ipad-os-14-\u53CA\u4EE5\u4E0B\u7248\u672C"},{"level":2,"title":"\u5176\u4ED6\u7CFB\u7EDF\u4EE5\u53CA\u6D4F\u89C8\u5668","slug":"\u5176\u4ED6\u7CFB\u7EDF\u4EE5\u53CA\u6D4F\u89C8\u5668"}],"relativePath":"guide/install.md","lastUpdated":1657636353000}'),y={name:"guide/install.md"},I=Object.assign(y,{setup(d){return(o,r)=>(n(),s("div",null,[x,u(k),b,T,V,S]))}});export{O as __pageData,I as default};
