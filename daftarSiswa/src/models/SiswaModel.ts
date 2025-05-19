import Siswa from "./Siswa.ts";

type ModelData = Array<Siswa>

export default class SiswaModel {
  private siswaAll: ModelData

  public constructor() {
    this.siswaAll = new Array<Siswa>()
  }

  public getSiswaAll(): ModelData {
    return this.siswaAll
  }
  
  public addSiswa(siswa: Siswa): void {
    this.siswaAll.push(siswa)
  }
  
  public removeSiswa(arg: Partial<Siswa>): void {
    const matchIndex: Array<number> = new Array<number>()
    for (const [index, siswa] of this.siswaAll.entries()) {
      const isMatch = Object.entries(arg).every(([key, value]) => {
        return siswa[key as keyof Siswa] === value
      })
      if (isMatch) {
        matchIndex.push(index)
      }
    }
    for (const index of matchIndex.reverse()) {
      this.siswaAll.splice(index, 1)
    }
  }
  
  public getSiswaBy(arg: Partial<Siswa>): Array<Siswa> {
    const matchArg: Array<Siswa> = new Array<Siswa>()
    for (const siswa of this.siswaAll) {
      const isMatch = Object.entries(arg).every(([key, value]) => {
        return siswa[key as keyof Siswa] === value
      })
      if (isMatch) {
        matchArg.push(siswa)
      }
    }
    return matchArg
  }
}