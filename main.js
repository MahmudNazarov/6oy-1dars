function setDarkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";


    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.style.backgroundColor = "#333";
        button.style.color = "white";
        h1.style.color = "white"
    });
}

function setLightMode() {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "black";


    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.style.backgroundColor = "orange";
        button.style.color = "white";
    });
}