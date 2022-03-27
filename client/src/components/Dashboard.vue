<template>
  <div id="dashboard">
    <ActionPanel />
    <CollectionsPanel />
  </div>
</template>

<script>
import ActionPanel from './Actions/ActionPanel';
import CollectionsPanel from './Collections/CollectionsPanel';

export default {
  name: 'Dashboard',
  components: {
    ActionPanel,
    CollectionsPanel,
  },
};
</script>

<style scoped>
#dashboard {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 4fr 7fr;
}

@media only screen and (max-width: 1400px), (max-height: 600px) {
  #dashboard {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 1000px), (max-height: 600px) {
  #dashboard {
    display: inline-block;
    height: 95vh;
    position: absolute;
    top: 35rem;
  }
}
</style>

<style>
.panel {
  position: relative;
  border-radius: 10rem;
  width: 95%;
  height: 95vh;
  justify-self: center;
  padding: 10rem;
  background: rgb(255, 255, 255, 0.3);
  backdrop-filter: blur(10rem);
}

.header {
  background: rgb(25, 81, 94);
  height: 50rem;
  padding: 10rem;
  display: flex;
  align-items: flex-end;
  border-radius: 10rem 10rem 0 0;
}

.group-container {
  position: relative;
  border-radius: 10rem;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.4);
  overflow: hidden;
}

/* Drop-up/Drop down Menu */

.category-dropup {
  background: rgb(255, 255, 255);
  position: relative;
  z-index: 10;
  display: none;
  max-width: 85vw;
  max-height: 80rem;
  border: 1rem dashed rgb(25, 81, 94, 0.3);
  overflow-y: scroll;
}

.category-dropup p {
  padding: 3rem 5rem;
  border-bottom: 1rem dashed rgb(25, 81, 94, 0.3);
  cursor: pointer;
}

/* Overflow / Scrolling */

.wrapper {
  overflow-y: scroll;
  overflow-x: hidden;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.scroll {
  scrollbar-color: rgb(25, 81, 94) rgb(25, 81, 94, 0.5);
  scrollbar-width: thin;
}

.scroll::-webkit-scrollbar {
  width: 10rem;
  height: 10rem;
}

.scroll::-webkit-scrollbar-track {
  background: rgb(25, 81, 94, 0.5);
}

.scroll::-webkit-scrollbar-thumb {
  background: rgb(25, 81, 94);
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 81, 94, 0.6);
}

/* Footer options */

.footer-options {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40rem;
  background: rgb(25, 81, 94, 0.2);
}

.option-container {
  position: relative;
  display: flex;
  padding: 5rem 10rem;
}

.option-btn {
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
}

.btn-icon {
  cursor: pointer;
}

svg.active {
  fill: rgba(3, 190, 3);
}

@media only screen and (max-width: 1000px), (max-height: 700px) {
  .panel {
    display: inline-block;
    position: absolute;
    top: 100vh;
    transition: all 1s;
  }

  .panel.show {
    top: 0;
  }
}

@media only screen and (max-width: 320px) {
  .btn-icon {
    width: 12rem;
    height: 12rem;
  }

  .option-btn {
    width: 22rem;
  }
}
</style>
