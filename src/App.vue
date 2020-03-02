<template>
  <div id="app">
    <b-container>
      <b-row>
        <!-- <Line v-for="line in lines" :key="line.id"> </Line>
        <Rectangle v-for="rectangle in rectangles" :key="rectangle.id">
        </Rectangle> -->
      </b-row>
      <b-row align-h="center">
        <b-button v-b-toggle.collapse-1 variant="primary">{{
          visible ? "Hide Canvas Settings" : "Show Canvas Settings"
        }}</b-button>
      </b-row>
      <b-row align-h="center">
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
          <verte
            picker="wheel"
            model="rgb"
            value="#f00"
            v-model="backgroundColor"
          ></verte>
        </b-collapse>
      </b-row>
      <b-row align-h="center">
        <p style="color: white;">
          Current Operation:
          {{ currentSelection ? "Add " + currentSelection : "Drag" }}
        </p>
      </b-row>
      <b-row align-h="center">
        <b-button-group class="menu">
          <b-button
            @click="onCircleSelect"
            v-b-tooltip.hover
            title="Draw a circle by first clicking on center point, then a point that will be on the border."
            >Circle</b-button
          >
          <b-button
            @click="onLineSelect"
            v-b-tooltip.hover
            title="Draw a line by clicking to two points"
            >Line</b-button
          >
          <b-button
            v-b-tooltip.hover
            @click="onRectSelect"
            title="Draw a rectangle or square by clicking on two points that are on the diagonal."
            >Rectangle/Square</b-button
          >
          <b-button
            v-b-tooltip.hover
            @click="onDeselect"
            title="Press this if you do not want to add the shape you selected."
            >Drag</b-button
          >
        </b-button-group>
      </b-row>
      <b-row align-h="center">
        <b-button-group class="otherMenu">
          <b-button @click="onDeleteCircles">Delete Circles</b-button>
          <!-- <b-button
            @click="onLineSelect"
            v-b-tooltip.hover
            title="Draw a line by clicking to two points"
            >Line</b-button
          >
          <b-button
            v-b-tooltip.hover
            @click="onRectSelect"
            title="Draw a rectangle or square by clicking on two points that are on the diagonal."
            >Rectangle/Square</b-button
          >
          <b-button
            v-b-tooltip.hover
            @click="onDeselect"
            title="Press this if you do not want to add the shape you selected."
            >Cancel selection</b-button
          > -->
        </b-button-group>
      </b-row>
      <b-row align-h="center">
        <Canvas
          id="canvas"
          :mouseClick="onMouseClick"
          :width="+width"
          :height="+height"
          :backgroundColor="backgroundColor"
        >
          <CircleComponent
            v-for="(circle, index) in circles"
            :key="index"
            :radius="circle.radius"
            :centerX="circle.x"
            :centerY="circle.y"
            :draggable="currentSelection == ''"
            :canvasWidth="+width"
            :canvasHeight="+height"
        /></Canvas>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import Canvas from "./components/Canvas.vue";
import CircleComponent from "./components/Circle.vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
export default Vue.extend({
  data: function() {
    return {
      width: 500,
      height: 500,
      backgroundColor: "#f00",
      visible: false,
      currentSelection: "",
      firstPointX: 0,
      firstPointY: 0,
      selectingFirst: false,
      selecting: false,
      circles: []
    };
  },
  components: {
    Canvas,
    CircleComponent
  },
  methods: {
    onCircleSelect() {
      this.currentSelection = "Circle";
      this.selectingFirst = true;
      this.selecting = true;
    },
    onRectSelect() {
      this.currentSelection = "Rectangle/Square";
      this.selectingFirst = true;
      this.selecting = true;
    },
    onLineSelect() {
      this.currentSelection = "Line";
      this.selectingFirst = true;
      this.selecting = true;
    },
    onDeselect() {
      this.currentSelection = "";
      this.selectingFirst = false;
      this.selecting = false;
    },
    onMouseClick(event) {
      const canvas = document.querySelector("#canvas");
      let x, y;
      if (canvas != null) {
        x = event.pageX - canvas.offsetLeft;
        y = event.pageY - canvas.offsetTop;
        if (this.currentSelection == "Circle") {
          if (this.selecting) {
            if (this.selectingFirst == true) {
              this.firstPointX = x;
              this.firstPointY = y;
              this.selectingFirst = false;
            } else {
              const circle = {
                x: x >= this.firstPointX ? this.firstPointX : x,
                y: y >= this.firstPointY ? this.firstPointY : y,
                radius: Math.sqrt(
                  (this.firstPointX - x) * (this.firstPointX - x) +
                    (this.firstPointY - y) * (this.firstPointY - y)
                ),
                id: new Date().toLocaleString("en-us")
              };
              this.circles.push(circle);
              this.selectingFirst = true;
            }
          }
        } else if (this.currentSelection == "Rectangle/Square") {
          console.log();
        } else if (this.currentSelection == "Line") {
          console.log();
        }
      }
    },
    onDeleteCircles() {
      this.circles = [];
    }
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
  top: 12.5rem;
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
.otherMenu {
  position: absolute !important;
  top: 10rem;
  z-index: 0;
}
</style>
