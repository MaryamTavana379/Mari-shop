<script setup>
import Header from "@cp/Common/Header.vue";
import IconButton from "@cp/Common/IconButton.vue";
import CountDown from "@cp/Common/CountDown.vue";
import Button from "@cp/Common/Button.vue";
import {computed, ref} from "vue";
import {useCartStore} from "@store/cart";
const store = useCartStore().items;
const setCount = (quantity, item) => {
  item.count = quantity.value;
}

const totalPrice = computed(() => {
  return store.reduce((total, item) => {
    return (total + (item.price * item.count))
  }, 0);
});
</script>

<template>
  <div class="container">
    <Header>
      <div class="header__productDetails">
        <IconButton img="icon/home/home-black.svg" route="home"/>
        <h2> سبد خرید </h2>
        <IconButton img="icon/productDetails/arrow-left.svg" @click="$router.go(-1)"/>
      </div>
    </Header>
    <section class="container__content">
      <div class="container__content--list">
        <div class="container__content--list-item" v-for="(item) in store">
          <div class="item__box">
            <div class="item__box--img">
              <img :src="_image(item.img)"/>
            </div>
          </div>
          <div class="item__box">
            <div class="item__box--text">
              <h4> {{ item.title }} </h4>
              <p> {{ item.color }} </p>
            </div>
            <div class="item__box--number">
              <strong>{{ _formatPrice(item.price * item.count) }} تومان</strong>
              <CountDown :count="item.count" :itemId="item.id" @onChanged="setCount($event,item)"/>
            </div>

          </div>
        </div>

      </div>
      <div class="container__content--total">
        <div class="container__content--total-box1">
          <div class="box__attributes">
            <p>جمع کل:</p>
            <strong>{{ _formatPrice(totalPrice) }}</strong>
          </div>
          <div class="box__attributes">
            <p> هزینه ارسال :</p>
            <strong>40,000 تومان</strong>
          </div>
        </div>
        <div class="container__content--total-box2">
          <p>مبلغ نهایی:</p>
          <strong>{{ _formatPrice(totalPrice+40000) }} تومان</strong>
        </div>
      </div>
      <Button txt="همین حالا پرداخت کنید"/>
    </section>
  </div>

</template>
