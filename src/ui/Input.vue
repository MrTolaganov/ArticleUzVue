<template>
  <div class="form-floating mb-3">
    <input
      class="form-control"
      :type="type"
      :placeholder="label"
      :id="label"
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String,
    label: String,
  },
};
</script>

<style></style>
