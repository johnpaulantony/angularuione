(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/models/issue.ts":
/*!*********************************!*\
  !*** ./src/app/models/issue.ts ***!
  \*********************************/
/*! exports provided: Issue, Qualification, Studentpersonaldetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function() { return Issue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qualification", function() { return Qualification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Studentpersonaldetails", function() { return Studentpersonaldetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Issue {
}
class Qualification {
}
class Studentpersonaldetails {
}


/***/ }),

/***/ "./src/app/traineeservice.service.ts":
/*!*******************************************!*\
  !*** ./src/app/traineeservice.service.ts ***!
  \*******************************************/
/*! exports provided: TraineeserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineeserviceService", function() { return TraineeserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TraineeserviceService = class TraineeserviceService {
    constructor(http) {
        this.http = http;
        this.Url = 'http://192.168.6.25:8080/smi';
    }
    getCourseDetails() {
        return this.http.get(this.Url + "/get");
    }
    getSubjectDetails() {
        return this.http.get(this.Url + "/getsubject");
    }
    getTopicDetails() {
        return this.http.get(this.Url + "/gettopic");
    }
    save(course) {
        return this.http.post(this.Url + "/insert", course);
    }
    saveTopic(course) {
        return this.http.post(this.Url + "/inserttopic", course);
    }
    saveSubject(course) {
        console.log(course);
        return this.http.post(this.Url + "/insertsubject", course);
    }
    getCourseSubject(course) {
        return this.http.get(this.Url + "/getsubjectoncourse?courseId=" + course);
    }
    saveBatch(course) {
        console.log(course.batchName);
        return this.http.post(this.Url + "/insertbatch", course);
    }
    getstudent() {
        return this.http.get(this.Url + "/get");
    }
    getstudentpd() {
        return this.http.get(this.Url + "/get");
    }
    getamenities() {
        return this.http.get(this.Url + "/get");
    }
    saveamenities(amenities) {
        return this.http.post(this.Url + "/insertstudentacademic", amenities);
    }
    gettrainer() {
        return this.http.get(this.Url + "/gettrainer");
    }
    savetrainer(trainer) {
        return this.http.post(this.Url + "/inserttrainers", trainer);
    }
    savestudent(student) {
        console.log("Result " + student.statusDetails);
        return this.http.post(this.Url + "/insertstudent", student);
    }
    savestudentpd(studentpd) {
        return this.http.post(this.Url + "/insertstudentpersonal", studentpd);
    }
};
TraineeserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TraineeserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TraineeserviceService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map