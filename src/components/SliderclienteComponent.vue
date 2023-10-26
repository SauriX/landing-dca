<template>
  <div>
    <section
      id="clientes"
      class="top"
      style="padding-top:70px;"
      :autoplay="true"
      :nav="false"
    >
      <div class="container">
        <carousel :nav="false" :autoplay="true">
          <img
            src="@/assets/imagenes/LOGOS/pepe.svg"
            alt="tortilleria pepe's"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/ficorma.svg"
            alt="focorma"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/maclerk.svg"
            alt="maclerk"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/canaco.svg"
            alt="canaco"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/gn.svg"
            alt="gestion empresarial de la nueva españa"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/felipe_carrillo.svg"
            alt="instituto tecnologico de carrillo puerto"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/nomit.svg"
            alt="nomit"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/imee.svg"
            alt="imee"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/e3c.svg"
            alt="e3c"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/store.svg"
            alt="store center"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/seinqroo.svg"
            alt="seinqroo"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/becarisma.svg"
            alt="becarisma"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/adIA.svg"
            alt="adia"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/CAMPESTRE.svg"
            alt="adia"
            class="gris im"
          />

          <img
            src="@/assets/imagenes/LOGOS/la-playa.svg"
            alt="adia"
            class="gris im"
          />
        </carousel>
      </div>
    </section>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  name: "SliderclienteComponent",
  components: { carousel }
};
</script>
