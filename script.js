document.addEventListener("DOMContentLoaded", function() {

  const telaInicial = document.getElementById("telaInicial");
  const conteudo = document.getElementById("conteudo");
  const btnAbrir = document.getElementById("btnAbrir");
  const btnVoltar = document.getElementById("btnVoltar");
  const musica = document.getElementById("musica");

  btnAbrir.addEventListener("click", function() {
    telaInicial.style.display = "none";
    conteudo.style.display = "block";
    musica.play();
  });

  btnVoltar.addEventListener("click", function() {
    conteudo.style.display = "none";
    telaInicial.style.display = "block";
    
    musica.pause();       // ⬅ para a música
    musica.currentTime = 0; // ⬅ volta para o início
  });

});