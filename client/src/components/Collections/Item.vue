<template>
  <div class="item" v-bind:class="{ completed: item.completed }">
    <p><v-icon v-bind:name="typeIcon(item.type)" class="display-icon" />{{ item.name }}</p>
    <p class="content">{{ item.content }}</p>
    <div class="details-container">
      <h5>{{ item.category }} || {{ formatDateTime(item.dateTime) }}</h5>
      <div class="btn-container">
        <v-icon
          @click="toggleCompleted(item)"
          name="check"
          class="btn-icon"
          v-bind:class="{ completed: item.completed }"
        />
        <v-icon @click="editingItem(item)" name="pen" class="btn-icon" />
        <v-icon @click="deleteItem(item._id)" name="trash" class="btn-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Item',
  props: ['item'],
  methods: {
    ...mapActions(['updateItem', 'deleteItem', 'setEditItem', 'changePanel']),
    editingItem(item) {
      this.setEditItem(item);
      this.changePanel('action');
    },
    formatDateTime(dateTime) {
      const date = new Date(dateTime);
      const weekday = new Intl.DateTimeFormat('ru', {
        weekday: 'short',
      }).format(date);

      const time = new Intl.DateTimeFormat('ru', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
      }).format(date);

      return `${weekday} ${dateTime.substring(0, 10)} | ${time}`;
    },
    toggleCompleted(item) {
      const updatedItem = {
        ...item,
        ['completed']: !item.completed,
      };
      this.updateItem(updatedItem);
    },
    typeIcon(type) {
      if (type === 'event') {
        return 'calendar-day';
      } else if (type === 'todo') {
        return 'tasks';
      } else {
        return 'list';
      }
    },
  },
};
</script>

<style scoped>
p {
  padding: 5rem 0;
  border-bottom: 1rem solid rgb(25, 81, 94, 0.3);
  margin-bottom: 5rem;
  width: 100%;
}

.content {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item {
  border-radius: 10rem;
  width: 100%;
  background: rgb(255, 255, 255, 0.6);
  backdrop-filter: blue(10rem);
  overflow: hidden;
  padding: 5rem 10rem;
}

.item.completed {
  background: rgba(136, 205, 221, 0.2);
}

.item-content {
  margin: 10rem 0;
  width: 100%;
}

.details-container {
  display: flex;
}

h5 {
  width: 100%;
}

.btn-container {
  padding: 0 5rem;
  width: 70rem;
  display: flex;
  justify-content: flex-end;
}

svg {
  width: 20rem;
  padding: 0 5rem;
}

svg.display-icon {
  filter: opacity(0.7);
}

svg.btn-icon {
  height: 20rem;
  cursor: pointer;
}

.completed {
  fill: rgb(0, 255, 0);
}
</style>
