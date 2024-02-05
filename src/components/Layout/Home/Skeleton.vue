<script setup>
import { Skeletor } from 'vue-skeletor';
import Header from "@cp/Common/Header.vue";
import Button from "@cp/Common/Button.vue";

</script>

<template>
  <div class="container">
    <Header>
      <div class="header__home">
        <Skeletor width="370" height="65" pill/>
        <skeletor circle width="70" height="70" />
      </div>
    </Header>
    <section class="hero">
      <div class="hero__container">
        <Skeletor width="100%" height="200" />


      </div>
    </section>

  </div>



</template>

<style scoped>

</style>