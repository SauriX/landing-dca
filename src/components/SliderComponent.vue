<template>
  <div>
    <div class="container sl">
      <div class="row">
        <div class="col-1">
          <div class="col align-self-start">
            <div class="icon" @click="mostrar(0)">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="0"
                class="actives"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span
                class="icon-nomina_Mesa-de-trabajo-1 icono"
                style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
                ><span class="path13"></span><span class="path14"></span
                ><span class="path15"></span><span class="path16"></span
                ><span class="path17"></span><span class="path18"></span
                ><span class="path19"></span><span class="path20"></span
                ><span class="path21"></span><span class="path22"></span
                ><span class="path23"></span><span class="path24"></span
                ><span class="path25"></span><span class="path26"></span
                ><span class="path27"></span><span class="path28"></span
                ><span class="path29"></span><span class="path30"></span
                ><span class="path31"></span><span class="path32"></span
                ><span class="path33"></span><span class="path34"></span
                ><span class="path35"></span
              ></span>
            </div>
          </div>

          <div class="col align-self-start">
            <div class="icon" @click="mostrar(1)">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="1"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span
                class="icon-multiusuario_Mesa-de-trabajo-1 icono"
                style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
                ><span class="path13"></span><span class="path14"></span
                ><span class="path15"></span><span class="path16"></span
              ></span>
            </div>
          </div>

          <div class="col align-self-start">
            <div class="icon" @click="mostrar(2)">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="2"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span
                class="icon-importacion_Mesa-de-trabajo-1 icono"
                style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
                ><span class="path13"></span><span class="path14"></span
                ><span class="path15"></span><span class="path16"></span
              ></span>
            </div>
          </div>
          <div class="col align-self-start">
            <div class="icon" @click="mostrar(3)">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="3"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span
                class="icon-contratos_Mesa-de-trabajo-1 icono"
                style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
                ><span class="path13"></span><span class="path14"></span
                ><span class="path15"></span><span class="path16"></span
                ><span class="path17"></span
              ></span>
            </div>
          </div>

          <div class="col align-self-start" @click="mostrar(4)">
            <div class="icon">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="4"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span class="icon-incidencias-01 icono" style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
                ><span class="path13"></span><span class="path14"></span
                ><span class="path15"></span><span class="path16"></span
                ><span class="path17"></span><span class="path18"></span
                ><span class="path19"></span><span class="path20"></span
                ><span class="path21"></span><span class="path22"></span
                ><span class="path23"></span><span class="path24"></span
              ></span>
            </div>
          </div>
          <div class="col align-self-start" @click="mostrar(5)">
            <div class="icon">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="5"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span class="icon-historial-01 icono" style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
              ></span>
            </div>
          </div>
          <div class="col align-self-start" @click="mostrar(6)">
            <div class="icon">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="6"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span
                class="icon-dispersin-bancaria_Mesa-de-trabajo-1 icono"
                style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
                ><span class="path13"></span><span class="path14"></span
                ><span class="path15"></span><span class="path16"></span
                ><span class="path17"></span
              ></span>
            </div>
          </div>

          <div class="col align-self-start" @click="mostrar(7)">
            <div class="icon">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                style="fill:#ffff99"
                id="7"
              >
                <circle cx="60" cy="60" r="50" />
              </svg>
              <span
                class="icon-app_Mesa-de-trabajo-1 icono"
                style="font-size:50px;"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span><span class="path8"></span
                ><span class="path9"></span><span class="path10"></span
                ><span class="path11"></span><span class="path12"></span
                ><span class="path13"></span><span class="path14"></span
                ><span class="path15"></span><span class="path16"></span
                ><span class="path17"></span><span class="path18"></span
                ><span class="path19"></span><span class="path20"></span
                ><span class="path21"></span><span class="path22"></span
                ><span class="path23"></span><span class="path24"></span
                ><span class="path25"></span><span class="path26"></span
                ><span class="path27"></span><span class="path28"></span
                ><span class="path29"></span><span class="path30"></span
                ><span class="path31"></span><span class="path32"></span
                ><span class="path33"></span><span class="path34"></span
                ><span class="path35"></span><span class="path36"></span
                ><span class="path37"></span><span class="path38"></span
                ><span class="path39"></span><span class="path40"></span
                ><span class="path41"></span><span class="path42"></span
                ><span class="path43"></span><span class="path44"></span
                ><span class="path45"></span><span class="path46"></span
                ><span class="path47"></span><span class="path48"></span
                ><span class="path49"></span><span class="path50"></span
                ><span class="path51"></span><span class="path52"></span
                ><span class="path53"></span><span class="path54"></span
                ><span class="path55"></span><span class="path56"></span
                ><span class="path57"></span><span class="path58"></span
                ><span class="path59"></span><span class="path60"></span
                ><span class="path61"></span><span class="path62"></span
                ><span class="path63"></span><span class="path64"></span
                ><span class="path65"></span><span class="path66"></span
                ><span class="path67"></span><span class="path68"></span
                ><span class="path69"></span><span class="path70"></span
                ><span class="path71"></span><span class="path72"></span
                ><span class="path73"></span><span class="path74"></span
                ><span class="path75"></span><span class="path76"></span
                ><span class="path77"></span
              ></span>
            </div>
          </div>
        </div>
        <div class="col-10" v-if="features[0]">
          <div class="col align-self-start mb-3 ml-3">
            <h2>Nómina masiva o individual</h2>
            <br />
            Calcula y timbra tu nómina de forma individual o masiva ya sea
            semanal, quincenal, mensual u otro, modifica las incidencias a
            última hora sin tener que borrar tu cálculo y al terminar tu primer
            timbrado estarás listo 80% para la siguiente nómina.
          </div>
          <div class="col align-self-start mt-3 fondo">
            <Lottie :options="defaultOptions" :width="anchos" :key="500" />
          </div>
        </div>
        <div class="col-10" v-if="features[1]">
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
        </div>
        <div class="col-10" v-if="features[2]">
          <div class="col align-self-start mb-3  ml-3">
            <h2>Migración e importación</h2>
            <br />
            Migra todas tus empresas con nuestro importador compatible con
            Nomipaq o descarga nuestra plantilla de importación masiva de
            trabajadores y puestos. Importa hasta 2,500 perfiles por carga, todo
            en un formato Excel fácil de llenar.
          </div>
          <div class="col align-self-start mt-3 ">
            <Lottie3 :options="defaultOptions2" :width="anchos" :key="500" />
          </div>
        </div>
        <div class="col-10" v-if="features[3]">
          <div class="col align-self-start mb-3  ml-3">
            <h2>Contratos laborales editables</h2>
            <br />
            Genera todo tipo de contratos laborales con validez legal, fáciles
            de editar y personalizar para tu empresa, con tecnología QR, útiles
            en cualquier giro empresarial.
          </div>
          <div class="col align-self-start mt-3">
            <Lottie4 :options="defaultOptions3" :width="anchos" :key="500" />
          </div>
        </div>
        <div class="col-10" v-if="features[4]">
          <div class="col align-self-start mb-3  ml-3">
            <h2>
              Control de incidencias y notificaciones
            </h2>
            <br />
            Utiliza el módulo de incidencias y obtén un informe en tiempo real
            de faltas, retardos, incapacidad, permisos, prestamos, préstamos
            Infonavit, vacaciones, horas extra y pensiones alimenticias.
          </div>
          <div class="col align-self-start mt-3">
            <Lottie5 :options="defaultOptions4" :width="anchos" :key="500" />
          </div>
        </div>
        <div class="col-10" v-if="features[5]">
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
        </div>
        <div class="col-10" v-if="features[6]">
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
        </div>
        <div class="col-10" v-if="features[7]">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  name: "SliderComponent",
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
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false
      }
    };
  },
  created() {},
  methods: {
    mostrar: function(activar) {
      var boton = document.getElementById(activar);
      for (var i = 0; i <= 9; i++) {
        if (this.features[i]) {
          document.getElementById(i).classList.remove("actives");
          boton.classList.add("actives");
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

<style>
.actives {
  fill: #6f7bef !important;
}
</style>
