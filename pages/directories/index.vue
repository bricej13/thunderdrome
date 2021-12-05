<template>
  <div class="p-2">
    <nuxt-link
      v-for="directory in directories"
      :key="directory.id"
      :to="{name: 'directories-folderId', params: {folderId: directory.id}}"
    >
      <div class="is-size-5">
        {{ directory.name }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Directories',
  async asyncData ({ $api }) {
    const directories = await $api.directory.rootDirectories()
    // todo: if only 1 directory, forward to that page
    return { directories }
  }
}
</script>

<style scoped>

</style>
