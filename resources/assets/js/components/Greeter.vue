<style lang="stylus" scoped>
  p
    background-color pink
    color black
    padding 10px
  h1
    margin 0
    padding 10px
    background-color black
    color white
</style>

<template lang="jade">
div
  h1 Hello there, {{ name }}?
  input(type="text" v-model="name")
  p Ipsum maiores nobis earum quo iste modi fugit cumque nemo consectetur! Numquam delectus eveniet at cum et. Et eaque beatae suscipit vitae similique? Libero ex unde vitae adipisci laborum facere.
</template>

<script>
  export default {
    data () {
      return {
        name: 'Felipe'
      }
    }
  }
</script>

