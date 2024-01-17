<script setup>
import Header from "../Common/Header.vue";
import Button from "@cp/Common/Button.vue";

</script>

<template>
  <div class="container">
    <Header>
      <div class="search">
        <div class="search__container">
          <div class="search__container--input">
            <input type="search" placeholder="جستجوی محصول"/>
            <div class="search__container--input-icon">
              <img src="@media/icon/home/search.svg" />
            </div>
          </div>

        </div>
      </div>
      <div class="filter">
        <div class="filter__container">
          <img src="@media/icon/home/filter.svg" />
        </div>
      </div>
    </Header>
    <section class="hero">
      <div class="hero__container">
        <div class="hero__container--banner">
          <img src="@media/image/home/banner.png"/>
        </div>
        <div class="hero__container--btn">
          <Button />

        </div>
      </div>
    </section>
  </div>


</template>

<style scoped>

</style>