// import { useState } from 'react'
import SiswaModel from "./models/SiswaModel.ts"
import Siswa from "./models/Siswa.ts"

const siswaModel = new SiswaModel()
siswaModel.addSiswa(new Siswa(123, "John Doe", "Laki", "XII", "RPL"))
siswaModel.addSiswa(new Siswa(124, "Jane Doe", "Perempuan", "XI", "Boga"))
siswaModel.addSiswa(new Siswa(125, "John Smith", "Laki", "X", "Seni"))
siswaModel.addSiswa(new Siswa(126, "Jane Smith", "Perempuan", "XI", "Busana"))
siswaModel.addSiswa(new Siswa(127, "John Appleseed", "Laki", "XII", "Perhotelan"))

siswaModel.removeSiswa({
  gender: "Perempuan",
})

function App() {
  const siswaArray = siswaModel.getSiswaAll()

  return (
    <>
      <h1>Data Siswa</h1>
      <hr />
      { siswaArray.map((siswa, index) => (
        <div key={index}>
          <h3>Siswa {index + 1}</h3>
          <span>NIS : {siswa.nis}</span><br />
          <span>Nama : {siswa.nama}</span><br />
          <span>Gender : {siswa.gender}</span><br />
          <span>Kelas : {siswa.kelas}</span><br />
          <span>Jurusan : {siswa.jurusan}</span><br />
          <hr />
        </div>
      )) }
    </>
  )
}

export default App
