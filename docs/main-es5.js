function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_cthulhu_v7_fr_classique_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/cthulhu-v7-fr-classique/config.json */
    "./src/assets/cthulhu-v7-fr-classique/config.json");

    var _assets_cthulhu_v7_fr_classique_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/cthulhu-v7-fr-classique/config.json */
    "./src/assets/cthulhu-v7-fr-classique/config.json", 1);
    /* harmony import */


    var _shared_save_save_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/save/save.service.js */
    "./src/app/shared/save/save.service.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["pages"];

    function AppComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_4_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var data_r3 = ctx.$implicit;
          return data_r3.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", data_r3.x + "%")("top", data_r3.y + "%")("width", data_r3.width + "%")("font-size", data_r3.fontSize ? data_r3.fontSize * 100 + "%" : undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", data_r3.key)("ngModel", data_r3.value);
      }
    }

    function AppComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_7_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var data_r6 = ctx.$implicit;
          return data_r6.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", data_r6.x + "%")("top", data_r6.y + "%")("width", data_r6.width + "%")("font-size", data_r6.fontSize ? data_r6.fontSize * 100 + "%" : undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", data_r6.key)("ngModel", data_r6.value);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(saveService) {
        _classCallCheck(this, AppComponent);

        this.saveService = saveService;
        this.sheetData = _assets_cthulhu_v7_fr_classique_config_json__WEBPACK_IMPORTED_MODULE_1__;
        this.game = 'cthulhu-v7-fr-classique';
        var saved = saveService.restore(this.game);

        if (saved !== undefined && saved.content.pageCount === 2) {
          this.sheetData = saved;
        }
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.pagesWrapperElement !== undefined && this.pagesWrapperElement.nativeElement !== undefined) {
            this.pagesWrapperElement.nativeElement.style.setProperty('--pageWidth', "".concat(this.sheetData.pageConfig.pageWidth / 2, "%"));
          }
        }
      }, {
        key: "save",
        value: function save() {
          this.saveService.save(this.game, this.sheetData);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_save_save_service_js__WEBPACK_IMPORTED_MODULE_2__["SaveService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pagesWrapperElement = _t.first);
        }
      },
      decls: 13,
      vars: 4,
      consts: [[1, "pages"], ["pages", ""], ["id", "page-1", 1, "page"], [1, "page-input-container"], ["ngFor", "", 3, "ngForOf"], ["id", "page-2", 1, "page"], [1, "config-panel"], ["mat-button", "", 1, "save-button", 3, "click"], ["aria-hidden", "true"], ["type", "text", 3, "name", "ngModel", "ngModelChange"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 1, 10, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 1, 10, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ratio-A4", ctx.sheetData.pageConfig.pageFormat === "A4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sheetData.content.page1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sheetData.content.page2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%] {\n  --pageWidth: 40%;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: var(--pageWidth);\n  border: black solid 1px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-input-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.6) repeat;\n  border: dotted thin blue;\n}\n[_nghost-%COMP%]   .pages.ratio-A4[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  padding-top: 70.71%;\n}\n[_nghost-%COMP%]   #page-1[_ngcontent-%COMP%] {\n  background-image: url('page-1.png');\n}\n[_nghost-%COMP%]   #page-2[_ngcontent-%COMP%] {\n  background-image: url('page-2.png');\n}\n[_nghost-%COMP%]   .save-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGhvbnkvUHJvamV0cy92aXJ0dWFsLXJwZy1jaGFyYWN0ZXItc2hlZXQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtBQ0NSO0FEQVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FDRVo7QURBWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0VoQjtBRERnQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7QUNHcEI7QURHUTtFQUNJLG1CQUFBO0FDRFo7QURPSTtFQUNJLG1DQUFBO0FDTFI7QURRSTtFQUNJLG1DQUFBO0FDTlI7QURTSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcbiAgICAucGFnZXMge1xuICAgICAgICAtLXBhZ2VXaWR0aDogNDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2VXaWR0aCk7XG4gICAgICAgICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cbiAgICAgICAgICAgIC5wYWdlLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC42KSByZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogZG90dGVkIHRoaW4gYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5yYXRpby1BNCAucGFnZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNzAuNzElO1xuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgLy8gISBUT0RPIHJlcGxhY2UgYnkgZHluYW1lIGltYWdlc1xuICAgICNwYWdlLTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2N0aHVsaHUtdjctZnItY2xhc3NpcXVlL3BhZ2UtMS5wbmdcIik7XG4gICAgfVxuXG4gICAgI3BhZ2UtMiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvY3RodWxodS12Ny1mci1jbGFzc2lxdWUvcGFnZS0yLnBuZ1wiKTtcbiAgICB9XG5cbiAgICAuc2F2ZS1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAucGFnZXMge1xuICAtLXBhZ2VXaWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAucGFnZXMgLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogdmFyKC0tcGFnZVdpZHRoKTtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuOmhvc3QgLnBhZ2VzIC5wYWdlIC5wYWdlLWlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuOmhvc3QgLnBhZ2VzIC5wYWdlIC5wYWdlLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSByZXBlYXQ7XG4gIGJvcmRlcjogZG90dGVkIHRoaW4gYmx1ZTtcbn1cbjpob3N0IC5wYWdlcy5yYXRpby1BNCAucGFnZSB7XG4gIHBhZGRpbmctdG9wOiA3MC43MSU7XG59XG46aG9zdCAjcGFnZS0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9jdGh1bGh1LXY3LWZyLWNsYXNzaXF1ZS9wYWdlLTEucG5nXCIpO1xufVxuOmhvc3QgI3BhZ2UtMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvY3RodWxodS12Ny1mci1jbGFzc2lxdWUvcGFnZS0yLnBuZ1wiKTtcbn1cbjpob3N0IC5zYXZlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_save_save_service_js__WEBPACK_IMPORTED_MODULE_2__["SaveService"]
        }];
      }, {
        pagesWrapperElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['pages', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _sheet_cthulhu_v7_fr_classique_cthulhu_v7_fr_classique_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sheet/cthulhu-v7-fr-classique/cthulhu-v7-fr-classique.component */
    "./src/app/sheet/cthulhu-v7-fr-classique/cthulhu-v7-fr-classique.component.ts");
    /* harmony import */


    var _template_two_pages_two_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./template/two-pages/two-pages.component */
    "./src/app/template/two-pages/two-pages.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _sheet_cthulhu_v7_fr_classique_cthulhu_v7_fr_classique_component__WEBPACK_IMPORTED_MODULE_11__["CthulhuV7FrClassiqueComponent"], _template_two_pages_two_pages_component__WEBPACK_IMPORTED_MODULE_12__["TwoPagesComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _sheet_cthulhu_v7_fr_classique_cthulhu_v7_fr_classique_component__WEBPACK_IMPORTED_MODULE_11__["CthulhuV7FrClassiqueComponent"], _template_two_pages_two_pages_component__WEBPACK_IMPORTED_MODULE_12__["TwoPagesComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
          }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/save/save.service.js":
  /*!*********************************************!*\
    !*** ./src/app/shared/save/save.service.js ***!
    \*********************************************/

  /*! exports provided: SaveService */

  /***/
  function srcAppSharedSaveSaveServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveService", function () {
      return SaveService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LOCAL_STORAGE_SHEET_DATA_KEY = "VirtualRgpCharacterSheet.SheetData.";

    var SaveService = /*#__PURE__*/function () {
      function SaveService() {
        _classCallCheck(this, SaveService);
      }

      _createClass(SaveService, [{
        key: "save",
        value: function save(game, sheetData) {
          localStorage.setItem("".concat(LOCAL_STORAGE_SHEET_DATA_KEY).concat(game), JSON.stringify(sheetData));
        }
      }, {
        key: "restore",
        value: function restore(game) {
          var saved = localStorage.getItem("".concat(LOCAL_STORAGE_SHEET_DATA_KEY).concat(game));

          if (saved !== undefined && saved !== null) {
            return JSON.parse(saved);
          }

          return undefined;
        }
      }]);

      return SaveService;
    }();

    SaveService.ɵfac = function SaveService_Factory(t) {
      return new (t || SaveService)();
    };

    SaveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SaveService,
      factory: SaveService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })(); //# sourceMappingURL=save.service.js.map

    /***/

  },

  /***/
  "./src/app/sheet/cthulhu-v7-fr-classique/cthulhu-v7-fr-classique.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/sheet/cthulhu-v7-fr-classique/cthulhu-v7-fr-classique.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CthulhuV7FrClassiqueComponent */

  /***/
  function srcAppSheetCthulhuV7FrClassiqueCthulhuV7FrClassiqueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CthulhuV7FrClassiqueComponent", function () {
      return CthulhuV7FrClassiqueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CthulhuV7FrClassiqueComponent = /*#__PURE__*/function () {
      function CthulhuV7FrClassiqueComponent() {
        _classCallCheck(this, CthulhuV7FrClassiqueComponent);
      }

      _createClass(CthulhuV7FrClassiqueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CthulhuV7FrClassiqueComponent;
    }();

    CthulhuV7FrClassiqueComponent.ɵfac = function CthulhuV7FrClassiqueComponent_Factory(t) {
      return new (t || CthulhuV7FrClassiqueComponent)();
    };

    CthulhuV7FrClassiqueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CthulhuV7FrClassiqueComponent,
      selectors: [["app-cthulhu-v7-fr-classique"]],
      decls: 2,
      vars: 0,
      template: function CthulhuV7FrClassiqueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cthulhu-v7-fr-classique works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWV0L2N0aHVsaHUtdjctZnItY2xhc3NpcXVlL2N0aHVsaHUtdjctZnItY2xhc3NpcXVlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CthulhuV7FrClassiqueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cthulhu-v7-fr-classique',
          templateUrl: './cthulhu-v7-fr-classique.component.html',
          styleUrls: ['./cthulhu-v7-fr-classique.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/two-pages/two-pages.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/template/two-pages/two-pages.component.ts ***!
    \***********************************************************/

  /*! exports provided: TwoPagesComponent */

  /***/
  function srcAppTemplateTwoPagesTwoPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwoPagesComponent", function () {
      return TwoPagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TwoPagesComponent = /*#__PURE__*/function () {
      function TwoPagesComponent() {
        _classCallCheck(this, TwoPagesComponent);
      }

      _createClass(TwoPagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TwoPagesComponent;
    }();

    TwoPagesComponent.ɵfac = function TwoPagesComponent_Factory(t) {
      return new (t || TwoPagesComponent)();
    };

    TwoPagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TwoPagesComponent,
      selectors: [["app-two-pages"]],
      decls: 2,
      vars: 0,
      template: function TwoPagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "two-pages works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL3R3by1wYWdlcy90d28tcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoPagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-two-pages',
          templateUrl: './two-pages.component.html',
          styleUrls: ['./two-pages.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/cthulhu-v7-fr-classique/config.json":
  /*!********************************************************!*\
    !*** ./src/assets/cthulhu-v7-fr-classique/config.json ***!
    \********************************************************/

  /*! exports provided: pageConfig, content, default */

  /***/
  function srcAssetsCthulhuV7FrClassiqueConfigJson(module) {
    module.exports = JSON.parse("{\"pageConfig\":{\"pages\":[\"page-1.png\",\"page-2.png\"],\"pageFormat\":\"A4\",\"pageWidth\":100},\"content\":{\"page1\":[{\"key\":\"etatCivil.nom\",\"value\":\"Adem Öcalan\",\"x\":9.7,\"y\":5.9,\"width\":26.5},{\"key\":\"etatCivil.joueur\",\"value\":\"\",\"x\":10.5,\"y\":8,\"width\":25.7},{\"key\":\"etatCivil.occupation\",\"value\":\"Occultiste\",\"x\":14,\"y\":9.9,\"width\":22.2},{\"key\":\"etatCivil.age\",\"value\":\"37\",\"x\":9.5,\"y\":11.9,\"width\":11},{\"key\":\"etatCivil.sexe\",\"value\":\"M\",\"x\":25,\"y\":11.9,\"width\":11.2},{\"key\":\"etatCivil.residence\",\"value\":\"Porbandar (Inde)\",\"x\":13,\"y\":13.7,\"width\":23.2},{\"key\":\"etatCivil.lieuDeNaissance\",\"value\":\"Ankara (Turquie)\",\"x\":17,\"y\":15.6,\"width\":19.2},{\"key\":\"caracteristiques.force\",\"value\":50,\"x\":44.75,\"y\":6.2,\"width\":2.1},{\"key\":\"caracteristiques.force_2\",\"value\":25,\"x\":47.5,\"y\":6.2,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.force_5\",\"value\":10,\"x\":47.5,\"y\":7.25,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.dexterite\",\"value\":60,\"x\":44.75,\"y\":8.5,\"width\":2.1},{\"key\":\"caracteristiques.dexterite_2\",\"value\":30,\"x\":47.5,\"y\":8.5,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.dexterite_5\",\"value\":12,\"x\":47.5,\"y\":9.55,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.pouvoir\",\"value\":70,\"x\":44.75,\"y\":10.9,\"width\":2.1},{\"key\":\"caracteristiques.pouvoir_2\",\"value\":35,\"x\":47.5,\"y\":10.9,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.pouvoir_5\",\"value\":14,\"x\":47.5,\"y\":11.95,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.constitution\",\"value\":60,\"x\":44.75,\"y\":13.2,\"width\":2.1},{\"key\":\"caracteristiques.constitution_2\",\"value\":30,\"x\":47.5,\"y\":13.2,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.constitution_5\",\"value\":12,\"x\":47.5,\"y\":14.25,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.apparence\",\"value\":50,\"x\":44.75,\"y\":15.6,\"width\":2.1},{\"key\":\"caracteristiques.apparence_2\",\"value\":25,\"x\":47.5,\"y\":15.6,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.apparence_5\",\"value\":10,\"x\":47.5,\"y\":16.65,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.education\",\"value\":70,\"x\":58,\"y\":6.2,\"width\":2.1},{\"key\":\"caracteristiques.education_2\",\"value\":35,\"x\":60.75,\"y\":6.2,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.education_5\",\"value\":14,\"x\":60.75,\"y\":7.25,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.taille\",\"value\":60,\"x\":58,\"y\":8.5,\"width\":2.1},{\"key\":\"caracteristiques.taille_2\",\"value\":30,\"x\":60.75,\"y\":8.5,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.taille_5\",\"value\":12,\"x\":60.75,\"y\":9.55,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.intelligence\",\"value\":65,\"x\":58,\"y\":10.9,\"width\":2.1},{\"key\":\"caracteristiques.intelligence_2\",\"value\":32,\"x\":60.75,\"y\":10.9,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.intelligence_5\",\"value\":13,\"x\":60.75,\"y\":11.95,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"caracteristiques.mouvement\",\"value\":8,\"x\":58,\"y\":14.2,\"width\":2.1},{\"key\":\"pointDeVie.blessureGrave\",\"value\":\"\",\"x\":21,\"y\":18.2,\"width\":2.1},{\"key\":\"pointDeVie.max\",\"value\":12,\"x\":36,\"y\":18.2,\"width\":2.1},{\"key\":\"pointDeVie.actuel\",\"value\":12,\"x\":33,\"y\":20.5,\"width\":4,\"fontSize\":1.2},{\"key\":\"pointDeMagie.max\",\"value\":20,\"x\":36,\"y\":23.5,\"width\":2.1},{\"key\":\"pointDeMagie.actuel\",\"value\":11,\"x\":33,\"y\":25.5,\"width\":4,\"fontSize\":1.2},{\"key\":\"santeMentale.folieTemporaire\",\"value\":\"\",\"x\":53.5,\"y\":18.2,\"width\":2.1},{\"key\":\"santeMentale.foliePersistente\",\"value\":\"\",\"x\":69,\"y\":18.2,\"width\":2.1},{\"key\":\"santeMentale.initial\",\"value\":60,\"x\":82,\"y\":18.2,\"width\":2.1},{\"key\":\"santeMentale.max\",\"value\":70,\"x\":91,\"y\":18.2,\"width\":2.1},{\"key\":\"santeMentale.actuel\",\"value\":57,\"x\":85,\"y\":21,\"width\":4,\"fontSize\":1.2},{\"key\":\"chance.max\",\"value\":\"max:50\",\"x\":15,\"y\":28.5,\"width\":5},{\"key\":\"chance.actuel\",\"value\":50,\"x\":33,\"y\":28.5,\"width\":4,\"fontSize\":1.2},{\"key\":\"competences.anthropologie\",\"value\":\"\",\"x\":23.6,\"y\":39.2,\"width\":2.8},{\"key\":\"competences.archeologie\",\"value\":16,\"x\":23.6,\"y\":40.86,\"width\":2.8},{\"key\":\"competences.artsEtMetiers\",\"value\":\"\",\"x\":23.6,\"y\":42.52,\"width\":2.8},{\"key\":\"competences.artsEtMetiers1_label\",\"value\":\"Beaux arts\",\"x\":6.5,\"y\":44.18,\"width\":16.8},{\"key\":\"competences.artsEtMetiers1_value\",\"value\":40,\"x\":23.6,\"y\":44.18,\"width\":2.8},{\"key\":\"competences.artsEtMetiers2_label\",\"value\":\"\",\"x\":6.5,\"y\":45.84,\"width\":16.8},{\"key\":\"competences.artsEtMetiers2_value\",\"value\":\"\",\"x\":23.6,\"y\":45.84,\"width\":2.8},{\"key\":\"competences.artsEtMetiers3_label\",\"value\":\"\",\"x\":6.5,\"y\":47.57,\"width\":16.8},{\"key\":\"competences.artsEtMetiers3_value\",\"value\":\"\",\"x\":23.6,\"y\":47.5,\"width\":2.8},{\"key\":\"competences.baratin\",\"value\":40,\"x\":23.6,\"y\":49.16,\"width\":2.8},{\"key\":\"competences.bibliotheque\",\"value\":60,\"x\":23.6,\"y\":50.82,\"width\":2.8},{\"key\":\"competences.charme\",\"value\":\"\",\"x\":23.6,\"y\":52.48,\"width\":2.8},{\"key\":\"competences.armesDePoing\",\"value\":\"\",\"x\":23.6,\"y\":55.8,\"width\":2.8},{\"key\":\"competences.fusils\",\"value\":\"\",\"x\":23.6,\"y\":57.46,\"width\":2.8},{\"key\":\"competences.combatADistance1_label\",\"value\":\"\",\"x\":6.5,\"y\":59.12,\"width\":16.8},{\"key\":\"competences.combatADistance1_value\",\"value\":\"\",\"x\":23.6,\"y\":59.12,\"width\":2.8},{\"key\":\"competences.combatADistance2_label\",\"value\":\"\",\"x\":6.5,\"y\":60.78,\"width\":16.8},{\"key\":\"competences.combatADistance2_value\",\"value\":\"\",\"x\":23.6,\"y\":60.78,\"width\":2.8},{\"key\":\"competences.corpsACorps\",\"value\":\"\",\"x\":23.6,\"y\":64.1,\"width\":2.8},{\"key\":\"competences.combatRapproche1_label\",\"value\":\"\",\"x\":6.5,\"y\":65.76,\"width\":16.8},{\"key\":\"competences.combatRapproche1_value\",\"value\":\"\",\"x\":23.6,\"y\":65.76,\"width\":2.8},{\"key\":\"competences.combatRapproche2_label\",\"value\":\"\",\"x\":6.5,\"y\":67.42,\"width\":16.8},{\"key\":\"competences.combatRapproche2_value\",\"value\":\"\",\"x\":23.6,\"y\":67.42,\"width\":2.8},{\"key\":\"competences.comptabilite\",\"value\":\"\",\"x\":23.6,\"y\":69.1,\"width\":2.8},{\"key\":\"competences.comptabilite\",\"value\":\"\",\"x\":23.6,\"y\":70.76,\"width\":2.8},{\"key\":\"competences.comptabilite\",\"value\":\"\",\"x\":23.6,\"y\":72.42,\"width\":2.8},{\"key\":\"competences.credit\",\"value\":60,\"x\":23.6,\"y\":74.08,\"width\":2.8},{\"key\":\"competences.comptabilite\",\"value\":100,\"x\":23.6,\"y\":75.74,\"width\":2.8},{\"key\":\"competences.discretion\",\"value\":40,\"x\":55.2,\"y\":39.2,\"width\":2.8},{\"key\":\"competences.discretion_2\",\"value\":20,\"x\":60.3,\"y\":39.2,\"width\":1.6},{\"key\":\"competences.discretion_5\",\"value\":8,\"x\":62.5,\"y\":39.2,\"width\":1.6},{\"key\":\"competences.droit\",\"value\":\"\",\"x\":55.2,\"y\":40.86,\"width\":2.8},{\"key\":\"competences.ecouter\",\"value\":\"\",\"x\":55.2,\"y\":42.52,\"width\":2.8},{\"key\":\"competences.electricite\",\"value\":\"\",\"x\":55.2,\"y\":44.18,\"width\":2.8},{\"key\":\"competences.equitation\",\"value\":\"\",\"x\":55.2,\"y\":45.84,\"width\":2.8},{\"key\":\"competences.esquive\",\"value\":30,\"x\":55.2,\"y\":47.5,\"width\":2.8},{\"key\":\"competences.estimation\",\"value\":40,\"x\":55.2,\"y\":49.16,\"width\":2.8},{\"key\":\"competences.grimper\",\"value\":\"\",\"x\":55.2,\"y\":50.82,\"width\":2.8},{\"key\":\"competences.histoire\",\"value\":86,\"x\":55.2,\"y\":52.48,\"width\":2.8},{\"key\":\"competences.imposture\",\"value\":\"\",\"x\":55.2,\"y\":54.14,\"width\":2.8},{\"key\":\"competences.intimidation\",\"value\":\"\",\"x\":55.2,\"y\":55.8,\"width\":2.8},{\"key\":\"competences.lancer\",\"value\":\"\",\"x\":55.2,\"y\":57.46,\"width\":2.8},{\"key\":\"competences.langueMaternelle\",\"value\":74,\"x\":55.2,\"y\":59.12,\"width\":2.8},{\"key\":\"competences.langueMaternelle_langue\",\"value\":\"Arabe\",\"x\":52,\"y\":60.78,\"width\":8},{\"key\":\"competences.langue1_label\",\"value\":\"Grec\",\"x\":38.2,\"y\":62.44,\"width\":16.8},{\"key\":\"competences.langue1_value\",\"value\":56,\"x\":55.2,\"y\":62.44,\"width\":2.8},{\"key\":\"competences.langue2_label\",\"value\":\"Anglais\",\"x\":38.2,\"y\":64.1,\"width\":16.8},{\"key\":\"competences.langue2_value\",\"value\":50,\"x\":55.2,\"y\":64.1,\"width\":2.8},{\"key\":\"competences.langue3_label\",\"value\":\"Français\",\"x\":38.2,\"y\":65.76,\"width\":16.8},{\"key\":\"competences.langue3_value\",\"value\":50,\"x\":55.2,\"y\":65.76,\"width\":2.8},{\"key\":\"competences.mecanique\",\"value\":\"\",\"x\":55.2,\"y\":67.42,\"width\":2.8},{\"key\":\"competences.medecine\",\"value\":\"\",\"x\":55.2,\"y\":69.1,\"width\":2.8},{\"key\":\"competences.mytheDeCthulhu\",\"value\":54,\"x\":55.2,\"y\":70.76,\"width\":2.8},{\"key\":\"competences.nager\",\"value\":\"\",\"x\":55.2,\"y\":72.42,\"width\":2.8},{\"key\":\"competences.naturalisme\",\"value\":\"\",\"x\":55.2,\"y\":74.08,\"width\":2.8},{\"key\":\"competences.occultisme\",\"value\":91,\"x\":55.2,\"y\":75.74,\"width\":2.8},{\"key\":\"competences.orientation\",\"value\":50,\"x\":85.8,\"y\":39.2,\"width\":2.8},{\"key\":\"competences.persuasion\",\"value\":40,\"x\":85.8,\"y\":40.86,\"width\":2.8},{\"key\":\"competences.pickpocket\",\"value\":\"\",\"x\":85.8,\"y\":42.52,\"width\":2.8},{\"key\":\"competences.pilotage\",\"value\":\"\",\"x\":85.8,\"y\":44.18,\"width\":2.8},{\"key\":\"competences.pilotage1_label\",\"value\":\"\",\"x\":69,\"y\":45.84,\"width\":16.8},{\"key\":\"competences.pilotage1_value\",\"value\":\"\",\"x\":85.8,\"y\":45.84,\"width\":2.8},{\"key\":\"competences.pister\",\"value\":\"\",\"x\":85.8,\"y\":47.5,\"width\":2.8},{\"key\":\"competences.plongee\",\"value\":\"\",\"x\":85.8,\"y\":49.16,\"width\":2.8},{\"key\":\"competences.premiersSoins\",\"value\":\"\",\"x\":85.8,\"y\":50.82,\"width\":2.8},{\"key\":\"competences.psychanalyse\",\"value\":\"\",\"x\":85.8,\"y\":52.48,\"width\":2.8},{\"key\":\"competences.psychologie\",\"value\":\"\",\"x\":85.8,\"y\":54.14,\"width\":2.8},{\"key\":\"competences.sauter\",\"value\":\"\",\"x\":85.8,\"y\":55.8,\"width\":2.8},{\"key\":\"competences.sciences\",\"value\":\"\",\"x\":85.8,\"y\":57.46,\"width\":2.8},{\"key\":\"competences.sciences1_label\",\"value\":\"Astrologie\",\"x\":69,\"y\":59.12,\"width\":16.8},{\"key\":\"competences.sciences1_value\",\"value\":50,\"x\":85.8,\"y\":59.12,\"width\":2.8},{\"key\":\"competences.sciences2_label\",\"value\":\"Cryptographie\",\"x\":69,\"y\":60.78,\"width\":16.8},{\"key\":\"competences.sciences2_value\",\"value\":40,\"x\":85.8,\"y\":60.78,\"width\":2.8},{\"key\":\"competences.sciences3_label\",\"value\":\"\",\"x\":69,\"y\":62.44,\"width\":16.8},{\"key\":\"competences.sciences3_value\",\"value\":\"\",\"x\":85.8,\"y\":62.44,\"width\":2.8},{\"key\":\"competences.survie\",\"value\":45,\"x\":85.8,\"y\":64.1,\"width\":2.8},{\"key\":\"competences.survie1_label\",\"value\":\"\",\"x\":69,\"y\":65.76,\"width\":16.8},{\"key\":\"competences.survie1_value\",\"value\":\"\",\"x\":85.8,\"y\":65.76,\"width\":2.8},{\"key\":\"competences.trouveObjetCache\",\"value\":70,\"x\":85.8,\"y\":67.42,\"width\":2.8},{\"key\":\"competences.toc1_label\",\"value\":\"TOC ouvrage occulte\",\"x\":69,\"y\":69.1,\"width\":16.8},{\"key\":\"competences.toc1_value\",\"value\":71,\"x\":85.8,\"y\":69.1,\"width\":2.8},{\"key\":\"competences.toc2_label\",\"value\":\"Repérer ouvrage impie\",\"x\":69,\"y\":70.76,\"width\":16.8},{\"key\":\"competences.toc2_value\",\"value\":75,\"x\":85.8,\"y\":70.76,\"width\":2.8},{\"key\":\"competences.toc3_label\",\"value\":\"\",\"x\":69,\"y\":72.42,\"width\":16.8},{\"key\":\"competences.toc3_value\",\"value\":\"\",\"x\":85.8,\"y\":72.42,\"width\":2.8},{\"key\":\"competences.toc4_label\",\"value\":\"\",\"x\":69,\"y\":74.08,\"width\":16.8},{\"key\":\"competences.toc4_value\",\"value\":\"\",\"x\":85.8,\"y\":74.08,\"width\":2.8},{\"key\":\"competences.toc5_label\",\"value\":\"\",\"x\":69,\"y\":75.74,\"width\":16.8},{\"key\":\"competences.toc5_value\",\"value\":\"\",\"x\":85.8,\"y\":75.74,\"width\":2.8},{\"key\":\"armes.cac_diordinaire\",\"value\":\"\",\"x\":14.5,\"y\":86.4,\"width\":5.5},{\"key\":\"armes.cac_majeur\",\"value\":\"\",\"x\":21.5,\"y\":86.4,\"width\":5.5},{\"key\":\"armes.cac_extreme\",\"value\":\"\",\"x\":28.5,\"y\":86.4,\"width\":5.5},{\"key\":\"armes.arme1_label\",\"value\":\"Dague courbe\",\"x\":3,\"y\":88.4,\"width\":10.5,\"fontSize\":0.65},{\"key\":\"armes.arme1_ordinaire\",\"value\":\"\",\"x\":14.5,\"y\":88.4,\"width\":5.5},{\"key\":\"armes.arme1_majeur\",\"value\":\"\",\"x\":21.5,\"y\":88.4,\"width\":5.5},{\"key\":\"armes.arme1_extreme\",\"value\":\"\",\"x\":28.5,\"y\":88.4,\"width\":5.5},{\"key\":\"armes.arme1_degats\",\"value\":\"1d8+Imp\",\"x\":35.5,\"y\":88.4,\"width\":8.5},{\"key\":\"armes.arme1_portee\",\"value\":\"allonge\",\"x\":45.5,\"y\":88.4,\"width\":7.5},{\"key\":\"armes.arme1_cadence\",\"value\":1,\"x\":54,\"y\":88.4,\"width\":7},{\"key\":\"armes.arme1_capacite\",\"value\":\"\",\"x\":63,\"y\":88.4,\"width\":6},{\"key\":\"armes.arme1_panne\",\"value\":\"\",\"x\":70.5,\"y\":88.4,\"width\":6},{\"key\":\"armes.arme2_label\",\"value\":\"Revolver cal.38\",\"x\":3,\"y\":90.4,\"width\":10.5,\"fontSize\":0.65},{\"key\":\"armes.arme2_ordinaire\",\"value\":\"\",\"x\":14.5,\"y\":90.4,\"width\":5.5},{\"key\":\"armes.arme2_majeur\",\"value\":\"\",\"x\":21.5,\"y\":90.4,\"width\":5.5},{\"key\":\"armes.arme2_extreme\",\"value\":\"\",\"x\":28.5,\"y\":90.4,\"width\":5.5},{\"key\":\"armes.arme2_degats\",\"value\":\"1d10\",\"x\":35.5,\"y\":90.4,\"width\":8.5},{\"key\":\"armes.arme2_portee\",\"value\":\"15m\",\"x\":45.5,\"y\":90.4,\"width\":7.5},{\"key\":\"armes.arme2_cadence\",\"value\":1,\"x\":54,\"y\":90.4,\"width\":7},{\"key\":\"armes.arme2_capacite\",\"value\":8,\"x\":63,\"y\":90.4,\"width\":6},{\"key\":\"armes.arme2_panne\",\"value\":100,\"x\":70.5,\"y\":90.4,\"width\":6},{\"key\":\"armes.arme3_label\",\"value\":\"\",\"x\":3,\"y\":92.4,\"width\":10.5,\"fontSize\":0.65},{\"key\":\"armes.arme3_ordinaire\",\"value\":\"\",\"x\":14.5,\"y\":92.4,\"width\":5.5},{\"key\":\"armes.arme3_majeur\",\"value\":\"\",\"x\":21.5,\"y\":92.4,\"width\":5.5},{\"key\":\"armes.arme3_extreme\",\"value\":\"\",\"x\":28.5,\"y\":92.4,\"width\":5.5},{\"key\":\"armes.arme3_degats\",\"value\":\"\",\"x\":35.5,\"y\":92.4,\"width\":8.5},{\"key\":\"armes.arme3_portee\",\"value\":\"\",\"x\":45.5,\"y\":92.4,\"width\":7.5},{\"key\":\"armes.arme3_cadence\",\"value\":\"\",\"x\":54,\"y\":92.4,\"width\":7},{\"key\":\"armes.arme3_capacite\",\"value\":\"\",\"x\":63,\"y\":92.4,\"width\":6},{\"key\":\"armes.arme3_panne\",\"value\":\"\",\"x\":70.5,\"y\":92.4,\"width\":6},{\"key\":\"armes.arme4_label\",\"value\":\"\",\"x\":3,\"y\":94.4,\"width\":10.5,\"fontSize\":0.65},{\"key\":\"armes.arme4_ordinaire\",\"value\":\"\",\"x\":14.5,\"y\":94.4,\"width\":5.5},{\"key\":\"armes.arme4_majeur\",\"value\":\"\",\"x\":21.5,\"y\":94.4,\"width\":5.5},{\"key\":\"armes.arme4_extreme\",\"value\":\"\",\"x\":28.5,\"y\":94.4,\"width\":5.5},{\"key\":\"armes.arme4_degats\",\"value\":\"\",\"x\":35.5,\"y\":94.4,\"width\":8.5},{\"key\":\"armes.arme4_portee\",\"value\":\"\",\"x\":45.5,\"y\":94.4,\"width\":7.5},{\"key\":\"armes.arme4_cadence\",\"value\":\"\",\"x\":54,\"y\":94.4,\"width\":7},{\"key\":\"armes.arme4_capacite\",\"value\":\"\",\"x\":63,\"y\":94.4,\"width\":6},{\"key\":\"armes.arme4_panne\",\"value\":\"\",\"x\":70.5,\"y\":94.4,\"width\":6},{\"key\":\"combat.impact\",\"value\":0,\"x\":89.3,\"y\":85.1,\"width\":2.1},{\"key\":\"combat.carrure\",\"value\":0,\"x\":89.3,\"y\":88.1,\"width\":2.1},{\"key\":\"combat.esquive\",\"value\":\"\",\"x\":89.3,\"y\":91.3,\"width\":2.1},{\"key\":\"combat.esquive_2\",\"value\":\"\",\"x\":92,\"y\":91.3,\"width\":2.1,\"fontSize\":0.5},{\"key\":\"combat.esquive_5\",\"value\":\"\",\"x\":92,\"y\":92.35,\"width\":2.1,\"fontSize\":0.5}],\"page2\":[{\"key\":\"profil.description_1\",\"value\":\"\",\"x\":14,\"y\":6.5,\"width\":35.5},{\"key\":\"profil.description_2\",\"value\":\"\",\"x\":4.5,\"y\":8.8,\"width\":45},{\"key\":\"profil.ideologieEtCroyances_1\",\"value\":\"Occulte\",\"x\":20.5,\"y\":11.5,\"width\":29},{\"key\":\"profil.ideologieEtCroyances_2\",\"value\":\"\",\"x\":4.5,\"y\":14,\"width\":45},{\"key\":\"profil.personnesImportantes_1\",\"value\":\"Abdul Al-Hazrad\",\"x\":21,\"y\":16.5,\"width\":28.5},{\"key\":\"profil.personnesImportantes_2\",\"value\":\"\",\"x\":4.5,\"y\":19,\"width\":45},{\"key\":\"profil.lieuxSignificatifs_1\",\"value\":\"\",\"x\":17,\"y\":21.5,\"width\":32.5},{\"key\":\"profil.lieuxSignificatifs_2\",\"value\":\"\",\"x\":4.5,\"y\":24,\"width\":45},{\"key\":\"profil.biensPrecieux_1\",\"value\":\"Montre à gousset avec le symbole des\",\"x\":15.5,\"y\":26.5,\"width\":34},{\"key\":\"profil.biensPrecieux_2\",\"value\":\"anciens gravé à l'intérieur\",\"x\":4.5,\"y\":28.7,\"width\":45},{\"key\":\"profil.traits_1\",\"value\":\"Loyal, ambitieux\",\"x\":55.5,\"y\":6.5,\"width\":40},{\"key\":\"profil.traits_2\",\"value\":\"\",\"x\":50.5,\"y\":8.8,\"width\":45},{\"key\":\"profil.sequellesEtCicatrices_1\",\"value\":\"Divers scarifications sur tout le corps\",\"x\":65,\"y\":11.5,\"width\":30.5},{\"key\":\"profil.sequellesEtCicatrices_2\",\"value\":\"\",\"x\":50.5,\"y\":14,\"width\":45},{\"key\":\"profil.phobiesEtManies_1\",\"value\":\"\",\"x\":64,\"y\":16.5,\"width\":31.5},{\"key\":\"profil.phobiesEtManies_2\",\"value\":\"\",\"x\":50.5,\"y\":19,\"width\":45},{\"key\":\"profil.ouvragesOccultesSortsEtArtefacts_1\",\"value\":\"Tome du mythe : Al Azif\",\"x\":74.5,\"y\":21.5,\"width\":21},{\"key\":\"profil.ouvragesOccultesSortsEtArtefacts_2\",\"value\":\"Contacter un goule(5PM), Signe de Voor(1PM+1SAN,1round)\",\"x\":50.5,\"y\":24,\"width\":45},{\"key\":\"profil.rencontresAvecDesEntitesEtranges_1\",\"value\":\"Zombies\",\"x\":74.5,\"y\":26.5,\"width\":21},{\"key\":\"profil.rencontresAvecDesEntitesEtranges_2\",\"value\":\"\",\"x\":50.5,\"y\":28.7,\"width\":45},{\"key\":\"equipements.ligne_1_1\",\"value\":\"Grand manteau\",\"x\":6,\"y\":35,\"width\":23.5},{\"key\":\"equipements.ligne_1_2\",\"value\":\"Nécéssaire de dessin\",\"x\":6,\"y\":37.5,\"width\":23.5},{\"key\":\"equipements.ligne_1_3\",\"value\":\"Des craies\",\"x\":6,\"y\":40.5,\"width\":23.5},{\"key\":\"equipements.ligne_1_4\",\"value\":\"Des bougies\",\"x\":6,\"y\":43,\"width\":23.5},{\"key\":\"equipements.ligne_1_5\",\"value\":\"Cartes\",\"x\":6,\"y\":46,\"width\":23.5},{\"key\":\"equipements.ligne_1_6\",\"value\":\"Gourde d'eau en métal\",\"x\":6,\"y\":48.5,\"width\":23.5},{\"key\":\"equipements.ligne_2_1\",\"value\":\"Briquet\",\"x\":32,\"y\":35,\"width\":23.5},{\"key\":\"equipements.ligne_2_2\",\"value\":\"Nécessaire d'archéologie\",\"x\":32,\"y\":37.5,\"width\":23.5},{\"key\":\"equipements.ligne_2_3\",\"value\":\"Miroir de poche\",\"x\":32,\"y\":40.5,\"width\":23.5},{\"key\":\"equipements.ligne_2_4\",\"value\":\"Pierres de divination\",\"x\":32,\"y\":43,\"width\":23.5},{\"key\":\"equipements.ligne_2_5\",\"value\":\"\",\"x\":32,\"y\":46,\"width\":23.5},{\"key\":\"equipements.ligne_2_6\",\"value\":\"\",\"x\":32,\"y\":48.5,\"width\":23.5},{\"key\":\"richesse.depensesCourantes_1\",\"value\":\"$50\",\"x\":71,\"y\":35,\"width\":23},{\"key\":\"richesse.depensesCourantes_2\",\"value\":\"\",\"x\":58,\"y\":37.5,\"width\":36},{\"key\":\"richesse.especes\",\"value\":\"$300\",\"x\":64,\"y\":40.5,\"width\":30},{\"key\":\"richesse.capital_1\",\"value\":\"$30.000\",\"x\":63,\"y\":43,\"width\":31},{\"key\":\"richesse.capital_2\",\"value\":\"\",\"x\":58,\"y\":46,\"width\":36},{\"key\":\"richesse.capital_3\",\"value\":\"\",\"x\":58,\"y\":48.5,\"width\":36},{\"key\":\"amisInvestigateurs.ami1_nom\",\"value\":\"Jules Wholsh (journaliste)\",\"x\":10.5,\"y\":54.3,\"width\":31},{\"key\":\"amisInvestigateurs.ami1_joueur\",\"value\":\"Mélanie\",\"x\":12,\"y\":57,\"width\":11},{\"key\":\"amisInvestigateurs.ami1_scenario\",\"value\":\"\",\"x\":30,\"y\":57,\"width\":11.5},{\"key\":\"amisInvestigateurs.ami2_nom\",\"value\":\"Danas (tueur à gage)\",\"x\":10.5,\"y\":59.8,\"width\":31},{\"key\":\"amisInvestigateurs.ami2_joueur\",\"value\":\"Théo\",\"x\":12,\"y\":62.2,\"width\":11},{\"key\":\"amisInvestigateurs.ami2_scenario\",\"value\":\"\",\"x\":30,\"y\":62.2,\"width\":11.5},{\"key\":\"amisInvestigateurs.ami3_nom\",\"value\":\"Marie Merlin (médecin-chirurgien)\",\"x\":10.5,\"y\":65,\"width\":31},{\"key\":\"amisInvestigateurs.ami3_joueur\",\"value\":\"Lydie\",\"x\":12,\"y\":67.6,\"width\":11},{\"key\":\"amisInvestigateurs.ami3_scenario\",\"value\":\"\",\"x\":30,\"y\":67.6,\"width\":11.5},{\"key\":\"amisInvestigateurs.ami4_nom\",\"value\":\"\",\"x\":10.5,\"y\":70.7,\"width\":31},{\"key\":\"amisInvestigateurs.ami4_joueur\",\"value\":\"\",\"x\":12,\"y\":73.3,\"width\":11},{\"key\":\"amisInvestigateurs.ami4_scenario\",\"value\":\"\",\"x\":30,\"y\":73.3,\"width\":11.5}]}}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/anthony/Projets/virtual-rpg-character-sheet/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map