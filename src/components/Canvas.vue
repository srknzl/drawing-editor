<template>
  <div
    id="canvas"
    @click="this.$props.mouseClick"
    :style="{
      width: this.$props.width + 'px',
      height: this.$props.height + 'px',
      backgroundColor: this.$props.backgroundColor
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    width: Number,
    height: Number,
    backgroundColor: String,
    mouseClick: Function
  },
  data: function() {
    return {};
  },
  methods: {}
});
</script>

<style></style>
