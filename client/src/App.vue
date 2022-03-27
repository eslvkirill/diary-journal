<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default { name: 'App' };
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 1px;
  background: linear-gradient(#c1dfc4, #b7e2f0);
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html::-webkit-scrollbar {
  display: none;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

h1,
h3 {
  color: white;
  font-weight: 300;
  text-transform: uppercase;
}

h1 {
  letter-spacing: 10rem;
  font-size: calc(min(20rem, 6vw));
}

h1 span {
  font-size: calc(min(25rem, 7vw));
}

h2 {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5rem;
  font-size: 18rem;
}

h3 {
  letter-spacing: 3rem;
  font-size: 15rem;
}

h3 span {
  letter-spacing: 3rem;
  font-size: 18rem;
}

h4 {
  font-weight: 500;
}

h5 {
  font-weight: 300;
}

input,
button {
  border: none;
  background: none;
  outline: none;
  font: inherit;
  width: 100%;
}

input {
  border-bottom: 1rem solid rgb(25, 81, 94, 0.3);
  font: inherit;
  color: #19515e;
}

input[type='radio'] {
  display: none;
}

input:invalid {
  box-shadow: none;
}

button {
  background: rgb(82, 129, 141);
  color: white;
  padding: 5rem;
  margin: 10rem 0;
  cursor: pointer;
}

form {
  position: relative;
  padding: 10rem;
  height: 87%;
}

#app {
  position: relative;
  font: 16rem 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #19515e;
}

.action-boxes {
  position: relative;
  border-radius: 10rem;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.7);
  backdrop-filter: blur(10rem);
}
</style>
