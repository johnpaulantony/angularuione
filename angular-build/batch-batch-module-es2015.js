(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["batch-batch-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/batch/addb/addb.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/batch/addb/addb.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"d-lg-flex d-md-flex flex-row\">\n  <fieldset class=\"col-sm-3 col-md-8 col-lg-6 mb-2 b\">\n    <legend>Batch Selection Details</legend>\n    <form (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label>Month and Year of Joining :</label>\n        <input type=\"date\"\n               (blur)=\"generate()\"\n               class=\"form-control\"\n               id=\"date\"\n               name=\"date\"\n               #date\n               placeholder=\"Year of passing\">\n      </div>\n      <div class=\"form-group\">\n        <label>Course :</label>\n        <select id=\"course\"\n                (change)=\"generate()\"\n                class=\"form-control\"\n                #course_name_1\n                name=\"course\">\n          <option *ngFor=\"let batch of course\"\n                  value={{batch.course_name}}>\n            {{batch.course_name}}\n          </option>\n        </select>\n</div>\n      <div class=\"form-group\">\n        <label>Type of Student :</label>\n        <select (change)=\"generate()\"\n                class=\"form-control\"\n                #type\n                id=\"type\"\n                name=\"stu\">\n                <option value=\"Upskilling\">UpSkilling</option>\n          <option value=\"Fresher\">Fresher</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Batch Name Generation :</label>\n        <input (blur)=\"generate()\"\n               #batchname\n               id=\"batchname\"\n               type=\"text\"\n               class=\"form-control\" [(ngModel)]=\"batch.batchName\" name=\"batchName\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Course :</label>\n        <select id=\"course\"                \n                class=\"form-control\"                \n                name=\"course\" [(ngModel)]=\"batch.courseId\">\n          <option *ngFor=\"let batch of course\"\n                  value={{batch.courseID}}>\n            {{batch.course_name}}\n          </option>\n        </select>\n      <!--  <select class=\"form-control\" id=\"cname\" [(ngModel)]=\"test.courseId\" name=\"courseId\">\n          <option *ngFor=\"let sub of course\" value=\"{{sub.courseID}}\">{{sub.course_name}}</option>\n\n      </select>-->\n      </div>\n      <div class=\"form-group\">\n        <label>Student Status :</label>\n        <select class=\"form-control\"\n                id=\"exampleFormControlSelect1\" [(ngModel)]=\"batch.batchStatus\" name=\"type\">\n          <option>Finished</option>\n          <option>Current</option>\n          <option>Upcoming</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary my-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">Submit</button>\n      <br>\n    </form>\n  </fieldset>\n</div>\n \n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Message</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"result1; then condition1 else condition2\"></div>\n        <ng-template #condition1>Success</ng-template>\n        <ng-template #condition2>Failed</ng-template>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/batch/assignstudent/assignstudent.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/batch/assignstudent/assignstudent.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<fieldset class=\"col-sm-3 col-md-12 mb-2 b\">\n\n    <legend>Assign Students</legend>\n    <form (ngSubmit)=\"onSubmit()\">\n            <div class=\"col-md-12 d-flex flex-row\">\n    <div class=\"form-group col-xs-12 col-md-4\">\n      <label>Batch Name :</label>\n      <select class=\"form-control\" id=\"assignbatch\">\n        <option></option>\n    </select>\n    </div>\n    <div class=\"form-group col-xs-12 col-md-4\">\n      <label>Mobile Number :</label>\n      <input class=\"form-control\" id=\"studmobileno\" placeholder=\"Mobile no\">\n    </div>\n    <div class=\"form-group col-xs-12 col-md-4\">\n        <label>Student Name :</label>\n        <input class=\"form-control\" id=\"studname\" placeholder=\"Student Name\">\n    </div>\n    </div>\n    <button class=\"btn btn-primary mx-4 my-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">Submit</button>\n    <br>\n   \n</form>\n</fieldset>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/batch/viewb/viewb.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/batch/viewb/viewb.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card my-5\">\n  <div class=\"card-body\">\n  <table class=\"table table-bordered table-striped\">\n  <thead class=\"thead-dark\">\n  <tr>\n  <th scope=\"col\">Batch Name</th>\n  <th scope=\"col\">Course Name</th>\n  <th scope=\"col\">Batch Created Date</th>\n  <th scope=\"col\">No of Students</th>\n  </tr>\n  </thead>\n\n  <tbody>\n  <tr *ngFor=\"let courses of course1\">\n  <td></td>\n  <td></td>\n  </tr>\n  </tbody>\n  </table>\n  </div>\n  </div>\n ");

/***/ }),

/***/ "./src/app/batch/addb/addb.component.css":
/*!***********************************************!*\
  !*** ./src/app/batch/addb/addb.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\n    padding:0px !important;\n    }\n    .sp\n    {\n    padding-left: 7px;\n    }\n    a:hover{\n    text-decoration: none;\n    }\n    .treeview-menu li\n    {\n    margin-left:30px;\n    }\n    .b{\n    border:1px solid black !important;\n    }\n    legend{\n    width:auto;\n    height:auto;\n    padding:0 10px;\n    border-bottom:none;\n    font-size:14px;\n    }\n    label{\n    font-size:12px;\n    \n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0Y2gvYWRkYi9hZGRiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEI7SUFDQTs7SUFFQSxpQkFBaUI7SUFDakI7SUFDQTtJQUNBLHFCQUFxQjtJQUNyQjtJQUNBOztJQUVBLGdCQUFnQjtJQUNoQjtJQUNBO0lBQ0EsaUNBQWlDO0lBQ2pDO0lBQ0E7SUFDQSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkO0lBQ0E7SUFDQSxjQUFjOztJQUVkIiwiZmlsZSI6InNyYy9hcHAvYmF0Y2gvYWRkYi9hZGRiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zcFxuICAgIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICB9XG4gICAgYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIC50cmVldmlldy1tZW51IGxpXG4gICAge1xuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XG4gICAgfVxuICAgIC5ie1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgbGVnZW5ke1xuICAgIHdpZHRoOmF1dG87XG4gICAgaGVpZ2h0OmF1dG87XG4gICAgcGFkZGluZzowIDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIH1cbiAgICBsYWJlbHtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/batch/addb/addb.component.ts":
/*!**********************************************!*\
  !*** ./src/app/batch/addb/addb.component.ts ***!
  \**********************************************/
/*! exports provided: AddbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbComponent", function() { return AddbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");




let AddbComponent = class AddbComponent {
    constructor(traineeservice) {
        this.traineeservice = traineeservice;
    }
    onSubmit() {
        var d1 = new Date();
        this.batch.batchCreatedDate = d1.getFullYear() + "-" + (d1.getMonth() + 1) + "-" + d1.getDate();
        this.traineeservice.saveBatch(this.batch).subscribe(result => this.result);
    }
    ngOnInit() {
        this.batch = new _models_issue__WEBPACK_IMPORTED_MODULE_2__["Issue"]();
        this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; console.log("Data" + this.course); });
    }
    generate() {
        var dateValue = this.date.nativeElement.value;
        var d = new Date(dateValue);
        var myresult = (d.getMonth() + 1) + "/" + d.getFullYear();
        var courseValue = this.course_name_1.nativeElement.value;
        var typeValue = this.type.nativeElement.value;
        this.batchName1.nativeElement.value = myresult + "/" + courseValue + "/" + typeValue;
        this.batch.batchName = myresult + "/" + courseValue + "/" + typeValue;
    }
};
AddbComponent.ctorParameters = () => [
    { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_3__["TraineeserviceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("date", { static: false })
], AddbComponent.prototype, "date", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("course_name_1", { static: false })
], AddbComponent.prototype, "course_name_1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("type", { static: false })
], AddbComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("batchname", { static: false })
], AddbComponent.prototype, "batchName1", void 0);
AddbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/batch/addb/addb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addb.component.css */ "./src/app/batch/addb/addb.component.css")).default]
    })
], AddbComponent);



/***/ }),

/***/ "./src/app/batch/assignstudent/assignstudent.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/batch/assignstudent/assignstudent.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".b\n{\n    border:1px solid black !important;\n}\nlegend{\n    width:auto;\n    padding:0 10px; \n    border-bottom:none;\n    font-size: 14px;\n}\nlabel{\n    font-size: 12px;\n}\n/*.col-md-12\n{\n    padding-right: 5px !important;\n    padding-left: 5px !important;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0Y2gvYXNzaWduc3R1ZGVudC9hc3NpZ25zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7Ozs7RUFJRSIsImZpbGUiOiJzcmMvYXBwL2JhdGNoL2Fzc2lnbnN0dWRlbnQvYXNzaWduc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJcbntcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG59XG5sZWdlbmR7XG4gICAgd2lkdGg6YXV0bztcbiAgICBwYWRkaW5nOjAgMTBweDsgXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi8qLmNvbC1tZC0xMlxue1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59Ki8iXX0= */");

/***/ }),

/***/ "./src/app/batch/assignstudent/assignstudent.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/batch/assignstudent/assignstudent.component.ts ***!
  \****************************************************************/
/*! exports provided: AssignstudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignstudentComponent", function() { return AssignstudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssignstudentComponent = class AssignstudentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssignstudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignstudent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignstudent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/batch/assignstudent/assignstudent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assignstudent.component.css */ "./src/app/batch/assignstudent/assignstudent.component.css")).default]
    })
], AssignstudentComponent);



/***/ }),

/***/ "./src/app/batch/batch-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/batch/batch-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BatchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchRoutingModule", function() { return BatchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addb_addb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addb/addb.component */ "./src/app/batch/addb/addb.component.ts");
/* harmony import */ var _viewb_viewb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewb/viewb.component */ "./src/app/batch/viewb/viewb.component.ts");
/* harmony import */ var _assignstudent_assignstudent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assignstudent/assignstudent.component */ "./src/app/batch/assignstudent/assignstudent.component.ts");






const routes = [
    {
        path: 'addb',
        component: _addb_addb_component__WEBPACK_IMPORTED_MODULE_3__["AddbComponent"]
    },
    {
        path: 'viewb',
        component: _viewb_viewb_component__WEBPACK_IMPORTED_MODULE_4__["ViewbComponent"]
    },
    {
        path: 'assignstudent',
        component: _assignstudent_assignstudent_component__WEBPACK_IMPORTED_MODULE_5__["AssignstudentComponent"]
    }
];
let BatchRoutingModule = class BatchRoutingModule {
};
BatchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BatchRoutingModule);



/***/ }),

/***/ "./src/app/batch/batch.module.ts":
/*!***************************************!*\
  !*** ./src/app/batch/batch.module.ts ***!
  \***************************************/
/*! exports provided: BatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchModule", function() { return BatchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _batch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch-routing.module */ "./src/app/batch/batch-routing.module.ts");
/* harmony import */ var _addb_addb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addb/addb.component */ "./src/app/batch/addb/addb.component.ts");
/* harmony import */ var _viewb_viewb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewb/viewb.component */ "./src/app/batch/viewb/viewb.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _assignstudent_assignstudent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assignstudent/assignstudent.component */ "./src/app/batch/assignstudent/assignstudent.component.ts");








let BatchModule = class BatchModule {
};
BatchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_addb_addb_component__WEBPACK_IMPORTED_MODULE_4__["AddbComponent"], _viewb_viewb_component__WEBPACK_IMPORTED_MODULE_5__["ViewbComponent"], _assignstudent_assignstudent_component__WEBPACK_IMPORTED_MODULE_7__["AssignstudentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _batch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BatchRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]
    })
], BatchModule);



/***/ }),

/***/ "./src/app/batch/viewb/viewb.component.css":
/*!*************************************************!*\
  !*** ./src/app/batch/viewb/viewb.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\n    padding:0px !important;\n}\n.sp\n{\n    padding-left: 7px;\n}\na:hover{\n    text-decoration: none;\n}\n.treeview-menu li\n{\n    margin-left:30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0Y2gvdmlld2Ivdmlld2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmF0Y2gvdmlld2Ivdmlld2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbn1cbi5zcFxue1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xufVxuYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udHJlZXZpZXctbWVudSBsaVxue1xuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/batch/viewb/viewb.component.ts":
/*!************************************************!*\
  !*** ./src/app/batch/viewb/viewb.component.ts ***!
  \************************************************/
/*! exports provided: ViewbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewbComponent", function() { return ViewbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewbComponent = class ViewbComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/batch/viewb/viewb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewb.component.css */ "./src/app/batch/viewb/viewb.component.css")).default]
    })
], ViewbComponent);



/***/ })

}]);
//# sourceMappingURL=batch-batch-module-es2015.js.map