
document.addEventListener('DOMContentLoaded', () => {

    console.log('cargado')
 
    const imgLightBox = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(imgLightBox, {
        inDuration : 500,
        outDuration: 500,
    })

})