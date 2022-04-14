<template>
  <c-box
    h="8vh"
    w="100%"
    :d="{ base: 'flex', sm: 'none' }"
    position="fixed"
    top="0"
    left="0"
    :bg="colorMode == 'light' ? 'gray.300' : 'gray.600'"
    align-items="center"
    justify-content="space-between"
    pr="5px"
    pl="5px"
  >
    <c-image size="50px" src="logo.gif" />
<!--    <c-button variant="ghost" size="sm">-->
      <svg
        :style="{ height: '35px', userSelect: 'none' }"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 25 25"
        @click="show = true"

      >
        <path
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          fill="currentColor"
        ></path>
      </svg>
<!--    </c-button>-->
    <c-drawer :is-open="show" placement="right" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content>
        <c-drawer-close-button />
        <c-drawer-body pt="20px" d="flex" flex-direction="column">
          <c-link p="5px" font-size="20px" as="router-link" to="/">
            About
          </c-link>
          <c-link as="router-link" to="/projects" p="5px" font-size="20px">
            Projects
          </c-link>
          <c-link
            as="router-link"
            to="/blog"
            :is-disabled="true"
            p="5px"
            font-size="20px"
          >
            Blog
          </c-link>
        </c-drawer-body>

        <c-drawer-footer>
          <c-icon-button
            aria-label="theme"
            :icon="colorMode == 'light' ? 'sun' : 'moon'"
            m="3"
            @click="tgl"
          ></c-icon-button>
        </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
  </c-box>
</template>

<script>
export default {
  name: 'MobileNavbar',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {
      show: false,
    }
  },
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
    close() {
      this.show = false
    },
  },
}
</script>

<style scoped></style>
