!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}(self.webpackChunkvirtual_rpg_character_sheet=self.webpackChunkvirtual_rpg_character_sheet||[]).push([[946],{97946:function(n,i,s){"use strict";s.r(i),s.d(i,{FrV1HumainModule:function(){return w}});var u=s(74567),r=s(36776),o=s(66156);function c(e){if(void 0===e)return 0;var t=parseInt(e);return isNaN(t)?0:t}function y(e,t,n){return function(i){var s=c(i.values["skill.".concat(e,"_rang")])||0;return s<n?"x":(c(t(i))||0)+s+(c(i.values["skill.".concat(e,"_bonus")])||0)+(c(i.values["skill.".concat(e,"_malus")])||0)}}function a(e){return void 0===e||isNaN(e)?0:Math.floor(e/2)}function l(e,t,n){var i,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=(i=n,function(e){return i(function(e){return{physique:{griffe:c(e.values["physique.griffe"]),poil:c(e.values["physique.poil"]),queue:c(e.values["physique.queue"]),oeil:c(e.values["physique.oeil"])},mental:{ronron:c(e.values["mental.ronron"]),caresse:c(e.values["mental.caresse"]),vibrisse:c(e.values["mental.vibrisse"]),coussinet:c(e.values["mental.coussinet"])},chance:c(e.values.chance)}}(e))});return[{key:"competences.".concat(e,"_base"),x:43.2,y:t,width:3,fontSize:.8,compute:u,type:"number-computed"},{key:"competences.".concat(e,"_rang"),x:50,y:t,width:3,fontSize:.5,type:"number-input"},{key:"competences.".concat(e,"_bonus"),x:57.3,y:t,width:3,fontSize:.5,type:"number-input"},{key:"competences.".concat(e,"_malus"),x:64.3,y:t,width:3,fontSize:.5,type:"number-input"},{key:"competences.".concat(e,"_total"),x:71.7,y:t,width:3,fontSize:.8,compute:y(e,u,s),type:"number-computed"}]}function h(e,t){return[{key:"talents-psychique.".concat(e,"_nom"),x:8,y:t+2,width:19,type:"text-input"},{key:"talents-psychique.".concat(e,"_rang-max"),x:31,y:t+2,width:3,type:"number-input"},{key:"talents-psychique.".concat(e,"_description"),x:37,y:t,width:54,height:5.4,fontSize:.6,type:"text-zone"}]}var p,x,d={gameId:"cats-la-mascarade",sheetId:"fr-v1-humain",pageConfig:{pages:["humain-1.png","humain-2.png"],pageFormat:"A4",pageOrientation:"portrait",pageWidth:100},content:{pageCount:2,page1:[{key:"characterName",x:13,y:21.5,width:18,type:"text-input"},{key:"description",x:45.5,y:21.5,width:29.5,type:"text-input"},{key:"reputation",x:88,y:21.5,width:4,type:"number-input"},{key:"physique.griffe",x:11.3,y:32,width:4,fontSize:2.5,type:"number-input"},{key:"physique.poil",x:18.3,y:28,width:4,fontSize:2.5,type:"number-input"},{key:"physique.queue",x:26.5,y:28,width:4,fontSize:2.5,type:"number-input"},{key:"physique.oeil",x:33.5,y:32.5,width:4,fontSize:2.5,type:"number-input"},{key:"mental.ronron",x:60.5,y:32,width:4,fontSize:2.5,type:"number-input"},{key:"mental.caresse",x:67.8,y:28,width:4,fontSize:2.5,type:"number-input"},{key:"mental.vibrisse",x:76,y:28,width:4,fontSize:2.5,type:"number-input"},{key:"mental.coussinet",x:83,y:32.5,width:4,fontSize:2.5,type:"number-input"},{key:"chance",x:48,y:38.5,width:4,fontSize:2.5,type:"number-input"},{key:"qualites",x:7,y:44.4,width:33.4,height:4.7,type:"text-zone"},{key:"defaults",x:58.6,y:44.4,width:33.4,height:4.7,type:"text-zone"}].concat(t(l("artisanat",53,function(e){return a(e.physique.oeil+e.mental.vibrisse)},1)),t(l("archeologie",54.47,function(e){return e.mental.ronron},1)),t(l("arme-a-feu",55.94,function(e){return e.physique.oeil})),t(l("arme-de-jet",57.41,function(e){return e.physique.oeil})),t(l("arme-blanches",58.88,function(e){return e.physique.queue})),t(l("art-martial",60.35,function(e){return a(e.physique.queue+e.physique.griffe)},1)),t(l("bricolage",61.82,function(e){return a(e.physique.oeil+e.mental.ronron)})),t(l("culture-generale",63.29,function(e){return e.mental.ronron})),t(l("combat-a-mains-nues",64.76,function(e){return a(e.physique.griffe+e.physique.poil)})),t(l("commerce",66.23,function(e){return a(e.mental.ronron+e.physique.poil)})),t(l("conduite-de-vehicules",67.7,function(e){return e.mental.ronron})),t(l("connaissance-de-la-rue",69.17,function(e){return a(e.mental.ronron+e.mental.coussinet)})),t(l("deguisement",70.64,function(e){return e.physique.oeil})),t(l("discretion",72.11,function(e){return e.physique.queue})),t(l("droit-et-administration",73.58,function(e){return e.mental.ronron},1)),t(l("equitation",75.05,function(e){return a(e.mental.vibrisse+e.physique.queue)})),t(l("escalade",76.52,function(e){return a(e.physique.queue+e.physique.griffe)})),t(l("langage-natale",77.99,function(e){return e.mental.ronron})),t(l("langage-etrangere",79.46,function(e){return e.mental.ronron},1)),t(l("leadership",80.93,function(e){return e.mental.caresse})),t(l("navigation",82.4,function(e){return e.mental.ronron})),t(l("orientation",83.87,function(e){return e.mental.vibrisse})),t(l("persuation",85.34,function(e){return a(e.mental.caresse+e.mental.coussinet)})),t(l("psychologie-feline",86.81,function(e){return a(e.mental.ronron+e.mental.vibrisse)})),t(l("saut",88.28,function(e){return e.physique.queue})),t(l("secourisme",89.75,function(e){return e.mental.ronron},1)),t(l("seduire",91.22,function(e){return e.mental.coussinet})),t(l("survie",92.69,function(e){return a(e.mental.ronron+e.mental.vibrisse)})),t(l("trouver-un-objet-cache",94.16,function(e){return a(e.mental.caresse+e.mental.vibrisse)})),t(l("us-et-coutumes-humaines",95.63,function(e){return e.mental.ronron},1)),[{key:"critiques",x:78,y:51.4,width:14.1,height:45.4,type:"text-zone"}]),page2:[].concat(t(h(1,25)),t(h(2,30.8)),t(h(3,36.6)),t(h(4,42.4)),t(h(5,48.2)),[{key:"informations-personnelles",x:7.3,y:57.8,width:84.8,height:8.1,type:"text-zone"},{key:"niveaux-de-talents-utilises.1-01",x:15.75,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-02",x:23.03,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-03",x:30.31,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-04",x:37.59,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-05",x:44.87,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-06",x:52.15,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-07",x:59.43,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-08",x:66.71,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-09",x:73.99,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-10",x:81.27,y:68.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-01",x:15.75,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-02",x:23.03,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-03",x:30.31,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-04",x:37.59,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-05",x:44.87,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-06",x:52.15,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-07",x:59.43,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-08",x:66.71,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-09",x:73.99,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-10",x:81.27,y:70.35,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-01",x:15.75,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-02",x:23.03,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-03",x:30.31,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-04",x:37.59,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-05",x:44.87,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-06",x:52.15,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-07",x:59.43,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-08",x:66.71,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-09",x:73.99,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-10",x:81.27,y:72.1,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-01",x:15.75,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-02",x:23.03,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-03",x:30.31,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-04",x:37.59,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-05",x:44.87,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-06",x:52.15,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-07",x:59.43,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-08",x:66.71,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-09",x:73.99,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-10",x:81.27,y:73.9,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.01",x:32,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.02",x:38.3,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.03",x:44.6,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.04",x:50.9,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.05",x:57.2,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.06",x:63.5,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.07",x:69.8,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.08",x:76.1,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.09",x:82.4,y:94.5,width:2.5,style:"cross",type:"checkbox"}])}},k=s(31572),f=s(74440),m=s(3476),b=s(70189),v=[{path:"",component:(p=function t(n){e(this,t),this.sheetConfig=d,this.characterData=n.init(this.sheetConfig)},p.\u0275fac=function(e){return new(e||p)(k.Y36(f.R))},p.\u0275cmp=k.Xpm({type:p,selectors:[["app-fr-v1-humain"]],decls:2,vars:2,consts:[[3,"sheetConfig","characterData"]],template:function(e,t){1&e&&(k.TgZ(0,"app-sheet-wrapper"),k._UZ(1,"app-two-pages",0),k.qZA()),2&e&&(k.xp6(1),k.Q6J("sheetConfig",t.sheetConfig)("characterData",t.characterData))},directives:[m.R,b.q],styles:[""]}),p)}],w=((x=function t(){e(this,t)}).\u0275fac=function(e){return new(e||x)},x.\u0275mod=k.oAB({type:x}),x.\u0275inj=k.cJS({imports:[[o.B,u.Bz.forChild(v),r.n]]}),x)}}])}();