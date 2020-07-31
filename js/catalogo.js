
const linkWspCaja = 'https://api.whatsapp.com/send?phone=573155192405&text=Hola%20quiero%20informacion%20acerca%20de%20la%20caja%20china%20';
const linkWspRamen = 'https://api.whatsapp.com/send?phone=573155192405&text=Hola%20quiero%20informacion%20acerca%20de%20el%20ramen'
const linkWspSushi = 'https://api.whatsapp.com/send?phone=573155192405&text=Hola%20quiero%20informacion%20acerca%20de%20el%20sushi'
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

