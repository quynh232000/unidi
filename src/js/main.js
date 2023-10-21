
const menu = document.getElementById("menumobile");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".sidebar-close i");
const sidebarbody = document.querySelector(".sidebar-wrapper");

menu.onclick = ()=>{
    sidebar.style="left:0";
    sidebarbody.style="transform:translateX(0%);"
}
close.onclick=()=>{
    sidebar.style="left:100%";
    sidebarbody.style="transform:translateX(100%);"
}
sidebar.onclick =()=>{
    sidebar.style="left:100%";
    sidebarbody.style="transform:translateX(100%);"
}
sidebarbody.onclick=(e)=>{
    e.stopPropagation()
}
