<script setup>
import { Skeletor } from 'vue-skeletor';
import Header from "@cp/Common/Header.vue";


</script>

<template>
  <div class="container">
    <Header>
      <div class="header__home">
        <Skeletor width="370" height="65" pill/>
        <Skeletor circle width="70" height="70" />
      </div>
    </Header>
    <section class="hero">
      <div class="hero__container">
        <Skeletor width="100%" height="180" />
      </div>
    </section>
    <section class="story">
      <Skeletor circle width="80" height="80" v-for="item in 5"/>
    </section>
    <section class="products">
      <div class="products__container">
        <Skeletor width="150" height="20" />
        <div class="products__container--item">
          <Skeletor width="200" height="240" v-for="item in 2" />
        </div>
        <div class="swiper">
          <div class="swiper__meta" v-for="item in 2" >
            <Skeletor width="150" height="20" v-for="item in 2"  />
          </div>

        </div>
      </div>
    </section>

  </div>



</template>

<style scoped>
.products__container--item{
  display: flex;
  justify-content: space-between;
}
.swiper{
  display: flex;
  gap: 6rem;
}
.swiper__meta{
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
}
</style>