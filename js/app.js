const tombol = document.querySelectorAll(".header")
const icon = document.querySelectorAll(".icon")
const isi = document.querySelectorAll(".diaktif")

for (let i = 0; i < tombol.length; i++) {
    tombol[i].addEventListener("click", e => {
        tombol[i].closest('.konten_isi_faq').classList.toggle('aktif')
        icon[i].classList.add("icon_aktif")
        for(let j = 0; j < tombol.length; j++) {
            let a = tombol[j].closest('.konten_isi_faq');
            if(a != tombol[i].closest('.konten_isi_faq')) {
              a.classList.remove('aktif');
              icon[j].classList.remove("icon_aktif")
            }
        }
    })
}
