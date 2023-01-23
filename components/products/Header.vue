<template>
  <div class="tw-bg-lightGray tw-w-[100%] tw-p-4">
    <div class="tw-flex tw-justify-between tw-ml-6">
      <b-button
        class="tw-bg-white tw-text-darkPurple tw-border-none tw-shadow-sm"
        ><BIconList
      /></b-button>
      <b-input-group class="tw-w-2/3">
        <b-form-input
          class="tw-outline-none"
          placeholder="Search all product here..."
        ></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" class="tw-bg-primary">Search</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-button
        class="tw-bg-white tw-text-darkPurple tw-border-none tw-shadow-sm"
        ><BIconSliders
      /></b-button>
    </div>
  </div>
</template>

<script>
import { BIconList, BIconSliders } from "bootstrap-vue";
export default {
  components: {
    BIconList,
    BIconSliders,
  },
};
</script>
