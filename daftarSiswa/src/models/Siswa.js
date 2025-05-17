"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genderAll = ["Laki", "Perempuan"];
var kelasAll = ["X", "XI", "XII"];
var jurusanAll = [
    "RPL",
    "Boga",
    "Seni",
    "Busana",
    "Perhotelan",
    "Pariwisata"
];
function isGender(v) {
    return genderAll.includes(v);
}
function isKelas(v) {
    return kelasAll.includes(v);
}
function isJurusan(v) {
    return jurusanAll.includes(v);
}
var Siswa = /** @class */ (function () {
    function Siswa(nis, nama, gender, kelas, jurusan) {
        this._nis = nis;
        this._nama = nama;
        if (isGender(gender)) {
            this._gender = gender;
        }
        else
            throw new Error("\"".concat(gender, "\" is not even a gender"));
        if (isKelas(kelas)) {
            this._kelas = kelas;
        }
        else
            throw new Error("\"".concat(kelas, "\" is not one of \"").concat(kelasAll.join('", "'), "\""));
        if (isJurusan(jurusan)) {
            this._jurusan = jurusan;
        }
        else
            throw new Error("\"".concat(jurusan, "\" is not one of \"").concat(jurusanAll.join('", "'), "\""));
    }
    Object.defineProperty(Siswa.prototype, "nis", {
        get: function () {
            return this._nis;
        },
        set: function (v) {
            this._nis = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Siswa.prototype, "nama", {
        get: function () {
            return this._nama;
        },
        set: function (v) {
            this._nama = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Siswa.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (v) {
            this._gender = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Siswa.prototype, "kelas", {
        get: function () {
            return this._kelas;
        },
        set: function (v) {
            this._kelas = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Siswa.prototype, "jurusan", {
        get: function () {
            return this._jurusan;
        },
        set: function (v) {
            this._jurusan = v;
        },
        enumerable: false,
        configurable: true
    });
    return Siswa;
}());
exports.default = Siswa;
