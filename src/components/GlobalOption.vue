<template>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col
          v-for="(option, index) in switchTextFiled"
          v-bind:key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-item>
            <v-switch
              :label="'Enable ' + option"
              color="orange darken-3"
              hide-details
              @change="updateSwitch($event, option)"
            ></v-switch
          ></v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<style></style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop, Watch } from "vue-property-decorator";
@Component({
  name: "GlobalOption"
})
export default class GlobalOption extends Vue {
  @Prop({ required: true })
  value: any;

  @Emit("input")
  update() {
    this.$emit("input", this.value);
  }

  switchTextFiled = [
    "outlined",
    "rounded",
    "solo",
    "singleLine",
    "clearable",
    "flat",
    "loading",
    "dense",
    "shaped",
    "filled"
  ];
  updateSwitch($event: any, option: any) {
    this.value.forEach((v: any) => {
      if (Object.keys(v.component.options).includes(option)) {
        v.component.options[option] = $event;
      }
    });
    console.log(this.value[0].component.options.shaped);
  }
}
</script>
