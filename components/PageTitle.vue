<template>
  <div class="page-title">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
.page-title {
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: -3px;
}

</style>
