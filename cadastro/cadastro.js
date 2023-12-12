function validateForm() {
    let form = document.getElementById('myForm');
    let elements = form.elements;
    let valid = true;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type !== "button" && elements[i].type !== "submit") {
            if (elements[i].value === "") {
                valid = false;
                elements[i].classList.add("is-invalid");
            } else {
                elements[i].classList.remove("is-invalid");
            }
        }
    }

    if (valid) {
        alert("Cadastro concluido. Salvando dados...");

        window.location.href = "../login/login.html";
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}