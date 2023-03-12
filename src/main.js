window.addEventListener("load", (event) => {
    startFunctions()
})

function startFunctions() {
    addSmoothScroll()
}

function addSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}