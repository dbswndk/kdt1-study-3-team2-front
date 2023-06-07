<template lang="">
    <div> 
         <v-btn outlined color="cyan" @click="readyToCreateAccount">회원 가입 준비 버튼</v-btn>
            <div v-if="isPressedButton">
                <br>
                
            <v-form @submit.prevent="onSubmit" ref="form">
                <table>
                    <tr>
                        <td>
                            이메일
                        </td>
                        <td>
                            <v-text-field :rules="email_rule" v-model="email" label="이메일 입력"/>
                        </td>
                        <td>
                            <v-btn text large color="grey" @click="checkEmail" :disabled="false">
                                중복 확인
                            </v-btn>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            비밀번호
                        </td>
                        <td>
                            <v-text-field v-model="password" label="비밀번호 입력" type="password"/>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td>
                        <v-text-field label="비밀번호 확인" type="password" v-model="passwordConfirm" :rules="[passwordCheck]"/>
                        </td>

                    </tr>
                </table>

                <div>
                    <v-btn outlined color="cyan" type ="submit" :disabled="!isFormValid()">회원 가입</v-btn>

                    <br><br>
                    
                    <v-btn outlined color="green" to="/">돌아가기</v-btn>
                </div>


            </v-form>
        </div>

    </div>
</template>
<script>
import { mapActions } from 'vuex'

const accountModule = 'accountModule'

export default {
    name: "AccountRegisterForm",
    data() {
        return {
            email: '',
            password: '123456',
            isPressedButton: false,
            passwordConfirm: '',
            emailPass: false,
            email_rule: [
                v => !!v || '이메일을 입력해주세요.',
                v => {
                    const replaceV = v.replace(/(\s*)/g, '')
                    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
                    return pattern.test(replaceV) || '올바른 이메일 형식으로 입력해주세요!'
                }
            ]
        }
    },
    methods: {
        ...mapActions('accountModule', ['requestSpringToCheckEmail']),

        onSubmit() {
            if (this.$refs.form.validate()) {
                const { email, password } = this
                this.$emit('submit', { email, password })
            } else {
                alert('올바른 정보를 입력하세요!')
            }

            if (!this.emailPass) {
                alert("이메일 중복 확인을 해주세요!")
            }
        },

        readyToCreateAccount() {
            this.isPressedButton = true
            alert('계정 등록 준비')
        },

        async checkEmail() {
            const emailValid = this.email.match(
                /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            this.emailPass = false

            if (emailValid) {
                const { email } = this
                console.log('before actions - email: ' + email)
                this.emailPass = await this.requestSpringToCheckEmail({ email })
            }
        },
        isFormValid() {
            return this.emailPass && this.email_rule[1](this.email) === true
        }


    },
    computed: {
        passwordCheck() {
            return () => {
                return this.password === this.passwordConfirm || '비밀번호가 일치하지 않습니다.'
            }
        }

    }




}
</script>
<style scoped></style>