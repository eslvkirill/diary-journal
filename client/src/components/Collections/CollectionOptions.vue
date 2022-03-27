<template>
  <footer id="collection-options" class="footer-options">
    <div class="container">
      <div class="option-container">
        <div class="option-btn option-category" @click="filtering('', '')" title="Фильтер: Нажмите, чтобы очистить">
          <v-icon name="filter" class="btn-icon" />
        </div>
        <div class="option-btn" @click="filtering('type', 'event')" title="По Событиям">
          <v-icon name="calendar-day" class="btn-icon" :class="{ active: filterConditions.value === 'event' }" />
        </div>
        <div class="option-btn" @click="filtering('type', 'todo')" title="По Спискам">
          <v-icon name="tasks" class="btn-icon" :class="{ active: filterConditions.value === 'todo' }" />
        </div>
        <div class="option-btn" @click="filtering('type', 'general')" title="Другие записи">
          <v-icon
            name="list"
            class="btn-icon"
            :class="{
              active: filterConditions.value === 'general',
            }"
          />
        </div>
        <div class="option-btn" @click="filtering('completed', false)" title="В работе">
          <v-icon name="square" class="btn-icon outline" :class="{ active: filterConditions.value === false }" />
        </div>
        <div class="option-btn" @click="filtering('completed', true)" title="Выполнено">
          <v-icon name="check-square" class="btn-icon" :class="{ active: filterConditions.value === true }" />
        </div>
        <div class="option-btn show-categories" title="По Категориям">
          <v-icon
            name="object-group"
            class="btn-icon"
            :class="{
              active: filterConditions.property === 'category',
            }"
          />
          <div class="category-dropup scroll">
            <p v-for="category in categories" :key="category" @click="filtering('category', category)">
              {{ category }}
            </p>
          </div>
        </div>
      </div>
      <div class="option-container">
        <div class="option-btn option-category" title="Сортировка: Нажмите, чтобы очистить" @click="changeSort('FIFO')">
          <v-icon name="sort" class="btn-icon" />
        </div>
        <div class="option-btn" title="По дате создания: от Новых к Старым" @click="changeSort('createdLIFO')">
          <v-icon name="calendar-plus" class="btn-icon" :class="{ active: sortConditions === 'createdLIFO' }" />
        </div>
        <div class="option-btn" title="По дате выполнения: от Ранних к Последним" @click="changeSort('dueLIFO')">
          <v-icon name="calendar-check" class="btn-icon" :class="{ active: sortConditions === 'dueLIFO' }" />
        </div>
        <div class="option-btn" title="A-Z: По возрастанию" @click="changeSort('asc')">
          <v-icon name="sort-alpha-down" class="btn-icon" :class="{ active: sortConditions === 'asc' }" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CollectionOptions',
  methods: {
    ...mapActions(['changeFilter', 'changeSort']),
    filtering(property, value) {
      const condition = {
        property: property,
        value: value,
      };
      this.changeFilter(condition);
    },
  },
  computed: {
    ...mapGetters(['categories', 'sortConditions', 'filterConditions']),
  },
};
</script>

<style scoped>
h3 {
  margin: 0 auto;
}

.outline {
  fill: none;
  border: 2rem solid rgb(25, 81, 94);
  width: 15rem;
  height: 15rem;
  border-radius: 2rem;
}

.outline.active {
  border: 2rem solid rgba(3, 190, 3);
  fill: none;
}

.container {
  display: flex;
}

.label-icon {
  fill: white;
}

.option-container:nth-child(1) {
  width: 60%;
}

.option-category {
  border-right: 1rem solid rgb(25, 81, 94);
}

.show-categories {
  position: relative;
}

.show-categories:hover .category-dropup,
.category-dropup:hover {
  display: block;
}

.category-dropup {
  width: 200rem;
  position: absolute;
  bottom: 25rem;
  left: -80rem;
}
</style>
