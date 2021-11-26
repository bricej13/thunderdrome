<template>
  <FormulateForm
    v-model="data"
    @submit="create($event)"
  >
    <div class="columns">
      <div class="column">
        <FormulateInput
          name="name"
          label="Playlist name"
          validation="required"
        />
      </div>
      <div class="column">
        <FormulateInput
          name="comment"
          label="Comment"
        />
      </div>
      <div class="column">
        <FormulateInput
          name="public"
          :options="{true: 'True', false: 'False'}"
          type="select"
          label="Public"
        />
      </div>
      <div class="column is-narrow">
        <FormulateInput
          label="Submit"
          type="submit"
          name="Submit this form!"
        />

        <!--        <b-field label="Create">-->
        <!--          <b-button-->
        <!--            type="is-primary"-->
        <!--            tag="input"-->
        <!--            native-type="submit"-->
        <!--          >-->
        <!--            Create-->
        <!--          </b-button>-->
        <!--        </b-field>-->
      </div>
    </div>
  </FormulateForm>
</template>

<script>
export default {
  name: 'AddPlaylistForm',
  data () {
    return {
      data: {
        name: null,
        comment: null,
        public: true
      }
    }
  },
  methods: {
    create (p) {
      this.$api.playlist.create(p)
        .then(r => this.$emit('playlistCreated', r))
    }
  }
}
</script>

<style scoped>

</style>
