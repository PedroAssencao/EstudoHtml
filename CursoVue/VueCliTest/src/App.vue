<template>
  <div>
    <Header/>
    <PrimeiroComponente />
    <LifeCycle/>
    <pessoa/>
    <div>
      <Form />
    </div>

  </div>

</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle  from "./components/LifeCycle.vue"
  import Pessoa from './components/Pessoa.vue'
  import Form from './components/form.vue'
  import Header from './components/header.vue'
  export default {
    name: 'App', 
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Form,
      Header
    },
  }
</script>