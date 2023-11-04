(function () {
    
    const btnMenu = document.getElementById('btn-menu')

    const list = document.getElementById('nav-items')

    let show = true

    const width = screen.width
    
    if (width >= 425.01) {
        list.style.display = 'flex'
    }else{
        list.style.display = 'block'
    }
    const year = document.getElementById('year')
    if( year) {
        year.innerHTML = new Date().getFullYear()
    }    


    btnMenu.addEventListener('click', () => {
        show = !show
        if(show) {
            list.style.display = 'block'
        }else{
            list.style.display = 'none'
        }
    }, true)

    window.addEventListener('resize', () => {
        const width = screen.width
        if (width >= 425.01) {
            list.style.display = 'flex'
        }else{
            list.style.display = 'block'
        }
    })
})();


