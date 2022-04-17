<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox font-family="body" as="main" v-bind="mainTheme[colorMode]">
        <CReset></CReset>
        <NavBar></NavBar>
        <MobileNavbar></MobileNavbar>
        <Nuxt></Nuxt>
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
  },
  data() {
    return {
      mainTheme: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'white',
          color: 'gray.900',
        },
      },
    }
  },
  computed: {
    colorMode() {
      return this.chakraColorMode
    },
  },
  mounted() {
    const theme = localStorage.getItem('theme')
    if (theme == null) {
      localStorage.setItem('theme', 'dark')
    }
    if (this.chakraColorMode !== localStorage.getItem('theme')) {
      this.chakraToggleColorMode()
    }
  },
}
</script>

<style></style>
