(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{NNVf:function(e,t,s){"use strict";s.r(t),s.d(t,"FrV1ChatModule",function(){return b});var i=s("iInd"),n=s("RQXf"),y=s("fas0");function c(e){if(void 0===e)return 0;const t=parseInt(e);return isNaN(t)?0:t}function a(e,t,s){return i=>{const n=c(i.values[`skill.${e}_rang`])||0;return n<s?"x":(c(t(i))||0)+n+(c(i.values[`skill.${e}_bonus`])||0)+(c(i.values[`skill.${e}_malus`])||0)}}function u(e){return void 0===e||isNaN(e)?0:Math.floor(e/2)}function o(e,t,s,i=0){const n=(y=s,e=>y(function(e){return{physique:{griffe:c(e.values["physique.griffe"]),poil:c(e.values["physique.poil"]),queue:c(e.values["physique.queue"]),oeil:c(e.values["physique.oeil"])},mental:{ronron:c(e.values["mental.ronron"]),caresse:c(e.values["mental.caresse"]),vibrisse:c(e.values["mental.vibrisse"]),coussinet:c(e.values["mental.coussinet"])},chance:c(e.values.chance)}}(e)));var y;return[{key:`competences.${e}_base`,x:43.2,y:t,width:3,fontSize:.8,compute:n,type:"number-computed"},{key:`competences.${e}_rang`,x:50,y:t,width:3,fontSize:.5,type:"number-input"},{key:`competences.${e}_bonus`,x:57.3,y:t,width:3,fontSize:.5,type:"number-input"},{key:`competences.${e}_malus`,x:64.3,y:t,width:3,fontSize:.5,type:"number-input"},{key:`competences.${e}_total`,x:71.7,y:t,width:3,fontSize:.8,compute:a(e,n,i),type:"number-computed"}]}function l(e,t){return[{key:`talents-psychique.${e}_nom`,x:8,y:t+2,width:19,type:"text-input"},{key:`talents-psychique.${e}_rang-max`,x:31,y:t+2,width:3,type:"number-input"},{key:`talents-psychique.${e}_description`,x:37,y:t,width:54,height:6,fontSize:.6,type:"text-zone"}]}const r={gameId:"cats-la-mascarade",sheetId:"fr-v1-chat",pageConfig:{pages:["chat-1.png","chat-2.png"],pageFormat:"A4",pageOrientation:"portrait",pageWidth:100},content:{pageCount:2,page1:[{key:"characterName",x:13,y:20.7,width:18,type:"text-input"},{key:"description",x:45.5,y:20.7,width:28,type:"text-input"},{key:"reputation",x:86,y:20.7,width:6,type:"number-input"},{key:"lignee",x:14.5,y:22.5,width:16.5,type:"text-input"},{key:"faction",x:40,y:22.5,width:24,type:"text-input"},{key:"conseil",x:74,y:22.5,width:18,type:"text-input"},{key:"physique.griffe",x:11.3,y:33.2,width:4,fontSize:2.5,type:"number-input"},{key:"physique.poil",x:18.3,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"physique.queue",x:26.5,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"physique.oeil",x:33.5,y:33.7,width:4,fontSize:2.5,type:"number-input"},{key:"mental.ronron",x:60.5,y:33.2,width:4,fontSize:2.5,type:"number-input"},{key:"mental.caresse",x:67.8,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"mental.vibrisse",x:76,y:29.2,width:4,fontSize:2.5,type:"number-input"},{key:"mental.coussinet",x:83,y:33.7,width:4,fontSize:2.5,type:"number-input"},{key:"chance",x:48,y:39.7,width:4,fontSize:2.5,type:"number-input"},{key:"qualites",x:7,y:45.6,width:33.4,height:5.3,type:"text-zone"},{key:"defaults",x:58.6,y:45.6,width:33.4,height:5.3,type:"text-zone"},{key:"informations-personnelles",x:7.3,y:53.6,width:84.8,height:8.2,type:"text-zone"},...o("archeologie",66,e=>e.mental.ronron,1),...o("chasse",67.47,e=>u(e.physique.queue+e.mental.vibrisse)),...o("culture-generale",68.94,e=>e.mental.ronron),...o("combat-griffu",70.41,e=>u(e.physique.queue+e.physique.oeil)),...o("connaissance-de-la-rue",71.88,e=>u(e.mental.ronron+e.mental.coussinet)),...o("discretion",73.35,e=>e.physique.queue),...o("escalade",74.82,e=>u(e.physique.queue+e.physique.griffe)),...o("irriter-les-humains",76.29,e=>u(e.mental.caresse+e.mental.vibrisse)),...o("jouer-des-tours-pendables",77.76,e=>u(e.mental.caresse+e.mental.vibrisse)),...o("langage-humain",79.23,e=>e.mental.ronron,1),...o("leadership",80.7,e=>e.mental.caresse),...o("orientation",82.17,e=>e.mental.vibrisse),...o("persuation",83.64,e=>u(e.mental.caresse+e.mental.coussinet)),...o("psychologie-humaine",85.11,e=>e.mental.ronron),...o("reclamer-a-manger",86.58,e=>e.mental.caresse),...o("reclamer-des-caresses",88.05,e=>e.mental.caresse),...o("saut",89.52,e=>e.physique.queue),...o("seduire",90.99,e=>e.mental.coussinet),...o("survie",92.46,e=>u(e.mental.ronron+e.mental.vibrisse)),...o("trouver-un-objet-cache",93.93,e=>u(e.mental.caresse+e.mental.vibrisse)),...o("us-et-coutumes-humaines",95.4,e=>e.mental.ronron),{key:"critiques",x:78.3,y:64.3,width:14.1,height:32,type:"text-zone"}],page2:[...l(1,25),...l(2,31.4),...l(3,37.8),...l(4,44.2),...l(5,50.6),...l(6,57),{key:"niveaux-de-talents-utilises.1-01",x:15.75,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-02",x:23.03,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-03",x:30.31,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-04",x:37.59,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-05",x:44.87,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-06",x:52.15,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-07",x:59.43,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-08",x:66.71,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-09",x:73.99,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.1-10",x:81.27,y:68.3,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-01",x:15.75,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-02",x:23.03,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-03",x:30.31,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-04",x:37.59,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-05",x:44.87,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-06",x:52.15,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-07",x:59.43,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-08",x:66.71,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-09",x:73.99,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.2-10",x:81.27,y:70.05,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-01",x:15.75,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-02",x:23.03,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-03",x:30.31,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-04",x:37.59,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-05",x:44.87,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-06",x:52.15,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-07",x:59.43,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-08",x:66.71,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-09",x:73.99,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.3-10",x:81.27,y:71.8,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-01",x:15.75,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-02",x:23.03,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-03",x:30.31,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-04",x:37.59,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-05",x:44.87,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-06",x:52.15,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-07",x:59.43,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-08",x:66.71,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-09",x:73.99,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"niveaux-de-talents-utilises.4-10",x:81.27,y:73.6,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.01",x:32,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.02",x:38.3,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.03",x:44.6,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.04",x:50.9,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.05",x:57.2,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.06",x:63.5,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.07",x:69.8,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.08",x:76.1,y:94.5,width:2.5,style:"cross",type:"checkbox"},{key:"neuf-vies.09",x:82.4,y:94.5,width:2.5,style:"cross",type:"checkbox"}]}};var h=s("8Y7J"),x=s("Tah3"),p=s("dYBa"),d=s("b864");const k=[{path:"",component:(()=>{class e{constructor(e){this.sheetConfig=r,this.characterData=e.init(this.sheetConfig)}}return e.\u0275fac=function(t){return new(t||e)(h.Mb(x.a))},e.\u0275cmp=h.Gb({type:e,selectors:[["app-fr-v1-chat"]],decls:2,vars:2,consts:[[3,"sheetConfig","characterData"]],template:function(e,t){1&e&&(h.Sb(0,"app-sheet-wrapper"),h.Nb(1,"app-two-pages",0),h.Rb()),2&e&&(h.Cb(1),h.hc("sheetConfig",t.sheetConfig)("characterData",t.characterData))},directives:[p.a,d.a],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=h.Kb({type:e}),e.\u0275inj=h.Jb({factory:function(t){return new(t||e)},imports:[[y.a,i.d.forChild(k),n.a]]}),e})()}}]);