<template>
  <NarBar />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import NarBar from "@/components/common/Narbar.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  components: {
    NarBar,
    Footer,
  },
};
</script>

<style lang="scss"></style>
