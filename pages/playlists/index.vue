<template>
  <div>
    <div class="level p-2">
      <div class="title">
        Playlists
      </div>
      <button class="button" @click="isCreatePlaylistActive = !isCreatePlaylistActive">
        Add Playlist
      </button>
    </div>

    <b-collapse animation="slide" :open="isCreatePlaylistActive" class="px-2">
      <add-playlist-form @playlistCreated="playlistCreated" />
    </b-collapse>

    <b-collapse
      :open="checkedPlaylists.length > 0"
      animation="slide"
    >
      <div class="level px-2">
        <div class="level-left" />
        <div class="level-right">
          <div class="level-item">
            <button class="button is-beet is-right" @click="socializePlaylists">
              Public
            </button>
          </div>
          <div class="level-item">
            <button class="button is-beet is-right" @click="privatizePlaylists">
              Private
            </button>
          </div>
          <div class="level-item">
            <button class="button is-beet is-right" @click="deletePlaylists">
              Delete
            </button>
          </div>
        </div>
      </div>
    </b-collapse>

    <b-table
      :data="playlists"
      :checked-rows.sync="checkedPlaylists"
      checkable
      :mobile-cards="false"
    >
      <b-table-column v-slot="props" sortable label="Name" field="name" :visible="visibleColumns.includes('name')">
        <NuxtLink :to="`/playlists/${props.row.id}`">
          {{ props.row.name }}
        </NuxtLink>
      </b-table-column>
      <b-table-column v-slot="props" sortable label="Tracks" field="songCount" :visible="visibleColumns.includes('songCount')">
        {{ props.row.songCount }} tracks
      </b-table-column>
      <b-table-column v-slot="props" sortable label="Duration" field="duration" :visible="visibleColumns.includes('duration')">
        {{ props.row.duration | playlisttime }}
      </b-table-column>
      <b-table-column v-slot="props" sortable label="Public" field="public" :visible="visibleColumns.includes('public')">
        <b-switch :value="props.row.public" @input="togglePlaylistPublic(props)" />
      </b-table-column>
      <b-table-column v-slot="props" :visible="visibleColumns.includes('actions')">
        <div class="columns is-mobile is-vcentered">
          <a class="column" @click="startPlaylist(props.row.id, false)">
            <ion-icon name="play" />
          </a>
          <a class="column" @click="startPlaylist(props.row.id, true)">
            <ion-icon name="shuffle" />
          </a>
          <a class="column" @click="editingPlaylist = props.row">
            <ion-icon name="create-outline" />
          </a>
          <a class="column">
            <b-tooltip
              type="is-light"
              square
              position="is-left"
              :triggers="['click']"
              :auto-close="['outside', 'escape']"
            >
              <template #content>
                <a @click="deletePlaylist(props.row.id)">Delete</a>
              </template>
              <ion-icon name="trash" />
            </b-tooltip>
          </a>
        </div>
      </b-table-column>
    </b-table>

    <b-modal
      :active="false"
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      aria-modal
    >
      <template #default>
        <smart-playlist-editor @close="isCreatePlaylistActive = false" />
      </template>
    </b-modal>

    <b-modal v-model="showEditModal" has-modal-card>
      <edit-playlist :playlist="editingPlaylist" @close="editingPlaylist = null" />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EditPlaylist from '~/components/EditPlaylist'

export default {
  name: 'Playlists',
  data () {
    return {
      isCreatePlaylistActive: false,
      editingPlaylist: null,
      checkedPlaylists: [],
      visibleColumns: ['name', 'songCount', 'duration', 'public', 'actions']
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Playlists'
    }
  },
  computed: {
    ...mapGetters('playlists', ['playlists', 'getPlaylist']),
    showEditModal () { return this.editingPlaylist !== null }
  },
  mounted () {
    this.$store.dispatch('playlists/loadPlaylists')
  },
  methods: {
    ...mapActions('player', ['startPlaylist', 'shufflePlaylist', 'appendToPlaylist']),
    ...mapActions('playlists', ['updatePlaylist', 'deletePlaylist']),
    async startPlaylist (id, shuffle) {
      const tracks = await this.$axios.$get(
        `api/playlist/${id}/tracks`
      )
      if (shuffle) {
        await this.shufflePlaylist(tracks)
      } else {
        await this.startPlaylist(tracks)
      }
    },
    togglePlaylistPublic ({ index, row: playlist }) {
      const updated = Object.assign({}, playlist, { public: !playlist.public })
      this.updatePlaylist(updated)
    },
    editPlaylist (playlist) {
      this.$buefy.open({
        parent: this,
        component: EditPlaylist
      })
    },
    playlistCreated (p) {
      this.$store.dispatch('playlists/loadPlaylists')
      this.isCreatePlaylistActive = false
    },
    async deletePlaylists () {
      await Promise.all(this.checkedPlaylists.map(p => this.deletePlaylist(p.id)))
      this.checkedPlaylists = []
    },
    async socializePlaylists () {
      await Promise.all(this.checkedPlaylists.map(p => this.updatePlaylist(Object.assign({}, p, { public: true }))))
      this.checkedPlaylists = []
    },
    async privatizePlaylists () {
      await Promise.all(this.checkedPlaylists.map(p => this.updatePlaylist(Object.assign({}, p, { public: false }))))
      this.checkedPlaylists = []
    }
  }
}
</script>

<style scoped>

</style>
