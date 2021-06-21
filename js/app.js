const tombol = document.querySelectorAll(".header")
const icon = document.querySelectorAll(".icon")
const isi = document.querySelectorAll(".diaktif")
const judul = document.querySelectorAll("a")
for (let i = 0; i < tombol.length; i++) {
    tombol[i].addEventListener("click", e => {
        tombol[i].closest('.konten_isi_faq').classList.toggle('aktif')
        icon[i].classList.toggle("icon_aktif")
        judul[i].classList.toggle("a_aktif")
        for(let j = 0; j < tombol.length; j++) {
            let a = tombol[j].closest('.konten_isi_faq');
            if(a != tombol[i].closest('.konten_isi_faq')) {
              a.classList.remove('aktif');
              icon[j].classList.remove("icon_aktif")
              judul[j].classList.remove("a_aktif")
            }
        }
    })
}
