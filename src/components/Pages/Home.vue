<script setup>
import {inject, onMounted, ref} from "vue";
import Header from "../Common/Header.vue";
import Button from "@cp/Common/Button.vue";
import Story from "@cp/Layout/Home/Story.vue";
import ProductSwiper from "@cp/Common/ProductSwiper.vue";
import IconButton from "@cp/Common/IconButton.vue";
import Navigation from "@cp/Common/Navigation.vue";
import StoryContent from "@cp/Layout/Home/StoryContent.vue";


let showStory = ref(false);
let storyId = ref([]);
const axios = inject('axios');
const productsData = ref();
const storyData = ref()
const setStory = (item) => {
  item.seen = 1;
  storyId.value = item.id;
  showStory.value = true;
}
const closeStory = (seenItems) => {
  seenItems.forEach((item) => {
    item.seen = 1;
  });
  showStory.value = false;
};

onMounted(() => {
  axios.get(`http://localhost:3000/products`).then((res) => {
    productsData.value = res.data
  });
  axios.get(`http://localhost:3000/story`).then((res) => {
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
                <img src="@media/icon/home/search.svg"/>
              </div>
            </div>

          </div>
        </div>
        <div class="filter">
          <IconButton img="icon/home/filter.svg"/>

        </div>
      </div>
    </Header>
    <section class="hero">
      <div class="hero__container">
        <div class="hero__container--banner">
          <img src="@media/image/home/banner.jpg"/>
        </div>
        <div class="hero__container--btn">
          <Button txt="خرید" icon="icon/home/forward.svg"/>

        </div>
      </div>
    </section>
    <section class="story">
      <Story :data="storyData" @onOpen="setStory"/>
    </section>

    <StoryContent v-if="showStory" :storyContent="storyData" :storyId="storyId" @onClose="closeStory"/>

    <section class="products">
      <div class="products__container">
        <h2> محصولات محبوب </h2>
        <div class="products__container--item">
          <ProductSwiper :data="productsData"/>
        </div>
      </div>
    </section>
    <Navigation/>
  </div>


</template>

<style scoped>

</style>