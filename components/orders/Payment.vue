<template>
  <div class="tw-w-full">
    <div class="tw-p-5 tw-m-3 tw-shadow-sm">
      <div class="tw-flex tw-justify-between tw-mb-3">
        <p class="tw-text-gray tw-font-bold">Subtotal</p>
        <p class="tw-text-primary tw-font-bold">$0.00</p>
      </div>
      <div class="tw-flex tw-justify-between tw-mb-3">
        <p class="tw-text-gray tw-font-bold">Discount sales</p>
        <p class="tw-text-primary tw-font-bold">$0.00</p>
      </div>
      <div class="tw-flex tw-justify-between tw-mb-3">
        <p class="tw-text-gray tw-font-bold">Total sales tax</p>
        <p class="tw-text-primary tw-font-bold">$0.00</p>
      </div>
    </div>
    <div class="tw-p-5 tw-m-3">
      <div class="tw-flex tw-justify-between tw-mb-3">
        <p class="tw-text-gray tw-font-bold tw-text-2xl">Total</p>
        <p class="tw-text-primary tw-font-bold tw-text-2xl">
          ${{ onTotalChange }}
        </p>
      </div>
      <b-button
        variant="primary"
        class="tw-bg-primary tw-w-full tw-rounded-md tw-p-2 hover:tw-opacity-90 hover:tw-bg-primary"
        >Pay Now</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      total: 0,
    };
  },
  computed: {
    onTotalChange() {
      this.total = this.$store.state.total;
      return this.total;
    },
  },
};
</script>
