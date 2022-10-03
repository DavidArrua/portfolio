const app = Vue.
  createApp({
    data() {
      return {
        proyects : [
          {
            'name':"Home banking",
            'img' : "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl",
            'technologies' : ["Java", "Spring", "JavaScript", "Vue.js", "CSS", "Boostrap 5", "HTML", "Axios"],
          },
          {
            'name':"Orpheus - Vinyls Eccomerce",
            'img' : "https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg",
            'technologies' : ["Java", "Spring", "JavaScript", "Vue.js", "CSS", "Boostrap 5", "HTML", "Axios"],
          },
          {
            'name':"Fraco - Petshop",
            'img' : "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpe",
            'technologies' : ["Java", "Spring", "JavaScript", "Vue.js", "CSS", "Boostrap 5", "HTML", "Axios"],
          }
        ]
      }
    },
    created() {



    },
    methods: {

    },
  }).mount('#app');
