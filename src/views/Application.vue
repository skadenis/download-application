<template>
  <div id="app">
    <div class="outer">
      <span class="inner">
            <div class="buttons_container">
              <a :href="ios" v-if="ios.length > 3">
                <img src="@/assets/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.svg" alt="">
              </a>
              <a :href="android" v-if="ios.length > 3">
                <img src="@/assets/img.png" alt="">
              </a>
            </div>
      </span>
    </div>

  </div>
</template>

<script>

import ApplicationApi from "../../api/ApplicationApi";

export default {
  name: 'App',
  data() {
    return {
      android: null,
      ios: null
    }
  },
  created() {
    this.get_info(this.$route.params.id);
  },
  methods: {
    get_info: async function (id){
      let content = (await ApplicationApi.get_links(id)).data;
      switch (content.status){
        case 200:
          this.android = content.data.googleplay;
          this.ios = content.data.appstore;
          break;
      }
    },
  }

}
</script>

<style>
html{
  background: #ccc;
}
.outer:before {
  content: '';
  display: inline-block;
  height: 100vh;
  vertical-align: middle;
}

.inner {
  display: inline-block;
  vertical-align: middle;
}

/* добавим горизонтальное центрирование */
.outer {
  text-align: center;
}
.buttons_container{
  margin: 0 auto;
  display: flex;
  width: 250px;
  flex-direction: column;
}
.buttons_container > a:nth-child(1) img {
  margin-top: 0!important;
}
.buttons_container img {
  width: 100% !important;
  margin-top: 50px;
}
</style>
