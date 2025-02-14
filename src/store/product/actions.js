import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'

export default {
    requestProdictRegisterToSpring ({}, payload) {
        return axiosInst.post('/product/register', payload)
        .then((res) => {
            alert('게시물 등록 성공!')
            return res.data
        })
        .catch(() => {
            alert('문제 발생!')
        })
    },
    requestProductListToSpring({commit}) {
        return axiosInst.get("/product/request-list")
          .then((res) =>
            commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
          )
    },

    requestProductToSpring({commit}, productId) {
        return axiosInst.get(`/product/${productId}`)
          .then((res) =>
          commit(REQUEST_PRODUCT_TO_SPRING, res.data))
    }
}
