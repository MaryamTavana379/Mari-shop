<script setup>
import Header from "@cp/Common/Header.vue";
import IconButton from "@cp/Common/IconButton.vue";
import CountDown from "@cp/Common/CountDown.vue";
import Button from "@cp/Common/Button.vue";
import {computed, ref} from "vue";

const cart = ref([
  {id: 1, img: 'image/home/product1.jpg', title: " هودی مشکی مردانه", price: 800000, color: ' رنگ مشکی', count: 1},
  {id: 2, img: 'image/home/product2.jpg', title: " هودی مردانه زانتوس", price: 1800000, color: ' رنگ خردلی', count: 1},
  {
    id: 3,
    img: 'image/home/product3.jpg',
    title: " هودی مردانه ایزی دو مدل",
    price: 500000,
    color: ' رنگ مشکی',
    count: 1
  },
]);

const setCount = (quantity, item) => {
  item.count = quantity.value;
}

const totalPrice = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + (item.price * item.count)
  }, 0);
});
</script>

<template>
  <div class="container">
    <Header>
      <div class="header__productDetails">
        <IconButton img="icon/home/home.svg"/>
        <h2> سبد خرید </h2>
        <IconButton img="icon/cart/more.svg" linkAddress="/"/>
      </div>
    </Header>
    <section class="container__content">
      <div class="container__content--list">
        <div class="container__content--list-item" v-for="(item) in cart">
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
              <CountDown :count="item.count" @onChanged="setCount($event,item)"/>
            </div>

          </div>
        </div>

      </div>
      <div class="container__content--total">
        <div class="container__content--total-box1">
          <div class="box__attributes">
            <p>جمع کل:</p>
            <strong>{{ totalPrice }}</strong>
          </div>
          <div class="box__attributes">
            <p> هزینه ارسال :</p>
            <strong>20,000 تومان</strong>
          </div>
        </div>
        <div class="container__content--total-box2">
          <p>مبلغ نهایی:</p>
          <strong>{{ _formatPrice(totalPrice) }} تومان</strong>
        </div>
      </div>
      <Button txt="همین حالا پرداخت کنید"/>
    </section>
  </div>

</template>
