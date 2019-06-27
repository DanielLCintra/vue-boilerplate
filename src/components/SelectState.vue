<template>
  <v-autocomplete
    v-model="uf"
    :label="label"
    :items="State"
    item-text="value"
    item-value="key"
    no-data-text="Não há estado"
    color="red accent-3"
    outline
    required
    :error-messages="errorMessages"
  />
</template>

<script>
import State from '../support/State'

export default {
  name: 'SelectState',

  props: {
    label: {
      required: false,
      type: String,
      default: ''
    },

    selected: {
      type: String,
      default: ''
    },

    rules: {
      type: Array,
      default: () => []
    },

    errorMessages: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      State
    }
  },

  computed: {
    uf: {
      get() {
        return this.selected
      },

      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
