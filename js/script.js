// toggle class active
// toggle itu membuat yang ada jadi ga ada dan yang ga ada jadi ada
const navbarNav = document.querySelector('.navbar-nav');
// jika menu di klik 
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// agar bisa menutup sidebar klik diluar dari icon menu
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})