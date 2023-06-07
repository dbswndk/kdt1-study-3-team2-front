<template>
  <v-app>
    <v-app-bar app color="" style="height: 100px;
    background-color: #93c0d1;" class=" d-flex align-center">
      <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer" />


      <div>
        <!-- <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.png" transition="scale-transition"
          width="80" /> -->

      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/eddi-study/kdt1-study-3-team2-front" target="_blank" text>
        <span class="mr-2">GitHub 2조 front로 가기</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn href="https://github.com/eddi-study/kdt1-study-3-team2-back" target="_blank" text>
        <span class="mr-2">GitHub 2조 back으로 가기</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn href="http://www.google.com" target="_blank" text>
        <span class="mr-2">Google로 가기</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>




    </v-app-bar>

    <v-navigation-drawer app v-model="navigation_drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">2 조</v-list-item-title>
          <!-- <v-list-item-subtitle></v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
      <v-divider />

      <!-- 홈 버튼-->
      <v-list nav dense>
        <v-list-item v-for="(link, index) in links" :key="link.index" router :to="link.route">
          <v-list-item-action>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 로그인 버튼-->
        <v-list-item v-for="(accountLi, index) in accountLogin" :key="accountLi.index" router :to="accountLi.route">
          <v-list-item-action>
            <v-icon>
              {{ accountLi.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ accountLi.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 계정 추가 버튼-->
        <v-list-item v-for="(accountP, index) in accountPlus" :key="accountP.index" router :to="accountP.route">
          <v-list-item-action>
            <v-icon>
              {{ accountP.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ accountP.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 계정 확인 버튼-->
        <v-list-item v-for="(accountL, index) in accountList" :key="accountL.index" router :to="accountL.route">
          <v-list-item-action>
            <v-icon>
              {{ accountL.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ accountL.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 상품 추가 버튼-->
        <v-list-item v-for="(productP, index) in productPlus" :key="productP.index" router :to="productP.route">
          <v-list-item-action>
            <v-icon>
              {{ productP.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ productP.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 상품 리스트 확인 버튼-->
        <v-list-item v-for="(productL, index) in productList" :key="productL.index" router :to="productL.route">
          <v-list-item-action>
            <v-icon>
              {{ productL.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ productL.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-main>
      <v-container style="padding-top: 100px;"></v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    navigation_drawer: false,
    links: [
      { icon: 'mdi-home', text: '홈', route: '/' }
    ],
    accountLogin: [
      { icon: 'mdi-account', text: '로그인', route: "/account-login-page" }
    ],
    accountPlus: [
      { icon: 'mdi-account-plus', text: '계정 추가', route: "/account-register-page" }
    ],
    accountList: [
      { icon: 'mdi-account-details', text: '계정 확인', route: "/account-list-page" }
    ],
    productPlus: [
      { icon: 'mdi-archive-plus', text: '상품 추가', route: "/product-register-page" }
    ],
    productList: [
      { icon: 'mdi-archive-check', text: '상품 리스트 확인', route: "/product-list-page" }
    ],


    //
  }),
};
</script>

<style scoped></style>
