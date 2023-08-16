<template>
    <div>
        <h2>Esta é a descrição de {{ nome }}</h2>
        <info/>
        <form />
    </div>
</template>
<script>    

    import info from './info.vue'
    import form from './form.vue'
    export default{
        name: 'Pessoa',
        components: {
            info,
            form
        },
        data(){
            return{
                nome: 'Pedro'
            }
        }
    }
</script>
