<template>
  <div>
    <v-app-bar
      flat
      color="#0686e0"
    >
      <v-btn
        icon
        color="white"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        dark
        icon
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        dark
        icon
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="bg">
      <v-row justify="center">
        <v-col
          cols="12"
          sm="7"
          md="6"
          lg="5"
        >
          <v-chip-group
                active-class="primary--text"
                column
              >
                <v-chip
                  v-for="tag in tags"
                  :key="tag"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
        </v-col>
      </v-row>
    </div>
  </div>

</template>

<script>
export default {
  name: "app-bar",
  components: {},
  data() {
    return {
      tags: [
        "Work",
        "Home Improvement",
        "Vacation",
        "Food",
        "Drawers",
        "Shopping",
        "Art",
        "Tech",
        "Creative Writing",
      ],
    };
  },
};
</script>

<style  scoped>
.bg {
  margin: 0px !important;
  padding: 0px !important;

  background: #0686e0 !important;
  padding-bottom: 4vh !important;
  border-bottom-left-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
}
</style>