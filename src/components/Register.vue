<template>
  <div class="d-flex flex-direction-column justify-content-center mt-4">
    <form class="w-25">
      <img
        class="d-block mx-auto"
        src="@/images/logo.png"
        alt=""
        width="100"
        height="100"
      />
      <h1 class="h3 mb-3 fw-normal text-center">Please register</h1>
      <Input :type="'text'" :label="'Username'" />
      <Input :type="'email'" :label="'Email'" />
      <Input :type="'password'" :label="'Password'" />
      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Register</Button
      >
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
  methods: {
    submitHandler(event) {
      event.preventDefault();
      const data = {
        username: "poli",
        email: "poli@gmail.com",
        password: "polipass",
      };
      this.$store
        .dispatch("register", data)
        .then((user) => console.log("User", user))
        .catch((error) => console.log("Error", error));
    },
  },
};
</script>

<style></style>
