document.getElementById('open-nav').addEventListener('click', (event) => {
    openNav();
})

document.getElementById('close-nav').addEventListener('click', (event) => {
    closeNav();
})

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}


function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

document.getElementById("sidenav").addEventListener('click', event => {
    if(document.getElementById("sidenav").style.width !== "0")
         document.getElementById("sidenav").style.width = "0";
})