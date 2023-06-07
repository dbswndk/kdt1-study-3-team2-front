<template lang="">
    <div>

        <br>
        <account-list-form :accounts="accounts"/>
        <br>



    </div>
</template>
<script>

import { mapActions, mapState } from 'vuex';
import AccountListForm from '@/components/account/AccountListForm.vue';

const accountModule = 'accountModule'

export default {
    components: { AccountListForm },

    computed: {
        ...mapState(accountModule, ['accounts']),
    },
    mounted() {
        this.requestAccountListToSpring()
    },
    methods: {
        ...mapActions(
            accountModule, ['requestAccountListToSpring']
        )
    },




}
</script>
<style lang="">
    
</style>