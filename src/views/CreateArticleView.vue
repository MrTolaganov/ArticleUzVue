<template>
  <ArticleForm
    :initialValue="initialValue"
    :onSubmitHandler="createArticle"
    :clickText="'Create'"
  />
</template>

<script>
import { mapState } from "vuex";
import ArticleForm from "../components/ArticleForm.vue";

export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  methods: {
    createArticle(article) {
      this.$store.dispatch("createArticle", article);
      this.$router.push("/");
    },
  },
  components: {
    ArticleForm,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.control.isLoading,
    }),
    initialValue() {
      return {
        title: "",
        description: "",
        body: "",
      };
    },
  },
};
</script>

<style></style>
