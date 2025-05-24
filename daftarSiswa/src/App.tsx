import React, { useState, useRef } from 'react'
import Siswa, { listGender, listKelas, listJurusan } from './Siswa.ts'

export default function App() {
  const [ listSiswa, setListSiswa ] = useState<Array<Siswa>>([])

  // Modal handling
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openModal: () => void = () => dialogRef.current?.showModal()

  // Form handling
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      nis: { value: string },
      nama: { value: string },
      'jenis-kelamin': { value: string },
      kelas: { value: string },
      jurusan: { value: string }
    }
    setListSiswa([
      ...listSiswa,
      new Siswa(
        parseInt(target.nis.value),
        target.nama.value,
        target['jenis-kelamin'].value,
        target.kelas.value,
        target.jurusan.value
      )
    ])
    alert(`Berhasil menambahkan siswa baru: ${target.nama.value}`)
    formRef.current?.reset() // Reset the form
    dialogRef.current?.close() // Close the modal
  }

  return (
    <>
      <div> {/* Header */ }
        <button className="btn btn-soft btn-primary" onClick={openModal}>Tambah</button>
      </div>

      <dialog ref={dialogRef} id="insert-modal" className="modal">
        <div className="modal-box">
          {/* Close button */ }
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          {/* Modal content */ }
          <h3 className="font-bold text-lg w-full text-center">Tambah data baru</h3><br />
          <form ref={formRef} onSubmit={handleSubmit}>
            <fieldset className="fieldset"> {/* Input NIS */ }
              <legend className="fieldset-legend font-bold">NIS</legend>
              <input type="number" name="nis" placeholder="NIS" className="input w-full"/>
            </fieldset>
            <fieldset className="fieldset"> {/* Input Nama */ }
              <legend className="fieldset-legend font-bold">Nama</legend>
              <input type="text" name="nama" placeholder="Nama" className="input w-full"/>
            </fieldset>
            <fieldset className="fieldset"> {/* Input Jenis Kelamin */ }
              <legend className="fieldset-legend font-bold">Jenis Kelamin</legend>
              {listGender.map(gender => (
                <label key={gender}>
                  <input type="radio" name="jenis-kelamin" className="radio radio-sm radio-info" value={gender} />
                  <span className="mx-2">{gender}</span>
                </label>
              ))}
            </fieldset>
            <div className="flex"> {/* Input Kelas dan Jurusan */ }
              <fieldset className="fieldset w-full flex-1/3"> {/* Input Kelas */ }
                <legend className="fieldset-legend font-bold">Kelas</legend>
                <select name="kelas" className="select">
                  <option selected>Pilih kelas</option>
                  {listKelas.map(kelas => (
                    <option value={kelas} key={kelas}>{kelas}</option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset w-full ml-2 flex-2/3"> {/* Input Jurusan */ }
                <legend className="fieldset-legend font-bold">Jurusan</legend>
                <select name="jurusan" className="select">
                  <option selected>Pilih jurusan</option>
                  {listJurusan.map(jurusan => (
                    <option value={jurusan} key={jurusan}>{jurusan}</option>
                  ))}
                </select>
              </fieldset>
            </div><br />
            <button type="submit" className="btn btn-primary btn-block">Tambahkan</button>
          </form>
        </div>
      </dialog>

      {/* Table of Siswa */ }
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
            <tr key={index}>
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