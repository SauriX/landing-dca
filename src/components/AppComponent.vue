<template>
  <div>
    <section id="app" class="mt-3 top" v-if="true">
      <div class="container justify-content-center">
        <div class="row justify-content-center">
          <div class="col-sm" aling="center">
            <img
              src="@/assets/imagenes/clock.svg"
              alt="reloj"
              width="80%"
              class="centrarCaja"
            />
          </div>
          <div class="col-sm-6 ml-3">
            <div class="d-block d-sm-none d-md-none d-lg-none">
              <br />
            </div>
            <h2 style="color: #222256; font-weight:bold;">
              Descarga la aplicación móvil
              <span style="color: #c0bcd5;">ACD Cheker</span>
              para Android y Windows
            </h2>
            <p class="mt-3">
              Nuestra aplicación disponible para tus empleados en Android y
              Windows, empieza ya a utilizarla y experimenta checar en tiempo
              real.
            </p>
            <div class="row tiendas mt-3" align="center">
              <div class="col-6 mt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.acdqrtimechecker.app"
                >
                  <img
                    src="@/assets/imagenes/google.svg"
                    alt="google play"
                    style="float:right; width:60%;"
                    class="store"
                  />
                </a>
              </div>
              <div class="col-6 mt-3">
                <a
                  href="https://app.acdnomina.com.mx/downloads/QRTimeDesktop/Installer_1.0.3.exe"
                >
                  <img
                    src="@/assets/imagenes/windows.svg"
                    alt="windows download"
                    style="float:left; width:60%;"
                    class="store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "AppComponent"
};
</script>
