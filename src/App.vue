<template>
  <div class="container">
    <Navbar/>
    <RouterView/>
  </div>
</template>

<script>
import { Navbar } from './components';

export default {
  components: {
    Navbar,
  }
};
</script>

<style></style>
