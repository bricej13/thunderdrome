<template>
  <div>
    <b-collapse
      :open="checkedTracks.length > 0"
      animation="slide"
    >
      <div class="level px-2">
        <div class="level-left">
          <div class="level-item">
            {{ checkedTracks.length }} selected
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <b-dropdown aria-role="list" append-to-body>
              <template #trigger>
                <button class="button is-rounded is-right">
                  <ion-icon name="star" />
                </button>
              </template>

              <b-dropdown-item v-for="n in 6" :key="n" aria-role="listitem" @click="setTracksRating(n-1)">
                <b-rate disabled :value="n-1" />
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <button class="button is-rounded is-right" @click="setTracksFavorite(true)">
                  <ion-icon name="heart" />
                </button>
              </p>
              <p class="control">
                <button class="button is-rounded is-right" @click="setTracksFavorite(false)">
                  <ion-icon name="heart-outline" />
                </button>
              </p>
            </div>
          </div>
          <div class="level-item">
            <b-dropdown aria-role="list" append-to-body scrollable max-height="25vh">
              <template #trigger>
                <button class="button is-rounded is-right">
                  <ion-icon name="add" />
                </button>
              </template>

              <b-dropdown-item custom class="is-size-5 dropdown-header">
                Play Queue
              </b-dropdown-item>
              <b-dropdown-item custom>
                <a class="button is-small is-outline is-yellow">Now</a>
                <a class="button is-small is-outline is-red">Next</a>
                <a class="button is-small is-outline is-fuchsia">End</a>
              </b-dropdown-item>
              <b-dropdown-item custom class="is-size-5 dropdown-header">
                Shuffle
              </b-dropdown-item>
              <b-dropdown-item custom>
                <a class="button is-small is-outline is-yellow">Now</a>
                <a class="button is-small is-outline is-red">Next</a>
                <a class="button is-small is-outline is-fuchsia">End</a>
              </b-dropdown-item>
              <b-dropdown-item custom class="is-size-5 dropdown-header">
                Add to Playlist
              </b-dropdown-item>
              <b-dropdown-item v-for="playlist in playlists" :key="playlist.id" aria-role="listitem" @click="addToPlaylist(playlist)">
                {{ playlist.name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <div v-if="bulkDelete != null" class="level-item">
            <div class="field has-addons">
              <p class="control">
                <button class="button is-rounded is-right" @click="callDelete">
                  <ion-icon name="trash" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>
    <b-table
      :data="tracks"
      :hoverable="true"
      :mobile-cards="false"
      :checked-rows.sync="checkedTracks"
      :checkable="checkable"
    >
      <b-table-column v-slot="props" sortable label="Title" field="title" :visible="!hideFields.includes('title')">
        <span class="is-uppercase has-text-weight-bold">
          {{ props.row.title }}
        </span>
      </b-table-column>
      <b-table-column v-slot="props" sortable label="Artist" field="artist" :visible="!hideFields.includes('artist')">
        <NuxtLink :to="`/artists/${props.row.artistId}`">
          {{ props.row.artist }}
        </NuxtLink>
      </b-table-column>
      <b-table-column
        v-slot="props"
        sortable
        label="Album"
        field="album"
        :visible="!hideFields.includes('album')"
      >
        <NuxtLink :to="`/albums/${props.row.albumId}`">
          {{ props.row.album }}
        </NuxtLink>
      </b-table-column>
      <b-table-column
        v-slot="props"
        sortable
        label="Year"
        field="year"
        width="4rem"
        :visible="!hideFields.includes('year')"
      >
        {{ props.row.year }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        sortable
        label="Plays"
        field="playCount"
        width="4rem"
        :visible="!hideFields.includes('playCount')"
      >
        {{ props.row.playCount }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        sortable
        label="Time"
        field="duration"
        width="5rem"
        :visible="!hideFields.includes('duration')"
      >
        {{ props.row.duration | tracktime }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        sortable
        label="Bit Rate"
        field="bitRate"
        width="6rem"
        :visible="!hideFields.includes('bitRate')"
      >
        <bitrate :bit-rate="props.row.bitRate" :suffix="props.row.suffix" />
      </b-table-column>
      <b-table-column
        v-slot="props"
        sortable
        label="Rating"
        field="rating"
        width="100"
        :visible="!hideFields.includes('rating')"
      >
        <b-rate v-model="props.row.rating" @change="updateRating(props.row.id, $event)" />
      </b-table-column>
      <b-table-column
        v-slot="props"
        width="30"
        label="Favorite"
        field="starred"
        :visible="!hideFields.includes('starred')"
      >
        <a @click.prevent="toggleTrackFavorite(props.row)">
          <ion-icon :name="props.row.starred ? 'heart' : 'heart-outline'" />
        </a>
      </b-table-column>

      <b-table-column
        v-slot="props"
        width="105"
        :visible="!hideFields.includes('actions')"
      >
        <a v-if="!hideFields.includes('play')" class="px-1 action" @click="startPlaylist([props.row])">
          <ion-icon name="play" />
        </a>
        <a v-if="!hideFields.includes('add')" class="px-1 action" @click="appendToPlaylist([props.row])">
          <ion-icon name="add" />
        </a>
        <a v-if="!hideFields.includes('delete')" class="px-1 action" @click="$emit('delete', {playlist: props.row, i : props.index})">
          <ion-icon name="trash" />
        </a>
      </b-table-column>
    </b-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TrackList',
  props: {
    tracks: {
      type: Array,
      required: true
    },
    hideFields: {
      type: Array,
      default: () => []
    },
    checkable: {
      type: Boolean,
      default: true
    },
    bulkDelete: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      checkedTracks: []
    }
  },
  methods: {
    ...mapActions('player', ['appendToPlaylist', 'startPlaylist']),
    updateRating (id, rating) {
      this.$api.setRating(id, rating)
        .then(() => this.$buefy.toast.open({
          type: 'is-text',
          message: 'Rating updated'
        })).catch(() => this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Failed to update rating'
        }))
    },
    toggleTrackFavorite (track) {
      this.$api.setFavorite(track.mediaFileId || track.id, !track.starred)
        .then(() => {
          track.starred = !track.starred
        })
    },
    async setTracksFavorite (isFavorite) {
      for (const track of this.checkedTracks.filter(track => track.starred !== isFavorite)) {
        await this.$api.setFavorite(track.mediaFileId || track.id, isFavorite).then(() => { track.starred = isFavorite })
      }
      this.checkedTracks = []
    },
    async setTracksRating (rating) {
      for (const track of this.checkedTracks.filter(track => track.rating !== rating)) {
        await this.$api.setRating(track.mediaFileId || track.id, rating).then(() => { track.rating = rating })
      }
      this.checkedTracks = []
    },
    async addToPlaylist (playlist) {
      await this.$api.playlist.addTracks(playlist.id, this.checkedTracks.map(t => t.mediaFileId || t.id))
        .then(() => this.$buefy.toast.open({
          type: 'is-text',
          message: `${this.checkedTracks.length} tracks added to ${playlist.name}`
        })).catch(() => this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Error adding tracks to playlist'
        }))
      this.checkedTracks = []
    },
    async callDelete () {
      if (this.bulkDelete instanceof Promise) {
        await this.bulkDelete(this.checkedTracks)
      } else {
        this.bulkDelete(this.checkedTracks)
      }
      this.checkedTracks = []
    }
  },
  computed: {
    ...mapGetters('playlists', ['playlists'])
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";
table.table {
  table-layout: fixed;
}
tr .action {
  visibility: hidden;
}
tr:hover .action {
  visibility: visible;
}
.dropdown-content {
  padding-top: 0 !important;
}
.dropdown-header {
  position: sticky;
  top: -8px;
  z-index: 1;
  color: $text-invert;
  background-color: $text;
}

</style>
