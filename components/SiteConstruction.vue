<template>
  <c-flex
    h="100%"
    justify="center"
    :justify-content="'center'"
    :align-items="'center'"
    :flex-direction="'column'"
  >
    <c-box
      h="25rem"
      w="70%"
      d="flex"
      justify-content="center"
      align-items="center"
      flex-direction="column"
    >
      <c-box
        d="flex"
        justify-content="center"
        align-items="center"
        flex-direction="row"
      >
        <c-icon name="exclamation" size="30px"></c-icon>
        <c-heading text-align="center" pl="20px">
          Site under Construction
        </c-heading>
      </c-box>
      <c-text text-align="center" pt="10px">
        Feel free to contact me at
        <c-icon name="email"></c-icon>
        <CLink href="mailto:kaz@mh1.us">kaz@mh1.us</CLink>
      </c-text>
    </c-box>
  </c-flex>
</template>

<script>
import { CFlex, CHeading, CIcon, CLink, CText } from '@chakra-ui/vue'

export default {
  name: 'SiteConstruction',
  components: {
    CFlex,
    CLink,
    CHeading,
    CIcon,
    CText,
  },
}
</script>

<style scoped></style>
