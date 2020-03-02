<template>
  <div id="line">
    <svg
      :style="{
        height: Math.abs(this.$props.y1 - this.$props.y2) + 'px',
        width: Math.abs(this.$props.x1 - this.$props.x2) + 'px',
        top: this.top + 'px',
        left: this.left + 'px',
        backgroundColor: 'transparent',
        zIndex: 99,
        position: 'absolute',
        display: 'inline-block'
      }"
    >
      <line
        :x1="this.$props.x1 - this.left"
        :y1="this.$props.y1 - this.top"
        :x2="this.$props.x2 - this.left"
        :y2="this.$props.y2 - this.top"
        style="stroke:rgb(255,0,0);stroke-width:2"
      />
    </svg>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    x1: Number,
    y1: Number,
    x2: Number,
    y2: Number,
    canvasWidth: Number,
    canvasHeight: Number
  },
  data: function() {
    return {
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      top: Math.min(this.$props.y1, this.$props.y2),
      left: Math.min(this.$props.x1, this.$props.x2)
    };
  }
})
export default class LineComponent extends Vue {
  constructor() {
    super();
  }
}
</script>
