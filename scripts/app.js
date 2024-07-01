//Pasamos la Navbar a un componente
Vue.component('navbar-component', {
    template: `
      <nav class="navbar navbar-expand-lg bg-light-coffee rounded m-3">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
            <a class="navbar-brand col-lg-3 me-0" href="#">
              <img src="./img/logo-puroespresso.png" alt="PureEspresso" width="200">
              <h1 class="visually-hidden">PureEspresso</h1>
            </a>
            <ul class="navbar-nav col-lg-6 justify-content-lg-center">
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#opciones">Opciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#nosotros">Nosotros</a>
              </li>
            </ul>
            <div class="d-lg-flex col-lg-3 justify-content-lg-end">
              <button class="btn btn-dark fw-medium">Suscríbete</button>
            </div>
          </div>
        </div>
      </nav>
    `
  });


// Creación de la instancia principal de Vue
var app = new Vue({
    el: '#app',
    data: {
        packs: [
            {
              nombre: "Starter Pack",
              info: "Selección de Cafés (3 variantes), Guía de cata básica, Turoriales para hacer un buen café.",
              img: "./img/starterpack.png",
              alt: "Ilustracion del pack starter"
            },
            {
              nombre: "Premium Pack",
              info: "Selección de Cafés (5 variantes), Guía de cata avanzada, Regalo adicional, Descuentos exclusivos.",
              img: "./img/premiumpack.png",
              alt: "Ilustracion del pack premium"
            }
          ],
          productos: [
            {
              img: "./img/cafetera-italiana.jpg",
              alt: "Cafetera Italiana",
              descripcion: "Cafetera Italiana, diseñada para capturar la esencia del espresso auténtico. Fácil de usar y elegante en su diseño, perfecta para los amantes del café, esta clásica cafetera de aluminio ofrece una experiencia de café robusta y rica, que despierta tus sentidos con cada sorbo."
            },
            {
              img: "./img/prensa-fransesa.jpg",
              alt: "Prensa Francesa de vidrio",
              descripcion: "Prensa Francesa, prepara un café suave y rico en matices. Diseñada para resaltar los sabores naturales de los granos, esta elegante prensa no solo es perfecta para hacer café, sino que también se convierte en tu herramienta esencial para espumar la leche."
            },
            {
              img: "./img/molinillo-profesional.jpg",
              alt: "Molinillo profesional para granos de café",
              descripcion: "Descubre la clave para un café excepcional con nuestro Molinillo de Café, diseñado para liberar todo el potencial de los granos frescos. Ajustable y preciso, permite moler tus granos a la perfección, desde un molido fino para espresso hasta uno grueso para prensa francesa."
            }
          ]
        }
});
