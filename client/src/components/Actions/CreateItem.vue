<template>
  <div id="create-item" class="action-boxes">
    <div class="header">
      <h3>
        <span>{{ title()[0] }}</span
        >{{ title()[1] }} записи
      </h3>
    </div>
    <form @submit.prevent="addingItem">
      <div class="type-container">
        <input type="radio" id="type-general" value="general" v-model="newItem.type" />
        <label for="type-general"><h4>Основные</h4></label>
        <input type="radio" id="type-todo" value="todo" v-model="newItem.type" />
        <label for="type-todo" class="center"><h4>Список</h4></label>
        <input type="radio" id="type-event" value="event" v-model="newItem.type" />
        <label for="type-event"><h4>Событие</h4></label>
      </div>
      <input type="text" placeholder="Введите название" v-model="newItem.name" required />
      <textarea type="text" placeholder="Введите текст" v-model="newItem.content" required />
      <input
        type="text"
        placeholder="Категория (опционально)"
        v-model="newItem.category"
        class="category-input"
        @focusin="showCategory = true"
        @focusout="showCategory = false"
      />
      <div class="category-dropup scroll" :class="{ show: showCategory === true }">
        <p v-for="category in categories" :key="category" @click="fillCategory(category)">{{ category }}</p>
      </div>
      <div class="dateTime">
        <input type="date" v-model="date" required />
        <input type="time" v-model="time" required />
      </div>
      <button type="submit"><h5>Сохранить</h5></button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CreateItem',
  components: {},
  data() {
    return {
      showCategory: false,
      submissionDate: '',
      submissionTime: '',
    };
  },
  computed: {
    ...mapGetters(['categories', 'newItem', 'getItemMode']),
    date: {
      get() {
        return this.newItem.dateTime.split('T')[0];
      },

      set(newValue) {
        this.submissionDate = newValue;
      },
    },
    time: {
      get() {
        return this.newItem.dateTime.split('T')[1];
      },
      set(newValue) {
        this.submissionTime = newValue;
      },
    },
  },
  methods: {
    ...mapActions(['addItem', 'updateItem', 'fillCategory', 'changePanel']),
    addingItem() {
      if (this.getItemMode === 'создание') {
        if (this.submissionDate === '' || this.submissionTime === '') {
          this.submissionDate = this.newItem.dateTime.split('T')[0];
          this.submissionTime = this.newItem.dateTime.split('T')[1];
        }
        this.addItem({ ...this.newItem, ['dateTime']: `${this.submissionDate}T${this.submissionTime}` });
      } else {
        this.updateItem({ ...this.newItem, ['dateTime']: `${this.submissionDate}T${this.submissionTime}` });
        this.changePanel('collections');
      }
    },
    title() {
      return [this.getItemMode.substring(0, 1), this.getItemMode.substring(1)];
    },
  },
};
</script>

<style scoped>
#create-item {
  min-height: 210rem;
  margin-bottom: 10rem;
}

h4 {
  text-align: center;
}

label {
  width: 100%;
  cursor: pointer;
  height: 100%;
}

input[type='radio']:checked + label {
  background: #19515e;
}

input[type='radio']:checked + label h4 {
  color: white;
}

.type-container {
  display: flex;
  border-radius: 5rem;
  justify-content: space-between;
  border: 1rem solid #19515e;
  margin-bottom: 10rem;
}

.dateTime {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200rem, 1fr));
}

input[type='date'] {
  padding: 5rem 10rem;
}

input[type='time'] {
  /* border-left: 1rem solid  rgb(25, 81, 94, 0.3); */
  padding-left: 10rem;
}

.selected {
  background: rgb(25, 81, 94);
  color: white;
}

.center {
  border-left: 1rem solid rgb(25, 81, 94);
  border-right: 1rem solid rgb(25, 81, 94);
}

.category-dropup.show,
.category-dropup:hover {
  display: block;
}

textarea {
  width: 100%;
  margin: 10px 0;
  height: 220px;
  padding: 11px 12px;
  border: none;
  border-radius: 5px;
  background-color: #d1ebe5;
  outline: none;
  resize: none;
  transition: 0.3s;

  &::-webkit-scrollbar {
    width: 7px;
    color: default;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    margin: 6px auto 6px;
    border-radius: 10px;
  }
}

@media only screen and (max-width: 1400px), (max-height: 600px) {
  textarea {
    height: 75px;
  }
}

@media only screen and (max-width: 1000px), (max-height: 600px) {
  textarea {
    height: 190px;
  }
}
</style>
