<template>
  <div>
    <div class="is-flex is-justify-content-center is-flex-direction-column" style="height: 100vh">
      <div class="section columns">
        <div class="column is-8 is-offset-2 is-one-third-widescreen is-offset-one-third-widescreen">
          <div class="is-size-2 has-text-weight-bold has-text-centered">
            welcome to the
          </div>
          <div class="title is-size-2 has-text-centered is-uppercase">
            Thunderdrome
          </div>
          <b-field>
            <b-input v-model="creds.baseUrl" placeholder="Navidrome URL (i.e. https://demo.navidrome.org/)" autofocus />
          </b-field>
          <b-field>
            <b-input v-model="creds.username" placeholder="Username (i.e. demo)" />
          </b-field>
          <b-field>
            <b-input
              v-model="creds.password"
              type="password"
              password-reveal
              placeholder="Password (i.e. demo)"
              @keyup.native.enter="login"
            />
          </b-field>
          <div v-if="error">
            {{ error }}
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <b-button class="is-ghost" @click="setDemoCreds">
                  try demo
                </b-button>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <b-button :loading="loading" :disabled="!canSubmit" @click="login">
                  Login
                </b-button>
              </div>
            </div>
          </div>
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
      error: null,
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
    login () {
      this.loading = true
      this.$axios.setBaseURL(this.baseUrl)
      this.$store.dispatch('user/login', this.creds)
        .then(() => {
          this.$router.push('/')
        }).catch((err) => {
          this.error = err
        }).finally(() => {
          this.loading = false
        })
    },
    setDemoCreds () {
      this.creds = {
        username: 'demo',
        password: 'demo',
        baseUrl: 'https://demo.navidrome.org'
      }
      this.login()
    }
  }
}
</script>

<style scoped>

</style>
