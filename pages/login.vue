<template>
  <div>
    <div class="is-flex is-justify-content-center is-flex-direction-column" style="height: 100vh">
      <div class="columns">
        <div class="column is-one-third is-offset-one-third">
          <div class="is-size-2 has-text-weight-bold has-text-centered">
            Welcome to the Thunderdrome
          </div>
          <b-field>
            <b-input v-model="creds.baseUrl" placeholder="Navidrome URL" autofocus />
          </b-field>
          <b-field>
            <b-input v-model="creds.username" placeholder="Username" />
          </b-field>
          <b-field>
            <b-input
              v-model="creds.password"
              type="password"
              password-reveal
              placeholder="Password"
            />
          </b-field>
          <b-button :loading="loading" :disabled="!canSubmit" @click="login">
            Login
          </b-button>
        </div>
      </div>
      <rainbow />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'anon',
  auth: false,
  data () {
    return {
      loading: false,
      creds: {
        username: '',
        password: '',
        baseUrl: ''
      }
    }
  },
  computed: {
    canSubmit () {
      return this.creds.username.length > 0 && this.creds.password.length > 0 && this.creds.baseUrl.length > 0
    }
  },
  methods: {
    // eslint-disable-next-line require-await
    async login () {
      try {
        this.loading = true
        this.$axios.setBaseURL(this.baseUrl)
        this.$store.dispatch('user/login', this.creds)
          .then(() => {
            this.loading = false
            this.$router.push('/')
          })
        // const response = await this.$auth.loginWith('local', { data: this.creds })
        // console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
