<script setup>
import Header from "@cp/Common/Header.vue";
import IconButton from "@cp/Common/IconButton.vue";
import {ref} from "vue";
import Like from "@cp/Common/Like.vue";
const colors = [
  {id:1, color: '#758087', name:'darkGray'},
  {id:2, color: '#9aa7af', name:'gray'},
  {id:3, color: '#c4ced5', name:'lightGray'},
  {id:4, color: '#d7d7d7', name:'white'},
];
const sizes = [
  {id:1, name:'XS'},
  {id:2,  name:'S'},
  {id:3,  name:'M'},
  {id:4,  name:'L'},
  {id:5,  name:'XL'},
]
let activeColor = ref('darkGray');
let activeSize = ref('XS');



</script>

<template>
  <div class="container">
    <Header>
      <div class="header__productDetails">
        <IconButton img="icon/home/filter.svg" />
        <h2> جزییات محصول </h2>
        <IconButton img="icon/home/filter.svg" />
      </div>
    </Header>


    <section class="container__content">
      <section class="container__content--product">
        <div class="container__content--product-img">
          <div class="img__box">
            <img src="@media/image/home/product1.jpg" />
          </div>
          <div class="img__colors">
            <div  v-for="color in colors" :style="{backgroundColor: color.color}" @click="activeColor = color.name" :class="color.name === activeColor? 'isActiveColor': ''">
            </div>
          </div>
        </div>
        <section class="container__content--product-meta">
          <div class="meta__txt">
            <h1>هودی مشکی مردانه</h1>
            <h2>800,000 تومان</h2>
          </div>
          <div class="meta__icon">
            <like />
          </div>

        </section>

      </section>
      <section class="container__content--properties">
        <div class="container__content--properties-title">
          <strong> سایز :</strong>
        </div>
        <div class="container__content--properties-list">
          <div class="list__item" v-for="size in sizes" @click="activeSize = size.name" :class="size.name === activeSize ? 'isActiveSize' : size.name">
            <span>{{size.name}}</span>
          </div>
        </div>

      </section>

    </section>

  </div>

</template>
