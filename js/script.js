let mql = window.matchMedia('(max-width: 960px)');
let toggleBtn = document.querySelector('.left-icon')
if (mql) {
    toggleBtn.addEventListener('click', () => {
        console.log(true)
        document.getElementById('wrapper').classList.toggle('d-none')
        document.getElementById('wrapper').classList.toggle('d-lg-block')
    })
}

var navItem = document.querySelectorAll('.nav-item')
window.onload = (event) => {
    var currentUrl = window.location.href;
    let v = "http://localhost:3000/happiness-dev/index.php"
    console.log(v.split('/'))
    url = currentUrl.split('/')
    if (url[3] == "index.php") {
        navItem[0].classList.toggle('nav-bg')
    } else if (url[3] == "evaluate_exercises.php") {
        navItem[1].classList.toggle('nav-bg')
    } else if (url[3] == "evaluate_written_books.php") {
        navItem[2].classList.toggle('nav-bg')
    } else if (url[3] == "evaluate_documents.php") {
        navItem[3].classList.toggle('nav-bg')
    }
}
