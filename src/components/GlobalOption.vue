<template>
  <div>
    <h3>Global Option</h3>
    <v-expansion-panels hover flat>
      <v-expansion-panel v-for="(item, i) in data" :key="i">
        <v-expansion-panel-header style="padding: 5px">{{
          item.title
        }}</v-expansion-panel-header>
        <v-expansion-panel-content style="padding: 0px">
          <v-item-group multiple>
            <v-row>
              <v-col
                v-for="(option, index) in item.options"
                v-bind:key="index"
                cols="12"
                sm="6"
                md="4"
                lg="4"
                style="padding-top: 0px;padding-bottom: 0px"
              >
                <v-checkbox
                  :label="option"
                  :key="i"
                  @change="updateSwitch($event, option)"
                  color="orange darken-3"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<style>
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
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

  data = [
    {
      title: "Text Field Global Option",
      options: [
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
      ]
    },
    {
      title: "Select Field Global Option",
      options: [
        "readonly",
        "disabled",
        "chips",
        "multiple",
        "appendIcon",
        "appendSlot",
        "appendItemSlot",
        "prependIcon",
        "prependSlot",
        "prependItemSlot",
        "selectSlot"
      ]
    }
  ];

  updateSwitch($event: any, option: any) {
    this.value.forEach((v: any) => {
      if (Object.keys(v.component.options).includes(option)) {
        v.component.options[option] = $event;
      }
    });
  }
}
</script>
