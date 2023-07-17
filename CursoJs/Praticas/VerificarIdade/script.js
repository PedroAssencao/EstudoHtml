
        function Verificar() {

        var Masculino = document.getElementById('flexRadioDefault1')
         var anoInput = document.getElementById('anoInput')
         var date = new Date()
         var Ano = date.getFullYear()
         var res = document.getElementById('res')
         var Nascimento = Ano - anoInput.value
         var img = document.createElement('img')
         img.setAttribute('class', 'imagem')
           
         if (Ano < anoInput.value ) {
            alert(`[ERROR] A idade digita e maior do que o ano atual (${Ano}) ou não foi informada, verifique o ano digitado!`)
            return; 
        }

        if (anoInput.value === "") {
            alert(`[ERROR] Não foi informado um valor no campo (Ano Nascimento), verifique o campo!`)
            return; 
        }
        
        if (Masculino.checked == true) {
            res.innerHTML = `O Individuo e do sexo masculino nasceu em ${anoInput.value} e tem atualmente ${Nascimento} Anos de idade!`
            if (Nascimento >= 0 && Nascimento <10 ) {
                img.setAttribute('src', 'https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2022/07/iStock-1302266351-2-1.jpg')
            }else if (Nascimento < 21) {
                img.setAttribute('src', 'https://st.depositphotos.com/1032171/2697/i/600/depositphotos_26977745-stock-photo-sad-teenager-sitting-on-window.jpg')
            }else if (Nascimento < 51) {
                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/homem-adulto-atraente-cruzando-os-bracos-e-sorrindo_176420-18744.jpg')
            }else {
                img.setAttribute('src', 'https://st.depositphotos.com/1743476/2514/i/600/depositphotos_25144697-stock-photo-portrait-of-senior-man.jpg')
            }
        }else{

            res.innerHTML = `O Individuo e do sexo Feminino nasceu em ${anoInput.value} e tem atualmente ${Nascimento} Anos de idade!`
            if (Nascimento >= 0 && Nascimento <10 ) {
                img.setAttribute('src', 'https://ninguemcrescesozinho.com.br/storage/2018/03/Diferentes-formas-de-escutar-as-crian%C3%A7as.jpg')
            }else if (Nascimento < 21) {
                img.setAttribute('src', 'https://institutoinfantojuvenil.com.br/wp-content/uploads/sites/4/2018/06/343012-PABF3T-110-scaled.jpg')
            }else if (Nascimento < 51) {
                img.setAttribute('src', 'https://www.psitto.com.br/wp-content/uploads/2022/12/autismo-adulto.jpg')
            }else {
                img.setAttribute('src', 'https://www.dorcronica.blog.br/web/wp-content/uploads/2020/10/voce-que-nao-e-idoso-ja-pensou-o-que-e-ser-velho-nessa-pandemia-1355x1020.jpg')
            }
        }
         res.appendChild(img)
        
  }

