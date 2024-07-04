/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

// Script para esconder a navbar ao rolar
 window.addEventListener("scroll", function () {
   var navbar = document.getElementById("navbar");
   var windowHeight = window.innerHeight;
   if (window.scrollY >= windowHeight / 4) {
     navbar.classList.add("hidden-navbar");
   } else {
     navbar.classList.remove("hidden-navbar");
   }
 });

// Função para animar elementos
function animateElement(element, keyframes, options) {
  element.animate(keyframes, options);
}

// Exemplo de animação ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  var hero = document.getElementById("hero");
  animateElement(
    hero,
    [
      { transform: "scale(0)", opacity: 0 },
      { transform: "scale(1)", opacity: 1 },
    ],
    {
      duration: 3000,
      easing: "ease-out",
    }
  );
});

$(document).ready(function () {
  var hoje = new Date();
  var hora = hoje.getHours();
  var mensagem = $("#bomdia");
  if ((hora < 6) | (hora > 20)) {
    mensagem.html("Good Evening");
  } else if (hora < 12) {
    mensagem.html("Good Morning");
  } else if (hora < 20) {
    mensagem.html("Good Afternoon");
  } else {
    mensagem.html(hora);
  }

 
});

