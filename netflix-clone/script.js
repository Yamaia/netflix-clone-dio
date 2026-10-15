$(function () {
  // Títulos de exemplo. Troque por imagens reais: { titulo: "...", img: "img/arquivo.jpg" }
  const catalogo = [
    "Stranger Things", "The Crown", "Dark", "Narcos", "Black Mirror",
    "La Casa de Papel", "Ozark", "Lupin", "Sense8", "Elite",
    "The Witcher", "Bridgerton"
  ];

  const cores = [
    ["#7a1f1f", "#2b0d0d"], ["#1f4a7a", "#0d1e2b"], ["#3f6b2a", "#14230d"],
    ["#6b2a6b", "#230d23"], ["#7a5a1f", "#2b200d"], ["#1f7a6b", "#0d2b25"]
  ];

  // Monta os cards de cada linha com offset diferente para variar a ordem
  $(".carousel__track").each(function (linha) {
    const $track = $(this);
    catalogo.forEach(function (_, i) {
      const titulo = catalogo[(i + linha * 4) % catalogo.length];
      const [c1, c2] = cores[(i + linha) % cores.length];
      $("<div>", { class: "card", text: titulo })
        .css("background-image", `linear-gradient(135deg, ${c1}, ${c2})`)
        .appendTo($track);
    });
  });

  // Setas do carrossel
  $(".arrow").on("click", function () {
    const $track = $(this).siblings(".carousel__track");
    const passo = $track.width() * 0.8;
    const dir = $(this).hasClass("arrow--left") ? -1 : 1;
    $track[0].scrollBy({ left: dir * passo, behavior: "smooth" });
  });

  // Fundo sólido no topo ao rolar a página
  $(window).on("scroll", function () {
    $("#topbar").toggleClass("solid", $(this).scrollTop() > 50);
  });
});
