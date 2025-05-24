const genderAll: Array<string> = [ "Laki", "Perempuan" ] as const
const kelasAll: Array<string> = [ "X", "XI", "XII" ] as const
const jurusanAll: Array<string> = [
  "RPL",
  "Boga",
  "Seni",
  "Busana",
  "Perhotelan",
  "Pariwisata"
] as const

type Gender = typeof genderAll[number]
type Kelas = typeof kelasAll[number]
type Jurusan = typeof jurusanAll[number]

function isGender(v: string):v is Gender {
  return (genderAll as readonly string[]).includes(v)
}
function isKelas(v: string):v is Kelas {
  return (kelasAll as readonly string[]).includes(v)
}
function isJurusan(v: string):v is Jurusan {
  return (jurusanAll as readonly string[]).includes(v)
}

export default class Siswa {
  private _nis: number
  private _nama: string
  private _gender: Gender
  private _kelas: Kelas
  private _jurusan: Jurusan

  public constructor(nis: number, nama: string, gender: Gender, kelas: Kelas, jurusan: Jurusan) {
    this._nis = nis
    this._nama = nama
    if (isGender(gender)) {
      this._gender = gender
    } else throw new Error(`"${gender}" is not even a gender`)
    if (isKelas(kelas)) {
      this._kelas = kelas
    } else throw new Error(`"${kelas}" is not one of "${(kelasAll as string[]).join('", "')}"`)
    if (isJurusan(jurusan)) {
      this._jurusan = jurusan
    } else throw new Error(`"${jurusan}" is not one of "${(jurusanAll as string[]).join('", "')}"`)
  }

  public set nis(v : number) {
    this._nis = v;
  }
  public get nis() : number {
    return this._nis
  }

  public set nama(v : string) {
    this._nama = v;
  }
  public get nama() : string {
    return this._nama
  }

  public set gender(v : Gender) {
    this._gender = v;
  }
  public get gender() : Gender {
    return this._gender
  }

  public set kelas(v : Kelas) {
    this._kelas = v;
  }
  public get kelas() : Kelas {
    return this._kelas
  }

  public set jurusan(v : Jurusan) {
    this._jurusan = v;
  }
  public get jurusan() : Jurusan {
    return this._jurusan
  }
  
}