<template>
  <component :is="layout">
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  mounted() {
    this.$store.dispatch('getVehiclesFromJSON')
  },
  components: {
    MainLayout
  }
}
</script>

<style scoped>
  @import './style.css';

</style>


