<template lang="">
    <div align="center">

        <v-btn outlined color="cyan"  @click="readyToAccountList">회원 목록 보기</v-btn>
            <div v-if="isPressedButton">
                <br>
        <table>
            <tr>
                <th align="center">이메일</th>
                <th align="center">비밀번호</th>
            </tr>

            <tr v-if="!accounts || (Array.isArray(accounts) && accounts.length === 0)">
                <td colspan="2">
                    등록된 계정이 없습니다.
                </td>
            </tr>

            <tr v-else v-for="account in accounts" :key="account.email">
                <td aling="center">
                    {{ account.email }}
                </td>
                <td align="center">
                    {{ account.password }}
                </td>
                <td>
                    <v-btn outlined color="red" @click="onDelete(account.email)">삭제</v-btn>
                </td>
            </tr>
        </table>
        <br><br>

        <v-btn outlined color="green" to="/">돌아가기</v-btn>
        </div>
    </div>
</template>
<script>

import { mapActions, mapState } from 'vuex'
const accountModule = 'accountModule'

export default {
    data() {
        return {
            isPressedButton: false,
        }
    },
    props: {
        accounts: {
            type: Array
        }
    },
    computed: {
        ...mapState(accountModule, ['account'])
    },

    methods: {
        ...mapActions(accountModule, ['requestDelete']),

        readyToAccountList() {
            this.isPressedButton = true
            alert("계정 목록을 보여드릴게요.")
        },
        async onDelete(email) {

            await this.requestDelete(email)
        }
    },
}
</script>
<style scoped>
table {
    border-collapse: separate;
    border-spacing: 0 10px;
}

td {
    padding: 0 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
}

@keyframes rainbow {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

th {
    background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow 3s ease infinite;
}
</style>