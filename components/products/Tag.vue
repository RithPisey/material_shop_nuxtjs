<template>
  <div class="tw-p-1 tw-flex tw-overflow-auto tw-bg-lightGray tw-w-[100%]">
    <div class="tw-ml-7">
      <b-button
        v-for="(category, index) in categories"
        :key="index + 1"
        @click="onCurrentTagChange"
        :class="{
          'tw-bg-white tw-text-darkPurple tw-px-7 tw-py-1 tw-rounded-lg tw-border-none tw-shadow-sm tw-ml-2 tw-mb-2 hover:tw-bg-primary': true,
          'tw-bg-primary  tw-text-white':
            getCurrenbTag === category ? true : false,
        }"
        >{{ category }}</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
  data: () => {
    return {};
  },
  methods: {
    onCurrentTagChange(e) {
      const currentTag = e.target.textContent;
      this.$store.dispatch("onSetCurrentTag", currentTag);
    },
  },
  computed: {
    getCurrenbTag() {
      return this.$store.state.currentTag;
    },
  },
};
</script>
