window.addEventListener("scroll", ()=> {
  var nav = document.querySelector("nav")
  nav.classList.toggle("sticky1", window.scrollY > 1)
})


const app = Vue.
  createApp({
    data() {
      return {
        proyects : [
          {
            'name':"Home banking",
            'img' : "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl",
            'technologies' : ["Java", "Spring", "JavaScript", "Vue.js", "CSS", "Boostrap 5", "HTML", "Axios"],
            'description' : "aasdfasdfadf"
          },
          {
            'name':"Orpheus - Vinyls Eccomerce",
            'img' : "https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg",
            'technologies' : ["Java", "Spring", "JavaScript", "Vue.js", "CSS", "Boostrap 5", "HTML", "Axios"],
            'description' : "aasdfasdfadf"
          },
          {
            'name':"Fraco - Petshop",
            'img' : "https://nokal-petshop.com/media/wysiwyg/SLIDERS-SITIO-WEB-NOKAL-PETSHOP-RESPONSIVE-PERROS.jpg",
            'technologies' : ["JavaScript", "Vue.js", "CSS", "Boostrap 5", "HTML", "Axios"],
            'description' : "aasdfasdfadf"
          },
          {
            'name':"Amazing Events",
            'img' : "https://www.vittoriaballoons.com/assets/img/slider/fullsizeoutput_178.jpg",
            'technologies' : ["JavaScript", "Vue.js", "CSS", "Boostrap 5", "HTML", "Axios"],
            'description' : "aasdfasdfadf"
          }
        ]
      }
    },
    created() {



    },
    methods: {

    },
  }).mount('#app');
