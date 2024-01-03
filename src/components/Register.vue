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
      <Validation
        v-if="validationErrors"
        :validationErrors="validationErrors"
      />
      <Input :type="'text'" :label="'Username'" v-model="username" />
      <Input :type="'email'" :label="'Email'" v-model="email" />
      <Input :type="'password'" :label="'Password'" v-model="password" />
      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Register</Button
      >
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Validation from "@/components/Validation.vue";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  components: {
    Validation,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      validationErrors: (state) => state.auth.errors,
    }),
  },
  methods: {
    submitHandler(event) {
      event.preventDefault();
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then((user) => {
          console.log("User", user);
          this.$router.push({ name: "home" });
        })
        .catch((error) => console.log("Error", error));
    },
  },
};
</script>

<style></style>
