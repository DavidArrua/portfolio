window.addEventListener("scroll", () => {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky1", window.scrollY > 1);
});

const app = Vue.createApp({
  data() {
    return {
      proyects: [],
      certifications: [],
    };
  },
  created() {
    this.proyects = proyects;
    this.certifications = certifications
  },
  methods: {},
}).mount("#app");
