<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  data: function() {
    return {};
  }
})
export default class Shape extends Vue {
  // Initial data can be declared as instance properties
  // message: string = "Hello!";

  // Component methods can be declared as instance methods
  // onClick(): void {
  //   window.alert(this.message);
  // }
  constructor() {
    super();
  }
}
</script>
