document.getElementById("form-contato").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio real
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
  
    if (!nome) {
      alert("Por favor, preencha seu nome.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Insira um e-mail válido.");
      return;
    }
  
    if (!mensagem) {
      alert("Escreva uma mensagem.");
      return;
    }
  
    alert("Mensagem enviada com sucesso!");
  });
  
  // Efeito interativo: botão muda de cor ao clicar
  const botao = document.getElementById("btn-enviar");
  botao.addEventListener("click", () => {
    botao.style.backgroundColor = "#1abc9c";
    setTimeout(() => {
      botao.style.backgroundColor = "#3498db";
    }, 300);
  });

