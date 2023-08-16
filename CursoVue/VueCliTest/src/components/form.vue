<template>
    <form action="">
        <inputText/>
        <inputText/>
        <submit/>
    </form>
</template>
<script>
import inputText from './form/inputText.vue';
import submit from './form/submit.vue';
export default {
    name: 'Form',
    components: {
        inputText,
        submit
    }
}
</script>
