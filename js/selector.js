const buttonServicio1 = document.getElementById("servicio1");
const buttonServicio2 = document.getElementById("servicio2");
const buttonOff = document.getElementById("buttonSelect");

const changePage = () =>{
    const selectValue = select.value
    if(selectValue === "one"){
        buttonServicio2.style.display ="none"
        buttonOff.style.display = "none"
        buttonServicio1.style.display = "block";
    }
    else if(selectValue === "two"){
        buttonServicio1.style.display = "none";
        buttonOff.style.display = "none"
        buttonServicio2.style.display ="block"
    }
    else{
        buttonServicio1.style.display = "none";
        buttonServicio2.style.display ="none"
        buttonOff.style.display = "block"
    }
}