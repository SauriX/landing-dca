<template>
  <div>
    <default-layout>
      <div class="container text-center">
        <div class="row">
          <div class="col-3 d-none d-sm-none d-md-none d-lg-block">
            <img src="@/assets/imagenes/palmerita.svg" alt="" class="planta" />
          </div>
          <div class="col">
            <img src="@/assets/imagenes/precios.svg" alt="" class="prices" />
          </div>
        </div>
      </div>
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
export default {
  name: "ComparaPage",
  components: {
    DefaultLayout
  }
};
</script>
<style>
@media (min-width: 768px) {
  .prices {
    position: relative;
    right: 20px;
    width: 60%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .t {
    padding-top: 30px;
  }

  .planta {
    position: relative;
    top: 140px;
    width: 150%;
  }
  .prices {
    width: 70%;
  }
}
</style>
