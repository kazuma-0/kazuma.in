<template>
  <c-modal :is-open="true" :on-close="close">
    <c-modal-content>
      <c-modal-header> Login </c-modal-header>
      <c-modal-close-button />
      <c-modal-body>
        <c-form-control>
          <c-form-label for="email">Email address</c-form-label>
          <c-input id="email" v-model="email" required type="email" />
          <!--          <c-form-label for="password" >Password</c-form-label>-->
          <!--          <c-input type="password" id="password"  v-model='password'/>-->
        </c-form-control>
      </c-modal-body>
      <c-modal-footer>
        <c-button mx="3" @click="login">Login</c-button>
        <c-button @click="close">Cancel</c-button>
      </c-modal-footer>
    </c-modal-content>
    <c-modal-overlay />
  </c-modal>
</template>

<script>
import {
  CModal,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalContent,
  CModalBody,
  CFormControl,
  CFormLabel,
  CInput,
} from '@chakra-ui/vue'
export default {
  name: 'LoginModal',
  components: {
    CModal,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalContent,
    CModalBody,
    CFormControl,
    CFormLabel,
    CInput,
  },
  props: {
    status: {
      type: Boolean,
    },
  },
  emits: ['close', 'login'],
  data() {
    return {
      active: this.status,
      email: '',
      // password: '',
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    login() {
      if (this.email === '') {
        // throw new Error("Please enter email and password")
        return
      }
      this.$emit('login', this.email)
    },
  },
}
</script>

<style scoped></style>
