function Carregar() {
    var HorasHtml = document.getElementById('Horas');
var hora = new Date();
var horaAgora = hora.getHours();
var MinutoAgora = hora.getMinutes();
var img = document.getElementById('img')
if (horaAgora >= 12 && horaAgora < 18) {
    HorasHtml.innerHTML = `Agora são ${horaAgora}:${MinutoAgora}, Boa tarde!`;
    var body = document.getElementById('body');
    body.style.background = 'gray';
    img.src = 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
} else if (horaAgora >= 18) {
    HorasHtml.innerHTML = `Agora são ${horaAgora}:${MinutoAgora}, Boa noite!`;
    var body = document.getElementById('body');
    body.style.background = 'blue';
    img.src = 'https://img.freepik.com/fotos-premium/linda-noite-no-oceano-com-lua-cheia_104785-866.jpg'
} else {
    HorasHtml.innerHTML = `Agora são ${horaAgora}:${MinutoAgora}, Bom dia!`;
    var body = document.getElementById('body');
    body.style.background = 'brown';
    img.src = 'https://agendor-blog-uploads.s3.sa-east-1.amazonaws.com/2021/05/20092011/milagre-da-manha-para-vendedores.jpg'
}

}
