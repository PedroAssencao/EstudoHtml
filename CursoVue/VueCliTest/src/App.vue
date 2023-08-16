<template>
  <div>
    <PrimeiroComponente />
    <LifeCycle/>
    <pessoa/>
  </div>

</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente2.vue'
  import LifeCycle  from "./components/LifeCycle.vue"
  import Pessoa from './components/Pessoa.vue'
  export default {
    name: 'App', 
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    },
  }
</script>