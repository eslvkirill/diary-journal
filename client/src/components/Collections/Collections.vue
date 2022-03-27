<template>
  <div id="collections" class="group-container">
    <div class="header">
      <h1>Все записи</h1>
    </div>
    <div class="wrapper">
      <div class="item-container">
        <div v-for="item in displayItems" :key="item.id">
          <Item v-bind:item="item" />
        </div>
      </div>
    </div>
    <CollectionOptions />
  </div>
</template>

<script>
import Item from './Item';
import CollectionOptions from './CollectionOptions';
import { mapActions } from 'vuex';

export default {
  name: 'Collections',
  components: {
    Item,
    CollectionOptions,
  },
  computed: {
    displayItems() {
      const { property, value } = this.$store.getters.filterConditions;
      const sortBy = this.$store.getters.sortConditions;

      let items = [...this.$store.getters.allItems];

      if (sortBy === 'createdLIFO') {
        items.reverse();
      } else if (sortBy === 'asc') {
        items.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));
      } else if (sortBy === 'dueLIFO') {
        items.sort((a, b) => (a.dateTime < b.dateTime ? -1 : 1));
      }

      if (value !== '') {
        items = items.filter((item) => item[property] === value);
      }

      return items;
    },
  },
  methods: {
    ...mapActions(['changeSort']),
  },
  created() {
    this.$store.dispatch('initItems');
  },
};
</script>

<style scoped>
.wrapper {
  height: 80%;
  scrollbar-width: none;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.item-container {
  display: grid;
  grid-gap: 10rem;
  grid-template-columns: repeat(auto-fill, minmax(230rem, 1fr));
  padding: 10rem;
  overflow-y: scroll;
  scrollbar-width: none;
}

.item-container::-webkit-scrollbar {
  display: none;
}
</style>
