
const linkWspCaja = 'https://api.whatsapp.com/send?phone=573155192405&text=Hola%20!%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20caja%20china%20';
const linkWspRamen = 'https://api.whatsapp.com/send?phone=573155192405&text=Hola%20!%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3nn%20sobre%20el%20Ramen%20'
const linkWspSushi = 'https://api.whatsapp.com/send?phone=573155192405&text=Hola%20!%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3nn%20sobre%20el%20Sushi%20'
const linkWspLetras = 'https://api.whatsapp.com/send?phone=573155192405&text=Hola%20!%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3nn%20sobre%20las%20Letras%20'
document.addEventListener('DOMContentLoaded', () => {

    console.log('cargado')
 
    const imgLightBox = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(imgLightBox, {
        inDuration : 500,
        outDuration: 500,
    })

})

function clickHome(){
    window.location.href= './index.html'
}
function comprarCaja () {

  window.location = linkWspCaja;
}
function comprarRamen () {

    window.location = linkWspRamen;
  }
  function comprarSushi () {

    window.location = linkWspSushi;
  }

  function comprarLetra () {
    window.location = linkWspLetras;
  }


  $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

