<template>
  <div class="container">
    <c-box h="100vh">
      <site-construction></site-construction>
    </c-box>
  </div>
</template>

<script lang="js">

export default {
  name: "HomeApp",
  inject: ['$chakraColorMode', '$toggleColorMode'],

  data(){
    return{
      mainTheme:{
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light:{
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },

  computed:{
    colorMode(){
      return this.$chakraColorMode()
    }
  },
  mounted() {
  }

}
</script>

<style></style>
