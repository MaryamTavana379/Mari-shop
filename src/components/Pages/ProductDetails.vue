<script setup>
import Header from "@cp/Common/Header.vue";
import IconButton from "@cp/Common/IconButton.vue";
import {inject, onMounted, ref} from "vue";
import Like from "@cp/Common/Like.vue";
import Button from "@cp/Common/Button.vue";
import {useCartStore} from "@store/cart";

const cartStore = useCartStore();
const productsCount = cartStore.items.length;
const props = defineProps(['id'])
let currentVariety = ref({});
let activeSize = ref('XS');
const product = ref([])
const axios = inject('axios');
onMounted(() => {
  axios.get(`http://localhost:3000/products/${props.id}`).then((res) => {
    product.value = res.data;
    setVarieties();
  });
});
const varieties = ref([]);

function setVarieties() {
  if (!product.value) return;

  varieties.value = product.value?.varieties;
  if (varieties.value.length > 0)
    currentVariety.value = varieties.value[0];
}

</script>

<template>
  <div class="container">
    <Header>
      <div class="header__productDetails">
        <IconButton img="icon/productDetails/arrow-right.svg" route="cart"  @click="$router.go(-1)"/>
        <h2> جزییات محصول </h2>
        <IconButton img="icon/productDetails/arrow-left.svg"/>
      </div>
    </Header>

    <section class="container__content">
      <section class="container__content--product">
        <div class="container__content--product-img">
          <div class="img__box">
            <img :src="_image(currentVariety.img)" v-if="!!currentVariety.img"/>
          </div>
          <div class="img__colors">
            <div v-for="v in varieties" :style="{backgroundColor: v.color}" @click="currentVariety = v"
                 :class="v.color === currentVariety.color? 'isActiveColor': ''">
            </div>
          </div>
        </div>
        <section class="container__content--product-meta">
          <div class="meta__txt">
            <h1>{{ currentVariety.title }}</h1>
            <h2>{{ currentVariety.price }} تومان</h2>
          </div>
          <div class="meta__icon">
            <like/>
          </div>
        </section>
      </section>
      <section class="container__content--properties">
        <div class="container__content--properties-title">
          <strong> سایز :</strong>
        </div>
        <div class="container__content--properties-list">
          <div class="list__item" v-for="size in currentVariety.size" @click="activeSize = size.name"
               :class="size.name === activeSize ? 'isActiveSize' : size.name">
            <span>{{ size.name }}</span>
          </div>
        </div>
      </section>
    </section>

    <section class="container__footer">
      <div class="container__footer--items">
        <router-link to="/cart">
          <Button @click="cartStore.addItem(product)" txt="اضافه به سبد خرید" />
        </router-link>
        <div class="cartButton">
          
          <strong>{{productsCount}}</strong>
          <IconButton img="icon/productDetails/cart.svg" />
        </div>
      </div>
    </section>
  </div>

</template>
