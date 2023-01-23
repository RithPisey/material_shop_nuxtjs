<template>
  <div class="tw-h-[50vh] tw-overflow-auto">
    <order-item
      v-for="item in $store.state.cartItems"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
export default {};
</script>
