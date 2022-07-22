<template>
  <div class="login">
    <div class="login-container">
      <input type="text" v-model="formData.userName" />
      <input type="password" v-model="formData.password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
const user = {
  userName: "tiennguyen",
  password: "123456",
};
export default {
  data() {
    return {
      formData: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (
        this.formData.userName === user.userName &&
        this.formData.password === user.password
      ) {
        console.log("Dang nhap thanh cong!");
        this.$router.push("/");
      } else {
        console.log("Dang nhap khong thanh cong!");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-container {
    width: 350px;
    input {
      height: 26px;
      width: 100%;
      margin-bottom: 16px;
    }
  }
}
</style>
