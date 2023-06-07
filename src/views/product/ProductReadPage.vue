<template>
  <v-container>
    <product-read-form :product="product"></product-read-form>

  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import product from "@/router/product";
import ProductReadForm from "@/components/product/ProductReadForm.vue";

const productModule = "productModule"
export default {
  components: {
    ProductReadForm
  },
  name: "ProductReadPage",
  props: {
    productId: {
      type: Number,
      required: true,
    }
  },
  methods: {
    ...mapActions(productModule, ["requestProductToSpring"])
  },
  beforeMount() {
    this.requestProductToSpring(this.productId)
  },
  computed: {
    ...mapState(productModule, ["product"])
  }
}
</script>

<style scoped></style>