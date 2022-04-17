<template>
  <div>
    <c-box d="flex" h="100vh" :p="['0', '20px']" class="grd">
      <c-grid
        w="100%"
        :template-columns="{ base: 'repeat(1, 1fr)', sm: 'repeat(10, 1fr)' }"
        :template-rows="{ base: 'repeat(10, 1fr)', sm: 'repeat(10, 1fr)' }"
        :pt="{ base: '5rem', sm: '0px' }"
        :pl="{ base: '1rem', sm: '0px' }"
        :pr="{ base: '1rem', sm: '0px' }"
        :gap="[5, 8]"
      >
        <LazyContaboUpload></LazyContaboUpload>
        <!--      <c-grid-item row-span="5" col-span="10" bg="blue.300" />-->
      </c-grid>
      <c-box position="absolute" bottom="10px" right="10px">
        <c-button
          v-if="!$store.getters['user/getLoginState']"
          variant-color="blue"
          size="md"
          variant="ghost"
          @click="active = true"
          >Login</c-button
        >
        <c-button
          v-else
          variant-color="red"
          size="md"
          variant="ghost"
          @click="userLogout"
          >Logout</c-button
        >
      </c-box>
      <LazyLoginModal
        v-if="active"
        @close="active = false"
        @login="userLogin"
      ></LazyLoginModal>
    </c-box>
    <c-alert v-if="magicLink" status="success" position='fixed' top='5' right='5' rounded='5px'>
      <c-alert-icon />
      Magic link sent
    </c-alert>
    <c-alert v-if="error" status="error" position='fixed' top='5' right='5' rounded='5px'>
      <c-alert-icon />
      {{errorMessage}}
<!--      Please check your email and password-->
    </c-alert>
  </div>
</template>

<script>
import { CBox, CGrid, CButton } from '@chakra-ui/vue'
import { login, getUser, logOut } from '~/supabase'
export default {
  name: 'UtilitiesPage',
  components: {
    CBox,
    CGrid,
    CButton,
  },
  data() {
    return {
      active: false,
      error: false,
      errorMessage: '',
      magicLink: false,
    }
  },
  mounted() {
    console.log(this.$store.getters['user/getLoginState'])
    if ((getUser() === null)) {
      this.$store.commit("user/setLoginState", false)
    }
      this.$store.commit("user/setLoginState", true)
  },
  methods: {
    async userLogin(email) {
      const { user, session, error } = await login(email)
      if (error) {
        console.error(error)
        this.error = true
        this.errorMessage = error.message
        setTimeout(()=>{
          this.error = false
          this.errorMessage = ''
        }, 5e3)
        return false
      }
      this.magicLink = true
      setTimeout(()=>{
        this.magicLink = false
      }, 5e3)
      console.log(user, session)
      // console.info(`logged in as ${user.email}`)
      // console.info(`Session Expires in ${session.expires_at}`)
      return true
    },
    userLogout() {
      logOut()
      this.$store.commit('user/setLoginState', false)
    },
  },
}
</script>

<style scoped>
/**{*/
/*  outline: 1px black solid;*/
/*}*/
.grd {
  padding-left: 5rem;
}
@media screen and (max-width: 676px) {
  .grd {
    padding: 0;
  }
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 3ms ease-in;
}
.fade-in-enter-from,
.fade-in-leave-from {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
