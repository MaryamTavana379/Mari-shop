<script setup>
import Header from "../Common/Header.vue";
import Button from "@cp/Common/Button.vue";
import Story from "@cp/Common/Story.vue";
import ProductSwiper from "@cp/Common/ProductSwiper.vue";
import IconButton from "@cp/Common/IconButton.vue";

const storyData = [
  {id:1, img: 'image/home/story1.jpg', title:'مریم محمدپور'},
  {id:2, img: 'image/home/story2.jpg', title:'زهرا توانا'},
  {id:1, img: 'image/home/story3.jpg', title:'مریم توانا'},
  {id:2, img: 'image/home/story4.jpg', title:'مریم توانا'},
  {id:1, img: 'image/home/story1.jpg', title:'مریم توانا'},
  {id:2, img: 'image/home/story2.jpg', title:'مریم توانا'},
  {id:1, img: 'image/home/story5.jpg', title:'مریم علیزاده '},
  {id:2, img: 'image/home/story2.jpg', title:'مریم توانا'},

]
const productsData = [
  {id:1, img:'image/home/product1.jpg', title:" هودی مشکی مردانه" , price: "800,000"},
  {id:1, img:'image/home/product2.jpg', title:" هودی مردانه زانتوس" , price: "1,800,000"},
  {id:1, img:'image/home/product3.jpg', title:" هودی مردانه ایزی دو مدل" , price: "500,000"},
  {id:1, img:'image/home/product1.jpg', title:" هودی مشکی مردانه" , price: "800,000"},

]

</script>

<template>
  <div class="container">
    <Header>
      <div class="header__home">
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
          <IconButton img="icon/home/filter.svg" />

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
    <section class="story">
      <Story v-for="item in storyData" :key="item.id" :data="item"/>
    </section>
    <section class="products">
      <div class="products__container">
        <h2> محصولات محبوب </h2>
        <div class="products__container--item">
          <ProductSwiper :data="productsData" />

        </div>
      </div>
    </section>
  </div>


</template>

<style scoped>

</style>