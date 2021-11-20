<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        Edit Playlist
      </p>
    </header>
    <section class="modal-card-body">
      <FormulateForm
        :values="playlist"
        name="editPlaylist"
        @submit="submit"
      >
        <FormulateInput type="text" name="name" label="Playlist Name" />
        <FormulateInput type="text" name="comment" label="Comment" />
        <FormulateInput type="text" name="ownerName" label="Owner" />
        <FormulateInput type="checkbox" label-position="before" input-class="" name="public" label="Public" />
        <FormulateInput type="checkbox" label-position="before" input-class="" name="sync" label="Auto-Import" />
      </FormulateForm>
    </section>
    <footer class="modal-card-foot">
      <b-button
        label="Cancel"
        @click="$emit('close')"
      />
      <b-button
        label="Save"
        type="is-primary"
        @click="$formulate.submit('editPlaylist')"
      />
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EditPlaylist',
  props: {
    playlist: {
      type: Object,
      required: false,
      default: null
    }
  },
  methods: {
    ...mapActions('playlists', ['updatePlaylist']),
    async submit (v) {
      await this.updatePlaylist(v).then(v => this.$emit('close')).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
