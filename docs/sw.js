if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const a=e=>s(e,d),o={module:{uri:d},exports:c,require:a};i[d]=Promise.all(r.map((e=>o[e]||a(e)))).then((e=>(n(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-fbc25930.js",revision:null},{url:"assets/index-fff47b02.css",revision:null},{url:"audio/fin.ogg",revision:"a48e759db2734ef33d579c2f5b3680bd"},{url:"audio/jump.ogg",revision:"59b74eb3e4df6711fba0612ebb73c79c"},{url:"images/grass.png",revision:"b740d50f74420ad1a249c23b9a4eb084"},{url:"images/hello.png",revision:"79b5ec5a264ce035fc6fb84bcdfbbff0"},{url:"images/jugar.png",revision:"6a4cdc7625c0c9d497cbcde2acdbb7a2"},{url:"images/monster1.png",revision:"9daca0fe0776d23f0cc042217893a5d0"},{url:"images/monster2-sprites.png",revision:"8a48dd196b56c223b5d4aad41f6fd59e"},{url:"images/monster2.png",revision:"5a33b52d17d66e95c595ec9d5be61d98"},{url:"images/monster3.png",revision:"608721d563651e39a136ba3c6e65ef1e"},{url:"index.html",revision:"70fa7ffdbbbdaf22fb1a36c0859f7e4b"},{url:"juego.svg",revision:"222ea067958f0a80833dc8a327568b0d"},{url:"pwa-192x192.png",revision:"dce5c396d9f93768ee7cabdcc1404e81"},{url:"pwa-512x512.png",revision:"e463b4c5a866133df7ed39d99d685c5e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"juego.svg",revision:"222ea067958f0a80833dc8a327568b0d"},{url:"pwa-192x192.png",revision:"dce5c396d9f93768ee7cabdcc1404e81"},{url:"pwa-512x512.png",revision:"e463b4c5a866133df7ed39d99d685c5e"},{url:"manifest.webmanifest",revision:"862721d2600aa5099bc5210c96fa9f8f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));