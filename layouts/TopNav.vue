<template>
  <b-navbar type="is-transparent">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span class="is-size-4 title is-uppercase">Thunderdrome</span>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="div" class="is-flex-grow-1">
        <universal-search />
      </b-navbar-item>
    </template>

    <template #end class="is-flex-grow-1">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="is-primary" @click.prevent="logout">
            <strong>Log out {{ $store.state.user.name }}</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: 'TopNav'
}
</script>

<style>
.navbar-menu .navbar-start {
  flex-grow: 1;
}
</style>
