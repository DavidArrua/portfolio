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
        ],
        certifications : [
          {
            'name': "Java",
            'URL' : "https://community.open-bootcamp.com/user/davidarrua/certificaciones/edb2f026-f1f8-4657-996b-64ae80524980"
          },
          {
            'name': "JavaScript",
            'URL' : "https://community.open-bootcamp.com/user/davidarrua/certificaciones/fb244d9b-f6cc-47ea-8e57-d807fdd1e675"
          },
          {
            'name': "MindHub",
            'URL' : "https://www.credly.com/badges/d8eb0d6d-b63f-4d44-ab9e-63ee68f3f9b8/public_url"
          },
          {
            'name': "EDteam",
            'URL' : "https://app.ed.team/u/davidarrua/curso/programacion"
          },
        ]
      }
    },
    created() {



    },
    methods: {

    },
  }).mount('#app');
