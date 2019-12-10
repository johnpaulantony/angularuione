(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/freshers/freshers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/freshers/freshers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"d-lg-flex d-md-flex flex-row\">\n     <fieldset class=\"col-sm-3 col-md-4 mb-2\">\n          <legend>Student Details</legend>\n          <div class=\"form-group\">\n          <label>Student Name :</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"student.studentName\" name=\"studentname\" placeholder=\"Student Name\">\n          </div>\n         <div class=\"form-group\">\n          <label>Date of Joining :</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"student.dateOfJoining\" name=\"studentdoj\" placeholder=\"Date of Joining\">\n          </div>\n          <div class=\"form-group\">\n              <label>Mobile No :</label>\n              <input type=\"tel\" class=\"form-control\" [(ngModel)]=\"studentpd.studentMobile\" name=\"studentmobile\" placeholder=\"Mobile no\">\n              </div>\n              <div class=\"form-group\">\n              <label>Mail Id :</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"studentpd.studentEmail\" name=\"studentemail\" placeholder=\"Mail Id\">\n              </div>\n          <div class=\"form-group\">\n          <label>Bond :</label><br>\n          <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" value=\"yes\" name=\"bond\" [(ngModel)]=\"bond\">\n              <label class=\"form-check-label\" >Yes</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" value=\"no\" name=\"bond\" [(ngModel)]=\"bond\">\n              <label class=\"form-check-label\" >No</label>\n            </div></div>\n           <div class=\"form-group\">\n              <label>Training Duration :</label>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"student.duration\" name=\"studenttrainingd\" placeholder=\"Training Duration\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Salary Type :</label><br>\n                  <div class=\"form-check form-check-inline\">\n                      <input class=\"form-check-input\" type=\"radio\" value=\"stipend\" [(ngModel)]=\"salary\" name=\"salary\">\n                      <label class=\"form-check-label\">Stipend</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                      <input class=\"form-check-input\" type=\"radio\" value=\"salary\" [(ngModel)]=\"salary\" name=\"salary\">\n                      <label class=\"form-check-label\">Salary</label>\n                    </div></div>     \n      </fieldset>\n  <fieldset class=\"col-sm-3 col-md-4 ml-1 mb-2\">\n    <legend>Amenities</legend>\n    <div class=\"form-group\">\n      <label>Stay details :</label>\n      <select class=\"form-control\" [(ngModel)]=\"student.stayDetails\" name=\"stay\">\n<option value=\"hostel\">hostel</option>\n<option value=\"dayscholar\">dayscholar</option>\n<option value=\"cab\">cab</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Status details :</label>\n      <select class=\"form-control\" [(ngModel)]=\"student.statusDetails\" name=\"stay\">\n<option value=\"in-training\">In-Training</option>\n<option value=\"deployed\">deployed</option>\n<option value=\"terminated\">Terminated</option>\n      </select>\n    </div>\n   \n   <div class=\"form-group\">\n    <label>College :</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ameneties.studentCollege\" name=\"studentcollege\" placeholder=\"College\">\n    </div>\n    <div class=\"form-group\">\n      <label>Qualification :</label>\n      <select class=\"form-control\" [(ngModel)]=\"ameneties.qualification\" name=\"qualification\">\n<option value=\"BE\">BE</option>\n<option value=\"ME\">ME</option>\n      </select>\n    </div>\n      <div class=\"form-group\">\n        <label>Year of passing :</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ameneties.yearOfPassing\" name=\"studentyop\" placeholder=\"Year of passing\">\n        </div>\n        <div class=\"form-group\">\n          <label>Stream :</label>\n          <select class=\"form-control\" name=\"stream\" [(ngModel)]=\"ameneties.stream\"  >\n         <option value=\"EEE\">EEE</option>\n           <option value=\"ECE\">ECE</option>\n            \n               </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Mode of selection :</label>\n          <select class=\"form-control\" name=\"mos\" [(ngModel)]=\"student.mode\" >            \n            <option value=\"on-campus\">On-Campus</option>\n            <option value=\"off-campus\">Off-Campus</option>\n            <option value=\"reference\">Reference</option>\n          </select>\n        </div>\n  </fieldset>\n<fieldset class=\"col-sm-3 col-md-4 ml-1 mb-2\">\n      <legend>Personal details</legend>\n      \n      <div class=\"form-group\">\n          <label>Address :</label>\n          <textarea class=\"form-control\" [(ngModel)]=\"studentpd.studentAddress\" name=\"studentaddress\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Parent's No :</label>\n          <input type=\"tel\" class=\"form-control\" [(ngModel)]=\"studentpd.parentMobile\" name=\"studentpmobile\" placeholder=\"Parent's no\">\n          </div>\n          <div class=\"form-group\">\n              <label>Alternate No :</label>\n              <input type=\"tel\" class=\"form-control\" [(ngModel)]=\"studentpd.studentAlternateMobile\" name=\"studentalternateno\" placeholder=\"Alternate no\">\n              </div>\n        <div class=\"form-group\">\n                  <label>Date of Birth :</label>\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"studentpd.dateOfBirth\" name=\"studentdob\" placeholder=\"DOB\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Gender :</label><br>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" value=\"male\" name=\"gender\" [(ngModel)]=\"gender\">\n                        <label class=\"form-check-label\" >Male</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" value=\"female\" name=\"gender\" [(ngModel)]=\"gender\">\n                        <label class=\"form-check-label\" >Female</label>\n                      </div></div>\n                <button class=\"btn btn-primary my-2\" data-toggle=\"modal\" data-target=\"#exampleModal\">Submit</button>\n                    <br>\n  </fieldset>\n  \n  </div>\n  </form>\n  \n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Message</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"result1; then condition1 else condition2\"></div>\n        <ng-template #condition1>Success</ng-template>\n        <ng-template #condition2>Failed</ng-template>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/upskilling/upskilling.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/upskilling/upskilling.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p>upskilling works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/views/views.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/views/views.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"col-sm-3 col-md-8\">\n    <div class=\"card my-5\">\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Student Name</th>\n                <th scope=\"col\">Mobile No</th>\n                <th scope=\"col\">Mail Id</th>\n                <th scope=\"col\">Batch</th>\n                <th scope=\"col\">Date Of Joining</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let trainers of trainer\">\n                <td>{{trainers.trainerName }}</td>\n                <td>{{trainers.trainerQualification }}</td>\n                <td>{{trainers.mobile}}</td>\n                <td>{{trainers.mailId}}</td>\n                <td>{{trainers.technologyUndertaken}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </fieldset>\n    \n");

/***/ }),

/***/ "./src/app/models/Amenities.ts":
/*!*************************************!*\
  !*** ./src/app/models/Amenities.ts ***!
  \*************************************/
/*! exports provided: Amenities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Amenities", function() { return Amenities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Amenities {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/models/StudentDetails.ts":
/*!******************************************!*\
  !*** ./src/app/models/StudentDetails.ts ***!
  \******************************************/
/*! exports provided: Studentdetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Studentdetails", function() { return Studentdetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Studentdetails {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/student/freshers/freshers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student/freshers/freshers.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset{\n    border:1px solid black !important;\n}\nlegend{\n    width:auto;\n    height:auto;\n    padding:0 10px;\n    border-bottom:none;\n    font-size:14px;\n}\nlabel{\n    font-size:12px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9mcmVzaGVycy9mcmVzaGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2ZyZXNoZXJzL2ZyZXNoZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldHtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG59XG5sZWdlbmR7XG4gICAgd2lkdGg6YXV0bztcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBwYWRkaW5nOjAgMTBweDtcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgZm9udC1zaXplOjE0cHg7XG59XG5sYWJlbHtcbiAgICBmb250LXNpemU6MTJweDtcblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/student/freshers/freshers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student/freshers/freshers.component.ts ***!
  \********************************************************/
/*! exports provided: FreshersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreshersComponent", function() { return FreshersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_Amenities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Amenities */ "./src/app/models/Amenities.ts");
/* harmony import */ var src_app_models_StudentDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/StudentDetails */ "./src/app/models/StudentDetails.ts");







let FreshersComponent = class FreshersComponent {
    constructor(router, traineeservice) {
        this.router = router;
        this.traineeservice = traineeservice;
    }
    onSubmit() {
        this.student.salary = this.salary;
        this.studentpd.gender = this.gender;
        this.student.bond = this.bond;
        this.traineeservice.saveamenities(this.ameneties).subscribe(result => this.result);
        this.traineeservice.savestudentpd(this.studentpd).subscribe(result => this.result);
        this.traineeservice.savestudent(this.student).subscribe(result => this.result);
    }
    gotoadd() {
        this.router.navigate(['/views']);
    }
    ngOnInit() {
        this.studentpd = new _models_issue__WEBPACK_IMPORTED_MODULE_2__["Studentpersonaldetails"]();
        this.student = new src_app_models_StudentDetails__WEBPACK_IMPORTED_MODULE_6__["Studentdetails"]();
        this.ameneties = new src_app_models_Amenities__WEBPACK_IMPORTED_MODULE_5__["Amenities"]();
    }
};
FreshersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_3__["TraineeserviceService"] }
];
FreshersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-freshers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./freshers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/freshers/freshers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./freshers.component.css */ "./src/app/student/freshers/freshers.component.css")).default]
    })
], FreshersComponent);



/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _freshers_freshers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freshers/freshers.component */ "./src/app/student/freshers/freshers.component.ts");
/* harmony import */ var _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upskilling/upskilling.component */ "./src/app/student/upskilling/upskilling.component.ts");
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/views.component */ "./src/app/student/views/views.component.ts");






const routes = [
    {
        path: 'freshers',
        component: _freshers_freshers_component__WEBPACK_IMPORTED_MODULE_3__["FreshersComponent"]
    },
    {
        path: 'upskilling',
        component: _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_4__["UpskillingComponent"]
    },
    {
        path: 'views',
        component: _views_views_component__WEBPACK_IMPORTED_MODULE_5__["ViewsComponent"]
    }
];
let StudentRoutingModule = class StudentRoutingModule {
};
StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StudentRoutingModule);



/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _freshers_freshers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./freshers/freshers.component */ "./src/app/student/freshers/freshers.component.ts");
/* harmony import */ var _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upskilling/upskilling.component */ "./src/app/student/upskilling/upskilling.component.ts");
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/views.component */ "./src/app/student/views/views.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let StudentModule = class StudentModule {
};
StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_freshers_freshers_component__WEBPACK_IMPORTED_MODULE_4__["FreshersComponent"], _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_5__["UpskillingComponent"], _views_views_component__WEBPACK_IMPORTED_MODULE_6__["ViewsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _student_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], StudentModule);



/***/ }),

/***/ "./src/app/student/upskilling/upskilling.component.css":
/*!*************************************************************!*\
  !*** ./src/app/student/upskilling/upskilling.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\n    padding:0px !important;\n}\n.sp\n{\n    padding-left: 7px;\n}\na:hover{\n    text-decoration: none;\n}\n.treeview-menu li\n{\n    margin-left:30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC91cHNraWxsaW5nL3Vwc2tpbGxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC91cHNraWxsaW5nL3Vwc2tpbGxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbn1cbi5zcFxue1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xufVxuYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udHJlZXZpZXctbWVudSBsaVxue1xuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/student/upskilling/upskilling.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student/upskilling/upskilling.component.ts ***!
  \************************************************************/
/*! exports provided: UpskillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpskillingComponent", function() { return UpskillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpskillingComponent = class UpskillingComponent {
    constructor() { }
    ngOnInit() {
    }
};
UpskillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upskilling',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upskilling.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/upskilling/upskilling.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upskilling.component.css */ "./src/app/student/upskilling/upskilling.component.css")).default]
    })
], UpskillingComponent);



/***/ }),

/***/ "./src/app/student/views/views.component.css":
/*!***************************************************!*\
  !*** ./src/app/student/views/views.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\n    padding:0px !important;\n}\n.sp\n{\n    padding-left: 7px;\n}\na:hover{\n    text-decoration: none;\n}\n.treeview-menu li\n{\n    margin-left:30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC92aWV3cy92aWV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3ZpZXdzL3ZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59XG4uc3BcbntcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRyZWV2aWV3LW1lbnUgbGlcbntcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/student/views/views.component.ts":
/*!**************************************************!*\
  !*** ./src/app/student/views/views.component.ts ***!
  \**************************************************/
/*! exports provided: ViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function() { return ViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewsComponent = class ViewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-views',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./views.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/views/views.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./views.component.css */ "./src/app/student/views/views.component.css")).default]
    })
], ViewsComponent);



/***/ })

}]);
//# sourceMappingURL=student-student-module-es2015.js.map