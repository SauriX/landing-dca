<template>
  <div>
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container mt-3">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <a href="/" class="logo mr-auto d-none d-sm-none d-md-block"
                ><img
                  src="@/assets/imagenes/ACD HORIZONTAL BLANCO.svg"
                  style="width: 300px; height: 55px;"
                  alt="logo de la empresa"
                  class="img-fluid"
              /></a>
              <br />
              <p>
                AV. FRANCISCO I. MADERO <br />
                241 L-11 M-21 <br />
                Chetumal <br />
                <strong>Telefono:</strong>
                <a style="color: white;" href="tel:+52 999 297 2595"
                  >+52 999-297-2595</a
                ><br />
                <strong>Correo:</strong
                ><a style="color: white;" href="mailto: contacto@acdnomina.com">
                  contacto@acdnomina.com</a
                ><br />
              </p>
            </div>

            <div
              class="col-lg-3 col-md-6 footer-links d-none d-sm-done d-lg-block"
              style="visibility: hidden;"
            >
              <h4></h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
              </ul>
            </div>

            <div
              class="col-lg-3 col-md-6 footer-links d-none d-sm-done d-lg-block"
              style="visibility: hidden;"
            >
              <h4></h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 footer-links">
              <h4 style="color:white;">Enlaces de utilidad</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="/">Inicio</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i
                  ><a href="/Contacto">Contáctanos</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/Avisodeprivacidad">Aviso de privacidad</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/Terminosycondiciones">Términos y condiciones</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright-wrap d-md-flex py-4">
          <div class="mr-md-auto text-center text-md-left">
            <div class="copyright">
              &copy; Copyright <strong><span>ACD Nómina</span></strong
              >. All Rights Reserved
            </div>
            <div class="credits"></div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a
              aria-label="Cumple la NOM 035."
              href="https://twitter.com/acdnomina"
              class="twitter"
              target="_blank"
              ><span class="icon-twitter"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span></span
            ></a>
            <a
              aria-label="Cumple la NOM 035."
              href="https://www.facebook.com/ACDSolutionsNomina/"
              class="facebook"
              target="_blank"
              ><span class="icon-facebook"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span></span
            ></a>
            <a
              aria-label="Cumple la NOM 035."
              href="https://www.instagram.com/acdnomina/"
              class="instagram"
              target="_blank"
              ><span class="icon-instagram"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span></span
            ></a>
            <a
              href="https://www.youtube.com/channel/UCJq_yLgggq99-UerIqEDFDA"
              class="google-plus"
              target="_blank"
              ><span class="icon-youtube"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span></span
            ></a>
            <a
              href="https://api.whatsapp.com/send/?phone=52 19992972595&text=Deseo+agendar+una+cita+en+zoom"
              class="linkedin"
              target="_blank"
            >
              <span class="icon-zoom"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span></span
            ></a>
            <!--
              
              <a href="#" class="linkedin"><i class="icon-linkedin"></i></a>
              <a href="#" class="linkedin"><i class="icon-whatsapp"></i></a>
              <a href="#" class="linkedin"><i class="icon-whatsappB"></i></a>
              <a href="#" class="linkedin"><i class="icon-youtube"></i></a>
            -->
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>
<script>
export default {
  name: "FooterPartitial"
};
</script>

<style>
footer {
  background: #323387;
  color: white;
}
.footer {
  width: 100%;
  min-height: 100px;
}

#footer .footer-top {
  padding: 60px 0 30px 0;
  position: relative;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact h3 {
  font-size: 28px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 500;
}

#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #fff;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  text-decoration: underline;
  color: #fff;
}

#footer .footer-newsletter {
  font-size: 15px;
}

#footer .footer-newsletter h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 5px;
  text-align: left;
  border: 1px solid white;
}

#footer .footer-newsletter form input[type="Correo"] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}

#footer .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: -1px;
  right: -2px;
  bottom: -1px;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: rgba(123, 39, 216, 0.8);
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#footer .footer-newsletter form input[type="submit"]:hover {
  background: #5846f9;
}

#footer .copyright-wrap {
  border-top: 1px solid #8577fb;
}

#footer .credits {
  padding-top: 5px;
  font-size: 13px;
  color: #fff;
}

#footer .credits a {
  color: #fff;
}

#footer .social-links a {
  font-size: 30px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 46px;
  height: 46px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
}
</style>
