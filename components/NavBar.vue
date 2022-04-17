<template>
  <c-box
    h="100vh"
    w="4rem"
    :bg="colorMode == 'light' ? 'gray.300' : 'gray.700'"
    :display="{ base: 'none', sm: 'flex' }"
    :justify-content="'space-between'"
    :align-items="'center'"
    :flex-direction="'column'"
    position="fixed"
  >
    <nav>
      <c-image size="50px" mt="5px" mb="15px" src="logo.gif" />
      <c-box h="50vh" font-size="sm">
        <c-flex
          direction="column"
          :justify-content="'space-around'"
          h="100%"
          :align-items="'center'"
        >
          <c-link
            as="router-link"
            to="/"
            :style="{ transform: 'rotate(-90deg)' }"
          >
            About
          </c-link>
          <c-link
            as="router-link"
            to="/projects"
            :style="{ transform: 'rotate(-90deg)' }"
          >
            Projects
          </c-link>
          <c-link
            as="router-link"
            to="/blog"
            :style="{ transform: 'rotate(-90deg)' }"
            :is-disabled="true"
          >
            Blog </c-link
          ><c-link
            as="router-link"
            to="/utils"
            :style="{ transform: 'rotate(-90deg)' }"
          >
            Utilities
          </c-link>
        </c-flex>
      </c-box>
    </nav>
    <c-icon-button
      aria-label="theme"
      :icon="colorMode == 'light' ? 'sun' : 'moon'"
      m="3"
      @click="tgl"
    ></c-icon-button>
  </c-box>
</template>

<script>
import { CBox, CIconButton, CFlex, CLink, CImage } from '@chakra-ui/vue'
export default {
  name: 'NavBar',
  components: {
    CBox,
    CIconButton,
    CFlex,
    CLink,
    CImage,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
  },
  methods: {
    tgl() {
      this.$toggleColorMode()
      localStorage.setItem('theme', this.$chakraColorMode())
    },
  },
}
</script>

<style scoped></style>
