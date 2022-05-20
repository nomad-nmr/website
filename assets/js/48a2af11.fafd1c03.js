"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[518],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3788:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={slug:"visualization",title:"NMR data - from inception to visualization",authors:["tomlebl"],tags:["NOMAD","datastore","NMRium"]},l=void 0,u={permalink:"/website/blog/visualization",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-04-07-visualization.md",source:"@site/blog/2022-04-07-visualization.md",title:"NMR data - from inception to visualization",description:"March was somewhat tough in many ways. So, it has been a while since I made a blog post. However, I have kept busy building NOMAD and made a decent progress with datastore function and NMRium integration.",date:"2022-04-07T00:00:00.000Z",formattedDate:"April 7, 2022",tags:[{label:"NOMAD",permalink:"/website/blog/tags/nomad"},{label:"datastore",permalink:"/website/blog/tags/datastore"},{label:"NMRium",permalink:"/website/blog/tags/nm-rium"}],readingTime:1.665,truncated:!0,authors:[{name:"Tomas Lebl",title:"Creator of NOMAD",url:"https://github.com/tomlebl",imageURL:"https://github.com/tomlebl.png",key:"tomlebl"}],prevItem:{title:"Datastore released (version 3.1.0)",permalink:"/website/blog/datastore-release"},nextItem:{title:"On the way to datastore",permalink:"/website/blog/datastore"}},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"March was somewhat tough in many ways. So, it has been a while since I made a blog post. However, I have kept busy building NOMAD and made a decent progress with datastore function and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.nmrium.org/"},"NMRium"))," integration."),(0,o.kt)("p",null,"It seems that I have got the core of datastore function finished. Obviously, there were couple of hurdles that slowed me down little bit but at the end the result looks good and the prototype has worked very well on few test samples that I have run myself. The last bug was actually quite interesting to see. All have worked fine while I was using the spectrometer client in my test environment but run on an instrument was failing. Eventually, I have noticed that the problem stems from incomplete NMR data set being archived. It turned out that parsing status file, sending it to the server, analysing it and sending archiving command back to the client is faster than processing 1D 1H spectrum. In my opinion, that clears any doubts about capability of web application built on MERN stack to handle NMR lab data traffic. Now it's the time to get it under load of beta testing on the test server with one instrument and handful of beta testers."),(0,o.kt)("p",null,"Another important milestone is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.nmrium.org/"},"NMRium"))," integration. One of the ultimate goals of NOMAD to create a platform that would take NMR data from inception to publication. I have always struggled to explain this idea and how it facilitates NMR data preservation. I have got some new ideas about it that hopefully shade some more light on overall NOMAD pursuit. You can check that in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../docs/intro#how-could-nomad-help-with-nmr-data-preservation"},"introduction section")),".\nAs I mentioned last time, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.nmrium.org/"},"NMRium"))," is a huge game changer and helps NOMAD to make massive leap to a stage that I would call ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"from inception to visualisation"'))," witch could be a milestone about half way through. In order to demonstrate what I have got so far I recorded another ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../docs/video-tutorials"},"video tutorial"))," showing current workflow from users perspective."))}d.isMDXComponent=!0}}]);