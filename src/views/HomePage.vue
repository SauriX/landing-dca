<template>
  <div>
    <default-layout>
      <hero-component :anchos="ancho"></hero-component>
      <banner-component></banner-component>
      <section id="slider" class="pref">
        <div class="container">
          <slider-component
            :anchos="anchos + 50"
            v-if="pantalla >= 768"
            class="slide"
          ></slider-component>
          <mobileslider-component
            v-if="pantalla < 768"
            class="slide"
          ></mobileslider-component>
        </div>
      </section>
      <banner1-component></banner1-component>
      <preferences-component></preferences-component>
      <clientes-component v-if="pantalla >= 768"></clientes-component>
      <slidercliente-component v-if="pantalla < 768"></slidercliente-component>
      <app-component></app-component>
      <consultores-component></consultores-component>
      <a href="#" class="back-to-top"><i class="fas fa-angle-up"></i></a>
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// Importamos JQuery
const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;
const SliderComponent = () => ({
  component: import(
    /*  webpackChunkName:"slider"*/ "../components/SliderComponent.vue"
  ),
  delay: 300,
  timeout: 3000
});
const MobilesliderComponent = () => ({
  component: import(
    /*  webpackChunkName:"mobileslider"*/ "../components/MobilesliderComponent.vue"
  ),
  delay: 300,
  timeout: 3000
});

const HeroComponent = () => ({
  component: import(
    /*  webpackChunkName:"hero"*/ "../components/HeroComponent.vue"
  ),
  delay: 0,
  timeout: 3000
});

const BannerComponent = () => ({
  component: import(
    /*  webpackChunkName:"banner"*/ "../components/BannerComponent.vue"
  ),
  delay: 100,
  timeout: 3000
});

const Banner1Component = () => ({
  component: import(
    /*  webpackChunkName:"banner"*/ "../components/Banner1Component.vue"
  ),
  delay: 300,
  timeout: 3000
});

const PreferencesComponent = () => ({
  component: import(
    /*  webpackChunkName:"banner1"*/ "../components/PreferencesComponent.vue"
  ),
  delay: 400,
  timeout: 3000
});

const ClientesComponent = () => ({
  component: import(
    /*  webpackChunkName:"clientes"*/ "../components/ClientesComponent.vue"
  ),
  delay: 400,
  timeout: 3000
});

const AppComponent = () => ({
  component: import(
    /*  webpackChunkName:"appcomponent"*/ "../components/AppComponent.vue"
  ),
  delay: 400,
  timeout: 3000
});

const ConsultoresComponent = () => ({
  component: import(
    /*  webpackChunkName:"consul"*/ "../components/ConsultoresComponet.vue"
  ),
  delay: 400,
  timeout: 3000
});

const SliderclienteComponent = () => ({
  component: import(
    /*  webpackChunkName:"slicompo"*/ "../components/SliderclienteComponent"
  ),
  delay: 400,
  timeout: 3000
});
export default {
  name: "HomePage",
  components: {
    DefaultLayout,
    SliderComponent,
    MobilesliderComponent,
    HeroComponent,
    BannerComponent,
    Banner1Component,
    PreferencesComponent,
    ClientesComponent,
    AppComponent,
    ConsultoresComponent,
    SliderclienteComponent
  },
  data() {
    return {
      ancho: 0,
      alto: 0,
      componentKey: 0,
      pantalla: 0,
      anchos: 0
    };
  },
  methods: {
    resize: function() {
      if (window.innerHeight > window.innerWidth) {
        this.ancho = (screen.width / screen.height) * screen.height;
      } else {
        this.alto = screen.height * 0.5;
        this.ancho = screen.width * 0.51;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.resize);
    if (window.innerHeight > window.innerWidth) {
      this.ancho = screen.width * 0.7;

      if (screen.width == 768) {
        this.anchos = this.ancho * 0.6;
      } else {
        this.anchos = this.ancho - 50;
      }
    } else {
      this.ancho = screen.width * 0.48;
      if (screen.width <= 768) {
        this.anchos = this.ancho * 0.6;
      } else {
        this.anchos = this.ancho - 50;
      }
    }
    this.pantalla = screen.width;
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  }
};
// Back to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});

$(".back-to-top").click(function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    1500,
    "easeInOutExpo"
  );
  return false;
});
</script>
