//Creamos el componente para la navbar
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
                <h1 class="visually-hidden" v-once>PureEspresso</h1>
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
                <button class="btn btn-dark fw-medium" @click="toggleModal">Suscríbete</button>
            </div>
        </div>
        </div>
    </nav>
    `,
    methods: {
        toggleModal() {
            // Emite un evento para notificar a la instancia principal de Vue que se debe abrir el modal
            this.$emit('toggle-modal');
        }
    }
});

// Creamos el componente para el banner
Vue.component('banner-component', {
    template: `
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center rounded bg-body-tertiary" id="fondo-cafe">
        <div class="col-md-6 p-lg-5 mx-auto my-5 w-75">
            <h2 class="display-4 fw-bold">Para los Amantes del Café que Buscan lo Mejor en Cada Taza.</h2>
            <h3 class="fw-normal text-muted mb-3">Descubre el Placer de Degustar Cafés Únicos y Encuentra tu Favorito.</h3>
            <div class="d-flex gap-3 justify-content-center lead">
                <button class="btn btn-dark fw-medium" @click="toggleModal">Suscríbete ahora!</button>
            </div>
        </div>
    </div>
    `,
    methods: {
        toggleModal() {
            // Emite un evento para notificar a la instancia principal de Vue que se debe abrir el modal
            this.$emit('toggle-modal');
        }
    }
});

// Creamos el componente para el modal
Vue.component('modal-component', {
    //la funcion data nos retorna todos los datos pedidos al usuario
    data() {
        return {
            form: {
                nombre: '',
                apellido: '',
                email: '',
                subscription: '',
                preferenciasCafe: '',
                notas: ''
            }
        };
    },
    //traemos la props de modalvisible para utilizar el v-show con la modal
    props: ['modalvisible'],
    template: `
        <div v-show="modalvisible" class="modal-backdrop">
            <div class="modal-dialog">
                <div class="modal-content bg-body-tertiary rounded p-4">
                    <div class="modal-header d-flex justify-content-between mb-3">
                        <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Suscríbete</h1>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    
                    <div class="modal-body">
                        <form @submit.prevent="submitForm"> <!--Evitamos que se recargue la pagina-->
                            <div class="row mb-3">
                                
                                <div class="col">
                                    <label for="nombre" class="form-label fw-bold">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" v-model="form.nombre" placeholder="Nombre">
                                </div>
                               
                                <div class="col">
                                    <label for="apellido" class="form-label fw-bold">Apellido</label>
                                    <input type="text" class="form-control" id="apellido" v-model="form.apellido" placeholder="Apellido">
                                </div>

                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label fw-bold">Email</label>
                                
                                <input type="email" class="form-control" id="email" v-model="form.email" aria-describedby="emailHelp">
                                
                                <div id="emailHelp" class="form-text">Nunca compartiremos tu email con nadie más.</div>
                           
                            </div>
                           
                            <div class="mb-3">
                                <label class="form-label fw-bold">Opciones de Suscripción</label>
                                
                                <div class="form-check">
                                    <input type="radio" class="form-check-input" id="starterPack" name="subscriptionOptions" value="starter" v-model="form.subscription">
                                    
                                    <label class="form-check-label fw-bold" for="starterPack">Starter Pack</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="radio" class="form-check-input" id="premiumPack" name="subscriptionOptions" value="premium" v-model="form.subscription">
                                    
                                    <label class="form-check-label fw-bold" for="premiumPack">Premium Pack</label>
                                
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                    <label for="preferenciasCafe" class="form-label fw-bold">Preferencias de Café</label>
                                    
                                    <select class="form-select" id="preferenciasCafe" v-model="form.preferenciasCafe">
                                        <option disabled selected>Selecciona una opción</option>
                                        <option value="suave" class="fw-bold">Suave</option>
                                        <option value="medio" class="fw-bold">Medio</option>
                                        <option value="intenso" class="fw-bold">Intenso</option>
                                    </select>
                                
                            </div>
                            
                            <div class="mb-3">
                                <label for="notas" class="form-label fw-bold">Notas Adicionales</label>
                                <textarea class="form-control" id="notas" v-model="form.notas" rows="3"></textarea>
                            </div>
                            
                            <div class="text-center">
                            <button type="submit" class="btn btn-dark mx-auto">Suscribirse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        closeModal() {
            // Emite un evento para cerrar el modal en la instancia principal de Vue
            this.$emit('close-modal');
        },
        submitForm() {
            // Emite un evento para manejar el envío del formulario
            this.$emit('form-submitted', this.form);
            this.closeModal(); // Cierra el modal después de enviar el formulario
        }
    }
});

// Creamos el componente para los packs
Vue.component('packs-component', {
    //traemos con props packs el array de packs
    props: ['packs'],
    template: `
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" id="opciones">
            <div v-for="pack in packs" :key="pack.name" class="bg-light-coffee me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center rounded overflow-hidden">
                <div class="my-3 p-3">
                    <h2 class="display-5">{{ pack.name }}</h2>
                    <p class="lead fw-bold">{{ pack.price }}</p>
                    <p class="lead">{{ pack.description }}</p>
                </div>
                <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                    <img :src="pack.imageUrl" :alt="pack.imageAlt" class="img-fluid drop-shadow" width="300px">
                </div>
            </div>
        </div>
    `
});

//creamos un componente para el divider
Vue.component('divider-component', {
    template: `
        <div class="b-example-divider"></div>
    `
});

//creamos un componente para nosotros
Vue.component('nosotros-component', {
    template: `
      <div class="my-1" id="nosotros">
        <div class="p-4 text-center bg-body-dark text-light">
          <div class="container py-5">
            <h2 class="fw-bold text-brown-light">¿Porqué suscribirse?</h2>
            <p class="col-lg-10 mx-auto lead mt-5 text-start">
              <span class="fw-bold text-brown-light">Descubre el Café de tus Sueños:</span> 
              Con nuestra suscripción, cada mes recibirás una selección curada de cafés de especialidad de las mejores regiones del mundo. Perfecto para explorar nuevos sabores y encontrar tu mezcla ideal.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Calidad y Variedad:</span> 
              Disfruta de granos frescos y cuidadosamente seleccionados, que ofrecen una experiencia de cata única en cada entrega. Desde orígenes únicos hasta blends exclusivos, siempre hay algo nuevo para saborear.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Comodidad a tu Puerta:</span> 
              Olvídate de buscar el café perfecto. Nosotros lo hacemos por ti y lo entregamos directamente en la comodidad de tu hogar.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Acceso Exclusivo:</span> 
              Como suscriptor, tendrás acceso a cafés raros y ediciones limitadas que no encontrarás en ningún otro lugar.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Aprende y Disfruta:</span> 
              Nuestra guía de cata te acompaña en cada paso, ayudándote a descubrir los matices y perfiles de sabor de cada variedad, convirtiendo cada taza en una experiencia educativa y deliciosa.
            </p>
          </div>
        </div>
      </div>
    `
  });

//Creamos componente de productos 
Vue.component('products-component', {
    //llamamos con props al array products
    props: ['products'],
    template: `
        <div class="album py-5 bg-dark">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="product in products" :key="product.name">
                <div class="card shadow-sm">
                    <img :src="product.imageUrl" :alt="product.imageAlt" class="rounded-top">
                    <div class="card-body bg-light-coffee">
                        <p class="card-text fw-bold text-dark">
                            <span class="text-brown">{{ product.name }}</span>, {{ product.description }}
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    `
});

//creamos componente para el footer
Vue.component('footer-component', {
    template: `
        <footer class="container row justify-content-between align-items-center py-3 my-4 mx-auto border-top">
            <p class="col-md-4 mb-0 text-light">&copy; 2024 Davinci - Nicolás Firpo</p>
        
            <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Home</a></li>
                <li class="nav-item"><a href="#opciones" class="nav-link px-2 text-light">Opciones</a></li>
                <li class="nav-item"><a href="#nosotros" class="nav-link px-2 text-light">Nosotros</a></li>
            </ul>
        </footer>
    `
  });
  

// Instancia principal de Vue
var app = new Vue({
    el: '.app',
    data: {
        modalvisible: false, // Asegúrate de usar 'modalvisible' en lugar de 'modalVisible'
        packs: [
            {
                name: 'Starter Pack',
                price: '$3usd /Mes',
                description: 'Selección de Cafés (3 variantes), Guía de cata básica, Tutoriales para hacer un buen café.',
                imageUrl: './img/starterpack.png',
                imageAlt: 'Ilustración del pack starter'
            },
            {
                name: 'Premium Pack',
                price: '$5usd /Mes',
                description: 'Selección de Cafés (5 variantes), Guía de cata avanzada, Regalo adicional, Descuentos exclusivos.',
                imageUrl: './img/premiumpack.png',
                imageAlt: 'Ilustración del pack premium'
            }
        ],
        products: [
            {
                name: 'Cafetera Italiana',
                description: 'diseñada para capturar la esencia del espresso auténtico. Fácil de usar y elegante en su diseño, perfecta para los amantes del café, esta clásica cafetera de aluminio ofrece una experiencia de café robusta y rica, que despierta tus sentidos con cada sorbo.',
                imageUrl: './img/cafetera-italiana.jpg',
                imageAlt: 'Cafetera Italiana'
            },
            {
                name: 'Prensa Francesa',
                description: 'prepara un café suave y rico en matices. Diseñada para resaltar los sabores naturales de los granos, esta elegante prensa no solo es perfecta para hacer café, sino que también se convierte en tu herramienta esencial para espumar la leche.',
                imageUrl: './img/prensa-fransesa.jpg',
                imageAlt: 'Prensa Francesa de vidrio'
            },
            {
                name: 'Molinillo de Café',
                description: 'Descubre la clave para un café excepcional con nuestro molinillo de café, diseñado para liberar todo el potencial de los granos frescos. Ajustable y preciso, permite moler tus granos a la perfección, desde un molido fino para espresso hasta uno grueso para prensa francesa.',
                imageUrl: './img/molinillo-profesional.jpg',
                imageAlt: 'Molinillo profesional para granos de café'
            }
        ]
    },
    methods: {
        toggleModal() {
            // Cambia el estado de modalvisible a true cuando se de clic en 'Suscríbete' o 'Suscríbete ahora!'
            this.modalvisible = !this.modalvisible;
        },
        
        handleFormSubmission(formData) {
            console.log('Form submitted:', formData);
            
        },
        
        closeModal() {
            // Establece modalvisible en false cuando se cierra el modal
            this.modalvisible = false;
        }
    }
});