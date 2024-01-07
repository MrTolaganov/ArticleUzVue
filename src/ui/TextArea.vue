<template>
  <div class="form-floating mb-3">
    <textarea
      style="height: 100px"
      class="form-control"
      :type="type"
      :placeholder="label"
      :id="label"
      :value="modelValue"
      @input="updateInput"
    ></textarea>
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    type: String,
    label: String,
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
