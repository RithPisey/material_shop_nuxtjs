<template>
  <div class="tw-p-5 tw-m-3 tw-rounded-md tw-shadow-sm tw-flex">
    <b-img class="tw-w-[100px] tw-rounded-md" :src="item.payload.image"></b-img>
    <div
      class="tw-ml-5 tw-w-[100%] tw-flex tw-flex-col tw-justify-between tw-p-5"
    >
      <p class="tw-font-bold tw-h-16 tw-overflow-auto">
        {{ item.payload.content }}
      </p>
      <div class="tw-flex tw-mt-10 tw-justify-between">
        <b-form-spinbutton
          class="tw-w-36 tw-h-7"
          id="demo-sb"
          min="0"
          max="100"
          :value="onUpdateAmount"
          @change="onAmountChange"
        ></b-form-spinbutton>
        <small class="tw-text-primary tw-font-bold"
          >${{ item.payload.price * item.amount }}</small
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data: () => {
    return {
      currentAmount: 0,
    };
  },
  mounted() {
    this.currentAmount = this.item.amount;
  },
  watch: {},
  computed: {
    onUpdateAmount() {
      this.currentAmount = this.item.amount;
      return this.currentAmount;
    },
  },
  methods: {
    onAmountChange(value) {
      const payload = this.item.payload;
      this.$store.dispatch("onUpdateTotalPrice");
      this.$store.dispatch("onAmountChange", {
        payload,
        amount: value,
        subTotal: value * payload.price,
      });
      this.$store.dispatch("onUpdateTotalPrice");
    },
  },
};
</script>
