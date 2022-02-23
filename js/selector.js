function changePage(){
    const selectValue = select.value
    console.log(selectValue)

    if(selectValue === "one"){
        const buttonServicio1 = document.getElementById("servicio1");
        buttonServicio1.style.display = "block";
        const buttonServicio2 = document.getElementById("servicio2")
        buttonServicio2.style.display ="none"
    }
    else if( selectValue === "two"){
        const buttonServicio1 = document.getElementById("servicio1");
        buttonServicio1.style.display = "none";
        const buttonServicio2 = document.getElementById("servicio2")
        buttonServicio2.style.display ="block"
    }
    else{
        const buttonServicio1 = document.getElementById("servicio1");
        buttonServicio1.style.display = "none";
        const buttonServicio2 = document.getElementById("servicio2")
        buttonServicio2.style.display ="none"
    }
}