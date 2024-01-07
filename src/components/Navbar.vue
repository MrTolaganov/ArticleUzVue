<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center border-bottom mb-3"
  >
    <RouterLink
      :to="{ name: 'home' }"
      class="d-flex align-items-center link-body-emphasis text-decoration-none"
    >
      <img src="@/images/logo.png" alt="" class="logo" />
      <span class="heading">ArticleUz</span>
    </RouterLink>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <template v-if="isLoggedIn">
        <RouterLink
          :to="{ name: 'create-article' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
        >
          Create
        </RouterLink>
        <RouterLink
          :to="{ name: 'home' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
        >
          {{ currentUser.username }}
        </RouterLink>
        <RouterLink
          :to="{name: 'login'}"
          class="me-3 py-2 link-body-emphasis text-decoration-none text-danger"
          @click="logout"
        >
          Logout
        </RouterLink>
      </template>
      <template v-if="isAnonymous">
        <RouterLink
          :to="{ name: 'login' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
          >Login</RouterLink
        >
        <RouterLink
          :to="{ name: 'register' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
          >Register</RouterLink
        >
      </template>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getterTypes } from "@/modules/types";

export default {
  methods: {
    toHomeHandler() {
      return this.$router.push({ name: "home" });
    },
    logout() {
      return this.$store.dispatch("logout");
    },
  },
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
};
</script>

<style>
.logo {
  width: 100px;
  height: 100px;
  padding-top: 4px;
}
.heading {
  font-size: 2.5rem;
  font-weight: 700;
  background-image: linear-gradient(90deg, #c850c0 9%, #ffcc70 99%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
