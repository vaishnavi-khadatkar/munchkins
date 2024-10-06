const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

let btnClick = document.getElementsByClassName("hero-btn");
btnClick.addEventListener("click",()=>{
    window.location.href= "Admission.html";
});
