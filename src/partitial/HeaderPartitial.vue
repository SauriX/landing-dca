<template>
  <div>
    <header>
      <nav
        class="navbar navbar-expand-lg navbar-light "
        data-toggle="sticky-onscroll"
      >
        <a class="navbar-brand" href="/">
          <img
            src="@/assets/imagenes/ACD HORIZONTAL BLANCO.svg"
            width="200"
            height="40"
            class="d-inline-block align-top"
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a
                :class="
                  ruta == '/' ? 'nav-link blanco a active' : 'nav-link blanco a'
                "
                href="/"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a
                :class="
                  ruta == '/Planes'
                    ? 'nav-link blanco a active'
                    : 'nav-link blanco a'
                "
                href="/Planes"
                >Planes</a
              >
            </li>
            <li class="nav-item">
              <a
                :class="
                  ruta == '/Contacto'
                    ? 'nav-link blanco a active'
                    : 'nav-link blanco a'
                "
                href="/Contacto"
                >Contáctanos</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link blanco a"
                href="https://app.acdnomina.com.mx/e-portal/reloj_checador"
                >E-portal</a
              >
            </li>
          </ul>
          <form class="form-inline">
            <a
              class="btn btn-iniciar"
              href="https://app.acdnomina.com.mx/login"
              style="font-weight: bolder !important"
            >
              Iniciar Sesíon
            </a>
            <a
              class="btn btn-crear  ml-2"
              type="button"
              href="https://app.acdnomina.com.mx/register/email-register"
              style="font-weight: bolder !important"
            >
              Crear Cuenta
            </a>
          </form>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
// Importamos JQuery
const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;
export default {
  name: "HeaderPartitial",
  created() {
    $(document).ready(function() {
      // Custom function which toggles between sticky class (is-sticky)
      var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
        } else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height("auto");
        }
      };

      // Find all data-toggle="sticky-onscroll" elements
      $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $("<div>").addClass("sticky-wrapper"); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass("sticky");

        // Scroll & resize events
        $(window).on(
          "scroll.sticky-onscroll resize.sticky-onscroll",
          function() {
            stickyToggle(sticky, stickyWrapper, $(this));
          }
        );

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
      });
    });
  },
  computed: {
    ruta() {
      return this.$router.currentRoute.path;
    }
  }
};
</script>
<style>
/*sticky header position*/
.sticky.is-sticky {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
}
nav {
  background: #323387;
}
.blanco {
  color: white !important;
  font-weight: bolder !important;
}
.a {
  text-decoration: none;
  background-image: linear-gradient(#02d7db, currentColor);
  background-position: 20% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
}

.a:hover,
.a:focus {
  background-size: 90% 2px;
}

.active {
  background-size: 90% 2px;
}

.btn-iniciar {
  color: white !important;
  border-radius: 40px !important;
  border: 1px solid #02d7db !important;
}
.btn-crear {
  color: white !important;
  border-radius: 40px !important;
  border: 1px solid #02d7db !important;
  background-color: #02d7db !important;
}
</style>
