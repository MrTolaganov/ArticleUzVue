<template>
  <Loader v-if="isLoading" class="d-flex justify-content-center" />
  <ArticleForm
    v-else-if="!isLoading && article"
    :initialValue="initialValue"
    :onSubmitHandler="editArticleHandler"
    :clickText="'Edit'"
  />
</template>

<script>
import { mapState } from "vuex";
import ArticleForm from "../components/ArticleForm.vue";

export default {
  methods: {
    editArticleHandler(article) {
      this.$store
        .dispatch("updateArticle", { slug: this.$route.params.slug, article })
        .then(() => this.$router.push("/"));
    },
  },
  components: {
    ArticleForm,
  },
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
      isLoading: (state) => state.articles.isLoading,
    }),
    initialValue() {
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
      };
    },
  },
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
};
</script>

<style></style>
