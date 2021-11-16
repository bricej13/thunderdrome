<template>
  <ion-icon :name="icon[1]" :size="size" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    name () {
      return this.icon[1]
    }
  }
}
</script>

<style scoped>

</style>
