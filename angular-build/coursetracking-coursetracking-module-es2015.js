(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coursetracking-coursetracking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/add/add.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/add/add.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header d-flex justify-content-center\">\n      <button type=\"button\"  class=\"btn btn-primary col-md-2 mx-5\" routerLink=\"/coursetracking/addcourse\">Course</button>\n      <button type=\"button\"  class=\"btn btn-info col-md-2 mx-5 b\" routerLink=\"/coursetracking/addsubject\">Subject</button>\n      <button type=\"button\"  class=\"btn btn-secondary col-md-2 mx-5\" routerLink=\"/coursetracking/addtopic\">Topic</button>\n   </section> \n       \n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addcourse/addcourse.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addcourse/addcourse.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"col-sm-3 col-md-8 col-lg-6 b\">\n    <legend>Add Courses</legend>\n    <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label>Course Name :</label>\n      <input class=\"form-control\" name=\"cname\" id=\"cname\" [(ngModel)]=\"course.course_name\" placeholder=\"Course Name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Course Description :</label>\n      <input class=\"form-control\" name=\"cdescription\" id=\"cdes\" [(ngModel)]=\"course.description\" placeholder=\"Course Description\">\n    </div>\n    <button class=\"btn btn-primary my-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">Submit</button>\n    <br>\n   \n</form>\n</fieldset>\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"result1; then condition1 else condition2\"></div>\n        <ng-template #condition1>Success</ng-template>\n        <ng-template #condition2>Failed</ng-template>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Back</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"gotoadd()\">Next</button>\n      </div>\n    </div>\n  </div>\n</div>\n<fieldset class=\"col-sm-3 col-md-8 col-lg-6\">\n\n<div class=\"card my-5\"> \n  <div class=\"card-body\">\n  <table class=\"table table-bordered table-striped\">\n  <thead class=\"thead-dark\">\n  <tr>\n  \n  <th scope=\"col\">Name</th>\n  <th scope=\"col\">Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let courses of course1\">\n \n  <td>{{ courses.course_name }}</td>\n  <td>{{ courses.description }}</td>\n  </tr>\n  </tbody>\n  </table>\n  </div>\n  </div>\n  </fieldset>\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addsubject/addsubject.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addsubject/addsubject.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"col-sm-3 col-md-8 col-lg-6 b\">\n    <legend>Add Subjects</legend>\n    <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label>Course Name :</label>\n            <select class=\"form-control\" id=\"cname\" [(ngModel)]=\"test.courseId\" name=\"courseId\">\n                <option *ngFor=\"let sub of course\" value=\"{{sub.courseID}}\">{{sub.course_name}}</option>\n\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Subject Name :</label>\n            <input class=\"form-control\" id=\"sname\" name=\"sname\" [(ngModel)]=\"test.subjectName\" placeholder=\"Subject Name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Subject Description :</label>\n            <input class=\"form-control\" id=\"sdes\" name=\"sdescription\" [(ngModel)]=\"test.description\" placeholder=\"Subject Description\">\n        </div>\n        <button class=\"btn btn-primary my-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">Submit</button>\n        <br>\n\n    </form>\n</fieldset>\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div *ngIf=\"result1; then condition1 else condition2\"></div>\n          <ng-template #condition1>Success</ng-template>\n          <ng-template #condition2>Failed</ng-template>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Back</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"gotoadd()\">Next</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <fieldset class=\"col-sm-3 col-md-8 col-lg-6\">\n\n  <div class=\"card my-5 \">\n    <div class=\"card-body\">\n    <table class=\"table table-bordered table-striped\">\n    <thead class=\"thead-dark\">\n    <tr>\n    \n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Description</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let courses of test1\">\n   \n    <td>{{ courses.subjectName }}</td>\n    <td>{{ courses.description }}</td>\n    </tr>\n    </tbody>\n    </table>\n    </div>\n    </div>\n    </fieldset>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addtopic/addtopic.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addtopic/addtopic.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"col-sm-3 col-md-8 col-lg-6 b\">\n    <legend>Add topics</legend>\n    <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label>Course Name :</label>\n            <select class=\"form-control\" id=\"cname\" [(ngModel)]=\"test.courseId\" name=\"courseID\" #mySelect\n            (change)='onOptionsSelected(mySelect.value)'>\n                <option *ngFor=\"let sub of course\" value=\"{{sub.courseID}}\">{{sub.course_name}}</option>\n\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Subject Name :</label>\n            <select class=\"form-control\" id=\"sname\" [(ngModel)]=\"test.subjectId\" name=\"subjectId\"  >\n                <option *ngFor=\"let sub of getSubject\" value=\"{{sub.subjectId}}\">{{sub.subjectName}}</option>\n\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label>Topic name :</label>\n            <input class=\"form-control\" id=\"tname\" name=\"sdescription\" [(ngModel)]=\"test.topicName\" placeholder=\"Subject Description\">\n        </div>\n        <div class=\"form-group\">\n            <label>Topic Description :</label>\n            <input class=\"form-control\" id=\"tdes\" name=\"sdescription\" [(ngModel)]=\"test.description\" placeholder=\"Subject Description\">\n        </div>\n        <div class=\"form-group\">\n            <label>Topic duration :</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"test.duration\" name=\"duration\" placeholder=\"Topic Duration\">\n            </div>\n        <button class=\"btn btn-primary my-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">Submit</button>\n        <br>\n\n    </form>\n</fieldset>\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div *ngIf=\"result1; then condition1 else condition2\"></div>\n          <ng-template #condition1>Success</ng-template>\n          <ng-template #condition2>Failed</ng-template>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Back</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"gotoadd()\">Next</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <fieldset class=\"col-sm-3 col-md-8 col-lg-6\">\n  \n  <div class=\"card my-5\">\n    <div class=\"card-body\">\n    <table class=\"table table-bordered table-striped\">\n    <thead class=\"thead-dark\">\n    <tr>\n    \n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Description</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let courses of topic1\">\n   \n    <td>{{ courses.topicName }}</td>\n    <td>{{ courses.description }}</td>\n    </tr>\n    </tbody>\n    </table>\n    </div>\n    </div>\n    </fieldset>\n    \n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/viewc/viewc.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/viewc/viewc.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"col-xs-4 col-md-12 b\">\n  <legend>Add topics</legend>\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group col-md-4\">\n      <label>Course Name :</label>\n      <select class=\"form-control\" id=\"cname\" [(ngModel)]=\"test.courseId\" name=\"courseID\" #mySelect\n      (change)='onOptionsSelected(mySelect.value)'>\n          <option *ngFor=\"let sub of course\" value=\"{{sub.courseID}}\">{{sub.course_name}}</option>\n\n      </select>\n  </div>\n\n  <div class=\"form-group col-md-4\">\n      <label>Subject Name :</label>\n      <select class=\"form-control\" id=\"sname\" [(ngModel)]=\"test.subjectId\" name=\"subjectId\"  >\n          <option *ngFor=\"let sub of getSubject\" value=\"{{sub.subjectId}}\">{{sub.subjectName}}</option>\n\n      </select>\n  </div>\n      <div class=\"form-group col-md-4\">\n          <label>Topics name :</label>\n          <select class=\"form-control\" id=\"sname\" [(ngModel)]=\"test.topicId\" name=\"topicId\"  >\n            <option *ngFor=\"let sub of gettopic\" value=\"{{sub.topicId}}\">{{sub.topicName}}</option>\n        </select>\n            </div>\n          \n          <button class=\"btn btn-primary my-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">Submit</button>\n        <br>\n          </form>\n        </fieldset>\n<fieldset class=\"col-xs-4 col-md-12\">\n<div class=\"card my-5\">\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-striped\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">Courses Name</th>\n            <th scope=\"col\">Subjects Name</th>\n            <th scope=\"col\">Topics Name</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr >\n            <td *ngFor=\"let courses of course\">{{ courses.course_name  }}</td>\n            <td>{{ courses.subjectName}}</td>\n            <td>{{courses.topicName}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</fieldset>");

/***/ }),

/***/ "./src/app/coursetracking/add/add.component.css":
/*!******************************************************!*\
  !*** ./src/app/coursetracking/add/add.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button{\n    height:100px;\n    width:200px;\nfont-family:'Source Sans Pro',sans-serif;\nfont-size: 30px\n}\n.b{\n    background-color: #222d32\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZix3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXRyYWNraW5nL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgd2lkdGg6MjAwcHg7XG5mb250LWZhbWlseTonU291cmNlIFNhbnMgUHJvJyxzYW5zLXNlcmlmO1xuZm9udC1zaXplOiAzMHB4XG59XG4uYntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZDMyXG59Il19 */");

/***/ }),

/***/ "./src/app/coursetracking/add/add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coursetracking/add/add.component.ts ***!
  \*****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddComponent = class AddComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/coursetracking/add/add.component.css")).default]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/coursetracking/addcourse/addcourse.component.css":
/*!******************************************************************!*\
  !*** ./src/app/coursetracking/addcourse/addcourse.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".b\n{\n    border:1px solid black !important;\n}\nlegend{\n    width:auto;\n    padding:0 10px; \n    border-bottom:none;\n    font-size: 14px;\n}\nlabel{\n    font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkY291cnNlL2FkZGNvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXRyYWNraW5nL2FkZGNvdXJzZS9hZGRjb3Vyc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iXG57XG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxubGVnZW5ke1xuICAgIHdpZHRoOmF1dG87XG4gICAgcGFkZGluZzowIDEwcHg7IFxuICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5sYWJlbHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/coursetracking/addcourse/addcourse.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/coursetracking/addcourse/addcourse.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddcourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcourseComponent", function() { return AddcourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");





let AddcourseComponent = class AddcourseComponent {
    constructor(router, traineeservice) {
        this.router = router;
        this.traineeservice = traineeservice;
        this.course = new _models_issue__WEBPACK_IMPORTED_MODULE_4__["Issue"]();
    }
    onSubmit() {
        this.traineeservice.save(this.course).subscribe(result => this.result, this.result1 = this.result);
    }
    gotoadd() {
        this.router.navigate(['../coursetracking/add']);
    }
    ngOnInit() { this.traineeservice.getCourseDetails().subscribe(data => { this.course1 = data; }); }
};
AddcourseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
];
AddcourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcourse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addcourse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addcourse/addcourse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addcourse.component.css */ "./src/app/coursetracking/addcourse/addcourse.component.css")).default]
    })
], AddcourseComponent);



/***/ }),

/***/ "./src/app/coursetracking/addsubject/addsubject.component.css":
/*!********************************************************************!*\
  !*** ./src/app/coursetracking/addsubject/addsubject.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".b\n{\n    border:1px solid black !important;\n}\nlegend{\n    width:auto;\n    padding:0 10px; \n    border-bottom:none;\n    font-size: 14px;\n}\nlabel{\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkc3ViamVjdC9hZGRzdWJqZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkc3ViamVjdC9hZGRzdWJqZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYlxue1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cbmxlZ2VuZHtcbiAgICB3aWR0aDphdXRvO1xuICAgIHBhZGRpbmc6MCAxMHB4OyBcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxubGFiZWx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/coursetracking/addsubject/addsubject.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/coursetracking/addsubject/addsubject.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddsubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsubjectComponent", function() { return AddsubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddsubjectComponent = class AddsubjectComponent {
    constructor(router, traineeservice) {
        this.router = router;
        this.traineeservice = traineeservice;
        this.test = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
    }
    onSubmit() {
        this.traineeservice.saveSubject(this.test).subscribe(result => this.result, this.result1 = this.result);
    }
    gotoadd() {
        this.router.navigate(['../coursetracking/add']);
    }
    ngOnInit() {
        this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; console.log("Data" + data); });
        this.traineeservice.getSubjectDetails().subscribe(data => { this.test1 = data; });
    }
};
AddsubjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
];
AddsubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addsubject',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addsubject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addsubject/addsubject.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addsubject.component.css */ "./src/app/coursetracking/addsubject/addsubject.component.css")).default]
    })
], AddsubjectComponent);



/***/ }),

/***/ "./src/app/coursetracking/addtopic/addtopic.component.css":
/*!****************************************************************!*\
  !*** ./src/app/coursetracking/addtopic/addtopic.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".b\n{\n    border:1px solid black !important;\n}\nlegend{\n    width:auto;\n    padding:0 10px; \n    border-bottom:none;\n    font-size: 14px;\n}\nlabel{\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkdG9waWMvYWRkdG9waWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2V0cmFja2luZy9hZGR0b3BpYy9hZGR0b3BpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJcbntcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG59XG5sZWdlbmR7XG4gICAgd2lkdGg6YXV0bztcbiAgICBwYWRkaW5nOjAgMTBweDsgXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/coursetracking/addtopic/addtopic.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/coursetracking/addtopic/addtopic.component.ts ***!
  \***************************************************************/
/*! exports provided: AddtopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtopicComponent", function() { return AddtopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddtopicComponent = class AddtopicComponent {
    constructor(router, traineeservice) {
        this.router = router;
        this.traineeservice = traineeservice;
        this.test = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
    }
    onOptionsSelected(value) {
        this.traineeservice.getCourseSubject(value).subscribe(data => {
            this.getSubject = data;
        });
    }
    onSubmit() {
        this.traineeservice.saveTopic(this.test).subscribe(result => this.result, this.result1 = this.result);
    }
    gotoadd() {
        this.router.navigate(['../coursetracking/add']);
    }
    ngOnInit() {
        this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; });
        this.traineeservice.getSubjectDetails().subscribe(data => { this.subject = data; });
        this.traineeservice.getTopicDetails().subscribe(data => { this.topic1 = data; });
    }
};
AddtopicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
];
AddtopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addtopic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addtopic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addtopic/addtopic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addtopic.component.css */ "./src/app/coursetracking/addtopic/addtopic.component.css")).default]
    })
], AddtopicComponent);



/***/ }),

/***/ "./src/app/coursetracking/coursetracking-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/coursetracking/coursetracking-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CoursetrackingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursetrackingRoutingModule", function() { return CoursetrackingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _viewc_viewc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewc/viewc.component */ "./src/app/coursetracking/viewc/viewc.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/coursetracking/add/add.component.ts");
/* harmony import */ var _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcourse/addcourse.component */ "./src/app/coursetracking/addcourse/addcourse.component.ts");
/* harmony import */ var _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addsubject/addsubject.component */ "./src/app/coursetracking/addsubject/addsubject.component.ts");
/* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/coursetracking/addtopic/addtopic.component.ts");








const routes = [{
        path: 'viewc',
        component: _viewc_viewc_component__WEBPACK_IMPORTED_MODULE_3__["ViewcComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'addcourse',
        component: _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_5__["AddcourseComponent"]
    },
    {
        path: 'addsubject',
        component: _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_6__["AddsubjectComponent"]
    },
    {
        path: 'addtopic',
        component: _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_7__["AddtopicComponent"]
    }
];
let CoursetrackingRoutingModule = class CoursetrackingRoutingModule {
};
CoursetrackingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CoursetrackingRoutingModule);

function newFunction() {
    return 'viewc';
}


/***/ }),

/***/ "./src/app/coursetracking/coursetracking.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/coursetracking/coursetracking.module.ts ***!
  \*********************************************************/
/*! exports provided: CoursetrackingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursetrackingModule", function() { return CoursetrackingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _coursetracking_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coursetracking-routing.module */ "./src/app/coursetracking/coursetracking-routing.module.ts");
/* harmony import */ var _viewc_viewc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewc/viewc.component */ "./src/app/coursetracking/viewc/viewc.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/coursetracking/add/add.component.ts");
/* harmony import */ var _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addsubject/addsubject.component */ "./src/app/coursetracking/addsubject/addsubject.component.ts");
/* harmony import */ var _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addcourse/addcourse.component */ "./src/app/coursetracking/addcourse/addcourse.component.ts");
/* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/coursetracking/addtopic/addtopic.component.ts");











let CoursetrackingModule = class CoursetrackingModule {
};
CoursetrackingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_viewc_viewc_component__WEBPACK_IMPORTED_MODULE_5__["ViewcComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_8__["AddsubjectComponent"], _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_9__["AddcourseComponent"], _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_10__["AddtopicComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _coursetracking_routing_module__WEBPACK_IMPORTED_MODULE_4__["CoursetrackingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]
    })
], CoursetrackingModule);



/***/ }),

/***/ "./src/app/coursetracking/viewc/viewc.component.css":
/*!**********************************************************!*\
  !*** ./src/app/coursetracking/viewc/viewc.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".b\n{\n    border:1px solid black !important;\n}\nlegend{\n    width:auto;\n    padding:0 10px; \n    border-bottom:none;\n    font-size: 14px;\n}\nlabel{\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvdmlld2Mvdmlld2MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2V0cmFja2luZy92aWV3Yy92aWV3Yy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJcbntcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG59XG5sZWdlbmR7XG4gICAgd2lkdGg6YXV0bztcbiAgICBwYWRkaW5nOjAgMTBweDsgXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/coursetracking/viewc/viewc.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/coursetracking/viewc/viewc.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcComponent", function() { return ViewcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");



let ViewcComponent = class ViewcComponent {
    constructor(traineeservice) {
        this.traineeservice = traineeservice;
    }
    onSubmit() {
        this.traineeservice.save(this.course1).subscribe(result => this.result);
        this.traineeservice.saveSubject(this.course1).subscribe(result => this.result);
        this.traineeservice.saveTopic(this.course1).subscribe(result => this.result);
    }
    ngOnInit() {
        this.traineeservice.getCourseDetails().subscribe(data => {
            this.course = data;
        });
        this.traineeservice.getSubjectDetails().subscribe(data => {
            this.course2 = data;
        });
        this.traineeservice.getTopicDetails().subscribe(data => {
            this.course3 = data;
        });
    }
};
ViewcComponent.ctorParameters = () => [
    { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
];
ViewcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/viewc/viewc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewc.component.css */ "./src/app/coursetracking/viewc/viewc.component.css")).default]
    })
], ViewcComponent);



/***/ })

}]);
//# sourceMappingURL=coursetracking-coursetracking-module-es2015.js.map