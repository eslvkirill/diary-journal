<template>
  <div id="action-panel" class="panel" :class="{ show: showWhichPanel === 'action' }">
    <div class="image-container">
      <div class="image-box">
        <MorningIcon class="morning-icon" />
      </div>
      <div class="date-box">
        <h2>{{ today }}</h2>
      </div>
    </div>
    <CreateItem />
  </div>
</template>

<script>
import CreateItem from './CreateItem';
import MorningIcon from './MorningIcon';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ActionPanel',
  components: {
    CreateItem,
    MorningIcon,
  },
  data() {
    return {
      today: new Intl.DateTimeFormat('ru', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date()),
    };
  },
  computed: {
    ...mapGetters(['showWhichPanel', 'getMobileMode']),
  },
  methods: mapActions(['changePanel']),
};
</script>

<style scoped>
#action-panel {
  display: grid;
  grid-template-rows: 3fr 6fr;
  grid-gap: 10rem;
  overflow: hidden;
}

h2 {
  font-size: 20rem;
  font-weight: 500;
}

.image-container {
  position: relative;
  border-radius: 10rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.morning-icon {
  height: 100%;
}

.image-box {
  position: relative;
  height: 100%;
  border-radius: 10%;
  min-width: fit-content;
  overflow: hidden;
}

.date-box {
  margin-top: 10rem;
  padding-left: 10rem;
}

@media only screen and (max-width: 1400px), (max-height: 600px) {
  #action-panel {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 45%;
    bottom: -100%;
    padding: 15rem 90rem 15rem 15rem;
    grid-gap: 87rem;
    grid-template-rows: none;
    grid-template-columns: 264rem 1fr;
    transition: all 1s;
    box-shadow: 0 -3rem 10rem 5rem rgb(25, 81, 94, 0.2);
    background: rgb(195, 224, 221);
  }

  .image-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .image-box {
    height: 70%;
    max-height: 260rem;
  }

  h2 {
    font-size: 18rem;
  }

  .morning-icon {
    height: 100%;
  }

  .date-box {
    width: 100%;
  }

  #action-panel.show {
    bottom: 0;
  }
}

@media only screen and (max-width: 1000px), (max-height: 600px) {
  #action-panel {
    width: 95%;
    height: 100%;
    padding: 10rem;
    grid-template-rows: 3fr 6fr;
    grid-template-columns: none;
  }

  .image-container {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .image-box {
    height: 100%;
  }

  h2 {
    font-size: calc(min(20rem, 4.4vw));
  }

  .date-box {
    padding-left: 10rem;
  }
}
</style>

<style>
#action-panel .header {
  height: 30rem;
  padding: 5rem 10rem;
  border-radius: 10rem 10rem 0 0;
}

input {
  padding: 7rem 0;
}

#action-panel button {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 39px;
  margin-left: 24%;
  font-size: 19px;
  border-radius: 5px;
}
</style>
