<template>
  <div class="home">home</div>
  <button @click="click">click</button>
  {{ userName }}
</template>

<script>
export default {
  created() {
    console.log("create");
  },
  data() {
    return {
      userName: "tiennguyen",
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    click() {
      this.userName = "Linh";
    },
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
