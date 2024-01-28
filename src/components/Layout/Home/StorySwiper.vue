<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import Like from "@cp/Common/Like.vue";
import Button from "@cp/Common/Button.vue";
const props = defineProps(['storyContent']);
console.log(props.storyContent)
</script>

<template>
  <div class="swiper__container" @click.prevent="$emit('onClose', false)">
    <swiper
        :slides-per-view="1"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="breakpoints"
        class="swiper__container--story"
    >
      <swiper-slide v-for="item in storyContent">
        <div class="swiper__container--story-box">
          <div class="box__img">
            <img :src="_image(item.img)" />
          </div>
          <router-link to="/product">
            <Button txt="miow"/>
          </router-link>
        </div>
        <div class="swiper__container--story-close" @click.prevent="$emit('onClose', false)">
          <img src="@media/icon/home/close.svg" />
        </div>

      </swiper-slide>
    </swiper>

  </div>
</template>
