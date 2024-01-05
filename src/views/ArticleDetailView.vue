<template>
  <div class="d-flex flex-column justify-content-center">
    <Loader v-if="isLoading" />
    <ArticleDetail v-else />
  </div>
</template>

<script>
import { ArticleDetail } from "@/components";
import { mapState } from "vuex";

export default {
  components: {
    ArticleDetail,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.articles.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
};
</script>

<style></style>
