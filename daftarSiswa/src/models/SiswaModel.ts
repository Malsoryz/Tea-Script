import Siswa from "./Siswa";

type ModelData = Array<Siswa>

export default class SiswaModel {
  private siswaAll: ModelData

  public constructor() {
    this.siswaAll = []
  }

  public getAll(): ModelData {
    return this.siswaAll
  }
}