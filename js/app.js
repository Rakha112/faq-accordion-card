const judul = document.querySelectorAll(".header")
const isi = document.querySelectorAll("p")
const icon = document.querySelectorAll(".icon")
const tombol = document.querySelectorAll("a")
for (let i = 0; i < judul.length; i++) {
    judul[i].addEventListener("click", e => {
        if(isi[i].classList.contains("isi_diaktif")) {
            tombol[i].classList.add("a_aktif")
            icon[i].classList.add("icon_aktif")
            isi[i].classList.add("isi_aktif")
            isi[i].classList.remove("isi_diaktif")
        } else {
            tombol[i].classList.remove("a_aktif")
            icon[i].classList.remove("icon_aktif")
            isi[i].classList.remove("isi_aktif")
            isi[i].classList.add("isi_diaktif")
        }
    })
}

