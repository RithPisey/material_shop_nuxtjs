<template>
  <div class="tw-w-[100%] tw-p-4 tw-h-[87vh] tw-overflow-auto">
    <Tag :categories="categories" />
    <div
      class="tw-ml-5 tw-flex tw-flex-wrap tw-justify-evenly tw-overflow-auto"
    >
      <ProductCard
        v-for="product in products.filter((value) =>
          getCurrentTag === 'all'
            ? products
            : value.category === getCurrentTag
            ? true
            : false
        )"
        :key="product.id"
        :image="product.image"
        :content="product.description"
        :price="product.price"
        :id="product.id"
        :category="product.category"
        @onPurchase="onPurchase"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products: [],
      categories: [],
    };
  },

  methods: {
    onPurchase(data) {
      this.$store.dispatch("setCartItem", data);
      this.$store.dispatch("onUpdateTotalPrice");
    },
  },
  computed: {
    getCurrentTag() {
      return this.$store.state.currentTag;
    },
  },
  async fetch() {
    const api = "https://fakestoreapi.com/products";
    this.products = await fetch(api).then((res) => res.json());
    const cat = Array.from(new Set(this.products.map((pro) => pro.category)));
    this.categories = ["all", ...cat];
  },
};
</script>

<!-- methods: {
  products() {
    return Array.from({ length: 30 }, (v,i) => {
      return{
        id:i,
        image: faker.commerce.
      }
    });
  },
}, -->
