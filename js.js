// Armazenar o elemento que mostrará o resultado da calculadora
const resultado = document.getElementById("resultado");

// Função para inserir números no resultado
function insert(num) {
  resultado.textContent = resultado.textContent + num;
}

// Função para limpar o resultado
function clean() {
  resultado.textContent = "";
}

// Função para apagar o último caractere do resultado
function back() {
  resultado.textContent = resultado.textContent.substring(
    0,
    resultado.textContent.length - 1
  );
}

// Função para calcular o resultado
function calculate() {
  try {
    resultado.textContent = eval(resultado.textContent);
  } catch (e) {
    resultado.textContent = "Error";
  }
}

// Adicionar evento de teclado para inserir números
document.addEventListener("keydown", function (event) {
  // Verificar se o número pressionado é de 0 a 9
  if (event.key >= 0 && event.key <= 9) {
    insert(event.key);
  }

  // Verificar se o caractere pressionado é "."
  if (event.key === ".") {
    insert(".");
  }

  // Verificar se o caractere pressionado é "+"
  if (event.key === "+") {
    insert("+");
  }

  // Verificar se o caractere pressionado é "-"
  if (event.key === "-") {
    insert("-");
  }

  // Verificar se o caractere pressionado é "*"
  if (event.key === "*") {
    insert("*");
  }

  // Verificar se o caractere pressionado é "/"
  if (event.key === "/") {
    insert("/");
  }

  // Verificar se o caractere pressionado é "=" ou "Enter"
  if (event.key === "=" || event.key === "Enter") {
    calculate();
  }
});
