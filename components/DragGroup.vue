<template>
  <div class="group">
    <Container :group-name="groupName" :behaviour="behaviour" :get-child-payload="getChildPayload" @drop="onDrop">
      <Draggable v-for="item in items" :key="item.id">
        <div class="draggable-item">
          {{ item.data }}
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
export default {
  name: 'DragGroup',
  components: { Container, Draggable },
  props: {
    groupId: {
      type: String,
      required: true
    },
    groupName: {
      type: String,
      default: '1'
    },
    behaviour: {
      type: String,
      default: 'move'
    }
  },
  data () {
    return {
      items: this.generateItems(5, i => ({
        id: this.groupId + '-' + i,
        data: `Draggable ${this.groupId} - ${i}`
      }))
    }
  },
  methods: {
    onDrop (dropResult) {
      console.log(dropResult)
      this.items = this.applyDrop(dropResult)
    },
    getChildPayload (index) {
      return this.items[index]
    },
    applyDrop (dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult
      if (removedIndex === null && addedIndex === null) { return this.items }

      const result = [...this.items]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }

      return result
    },

    generateItems: (count, creator) => {
      const result = []
      for (let i = 0; i < count; i++) {
        result.push(creator(i))
      }
      return result
    }
  }
}
</script>

<style lang="css" scoped>
.groups {
  display: flex;
  justify-content: stretch;
  margin-top: 50px;
  margin-right: 50px;
}
.group {
  margin-left: 50px;
  flex: 1;
}
</style>
