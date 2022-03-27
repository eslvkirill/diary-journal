<template>
  <div id="user">
    <div class="menu">
      <v-icon @click="logUserOut()" name="sign-out-alt" flip="horizontal" class="btn-icon logout" title="Выход" />
      <v-icon
        @click="changingPanel('action')"
        name="plus"
        class="btn-icon panel-btn action-btn"
        :class="{ active: showWhichPanel === 'action' }"
        title="Создание/редактирование"
      />
      <v-icon
        @click="changingPanel('collections')"
        name="list"
        class="btn-icon panel-btn collection-btn"
        :class="{ active: showWhichPanel === 'collections' }"
        title="Все записи"
      />
    </div>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'User',
  components: {
    Dashboard,
  },
  computed: mapGetters(['showWhichPanel']),
  methods: {
    ...mapActions(['logUserOut', 'changePanel']),
    changingPanel(panel) {
      if (this.showWhichPanel !== panel) {
        this.changePanel(panel);
      } else {
        this.changePanel('collections');
      }
    },
  },
};
</script>

<style scoped>
#user {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 2.5vh 2.5vw;
}

.btn-icon {
  margin: 0 10rem 10rem 0;
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 10rem;
}

.panel-btn {
  display: none;
}

@media only screen and (max-width: 1400px), (max-height: 600px) {
  .action-btn {
    display: block;
  }
}

@media only screen and (max-width: 1000px), (max-height: 600px) {
  #user {
    padding: 20rem 2.5vw 10rem;
  }
  .menu {
    flex-direction: row;
  }

  .panel-btn {
    display: block;
  }
}
</style>
