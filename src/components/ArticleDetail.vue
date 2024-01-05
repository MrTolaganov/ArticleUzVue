<template>
  <div v-if="article">
    <div class="row">
      <div class="col-12">
        <p class="opacity-75">Title:</p>
        <p class="fs-2 font-monospace">{{ article.title }}</p>
      </div>
      <div class="col-8 col-md-12 col-lg-8  mt-3">
        <p class="opacity-75">Description:</p>
        <p class="font-monospace">{{ article.description }}</p>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2 mt-3">
        <p class="opacity-75">Created at:</p>
        <p class="font-monospace">
          {{ new Date(article.createdAt).toLocaleDateString("us") }}
        </p>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2 mt-3">
        <p class="opacity-75">Updated at:</p>
        <p class="font-monospace">
          {{ new Date(article.updatedAt).toLocaleDateString("us") }}
        </p>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 mt-3">
        <p class="opacity-75">Author:</p>
        <div class="d-flex align-items-center gap-3">
          <div
            class="d-flex justify-content-center align-items-center bg-secondary"
            style="width: 50px; height: 50px; border-radius: 50%"
          >
            <span class="text-light text-uppercase fw-bold">{{
              article.author.username[0]
            }}</span>
          </div>
          <div class="text-capitalize fw-bold font-monospace">
            {{ article.author.username }}
          </div>
        </div>
        <p class="opacity-75 mt-4 ">Bio:</p>
        <p class="font-monospace">{{ article.author.bio }}</p>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-8 mt-3">
        <p class="opacity-75">Body:</p>
        <p class="font-monospace">{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
    }),
  },
};
</script>

<style></style>
