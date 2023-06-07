<template>
    <v-container>
      <form @submit.prevent="onSubmit">
        <table>
          <tr>
            <td>상품 이름</td>
            <td>
              <input type="text" v-model="productName"/>
            </td>
          </tr>
          <tr>
            <td>상품 가격</td>
            <td>
              <input type="number" v-model="productPrice"/>
            </td>
          </tr>
          <tr>
            <td>상품 세부 정보</td>
            <td>
              <textarea cols="80" rows="20" v-model="productDetails"/>
            </td>
          </tr>
        </table>
  
        <div>
          <button type="submit">상품 등록</button>
        </div>
      </form>
    </v-container>
  </template>
  
<script>
import axiosInst from '@/utility/axiosInst'
export default {
  data() {
    return {
      productName: '상품명',
      productPrice: 1000,
      productDetails: '세부정보',
      files: '',
    }
  },
  methods: {
    async onSubmit() {
      let formData = new FormData()
      let productInfo = {
        productName: this.productName,
        productPrice: this.productPrice,
        productDetails: this.productDetails,
        accountToken: localStorage.getItem("accountToken")
      }

      await axiosInst.post("/product/register", productInfo)
          .then(res=> {
              console.log("regist success")
          })
          .catch(res => {
              console.log("regist fail")
          })

      await this.$router.push({ name: 'ProductListPage' })
    },
    handleFileUpload() {
      this.files = this.$refs.files.files
    },
  }
}
</script>
  
<style scoped>
td {
  border-bottom: 1px solid black;
}
</style>