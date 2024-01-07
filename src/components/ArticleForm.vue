<template>
  <h1 class="mt-5 mb-5 text-center">{{ clickText }} article</h1>
  <div class="w-50 mx-auto">
    <form @submit.prevent>
      <Input type="text" label="Title" v-model="title" />
      <TextArea type="text" label="Description" v-model="description" />
      <TextArea type="text" label="Body" v-model="body" />
      <Button @click="editArticle" :disabled="isLoading">{{
        clickText
      }}</Button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    initialValue: {
      type: Object,
      required: true,
    },
    onSubmitHandler: {
      type: Function,
      required: true,
    },
    clickText: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.control.isLoading,
    }),
  },
  data() {
    return {
      title: this.initialValue.title,
      description: this.initialValue.description,
      body: this.initialValue.body,
      isEdit: false,
    };
  },
  methods: {
    editArticle() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
      };
      this.onSubmitHandler(article);
    },
  },
};
</script>

<style></style>
