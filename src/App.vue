<template>
  <div id="app">
    <div id="nav">
      {{lat +' , '+ lng}}
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      lng: null,
      lat: null,
    };
  },
  methods: {
    async getLocation() {
      try {
        const coordinates = await this.$getLocation({
          enableHighAccuracy: true,
        });
        this.lng = coordinates.lng;
        this.lat = coordinates.lat;
      } catch (error) {
        this.noLocation = true;
      }
    },
  },
  beforeMount() {
    this.getLocation();
  },
  mounted() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
