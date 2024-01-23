<script setup>
import Header from "@cp/Common/Header.vue";
import IconButton from "@cp/Common/IconButton.vue";
</script>

<template>
  <div class="container">
    <Header>
      <div class="header__productDetails">
        <IconButton img="icon/productDetails/arrow-right.svg" />
        <h2>  سبد خرید </h2>
        <IconButton img="icon/productDetails/arrow-left.svg" />
      </div>
    </Header>
    <section class="container__content">
      <div class="container__content--list">
        <div class="container__content--list-item">
          <div class="item__box">
            <div class="item__box--img">
              <img src="@media/image/home/product3.jpg" />
            </div>
          </div>
          <div class="item__box">
            <div class="item__box--text">
              <h4> هودی مردانه ایزی دو مدل </h4>
              <p> رنک زرد </p>
            </div>
            <div class="item__box--number">
              <strong></strong>

            </div>

          </div>

        </div>
      </div>

    </section>

  </div>

</template>
