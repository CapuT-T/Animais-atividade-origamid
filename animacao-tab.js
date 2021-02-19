export default function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    
    if(tabMenu.length && tabContent.length){
        function activeTab(index){
            const direcao = tabContent[index].dataset.anime
            tabContent.forEach(element => element.classList.remove('ativo'))
            tabContent[index].classList.add('ativo', direcao)
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function(){
                activeTab(index)
            })
        })
    }
}