import Vue from "vue";
import Vuex from "vuex";

import productModule from '@/store/product/ProductModule.js'
import accountModule from "@/store/account/accountModule.js";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    productModule: productModule,
    accountModule: accountModule,
  },
})

export default store

