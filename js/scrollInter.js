


const elementos = document.querySelectorAll('.hidden')

const observador = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

elementos.forEach((elemento) => observador.observe(elemento))