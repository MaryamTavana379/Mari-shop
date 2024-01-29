<script setup>
import {inject, onMounted, ref} from "vue";
import Header from "../Common/Header.vue";
import Button from "@cp/Common/Button.vue";
import Story from "@cp/Layout/Home/Story.vue";
import ProductSwiper from "@cp/Common/ProductSwiper.vue";
import IconButton from "@cp/Common/IconButton.vue";
import Navigation from "@cp/Common/Navigation.vue";
import StorySwiper from "@cp/Layout/Home/StorySwiper.vue";



let showStory = ref(false);
let storyId = ref([]);
const axios = inject('axios');
const productsData = ref();
const storyData = ref()
const isShowStory = (val)=>{
  showStory.value = val.status;
  storyId.value = val.storyId;

}
const closeStory = (val)=>{
  showStory.value = val;
}
onMounted(()=>{
  axios.get(`http://localhost:3000/products`).then((res)=>{
    productsData.value = res.data
  });
  axios.get(`http://localhost:3000/story`).then((res)=>{
    storyData.value = res.data;
  })

})
console.log(storyData)
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
          <img src="@media/image/home/banner.jpg"/>
        </div>
        <div class="hero__container--btn">
          <Button txt="خرید" icon="icon/home/forward.svg" />

        </div>
      </div>
    </section>
    <section class="story">
      <Story v-for="item in storyData" :key="item.id" :data="item" @onOpen="isShowStory"/>
    </section>

    <StorySwiper v-if="showStory" :storyContent="storyData" :storyId="storyId" @onClose="closeStory"/>

    <section class="products">
      <div class="products__container">
        <h2> محصولات محبوب </h2>
        <div class="products__container--item">
          <ProductSwiper :data="productsData" />

        </div>
      </div>
    </section>
    <Navigation/>
  </div>


</template>

<style scoped>

</style>