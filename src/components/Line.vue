<template>
  <svg
    @mousedown="dragMouseDown"
    :style="{
      height: Math.abs(this.$props.y1 - this.$props.y2) + 'px',
      width: Math.abs(this.$props.x1 - this.$props.x2) + 'px',
      top: this.top + 'px',
      left: this.left + 'px',
      backgroundColor: 'transparent',
      zIndex: 100,
      position: 'absolute',
      display: 'inline-block',
      cursor: 'grab'
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
    draggable: Boolean,
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

  closeDragElement() {
    if (this.$props.draggable) {
      // stop moving when mouse button is released:
      this.window.document.onmouseup = null;
      this.window.document.onmousemove = null;
    }
  }
  elementDrag(e) {
    e = e || this.window.event;
    e.preventDefault();
    if (this.$props.draggable) {
      // calculate the new cursor position:
      this.pos1 = this.pos3 - e.clientX;
      this.pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      // set the element's new position:
      let newX = this.$el.offsetTop - this.pos2;
      let newY = this.$el.offsetLeft - this.pos1;
      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX + this.$props.radius > this.$props.canvasHeight)
        newX = this.$props.canvasHeight - this.$props.radius;
      if (newY + this.$props.radius > this.$props.canvasWidth)
        newY = this.$props.canvasWidth - this.$props.radius;
      this.top = newX;
      this.left = newY;
    }
  }
  dragMouseDown(e) {
    e = e || this.window.event;
    e.preventDefault();
    if (this.$props.draggable) {
      // get the mouse cursor position at startup:
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      this.window.document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      this.window.document.onmousemove = this.elementDrag;
    }
  }
}
</script>
