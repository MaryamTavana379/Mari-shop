<script setup>
import {computed, inject, onMounted, ref} from "vue";
import Header from "../Common/Header.vue";
import Button from "@cp/Common/Button.vue";
import Story from "@cp/Layout/Home/Story.vue";
import ProductSwiper from "@cp/Common/ProductSwiper.vue";
import IconButton from "@cp/Common/IconButton.vue";
import Navigation from "@cp/Common/Navigation.vue";
import StoryContent from "@cp/Layout/Home/StoryContent.vue";
import Modal from "@cp/Common/Modal.vue";
import Filter from "@cp/Pages/Filter.vue";
import SearchMenu from "@cp/Layout/Home/SearchMenu.vue";
import Skeleton from "@cp/Layout/Home/Skeleton.vue";

let isLoaded = ref(false);
let pending = ref(true);

function loading(number = 0){
  if (number>1){
    isLoaded.value = true;
  }else {
    console.log(number, pending.value, isLoaded.value);

    setTimeout(()=>{
      pending.value = false;
      loading(number+1)
    },1000)
  }
}

let isSearchMenu = ref(false);
const searchClass = ref()
let showStory = ref(false);
let storyId = ref([]);
let isShowModal = ref(false);
const axios = inject('axios');
const productsData = ref();
const storyData = ref();
const showFiltered = ref();
const filterLength = ref();
const setSearchClass= (className)=>{
  searchClass.value = className;
  isSearchMenu.value = false;
}
const setFilteredData = (dataFiltered)=>{
  isShowModal.value = false;
  showFiltered.value = dataFiltered;
  filterLength.value = dataFiltered.length;
}
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
  loading();
})

</script>

<template>
  <Skeleton v-if="pending || !isLoaded" />
  <div v-else class="container">
    <Header>
      <div class="header__home">
        <div class="search">
          <div class="search__container">
            <div class="search__container--input">
              <input type="search" placeholder="جستجوی محصول" @click="isSearchMenu = true"/>

              <div class="search__container--input-icon">
                <img src="@media/icon/home/search.svg"/>
              </div>
            </div>
          </div>

        </div>
        <div class="filterIcon" @click="isShowModal = true" >
          <IconButton img="icon/home/filter.svg"/>
        </div>
        <SearchMenu v-if="isSearchMenu" @onClose="setSearchClass" :class="isSearchMenu === true? 'isActive' : searchClass"/>
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
    <Modal v-if="isShowModal" @onClose="setFilteredData" :data="productsData"/>
    <Filter v-if="filterLength > 0" :data="showFiltered" @onClose="filterLength = 0" />
  </div>
</template>
