(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./src/app/models/issue.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/issue.ts ***!
          \*********************************/
        /*! exports provided: Issue, Qualification, Studentpersonaldetails */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function () { return Issue; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qualification", function () { return Qualification; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Studentpersonaldetails", function () { return Studentpersonaldetails; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Issue = /** @class */ (function () {
                function Issue() {
                }
                return Issue;
            }());
            var Qualification = /** @class */ (function () {
                function Qualification() {
                }
                return Qualification;
            }());
            var Studentpersonaldetails = /** @class */ (function () {
                function Studentpersonaldetails() {
                }
                return Studentpersonaldetails;
            }());
            /***/ 
        }),
        /***/ "./src/app/traineeservice.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/traineeservice.service.ts ***!
          \*******************************************/
        /*! exports provided: TraineeserviceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineeserviceService", function () { return TraineeserviceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TraineeserviceService = /** @class */ (function () {
                function TraineeserviceService(http) {
                    this.http = http;
                    this.Url = 'http://192.168.6.25:8080/smi';
                }
                TraineeserviceService.prototype.getCourseDetails = function () {
                    return this.http.get(this.Url + "/get");
                };
                TraineeserviceService.prototype.getSubjectDetails = function () {
                    return this.http.get(this.Url + "/getsubject");
                };
                TraineeserviceService.prototype.getTopicDetails = function () {
                    return this.http.get(this.Url + "/gettopic");
                };
                TraineeserviceService.prototype.save = function (course) {
                    return this.http.post(this.Url + "/insert", course);
                };
                TraineeserviceService.prototype.saveTopic = function (course) {
                    return this.http.post(this.Url + "/inserttopic", course);
                };
                TraineeserviceService.prototype.saveSubject = function (course) {
                    console.log(course);
                    return this.http.post(this.Url + "/insertsubject", course);
                };
                TraineeserviceService.prototype.getCourseSubject = function (course) {
                    return this.http.get(this.Url + "/getsubjectoncourse?courseId=" + course);
                };
                TraineeserviceService.prototype.saveBatch = function (course) {
                    console.log(course.batchName);
                    return this.http.post(this.Url + "/insertbatch", course);
                };
                TraineeserviceService.prototype.getstudent = function () {
                    return this.http.get(this.Url + "/get");
                };
                TraineeserviceService.prototype.getstudentpd = function () {
                    return this.http.get(this.Url + "/get");
                };
                TraineeserviceService.prototype.getamenities = function () {
                    return this.http.get(this.Url + "/get");
                };
                TraineeserviceService.prototype.saveamenities = function (amenities) {
                    return this.http.post(this.Url + "/insertstudentacademic", amenities);
                };
                TraineeserviceService.prototype.gettrainer = function () {
                    return this.http.get(this.Url + "/gettrainer");
                };
                TraineeserviceService.prototype.savetrainer = function (trainer) {
                    return this.http.post(this.Url + "/inserttrainers", trainer);
                };
                TraineeserviceService.prototype.savestudent = function (student) {
                    console.log("Result " + student.statusDetails);
                    return this.http.post(this.Url + "/insertstudent", student);
                };
                TraineeserviceService.prototype.savestudentpd = function (studentpd) {
                    return this.http.post(this.Url + "/insertstudentpersonal", studentpd);
                };
                return TraineeserviceService;
            }());
            TraineeserviceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TraineeserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TraineeserviceService);
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map