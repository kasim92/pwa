<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="mx-0 px-0 pt-0"
      >
        <router-view />
      </v-container>
      <bottom-nav />
    </v-main>
  </v-app>
</template>

<script>
import { initJsStore } from "./service/idb_service";
import { Global } from "../global";
import BottomNav from "./components/BottomNav.vue";

export default {
  components: {
    BottomNav,
  },
  data() {
    return {};
  },
  computed: {},
  async beforeCreate() {
    try {
      const isDbCreated = await initJsStore();
      if (isDbCreated) {
        console.log("db created");
        // prefill database
      } else {
        console.log("db opened");
      }
    } catch (ex) {
      console.error(ex);
      alert(ex.message);
      Global.isIndexedDbSupported = false;
    }
  },
};
</script>

<style scoped>
* {
  height: 100%;

 background-color: #0f83d6;
}
.bg {
  background: #0686e0 !important;
  border-bottom-left-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
}
/* .v-application--is-rtl .v-tab {
  letter-spacing: 0 !important;
}

::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}
::-webkit-scrollbar-thumb {
  background: radial-gradient(circle, #005cc8 14%, #005cc8 62%) !important;
  border-radius: 10px !important;
  box-shadow: inset 7px 7px 15px #e0e0e0 !important;
}
::-webkit-scrollbar-thumb:hover {
  background: radial-gradient(circle, #c7ceff 14%, #f9d4ff 64%) !important;
}
::-webkit-scrollbar-track {
  background: #ffffff !important;
  border-radius: 10px !important;
}
.v-input__slot::before {
  border-style: none !important;
}
.v-btn {
  text-transform: capitalize !important;
  letter-spacing: 0 !important;
} */
</style>