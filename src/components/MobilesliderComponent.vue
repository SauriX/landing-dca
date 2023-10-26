<template>
  <div>
    <splide :options="options">
      <splide-slide>
        <div class="col align-self-start mb-3 ml-3">
          <h2>Nómina masiva o individual</h2>
          <br />
          Calcula y timbra tu nómina de forma individual o masiva ya sea
          semanal, quincenal, mensual u otro, modifica las incidencias a última
          hora sin tener que borrar tu cálculo y al terminar tu primer timbrado
          estarás listo 80% para la siguiente nómina.
        </div>
        <div class="col align-self-start mt-3 fondo">
          <Lottie :options="defaultOptions" :width="anchos" :key="500" />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="col align-self-start mb-3  ml-3">
          <h2>Multiusuario y multiempresa</h2>
          <br />
          Controla todas tus empresas, sucursales, colaboradores de nómina y
          trabajadores, gestionando los permisos y movimientos que realicen
          todos tus usuarios por medio de una bitácora, sin necesidad de pagar
          por licencias extras.
        </div>
        <div class="col align-self-start mt-3">
          <Lottie2 :options="defaultOptions1" :width="anchos" :key="500" />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="col align-self-start mb-3  ml-3">
          <h2>Migración e importación</h2>
          <br />
          Migra todas tus empresas con nuestro importador compatible con Nomipaq
          o descarga nuestra plantilla de importación masiva de trabajadores y
          puestos. Importa hasta 2,500 perfiles por carga, todo en un formato
          Excel fácil de llenar.
        </div>
        <div class="col align-self-start mt-3 ">
          <Lottie3 :options="defaultOptions2" :width="anchos" :key="500" />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="col align-self-start mb-3  ml-3">
          <h2>Contratos laborales editables</h2>
          <br />
          Genera todo tipo de contratos laborales con validez legal, fáciles de
          editar y personalizar para tu empresa, con tecnología QR, útiles en
          cualquier giro empresarial.
        </div>
        <div class="col align-self-start mt-3">
          <Lottie4 :options="defaultOptions3" :width="anchos" :key="500" />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="col align-self-start mb-3  ml-3">
          <h2>
            Control de incidencias y notificaciones
          </h2>
          <br />
          Utiliza el módulo de incidencias y obtén un informe en tiempo real de
          faltas, retardos, incapacidad, permisos, prestamos, préstamos
          Infonavit, vacaciones, horas extra y pensiones alimenticias.
        </div>
        <div class="col align-self-start mt-3">
          <Lottie5 :options="defaultOptions4" :width="anchos" :key="500" />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="col align-self-start mb-3  ml-3">
          <h2>Historial y expediente digital</h2>
          <br />
          Conoce el historial de tu empleado desde su ingreso a la empresa,
          puestos, actas administrativas, vacaciones y todos sus movimientos
          dentro del sistema. Información siempre actualizada y disponible en
          todo momento de manera digital.
        </div>
        <div class="col align-self-start mt-3">
          <Lottie6 :options="defaultOptions5" :width="anchos" :key="500" />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="col align-self-start mb-3  ml-3">
          <h2>Dispersión bancaria y otros métodos</h2>
          <br />
          Genera la dispersión de tu nómina de una forma eficaz, rápida y
          sencilla, ya sea masiva o individual con diferentes bancos del país.
          Genera recibos individuales para pago en efectivo de tu personal y
          envía tus CFDI’s de forma fácil y rápida.
        </div>
        <div class="col align-self-start mt-3">
          <Lottie7 :options="defaultOptions6" :width="anchos" :key="500" />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="col align-self-start mb-3  ml-3">
          <h2>App reloj checadorintegrada con la nomina</h2>
          <br />
          Registra asistencia en tiempo real sin necesidad de un equipo
          especializado, a través de credenciales QR en nuestras aplicaciones
          para escritorio o móvil
        </div>
        <div class="col align-self-start mt-3">
          <Lottie8 :options="defaultOptions7" :width="anchos" :key="500" />
        </div>
      </splide-slide>
    </splide>
  </div>
</template>
<script>
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Lottie from "vue-lottie/src/lottie.vue";
import Lottie2 from "vue-lottie/src/lottie.vue";
import Lottie3 from "vue-lottie/src/lottie.vue";
import Lottie4 from "vue-lottie/src/lottie.vue";
import Lottie5 from "vue-lottie/src/lottie.vue";
import Lottie6 from "vue-lottie/src/lottie.vue";
import Lottie7 from "vue-lottie/src/lottie.vue";
import Lottie8 from "vue-lottie/src/lottie.vue";
import * as animationData from "@/assets/animacion/5.json";
import * as animationData1 from "@/assets/animacion/1.json";
import * as animationData2 from "@/assets/animacion/7.json";
import * as animationData3 from "@/assets/animacion/4.json";
import * as animationData4 from "@/assets/animacion/6.json";
import * as animationData5 from "@/assets/animacion/3.json";
import * as animationData6 from "@/assets/animacion/2.json";
import * as animationData7 from "@/assets/animacion/8.json";
export default {
  name: "MobilesliderComponent",
  components: {
    Lottie,
    Lottie2,
    Lottie3,
    Lottie4,
    Lottie5,
    Lottie6,
    Lottie7,
    Lottie8
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default
      },
      defaultOptions1: {
        animationData: animationData1.default
      },
      defaultOptions2: {
        animationData: animationData2.default
      },
      defaultOptions3: {
        animationData: animationData3.default
      },
      defaultOptions4: {
        animationData: animationData4.default
      },
      defaultOptions5: {
        animationData: animationData5.default
      },
      defaultOptions6: {
        animationData: animationData6.default
      },
      defaultOptions7: {
        animationData: animationData7.default
      },
      features: {
        0: true,
        1: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
      },
      options: {
        rewind: true,
        perPage: 1,
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        arrows: false
      }
    };
  },
  created() {},
  methods: {
    mostrar: function(activar) {
      for (var i = 0; i <= 9; i++) {
        if (this.features[i]) {
          this.features[i] = false;
          this.features[activar] = true;
        }
      }
    }
  },
  props: {
    anchos: Number
  }
};
</script>
