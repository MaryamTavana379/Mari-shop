<script setup>
import {ref} from "vue";

const icons=[
  {id:1, img:'icon/home/home.svg', route:'/'},
  {id:2, img:'icon/home/bag.svg',  route:'cart'},
  {id:3, img:'icon/home/alarm.svg', },
  {id:4, img:'icon/home/profile.svg'},
]
let itemActive = ref(icons[0].id)
</script>

<template>
  <div class="navigation">
    <div class="navigation__container">
      <div class=" navigation__container--list">

        <div class="navigation__container--list-item" v-for="icon in icons" @click="itemActive = icon.id"  :class="icon.id === itemActive ? 'isActive' : '' ">

          <router-link :to="'/'+ icon.route">
            <img :src="_image(icon.img)" />
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>