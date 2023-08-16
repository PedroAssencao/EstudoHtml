<template>
    <div>
        <h2>Esta é a descrição de {{ nome }}</h2>
        <info/>
        
    </div>
</template>
<script>    

    import info from './info.vue'
 
    export default{
        name: 'Pessoa',
        components: {
            info,

        },
        data(){
            return{
                nome: 'Pedro'
            }
        }
    }
</script>
