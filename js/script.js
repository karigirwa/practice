let mql = window.matchMedia('(max-width: 960px)');
let toggleBtn = document.querySelector('.left-icon')
if (mql) {
    toggleBtn.addEventListener('click', () => {
        console.log(true)
        document.getElementById('wrapper').classList.toggle('d-none')
        document.getElementById('wrapper').classList.toggle('d-lg-block')
    })
}
