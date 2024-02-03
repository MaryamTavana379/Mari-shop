<script setup>
import Card from "@cp/Common/Card.vue";
import IconButton from "@cp/Common/IconButton.vue";
import Header from "@cp/Common/Header.vue";

const props = defineProps(['data']);

</script>

<template>
  <div class="filter">
    <Header>
      <div class="header__productDetails">
        <IconButton img="icon/productDetails/arrow-right.svg" />
        <h2> فیلتر شده </h2>
        <IconButton img="icon/productDetails/arrow-left.svg" />
      </div>
    </Header>
    <section class="filter__container">
      <div class="filter__container--card" v-for="item1 in data">
        <Card  v-for="item2 in item1" :data="item2"/>
      </div>
    </section>

  </div>

</template>

<style scoped>

</style>