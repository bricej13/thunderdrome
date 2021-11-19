<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Add Smart Playlist
        </p>
        <button
          type="button"
          class="delete"
          @click="$emit('close')"
        />
      </header>
      <section class="modal-card-body">
        <b-field v-for="(criteria, i) in values.all" :key="i" grouped>
          <b-select v-model="values.all[i].field">
            <option
              v-for="(value, key) in fields"
              :key="key"
              :value="key"
            >
              {{ value.name }}
            </option>
          </b-select>
          <b-select v-model="values.all[i].op">
            <option
              v-for="op in operatorsByType[fields[values.all[i].field].type]"
              :key="op"
              :value="op"
            >
              {{ operators[op] }}
            </option>
          </b-select>
          <b-switch
            v-if="fields[values.all[i].field].type === 'bool'"
            v-model="values.all[i].val"
            :rounded="false"
          >
            {{ values.all[i].val ? 'True' : 'False' }}
          </b-switch>
          <b-input
            v-else-if="fields[values.all[i].field].type === 'text'"
            v-model="values.all[i].val"
            :minlength="1"
          />
          <b-numberinput
            v-else-if="fields[values.all[i].field].type === 'number' && values.all[i].op !== 'inTheRange'"
            v-model="values.all[i].val"
            controls-position="compact"
          />
          <b-field v-else-if="fields[values.all[i].field].type === 'number' && values.all[i].op === 'inTheRange'" grouped>
            <b-input v-model="values.all[i].val[0]" type="number" />
            <b-input v-model="values.all[i].val[1]" type="number" />
          </b-field>
          <b-datepicker
            v-else-if="fields[values.all[i].field].type === 'date' && (values.all[i].op === 'before' || values.all[i].op === 'after')"
            v-model="values.all[i].val"
            placeholder="Click to select..."
            trap-focus
          />
          <b-field v-else-if="fields[values.all[i].field].type === 'date' && (values.all[i].op === 'inTheLast' && values.all[i].op === 'notInTheLast')" grouped>
            <b-input type="number" />
            <b-input v-model="values.all[i].val" type="number" />
          </b-field>
        </b-field>
        <b-field label="Sort By" grouped>
          <b-field>
            <b-select v-model="values.sort">
              <option
                v-for="(value, key) in fields"
                :key="key"
                :value="key"
              >
                {{ value.name }}
              </option>
            </b-select>
          </b-field>
          <b-field>
            <b-radio-button
              v-model="values.order"
              native-value="asc"
            >
              <span>Asc</span>
            </b-radio-button>

            <b-radio-button
              v-model="values.order"
              native-value="desc"
            >
              <span>Desc</span>
            </b-radio-button>
          </b-field>
        </b-field>
        <b-field label="Limit">
          <b-numberinput v-model="values.limit" min="5" max="1000" step="5" controls-position="compact" />
        </b-field>
        <pre>{{ values }}</pre>
      </section>
      <footer class="modal-card-foot">
        <b-button
          label="Close"
          @click="$emit('close')"
        />
        <b-button
          label="Login"
          type="is-primary"
        />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SmartPlaylistEditor',
  data () {
    return {
      values: {
        all: [
          { op: 'is', field: 'loved', val: true },
          { op: 'gt', field: 'rating', val: 3 },
          { op: 'inTheRange', field: 'year', val: [1981, 1990] },
          { op: 'before', field: 'lastplayed', val: new Date('11-19-2020') }
        ],
        sort: 'artist',
        order: 'asc',
        limit: 25
      },
      all: [],
      sort: 'name',
      order: 'asc',
      limit: 25,
      fields: {
        title: { name: 'Title', type: 'text' },
        album: { name: 'Album', type: 'text' },
        artist: { name: 'Artist', type: 'text' },
        albumartist: { name: 'Album Artist', type: 'text' },
        hascoverart: { name: 'Has Cover Art', type: 'bool' },
        tracknumber: { name: 'Track Number', type: 'number' },
        discnumber: { name: 'Disc Number', type: 'number' },
        year: { name: 'Year', type: 'number' },
        size: { name: 'Size', type: 'number' },
        compilation: { name: 'Compilation', type: 'bool' },
        dateadded: { name: 'Date Added', type: 'date' },
        datemodified: { name: 'Date Modified', type: 'date' },
        discsubtitle: { name: 'Disc Subtitle', type: 'text' },
        comment: { name: 'Comment', type: 'text' },
        lyrics: { name: 'Lyrics', type: 'bool' },
        sorttitle: { name: 'Sort Title', type: 'text' },
        sortalbum: { name: 'Sort Album', type: 'text' },
        sortartist: { name: 'Sort Artist', type: 'text' },
        sortalbumartist: { name: 'Sort Album Artist', type: 'text' },
        albumtype: { name: 'Album Type', type: 'text' },
        albumcomment: { name: 'Album Comment', type: 'text' },
        catalognumber: { name: 'Catalog Number', type: 'number' },
        filepath: { name: 'File Path', type: 'text' },
        filetype: { name: 'File Type', type: 'text' },
        duration: { name: 'Duration', type: 'number' },
        bitrate: { name: 'Bitrate', type: 'number' },
        bpm: { name: 'BPM', type: 'number' },
        channels: { name: 'Channels', type: 'number' },
        genre: { name: 'Genre', type: 'text' },
        loved: { name: 'Loved', type: 'bool' },
        dateloved: { name: 'Date Loved', type: 'date' },
        lastplayed: { name: 'Last Played', type: 'date' },
        playcount: { name: 'Play Count', type: 'number' },
        rating: { name: 'Rating', type: 'number' }
      },
      groupOperators: {
        all: 'All',
        any: 'Any'
      },
      operators: {
        is: 'Equals',
        isNot: 'Not equal to',
        gt: 'Greater than',
        lt: 'Less than',
        contains: 'Contains',
        notContains: 'Does not contain',
        startsWith: 'Starts with',
        endsWith: 'Ends with',
        inTheRange: 'In the range',
        before: 'Before',
        after: 'After',
        inTheLast: 'In the last',
        notInTheLast: 'Not in the last'
      },
      operatorsByType: {
        bool: ['is', 'isNot'],
        date: ['before', 'after', 'inTheLast', 'notInTheLast', 'inTheRange'],
        text: ['is', 'isNot', 'contains', 'notContains', 'startsWith', 'endsWith'],
        number: ['is', 'isNot', 'gt', 'lt', 'inTheRange']
      }
    }
  },
  methods: {
    submitHandler () {
      alert('Thank you for your order!')
    }
  }
}
</script>

<style scoped>

</style>
