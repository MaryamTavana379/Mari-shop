<script setup>
import {inject, onMounted, ref} from "vue";
import Header from "../Common/Header.vue";
import Button from "@cp/Common/Button.vue";
import Story from "@cp/Layout/Home/Story.vue";
import ProductSwiper from "@cp/Common/ProductSwiper.vue";
import IconButton from "@cp/Common/IconButton.vue";
import Navigation from "@cp/Common/Navigation.vue";
import StoryContent from "@cp/Layout/Home/StoryContent.vue";
import Modal from "@cp/modals/Filter.vue";
import Filter from "@cp/Pages/Filter.vue";
import SearchMenu from "@cp/Layout/Home/SearchMenu.vue";
import Skeleton from "@cp/Layout/Home/Skeleton.vue";

let isLoading = ref(true);

function loading(){
  setTimeout(()=>{
    isLoading.value = false;
  },1500)
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
  <Skeleton v-if="isLoading" />
  <div v-else class="container" :class="isSearchMenu  ? 'overflowHidden' : ''">
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
          <IconButton img="icon/home/filter.svg" />
        </div>
      </div>

    </Header>
    <SearchMenu v-if="isSearchMenu" @onClose="setSearchClass" :class="isSearchMenu === true? 'isActive' : searchClass"/>

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
    <section class="container__selected">
      <div class="container__selected--box">
        <div class="container__selected--box-title">
          <h2> محصولات محبوب </h2>
          <router-link to="/products">
            <span>همه</span>
          </router-link>
        </div>

        <div class="container__selected--box-item">
          <ProductSwiper :data="productsData"/>
        </div>
      </div>
    </section>
    <Navigation/>
    <Modal v-if="isShowModal" @onClose="setFilteredData" :data="productsData"/>
    <Filter v-if="filterLength > 0" :data="showFiltered" @onClose="filterLength = 0" />
  </div>
</template>
