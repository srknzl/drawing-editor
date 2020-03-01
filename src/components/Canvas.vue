<template>
  <div
    id="canvas"
    @mousemove="this.$props.mouseMove"
    :style="{
      width: this.$props.width + 'px',
      height: this.$props.height + 'px',
      backgroundColor: this.$props.backgroundColor
    }"
  ></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    width: Number,
    height: Number,
    backgroundColor: String,
    mouseMove: Function
  },
  data: function() {
    return {};
  },
  methods: {}
});
</script>

<style></style>
