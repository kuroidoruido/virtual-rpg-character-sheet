"use strict";(self.webpackChunkvirtual_rpg_character_sheet=self.webpackChunkvirtual_rpg_character_sheet||[]).push([[700],{21700:(F,r,y)=>{y.r(r),y.d(r,{FrV1ChatModule:()=>q});var h=y(90697),x=y(59125),p=y(50065);function i(e){if(void 0===e)return 0;const s=parseInt(e);return isNaN(s)?0:s}function m(e,s,n){return c=>{const l=i(c.values[`skill.${e}_rang`])||0;return l<n?"x":(i(s(c))||0)+l+(i(c.values[`skill.${e}_bonus`])||0)+(i(c.values[`skill.${e}_malus`])||0)}}function o(e){return void 0===e||isNaN(e)?0:Math.floor(e/2)}function t(e,s,n,c=0){const l=function(e){return s=>e(function(e){return{physique:{griffe:i(e.values["physique.griffe"]),poil:i(e.values["physique.poil"]),queue:i(e.values["physique.queue"]),oeil:i(e.values["physique.oeil"])},mental:{ronron:i(e.values["mental.ronron"]),caresse:i(e.values["mental.caresse"]),vibrisse:i(e.values["mental.vibrisse"]),coussinet:i(e.values["mental.coussinet"])},chance:i(e.values.chance)}}(s))}(n);return[{key:`competences.${e}_base`,x:43.2,y:s,width:3,fontSize:.8,compute:l,type:"number-computed"},{key:`competences.${e}_rang`,x:50,y:s,width:3,fontSize:.5,type:"number-input"},{key:`competences.${e}_bonus`,x:57.3,y:s,width:3,fontSize:.5,type:"number-input"},{key:`competences.${e}_malus`,x:64.3,y:s,width:3,fontSize:.5,type:"number-input"},{key:`competences.${e}_total`,x:71.7,y:s,width:3,fontSize:.8,compute:m(e,l,c),type:"number-computed"}]}function a(e,s){return[{key:`talents-psychique.${e}_nom`,x:8,y:s+2,width:19,type:"text-input"},{key:`talents-psychique.${e}_rang-max`,x:31,y:s+2,width:3,type:"number-input"},{key:`talents-psychique.${e}_description`,x:37,y:s,width:54,height:6,fontSize:.6,type:"text-zone"}]}const v={gameId:"cats-la-mascarade",sheetId:"fr-v1-chat",pageConfig:{pages:["chat-1.png","chat-2.png"],pageFormat:"A4",pageOrientation:"portrait",pageWidth:100},content:{pageCount:2,page1:[{key:"characterName",x:13,y:20.7,width:18,type:"text-input"},{key:"description",x:45.5,y:20.7,width:28,type:"text-input"},{key:"reputation",x:86,y:20.7,width:6,type:"number-input"},{key:"lignee",x:14.5,y:22.5,width:16.5,type:"text-input"},{key:"faction",x:40,y:22.5,width:24,type:"text-input"},{key:"conseil",x:74,y:22.5,width:18,type:"text-input"},{key:"physique.griffe",x:11.3,y:33.2,width:4,fontSize:2.5,type:"number-input"},{key:"physique.poil",x:18.3,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"physique.queue",x:26.5,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"physique.oeil",x:33.5,y:33.7,width:4,fontSize:2.5,type:"number-input"},{key:"mental.ronron",x:60.5,y:33.2,width:4,fontSize:2.5,type:"number-input"},{key:"mental.caresse",x:67.8,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"mental.vibrisse",x:76,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"mental.coussinet",x:83,y:33.7,width:4,fontSize:2.5,type:"number-input"},{key:"chance",x:48,y:39.7,width:4,fontSize:2.5,type:"number-input"},{key:"qualites",x:7,y:45.6,width:33.4,height:5.3,type:"text-zone"},{key:"defaults",x:58.6,y:45.6,width:33.4,height:5.3,type:"text-zone"},{key:"informations-personnelles",x:7.3,y:53.6,width:84.8,height:8.2,type:"text-zone"},...t("archeologie",66,e=>e.mental.ronron,1),...t("chasse",67.47,e=>o(e.physique.queue+e.mental.vibrisse)),...t("culture-generale",68.94,e=>e.mental.ronron),...t("combat-griffu",70.41,e=>o(e.physique.queue+e.physique.oeil)),...t("connaissance-de-la-rue",71.88,e=>o(e.mental.ronron+e.mental.coussinet)),...t("discretion",73.35,e=>e.physique.queue),...t("escalade",74.82,e=>o(e.physique.queue+e.physique.griffe)),...t("irriter-les-humains",76.29,e=>o(e.mental.caresse+e.mental.vibrisse)),...t("jouer-des-tours-pendables",77.76,e=>o(e.mental.caresse+e.mental.vibrisse)),...t("langage-humain",79.23,e=>e.mental.ronron,1),...t("leadership",80.7,e=>e.mental.caresse),...t("orientation",82.17,e=>e.mental.vibrisse),...t("persuation",83.64,e=>o(e.mental.caresse+e.mental.coussinet)),...t("psychologie-humaine",85.11,e=>e.mental.ronron),...t("reclamer-a-manger",86.58,e=>e.mental.caresse),...t("reclamer-des-caresses",88.05,e=>e.mental.caresse),...t("saut",89.52,e=>e.physique.queue),...t("seduire",90.99,e=>e.mental.coussinet),...t("survie",92.46,e=>o(e.mental.ronron+e.mental.vibrisse)),...t("trouver-un-objet-cache",93.93,e=>o(e.mental.caresse+e.mental.vibrisse)),...t("us-et-coutumes-humaines",95.4,e=>e.mental.ronron),{key:"critiques",x:78.3,y:64.3,width:14.1,height:32,type:"text-zone"}],page2:[...a(1,25),...a(2,31.4),...a(3,37.8),...a(4,44.2),...a(5,50.6),...a(6,57),{key:"niveaux-de-talents-utilises.1-01",x:15.75,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-02",x:23.03,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-03",x:30.31,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-04",x:37.59,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-05",x:44.87,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-06",x:52.15,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-07",x:59.43,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-08",x:66.71,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-09",x:73.99,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-10",x:81.27,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-01",x:15.75,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-02",x:23.03,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-03",x:30.31,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-04",x:37.59,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-05",x:44.87,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-06",x:52.15,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-07",x:59.43,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-08",x:66.71,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-09",x:73.99,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-10",x:81.27,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-01",x:15.75,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-02",x:23.03,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-03",x:30.31,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-04",x:37.59,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-05",x:44.87,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-06",x:52.15,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-07",x:59.43,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-08",x:66.71,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-09",x:73.99,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-10",x:81.27,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-01",x:15.75,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-02",x:23.03,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-03",x:30.31,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-04",x:37.59,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-05",x:44.87,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-06",x:52.15,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-07",x:59.43,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-08",x:66.71,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-09",x:73.99,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-10",x:81.27,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.01",x:32,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.02",x:38.3,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.03",x:44.6,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.04",x:50.9,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.05",x:57.2,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.06",x:63.5,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.07",x:69.8,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.08",x:76.1,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.09",x:82.4,y:94.5,width:2.5,style:"cross",type:"checkbox"}]}};var u=y(83668),b=y(83050),w=y(67362),f=y(42219);const g=[{path:"",component:(()=>{class e{constructor(n){this.sheetConfig=v,this.characterData=n.init(this.sheetConfig)}}return e.\u0275fac=function(n){return new(n||e)(u.Y36(b.R))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-fr-v1-chat"]],decls:2,vars:2,consts:[[3,"sheetConfig","characterData"]],template:function(n,c){1&n&&(u.TgZ(0,"app-sheet-wrapper"),u._UZ(1,"app-two-pages",0),u.qZA()),2&n&&(u.xp6(1),u.Q6J("sheetConfig",c.sheetConfig)("characterData",c.characterData))},directives:[w.R,f.q],styles:[""]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[p.B,h.Bz.forChild(g),x.n]]}),e})()}}]);