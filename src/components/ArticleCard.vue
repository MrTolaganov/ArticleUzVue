<template>
  <div class="col">
    <div class="card shadow-sm h-100">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
      </svg>
      <div class="card-body d-flex flex-column justify-content-between">
        <p class="fw-bold">
          {{ article.title }}
        </p>
        <p class="text-muted">{{ article.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-success"
              @click="navigateHandler"
            >
              Read
            </button>
            <template v-if="username === article.author.username">
              <button
                type="button"
                class="btn btn-sm btn-outline-warning"
                :disabled="isLoading"
                @click="editArticleHandler"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                :disabled="isLoading"
                @click="deleteArticleHandler"
              >
                Delete
              </button>
            </template>
          </div>
          <small class="text-muted">{{
            new Date(article.createdAt).toLocaleDateString("us")
          }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateHandler() {
      return this.$router.push(`/article/${this.article.slug}`);
    },
    deleteArticleHandler() {
      return this.$store
        .dispatch("deleteArticle", this.article.slug)
        .then(() => {
          this.$store.dispatch("articles");
        });
    },
    editArticleHandler() {
      return this.$router.push(`/edit-article/${this.article.slug}`);
    },
  },
  computed: {
    ...mapState({
      username: (state) => state.auth.user.username,
      isLoading: (state) => state.control.isLoading,
    }),
  },
};
</script>
