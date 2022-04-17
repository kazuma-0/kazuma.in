<template>
  <c-grid-item
    :row-span="[5, 5]"
    :col-span="[2, 5]"
    rounded="10px"
    :bg="colorMode == 'light' ? 'gray.200' : 'gray.800'"
    shadow="0 0 10px #00000060"
  >
    <c-box
      h="100%"
      d="flex"
      justify-content="center"
      align-items="center"
      flex-direction="column"
      position="relative"
    >

      <svg
        :style="{ height: '60px' }"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        @click='clickfile'
      >
        <path
          d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5l5 5h-3z"
          fill="currentColor"
        ></path>
      </svg>
      <input type='file' ref='fileInput' :style='{width:"0"}' @change='fileUpload'/>
<!--      <template v-if='$refs.fileInput != undefined'>-->
      {{ filename }}
<!--      </template>-->
      <c-box
        d="flex"
        mt="2rem"
        align-items="center"
        justify-content="center"
        w="100%"
      >
        <c-select max-w="100px" mr="2rem">
          <option value="kaz">Kaz</option>
          <option value="public">Public</option>
        </c-select>
        <c-button :is-disabled="!$store.getters['user/getLoginState']"
          @click='upload'>Upload</c-button
        >
      </c-box>
    </c-box>
  </c-grid-item>
</template>

<script>
import { CBox, CButton, CSelect } from '@chakra-ui/vue'
export default {
  name: 'ContaboUpload',
  components: {
    CBox,
    CButton,
    CSelect,
  },
  inject: ['$chakraColorMode'],
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
  },
  data(){
    return{
      filename:'',
      file:null
    }
  },
  mounted() {
    console.log(this.$refs.fileInput)
  },
  methods:{
    clickfile(){
      this.$refs.fileInput.click()
    },
    fileUpload(e){
      this.file = e.target.files[0]
      this.filename = e.target.files[0].name
      console.log(this.filename)
    },
    clearFile(){
      this.file = null
      this.filename = ''
    },
    upload(){
      console.info("upload button clicked")
    }
  }
}
</script>

<style scoped></style>
