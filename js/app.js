const tombol = document.querySelectorAll(".header")
const icon = document.querySelectorAll(".icon")
const isi = document.querySelectorAll(".diaktif")

// for (let i = 0; i < tombol.length; i++) {
//     tombol[i].addEventListener("click", e => {
//         isi[i].classList.toggle("diaktif")
//         isi[i].classList.toggle("aktif")
//         icon[i].classList.toggle("icon_aktif")
//     })
// }


tombol.forEach(button => {
  button.addEventListener('click',function(e) {
    button.closest('.konten_isi_faq').classList.toggle('aktif');
    tombol.forEach(one => {
      let question = one.closest('.konten_isi_faq');
      if(question != button.closest('.konten_isi_faq')) {
        question.classList.remove('aktif');
      }
    })
    
  })
})