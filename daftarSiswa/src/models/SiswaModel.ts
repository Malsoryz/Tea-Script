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
    const index = this.siswaAll.findIndex((siswa) => {
      return Object.entries(arg).every(([key, value]) => {
        return siswa[key as keyof Siswa] === value
      })
    })
    if (index !== -1) {
      this.siswaAll.splice(index, 1)
    }
  }
  public getSiswaBy(arg: Partial<Siswa>): Siswa | undefined {
    return this.siswaAll.find((siswa) => {
      return Object.entries(arg).every(([key, value]) => {
        return siswa[key as keyof Siswa] === value
      })
    })
  }
}