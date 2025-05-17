"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SiswaModel = /** @class */ (function () {
    function SiswaModel() {
        this.siswaAll = new Array();
    }
    SiswaModel.prototype.getSiswaAll = function () {
        return this.siswaAll;
    };
    SiswaModel.prototype.addSiswa = function (siswa) {
        this.siswaAll.push(siswa);
    };
    SiswaModel.prototype.removeSiswa = function (siswa) {
        var index = this.siswaAll.indexOf(siswa);
        if (index > -1) {
            this.siswaAll.splice(index, 1);
        }
    };
    SiswaModel.prototype.getSiswaBy = function (arg) {
        return this.siswaAll.find(function (siswa) { return siswa === arg; });
    };
    return SiswaModel;
}());
exports.default = SiswaModel;
