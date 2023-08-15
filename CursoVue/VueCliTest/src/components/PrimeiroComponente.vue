<template>
    <div>
    <h1>Ola vue tudo bem?!</h1>
    <p>Meu nome é {{ nome }} é meu sobrenome é {{ sobrenome }} se isso esta sendo exibido então e porque deu certo!</p>
    </div>
 
</template>

<script>
    export default{
        name: 'Primeirocomponente',
        data(){
            return{
                nome: 'Pedro',
                sobrenome: 'Assenção'
            }
        }
    }
</script>
