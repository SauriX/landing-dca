<template>
  <div>
    <section class="hero fondo1">
      <div v-lazy-container class="container">
        <div align="center">
          <Lottie :options="defaultOptions" :width="anchos" :key="500" />
        </div>
        <div class="row justify-content-center">
          <div class="col-md-5 col-sm-12 col-12">
            <p class="text-center text-hero">
              Con <span class="nombre-acd">ACD Nómina</span> optimiza el control
              fiscal, administrativo y legal de tu nomina
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-sm-5">
            <img src="@/assets/imagenes/LOGOS.svg" alt="lgos" class="patro" />
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <a
            href="https://app.acdnomina.com.mx/login"
            target="_blank"
            class="btn mr-3 iniciar"
            >Iniciar sesión</a
          >
          <a
            href="https://api.whatsapp.com/send/?phone=5219992972595&text=Deseo+agendar+una+cita"
            class="btn crear"
            target="_blank"
            >Agenda tu cita</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "@/assets/animacion/inicio.json";
export default {
  name: "HeroComponet",
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default
      }
    };
  },
  props: {
    anchos: Number
  }
};
</script>
