<template>
  <div>
    <v-autocomplete
      v-model="model"
      :items="states"
      append-icon="fa-search"
      class="rounded-xl "
      filled
      
      hide-details
      dense
      placeholder="Search Pharmecy"
      item-text="name"
    />
  </div>
</template>

<script>
export default {
  name: "search-pharmacy",
  components: {},
  data() {
    return {
      model: null,
      states: [
        { name: "صيدلية العطاء", id: 1 },
        { name: "صيدلية الشفاء", id: 2 },
        { name: "صيدلية الخير", id: 3 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-input__slot::before {
  border-style: none !important;
}
</style>