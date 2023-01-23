<template>
  <div
    class="tw-bg-white tw-m-2 tw-w-56 tw-rounded-md tw-shadow-sm tw-mb-4 tw-flex-grow"
  >
    <div class="tw-p-2 tw-h-90% tw-flex tw-flex-col tw-justify-between">
      <b-img
        class="tw-rounded-md tw-h-[200px]"
        center
        thumbnail
        :src="image"
      ></b-img>

      <div class="tw-pt-3">
        <p class="tw-h-28 tw-overflow-hidden hover:tw-overflow-auto tw-p-1">
          {{ content }}
        </p>
        <p class="tw-text-primary tw-font-bold tw-mt-4 tw-p-1">${{ price }}</p>
      </div>
      <b-button
        @click="onPurchase"
        variant="primary"
        class="tw-mt-2 tw-bg-primary tw-w-full tw-rounded-md tw-p-2 hover:tw-opacity-90 hover:tw-bg-primary"
        >Buy</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: { image: String, content: String, price: Number, id: Number },
  methods: {
    onPurchase() {
      this.$emit("onPurchase", {
        image: this.image,
        price: this.price,
        content: this.content,
        id: this.id,
      });
    },
  },
};
</script>
