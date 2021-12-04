<template>
  <div>
    <b-table
      :data="tracks"
      :hoverable="true"
      :mobile-cards="false"
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
import { mapActions } from 'vuex'
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
      this.$api.setFavorite(track.id, !track.starred)
        .then(() => {
          track.starred = !track.starred
        })
    }
  }
}
</script>

<style lang="scss" scoped>
table.table {
  table-layout: fixed;
}
tr .action {
  visibility: hidden;
}
tr:hover .action {
  visibility: visible;
}

</style>
