ScrollReveal().reveal('.objetivo',{delay: 200});
ScrollReveal().reveal('.habilidades',{delay: 200});
ScrollReveal().reveal('.intereses',{delay: 200});
ScrollReveal().reveal('.competencias',{delay: 200});
ScrollReveal().reveal('.contacto',{delay: 200});

/* Formulario */
((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/leopoldo.miranda18@tectijuana.edu.mx", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 2500);
        });
    });
  })(document);


    console.log("el contenido ha cargado");

    var imagenes = ['img/constancia-js.JPG',
                    'img/constancia-html-css.JPG',
                    'img/constancia-marketing.JPG'];

    var indiceImagenes = 0;
    var clickIzquierdo = document.querySelector('.left-click');
    var clickDerecho = document.querySelector('.right-click');
    var opacidadImagen = document.querySelector('.imagenes');
    document.slider.src = imagenes[0];

    clickIzquierdo.addEventListener('click', function(){
        if(indiceImagenes == 0) {
        indiceImagenes = imagenes.length-1;
        
      }
      else{
        indiceImagenes--;
      }
      document.slider.src = imagenes[indiceImagenes];
    });


    clickDerecho.addEventListener('click', function(){
      if(indiceImagenes==2) {
        indiceImagenes = 0;
      }
      else{
        indiceImagenes++;
      }
      document.slider.src = imagenes[indiceImagenes];
    });

