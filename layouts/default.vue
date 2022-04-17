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
import { getUser } from '~/supabase'

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
          bg: 'gray.900',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: '#F3F3F3',
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
    if (getUser() !== null) {
      console.log(this.$store.commit('user/setUser', true))
    }
  },
}
</script>

<style></style>
