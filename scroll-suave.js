//caso eu export uma coisa eu coloco default
export default function initScrollSuave(){   
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

    function scrollSection(event){
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        event.preventDefault()

        section.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        })

        // forma alternativa

        /* const topo = section.offsetTop */

        /* window.scrollTo({
            top: topo,
            behavior: 'smooth',
        }) */
    }

    linksInternos.forEach(element => {
        element.addEventListener('click', scrollSection)
    })
}