<template>
  <div>
    <default-layout>
      <div class="container">
        <div class="section-title">
          <h2>Contáctanos</h2>
        </div>
        <div class="row">
          <div class="col-md-6 order-md-2">
            <img
              src="@/assets/imagenes/about.jpg"
              alt="imaen"
              style="width:100%;"
            />
          </div>
          <div class="col-md-6">
            <div id="hubspotForm"></div>
          </div>
        </div>
      </div>
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
export default {
  name: "ContactoPage",
  components: {
    DefaultLayout
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7986880",
          formId: "665f255b-c611-4ed1-9a43-0c210e34130f",
          target: "#hubspotForm"
        });
      }
    });
  }
};
</script>
