document.addEventListener("DOMContentLoaded", function () {

    const username = "gui";
    const password = "123";

    function handleLogin() {

        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        if (enteredUsername === username && enteredPassword === password) {

            alert("Login aceito, bem vindo. " + enteredUsername);

            window.location.href = "../index.html";
        } else {

            alert("Senha ou usuario invalido, tente novamente.");
        }
    }

    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", handleLogin);
});