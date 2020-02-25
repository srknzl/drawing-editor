<template>
  <div id="app">
    <b-button v-b-toggle.collapse-1 variant="primary">{{
      visible ? "Hide Canvas Settings" : "Show Canvas Settings"
    }}</b-button>

    <b-collapse
      style="zIndex:1; background-color: darkblue;"
      id="collapse-1"
      class="mt-2"
      v-model="visible"
    >
      <b-form>
        <label class="white" for="width">Width</label>
        <b-form-input
          id="width"
          v-model="width"
          type="range"
          min="100"
          :max="window.innerWidth"
        ></b-form-input>
        <p class="white">Width: {{ width }}</p>

        <label class="white" for="height">Height</label>
        <b-form-input
          id="height"
          v-model="height"
          type="range"
          min="100"
          :max="window.innerHeight"
        ></b-form-input>
        <p class="white">Height: {{ height }}</p>
      </b-form>

      <p class="white">Select Color:</p>
      <verte v-model="backgroundColor"></verte>
    </b-collapse>
    <br />
    <b-button-group class="menu">
      <b-button
        v-b-tooltip.hover
        title="Draw a circle by first clicking on center point, then a point that will be on the border."
      >
        Circle </b-button
      ><b-button
        v-b-tooltip.hover
        title="Draw a line by clicking to two points"
      >
        Line </b-button
      ><b-button
        v-b-tooltip.hover
        title="Draw a rectangle or square by clicking on two points that are on the diagonal."
      >
        Rectangle/Square
      </b-button>
    </b-button-group>
    <Canvas
      id="canvas"
      :width="+width"
      :height="+height"
      :backgroundColor="backgroundColor"
    ></Canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Canvas from "./components/Canvas.vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
export default Vue.extend({
  data: function() {
    return {
      width: 100,
      height: 100,
      backgroundColor: "",
      visible: false
    };
  },
  components: {
    Canvas
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.white {
  color: white;
}
#canvas {
  position: absolute;
  top: 10rem;
  z-index: 0;
}
.verte__icon {
  border: 1px solid white;
}
.menu {
  position: absolute !important;
  top: 7.5rem;
  z-index: 0;
}
</style>
