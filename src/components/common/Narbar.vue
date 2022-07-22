<template>
  <div class="narbar">
    <h2>Logo</h2>
    <ul class="narbar-item">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/product">Product</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <button>
      <router-link to="/login">Log out!</router-link>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.narbar {
  padding: 0px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 70px;
  background-color: rgb(35, 76, 109);
  &-item {
    display: flex;
    align-items: center;
    li {
      list-style-type: none;
      margin-right: 24px;
      font-weight: 500;
      a:hover {
        color: rgb(156, 196, 226);
        cursor: pointer;
      }
    }
  }
}
</style>
