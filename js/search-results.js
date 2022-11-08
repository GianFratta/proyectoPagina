
document.addEventListener('keyup', e=>{

   if (e.target.matches('#buscador')){

    document.querySelectorAll('.articulo').forEach(peli_nom =>{

        peli_nom.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?peli_nom.classList.remove('filtro')
            :peli_nom.classList.add('filtro')
    })

   }


})