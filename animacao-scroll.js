export default function animacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')

    if(sections.length){
        const windowMetade = window.innerHeight * 0.6

    function animaScroll(){
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top
            const visible = (sectionTop - windowMetade) < 0
            if(visible)
                section.classList.add('ativo')
        })
    }

    window.addEventListener('scroll', animaScroll)
    }
}
