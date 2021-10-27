<template>
  <div class="is-flex is-flex-direction-column is-justify-content-center" style="height: 100vh">
    <section class="hero is-small is-link">
      <div class="hero-body">
        <section class="section">
          <b-field
            label="Navidrome URL"
            horizontal
          >
            <b-input v-model="creds.baseUrl" />
          </b-field>
          <b-field
            label="Username"
            horizontal
          >
            <b-input v-model="creds.username" />
          </b-field>

          <b-field label="Password" horizontal>
            <b-input
              v-model="creds.password"
              type="password"
              password-reveal
            />
          </b-field>
          <b-button :loading="loading" @click="login">
            Login
          </b-button>
        </section>
      </div>
    </section>
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
