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
      <h1 class="h3 mb-3 fw-normal text-center">Please login</h1>
      <Input :type="'email'" :label="'Email'" />
      <Input :type="'password'" :label="'Password'" />
      <Button type="submit">Login</Button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
