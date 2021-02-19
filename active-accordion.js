export default function activeAccordion(){
    const list = document.querySelectorAll('[data-anime="accordion"] dt')
    const dd = document.querySelectorAll('[data-anime="accordion"] dd')
    const ativo = 'ativo'

    if(list.length && dd.length){
        function activeAccordion(){
            this.classList.toggle(ativo)
            this.nextElementSibling.classList.toggle(ativo)
        }
    
        list.forEach(element => {
            element.addEventListener('click', activeAccordion)
        })
    }
}
