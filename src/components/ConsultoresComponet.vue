<template>
  <div>
    <section id="consultores" class="top mt-3 mb-3">
      <div class="container">
        <div class="row">
          <div class="col-sm-5 col-md-6 order-sm-2" aling="center">
            <img
              src="@/assets/imagenes/consultores.svg"
              alt="logo"
              style="width: 60%; height: auto;"
              class="centrarCaja"
            />
          </div>
          <div class="col-sm-7 col-md-6 center-text">
            <h2 style="font-weight:bold;">
              TIENES UNA NECESIDAD
              <br />
              NOSOTROS LA SOLUCIÓN
            </h2>
            <p>
              Desarrollamos un producto
              <br />
              beneficioso para tu empresa.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5219992972595&text=Necesito+una+soluciòn+para+mi+empresa"
              class="btn b2"
              target="_blank"
              >Contáctanos</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ConsultoresComponent"
};
</script>
