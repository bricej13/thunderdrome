<template>
  <div class="groups">
    <drag-group group-id="2" />
    <drag-group group-id="3" />
    <drag-group group-id="4" />
    <drag-group group-id="5" behaviour="drop-zone" />
  </div>
</template>

<script>
export default {
  name: 'Groups'
}
</script>

<style lang="css" scoped>
.groups {
  display: flex;
  justify-content: stretch;
  margin-top: 50px;
  margin-right: 50px;
}
.group {
  margin-left: 50px;
  flex: 1;
}
</style>
