import { useState, useEffect } from 'react'
import Siswa from './Siswa.ts'

export default function App() {
  const [ listSiswa, setListSiswa ] = useState<Array<Siswa>>([])
  
  return (
    <>
      <Modal />
      <div className="overflow-x-auto">
        <table className="table table-xs table-zebra">
          <thead>
            <tr>
              <th>No.</th>
              <th>NIS</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Kelas</th>
              <th>Jurusan</th>
            </tr>
          </thead>
          <tbody>
            {listSiswa.map((siswa, index) => (
            <tr>
              <td>{ index + 1 }</td>
              <td>{ siswa.nis }</td>
              <td>{ siswa.nama }</td>
              <td>{ siswa.gender }</td>
              <td>{ siswa.kelas }</td>
              <td>{ siswa.jurusan }</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function Modal() {
  return (
    <>
      <button className="btn btn-soft btn-primary" onClick={
        () => document.getElementById('insert-modal').showModal()
      }>Tambah</button>
      <dialog id="insert-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tambah data baru</h3>
          <form>
            <input type="number" placeholder="NIS" className="input"/>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}