<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import Like from "@cp/Common/Like.vue";
import Button from "@cp/Common/Button.vue";
const props = defineProps(['storyContent']);
console.log(props.storyContent)
</script>

<template>
  <div class="swiper__container">
    <swiper
        :slides-per-view="1"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="breakpoints"
        class="swiper__container--story"
    >
      <swiper-slide v-for="item in storyContent">
        <router-link to="/product">
          <div class="swiper__slide--story">
            <div class="swiper__slide--story-img">
              <img :src="_image(item.img)" />
            </div>
            <Button :txt="miow"/>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>

  </div>
</template>
