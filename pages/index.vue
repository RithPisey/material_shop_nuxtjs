<template>
  <div class="tw-bg-lightGray tw-w-screen tw-h-screen">
    <main class="tw-flex tw-w-screen">
      <product-sale />
      <product-order v-if="getOrdersAmount > 0" />
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => {
    return {
      productOrders: 0,
    };
  },
  mounted() {},
  computed: {
    getOrdersAmount() {
      return this.$store.state.cartItems.length;
    },
  },
};
</script>
