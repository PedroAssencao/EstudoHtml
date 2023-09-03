<template>
    <div>
        <p v-if="estou_trabalhando">estou Trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no Momento.</p>
        <p>Ultilizo as seguintes tecnologias</p>
        <ul v-for="tecnologias in backend_technolgy">
            <li>{{tecnologias}}</li>
            <li>Algo a mais</li>
        </ul>
        <div>
            <button @click="mostrarr_Email">{{textoBotao}}</button>
        </div>
        <p v-show="mostrar_Email">Meu Email é {{ email }}</p>
        <p>Meu portifolio esta nesse link <a v-bind:href='meu_link' target="_blank" >Clicke Aqui!</a></p>
        <Picture/>
    </div>
    
</template>

<script>
    import Picture from './Picture.vue';
    export default{
        name: 'info',
        components:{
            Picture
        },
        data(){
            return{
                estou_trabalhando: false,
                mostrar_Email: false,
                email: 'PedroMarcelo31102006@gmail.com',
                meu_link: 'https:/google.com',
                textoBotao: 'Mostrar Email',
                backend_technolgy: ['javascript', 'PHP', 'Python']
            }
        },
        methods: {
            mostrarr_Email(){
                this.mostrar_Email = !this.mostrar_Email
                if (!this.mostrar_Email) {
                    this.textoBotao = 'mostrar Email'
                }else{
                    this.textoBotao = 'Esconder Email'
                }
            }
        }

    }
</script>