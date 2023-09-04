import { Value } from "sass";

export default function Validation(values) {
    const errors = {}

    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.nip === "") {
        errors.nip = "Nip harus di isi !";
    }

    if(values.nama === "") {
        errors.nama = "Nama harus di isi !";
    }

    if(values.golongan === "") {
        errors.golongan = "Golongan harus di isi !";
    }

    if(values.alamat === "") {
        errors.alamat = "Alamat harus di isi !";
    }

    if(values.telp === "") {
        errors.telp = "No Telepon harus di isi !";
    }

    if(values.jabatanId === "") {
        errors.jabatanId = "Jabatan harus di isi !"
    }

    return errors;

    // if(values.email ===  ""){
    //     errors.email = "Email harus di isi";
    // }
    // else if(!email_pattern.test(values.email)) {
    //     errors.email = "Email tidak sesuai"
    // }

}