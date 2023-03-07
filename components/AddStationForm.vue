<template>
  <FormulateForm
    v-model="data"
    @submit="create($event)"
  >
    <div class="columns" style="align-items: flex-end">
      <div class="column">
        <FormulateInput
          name="name"
          label="Station name"
          validation="required"
        />
      </div>
      <div class="column">
        <FormulateInput
          name="homepageUrl"
          label="Homepage"
        />
      </div>
      <div class="column">
        <FormulateInput
          name="streamingUrl"
          label="Streaming Url"
          required
        />
      </div>
      <div class="column is-narrow">
        <FormulateInput
          label="Create"
          type="submit"
          input-class="button"
          name="Create Station"
        />
      </div>
    </div>
  </FormulateForm>
</template>

<script>
export default {
  name: 'AddStationForm',
  data () {
    return {
      data: {
        name: null,
        homepageUrl: null,
        streamingUrl: null
      }
    }
  },
  methods: {
    create (p) {
      this.$api.station.create(p)
        .then((r) => {
          this.$buefy.toast.open({
            type: 'is-text',
            message: 'Station Created'
          })
          // this.data = {
          //   name: null,
          //   homepageUrl: null,
          //   streamingUrl: null
          // }
          return this.$emit('stationCreated', r)
        }).catch((e) => {
          console.error(e)
          this.$buefy.toast.open({
            type: 'is-danger',
            message: 'Error creating station'
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
