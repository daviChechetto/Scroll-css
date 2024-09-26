/* window.addEventListener('scroll', function() {
    // Calcula o valor da rolagem como uma porcentagem
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);


    // Calcula o ângulo de rotação baseado na porcentagem (360 graus * percentual de scroll)
    const rotationAngle = scrollPercent * 360;

    // Atualiza o estilo do SVG para rotacionar conforme a rolagem
    document.querySelector('svg').style.transform = `rotate(${rotationAngle}deg)`;
}); */

$(window).on('scroll', function() {

    // Calcula o valor da rolagem como uma porcentagem
    const scrollPercent = $(window).scrollTop() / ($(document).height() - $(window).height());


    // Calcula o ângulo de rotação baseado na porcentagem (360 graus * percentual de scroll)
    const rotationAngle = scrollPercent * 360;

    // Atualiza o estilo do SVG para rotacionar conforme a rolagem
    $('svg').css('transform', `rotate(${rotationAngle}deg)`);
});