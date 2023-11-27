const form = document.querySelector("#login-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordInputConfirm = document.querySelector("#confirmpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verificar se o nome ta vazio
  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }

  //   Verificar se o email ta vaio
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu E-mail");
    return;
  }

  //   Verificar se a senha está preenchida
  if (passwordInput.value == "") {
    alert("Por favor, preencha o sua senha");
    return;
  }
  //   Verificar a senhas iguais
  if (!(passwordInput.value == passwordInputConfirm.value)) {
    alert("Por favor, confirme a senha novamente");
    return;
  }

  if (!validarSenha(passwordInput.value, 8)) {
    alert("Por favor, a senha precisa ter no minimo oito digitos");
    return;
  }

  //   Se todos os campos estão preenchidos, envie o form
  form.submit();
});

// Função que valida o email

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

// Função que valida o tamanho da senha
function validarSenha(password, TAM) {
  if (password.length >= TAM) {
    return true;
  }
  return false;
}
