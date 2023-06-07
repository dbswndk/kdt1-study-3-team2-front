<template lang="">
    
        <v-simple-table>
            <template v-slot:default>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>{{ product.productName }}</td>
                    </tr>
                    <tr>
                        <th>가격</th>
                        <td>{{ product.productPrice }}</td>
                    </tr>
                    
                    <tr>
                        <th>세부 정보</th>
                        <td>{{ product.productDetails }}</td>
                    </tr>

                    <tr>
                        <th>등록한 계정</th>
                        <td>{{ product.account }}</td>
                    </tr>

                </tbody>    
            
                
            </template>


        </v-simple-table>

    
</template>
<script>
export default {
    name: "ProductReadForm",
    props: {
        product: {
            type: Object,
            required: true,
        }
    }

}
</script>
<style lang="">
    
</style>