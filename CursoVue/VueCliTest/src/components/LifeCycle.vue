<template>
    <h1>Meu nome é {{ nome }}</h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() {
        return{
            nome: 'Ainda não sei'
        }
    },
    created(){
        setTimeout(() => {
            this.nome = 'Mathues'
        },1000)
        this.LifeCycle()
    },
  
    mounted() {
        setTimeout(() => {
            this.nome = 'Pedro'
        },2000)
    },
    methods:{
        LifeCycle(){
            console.log('aplicacao Criada')
        }
    }
}
</script>
