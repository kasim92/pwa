<template>
  <v-bottom-navigation
    v-model="value"
    fixed
    app
    mandatory
  >
    <v-btn-toggle
      v-model="toggle_exclusive"
      borderless
      group
      mandatory
      class="mx-10"
    >
      <v-btn
        v-for="(link,i) in links"
        :key="i"
        :ripple="false"
        @click="goTo(link.to)"
      >
        <span class="pt-1">{{link.title}}</span>
        <v-icon>{{link.icon}}</v-icon>
      </v-btn>

    </v-btn-toggle>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "bottom-nav",
  components: {},
  data() {
    return {
      value: 0,
      toggle_exclusive: null,
      links: [
        { title: "Home", icon: "fas fa-home", to: "/" },
        { title: "New Pharmacy", icon: "fas fa-plus", to: "/pharmacy_manage" },
      ],
    };
  },
  methods: {
    goTo(to) {
      this.$router.push(to);
    },
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>

<style >
.v-btn-toggle > .v-btn.v-btn--active .v-icon {
  color: white !important;
  background-color: #0686e0 !important;
  width: 37px;
  height: 50px;
  border-radius: 0.2em !important;
  box-shadow: 0px 5px 14px rgba(1, 119, 251, 0.25) !important;
}
.v-btn-toggle > .v-btn.v-btn--active {
  color: #0686e0 !important;
}

.v-btn:hover:before {
  opacity: 0 !important;
  background-color: transparent !important;
}
</style>