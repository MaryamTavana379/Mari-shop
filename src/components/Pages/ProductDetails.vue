<script setup>
import Header from "@cp/Common/Header.vue";
import IconButton from "@cp/Common/IconButton.vue";
import { inject, onMounted, ref} from "vue";
import Like from "@cp/Common/Like.vue";
import Button from "@cp/Common/Button.vue";

const props = defineProps(['id'])

let activeItem = ref({});
let activeSize = ref('XS');
const productsData = ref([])
const axios = inject('axios');
onMounted(() => {
  axios.get(`http://localhost:3000/products/${props.id}`).then((res) => {
    productsData.value = res.data;
console.log(res.data)
    setVarieties();
  });
});
const varieties = ref([]);

function setVarieties() {
  if (productsData.value == null) return ;

  productsData.value?.varieties.map((item)=>{
    varieties.value.push(item)
  });

  activeItem.value = varieties.value[0];
}


</script>

<template>
  <div class="container">
    <Header>
      <div class="header__productDetails">
        <IconButton img="icon/productDetails/cart.svg"/>
        <h2> جزییات محصول </h2>
        <IconButton img="icon/productDetails/arrow-left.svg" linkAddress="/"/>
      </div>
    </Header>

    <section class="container__content">
      <section class="container__content--product">
        <div class="container__content--product-img">
          <div class="img__box">
            <img :src="_image(activeItem.img)" v-if="!!activeItem.img"/>
          </div>
          <div class="img__colors">
            <div v-for="v in varieties" :style="{backgroundColor: v.color}" @click="activeItem = v"
                 :class="v.color === activeItem.color? 'isActiveColor': ''">
            </div>
          </div>
        </div>
        <section class="container__content--product-meta">
          <div class="meta__txt">
            <h1>{{activeItem.title}}</h1>
            <h2>{{activeItem.price}} تومان</h2>
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
          <div class="list__item" v-for="size in activeItem.size" @click="activeSize = size.name"
               :class="size.name === activeSize ? 'isActiveSize' : size.name">
            <span>{{ size.name }}</span>
          </div>
        </div>

      </section>

    </section>

    <section class="container__footer">
      <div class="container__footer--items">
        <router-link to="/cart">
          <Button txt="خرید" />
        </router-link>
        <IconButton img="icon/productDetails/cart.svg"/>
      </div>
    </section>

  </div>

</template>
