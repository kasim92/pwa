<template>
  <div>
    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
      fixed
      mandatory
      class="py-2"
    >
      <v-btn
        :color="color"
        width="125"
        :ripple="false"
      >
        <span class="my-3">Home</span>
        <v-icon>fas fa-home</v-icon>
      </v-btn>
      <v-btn
        :color="color"
        width="125"
        :ripple="false"
      >
        <span class="my-3">Music</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>
      <v-btn
        :color="color"
        width="125"
        :ripple="false"
      >
        <span class="my-3">Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
      <v-btn
        :color="color"
        width="125"
        :ripple="false"
      >
        <span class="my-3">Image</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "bottom-nav",
  components: {},
  data() {
    return {
      value: 0,
    };
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
.v-btn:hover:before {
  opacity: 0 !important;

  background-color: transparent !important;
}
/* .v-btn:hover:after{

  background-color: transparent !important;
} */
</style>