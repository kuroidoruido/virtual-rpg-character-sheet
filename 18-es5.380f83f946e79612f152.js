function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{i1tW:function(t,e,i){"use strict";i.r(e),i.d(e,"NainsEtJardinFrModule",(function(){return f}));var n,a=i("tyNb"),p=i("pOQj"),s=i("fXoL"),u=((n=function t(){_classCallCheck(this,t)}).\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(t){return new(t||n)},imports:[[p.a]]}),n),o=i("IIUN"),r=i("ofXK"),y=i("tLc3");function d(t,e){if(1&t&&s.Ob(0,"app-placeholder",7),2&t){var i=e.$implicit,n=s.dc(2);s.jc("config",i)("characterData",n.characterData)}}function c(t,e){if(1&t&&(s.Tb(0,"div",1,2),s.Tb(2,"div",3),s.Tb(3,"div",4),s.Tb(4,"div",5),s.uc(5,d,1,2,"ng-template",6),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t){var i=s.dc();s.jc("ngClass",i.pageConfigService.ngClass(i.sheetConfig.pageConfig)),s.Cb(3),s.jc("ngStyle",i.pageConfigService.ngStyle(i.sheetConfig,1)),s.Cb(2),s.jc("ngForOf",i.sheetConfig.content.page1)}}var h,l,g,x=((h=function(){function t(e){_classCallCheck(this,t),this.pageConfigService=e,this.characterData={values:{characterName:""}}}return _createClass(t,[{key:"ngOnInit",value:function(){void 0===this.sheetConfig&&console.error("You should provide a the sheetData attribute on OnePageComponent")}}]),t}()).\u0275fac=function(t){return new(t||h)(s.Nb(o.a))},h.\u0275cmp=s.Hb({type:h,selectors:[["app-one-page"]],inputs:{sheetConfig:"sheetConfig",characterData:"characterData"},decls:1,vars:1,consts:[[3,"ngIf"],[1,"pages",3,"ngClass"],["pages",""],[1,"page-wrapper"],["id","page-1",1,"page",3,"ngStyle"],[1,"page-input-container"],["ngFor","",3,"ngForOf"],[3,"config","characterData"]],template:function(t,e){1&t&&s.uc(0,c,6,3,"ng-template",0),2&t&&s.jc("ngIf",e.sheetConfig)},directives:[r.l,r.j,r.m,r.k,y.a],styles:["[_nghost-%COMP%]{display:block;height:100%}[_nghost-%COMP%], [_nghost-%COMP%]   .pages.ratio-A4.orientation-portrait[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .pages.ratio-A4.orientation-portrait[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{padding-top:141.43%}[_nghost-%COMP%]   .pages.ratio-A4.orientation-landscape[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .pages.ratio-A4.orientation-landscape[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{padding-top:70.71%}[_nghost-%COMP%]   .pages.ratio-A5.orientation-portrait[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .pages.ratio-A5.orientation-portrait[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{padding-top:141.43%}[_nghost-%COMP%]   .pages.ratio-A5.orientation-landscape[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .pages.ratio-A5.orientation-landscape[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{padding-top:70.71%}[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;justify-content:center}[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{position:relative;display:block;width:100%;border:1px solid #000;background-repeat:no-repeat;background-position:50%;background-size:contain}[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-input-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0}"]}),h),w=i("fas0"),k={gameId:"nains-et-jardins",sheetId:"fr",pageConfig:{pages:["page-1.png"],pageFormat:"A4",pageOrientation:"landscape",pageWidth:100},content:{pageCount:1,page1:[{key:"identite.joueur",x:10.5,y:13.5,width:13.8,rotate:-3.5,type:"text-input"},{key:"characterName",x:10.5,y:17.4,width:13.3,rotate:-3.5,type:"text-input"},{key:"identite.ville",x:10.5,y:21.2,width:13.6,rotate:-3.5,type:"text-input"},{key:"identite.jardinet",x:11,y:25,width:12.5,rotate:-3.5,type:"text-input"},{key:"identite.clan",x:11,y:28.7,width:11.8,rotate:-3.5,type:"text-input"},{key:"caracteristiques.force-densite",x:24.2,y:40.5,width:2.2,type:"number-input"},{key:"caracteristiques.solidite-elasticite",x:24.2,y:43.5,width:2.2,type:"number-input"},{key:"caracteristiques.agilite-grain",x:24.2,y:46.5,width:2.2,type:"number-input"},{key:"caracteristiques.dexterite-ciboulot",x:24.2,y:49.5,width:2.2,type:"number-input"},{key:"caracteristiques.intelligence-glamour",x:24.2,y:52.5,width:2.2,type:"number-input"},{key:"caracteristiques.raison-harmonie",x:24.2,y:55.5,width:2.2,type:"number-input"},{key:"caracteristiques.presence-foi",x:24.2,y:58.5,width:2.2,type:"number-input"},{key:"caracteristiques-secondaires.points-de-platre",x:24.2,y:68.5,width:2.2,type:"number-input"},{key:"caracteristiques-secondaires.points-de-souillure",x:24.2,y:71.5,width:2.2,type:"number-input"},{key:"caracteristiques-secondaires.mofif-aux-dommages",x:24.2,y:74.5,width:2.2,type:"number-input"},{key:"caracteristiques-secondaires.points-de-jardins-totaux",x:24.2,y:77,width:2.2,type:"number-input"},{key:"caracteristiques-secondaires.points-de-nains-totaux",x:24.2,y:79,width:2.2,type:"number-input"},{key:"caracteristiques-secondaires.points-de-jardins-restants",x:24.2,y:81.5,width:2.2,type:"number-input"},{key:"caracteristiques-secondaires.points-de-nains-restants",x:24.2,y:83.5,width:2.2,type:"number-input"},{key:"apparence",x:32.3,y:15,width:18.3,height:29.5,type:"text-zone"},{key:"caractere",x:52.5,y:15,width:18.5,height:29.5,type:"text-zone"},{key:"gouts",x:72.5,y:15,width:18.5,height:11.5,type:"text-zone"},{key:"motivations",x:72.5,y:30,width:18.5,height:14.5,type:"text-zone"},{key:"aptitudes-naintuitives.01.label",x:32.5,y:52,width:15,type:"text-input"},{key:"aptitudes-naintuitives.01.value",x:47.5,y:52,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.02.label",x:32.5,y:54.5,width:15,type:"text-input"},{key:"aptitudes-naintuitives.02.value",x:47.5,y:54.5,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.03.label",x:32.5,y:57,width:15,type:"text-input"},{key:"aptitudes-naintuitives.03.value",x:47.5,y:57,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.04.label",x:32.5,y:59.5,width:15,type:"text-input"},{key:"aptitudes-naintuitives.04.value",x:47.5,y:59.5,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.05.label",x:32.5,y:62,width:15,type:"text-input"},{key:"aptitudes-naintuitives.05.value",x:47.5,y:62,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.06.label",x:32.5,y:64.5,width:15,type:"text-input"},{key:"aptitudes-naintuitives.06.value",x:47.5,y:64.5,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.07.label",x:32.5,y:67,width:15,type:"text-input"},{key:"aptitudes-naintuitives.07.value",x:47.5,y:67,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.08.label",x:32.5,y:69.5,width:15,type:"text-input"},{key:"aptitudes-naintuitives.08.value",x:47.5,y:69.5,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.09.label",x:32.5,y:72,width:15,type:"text-input"},{key:"aptitudes-naintuitives.09.value",x:47.5,y:72,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.10.label",x:32.5,y:74.5,width:15,type:"text-input"},{key:"aptitudes-naintuitives.10.value",x:47.5,y:74.5,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.11.label",x:32.5,y:77,width:15,type:"text-input"},{key:"aptitudes-naintuitives.11.value",x:47.5,y:77,width:3.5,type:"number-input"},{key:"aptitudes-naintuitives.12.label",x:32.5,y:79.5,width:15,type:"text-input"},{key:"aptitudes-naintuitives.12.value",x:47.5,y:79.5,width:3.5,type:"number-input"},{key:"aptitudes-nainpromptues.01.label",x:52.5,y:52,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.01.value",x:70.3,y:52,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.02.label",x:52.5,y:54.5,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.02.value",x:70.3,y:54.5,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.03.label",x:52.5,y:57,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.03.value",x:70.3,y:57,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.04.label",x:52.5,y:59.5,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.04.value",x:70.3,y:59.5,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.05.label",x:52.5,y:62,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.05.value",x:70.3,y:62,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.06.label",x:52.5,y:64.5,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.06.value",x:70.3,y:64.5,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.07.label",x:52.5,y:67,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.07.value",x:70.3,y:67,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.08.label",x:52.5,y:69.5,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.08.value",x:70.3,y:69.5,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.09.label",x:52.5,y:72,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.09.value",x:70.3,y:72,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.10.label",x:52.5,y:74.5,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.10.value",x:70.3,y:74.5,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.11.label",x:52.5,y:77,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.11.value",x:70.3,y:77,width:3.5,type:"text-input"},{key:"aptitudes-nainpromptues.12.label",x:52.5,y:79.5,width:17.8,type:"text-input"},{key:"aptitudes-nainpromptues.12.value",x:70.3,y:79.5,width:3.5,type:"text-input"},{key:"notes",x:76,y:52,width:21,height:29.5,type:"text-zone"},{key:"possessions.01",x:32.5,y:86.9,width:18.5,type:"text-input"},{key:"possessions.02",x:32.5,y:89.5,width:18.5,type:"text-input"},{key:"possessions.03",x:52.5,y:86.9,width:18.5,type:"text-input"},{key:"possessions.04",x:52.5,y:89.5,width:18.5,type:"text-input"},{key:"possessions.05",x:72.5,y:86.9,width:18.5,type:"text-input"},{key:"possessions.06",x:72.5,y:89.5,width:18.5,type:"text-input"}]}},b=i("Tah3"),C=i("dYBa"),m=[{path:"",component:(l=function t(e){_classCallCheck(this,t),this.sheetConfig=k,this.characterData=e.init(this.sheetConfig)},l.\u0275fac=function(t){return new(t||l)(s.Nb(b.a))},l.\u0275cmp=s.Hb({type:l,selectors:[["app-nains-et-jardin-fr"]],decls:2,vars:2,consts:[[3,"sheetConfig","characterData"]],template:function(t,e){1&t&&(s.Tb(0,"app-sheet-wrapper"),s.Ob(1,"app-one-page",0),s.Sb()),2&t&&(s.Cb(1),s.jc("sheetConfig",e.sheetConfig)("characterData",e.characterData))},directives:[C.a,x],styles:[""]}),l)}],f=((g=function t(){_classCallCheck(this,t)}).\u0275mod=s.Lb({type:g}),g.\u0275inj=s.Kb({factory:function(t){return new(t||g)},imports:[[w.a,a.d.forChild(m),u]]}),g)}}]);