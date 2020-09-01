<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        color="secondary"
        style="margin-top: 8px"
        depressed
        fab
        small
        dark
      >
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
    </template>
    <v-card v-if="value">
      <v-card-title>
        <span class="headline">Field editor</span>
      </v-card-title>
      <v-card-text>
        <v-row align="center" justify="space-around">
          <v-switch
            v-model="value.disabled"
            class="ma-2"
            label="Disabled"
          ></v-switch>
          <v-switch
            v-model="value.readonly"
            class="ma-2"
            label="Readonly"
          ></v-switch>
          <v-switch v-model="value.chips" class="ma-2" label="Chips"></v-switch>
          <v-switch
            v-model="value.multiple"
            class="ma-2"
            label="Multiple"
          ></v-switch>
          <v-switch
            v-model="value.appendIcon"
            class="ma-2"
            label="Append icon"
          ></v-switch>
          <v-switch
            v-model="value.appendSlot"
            class="ma-2"
            label="Append slot"
          ></v-switch>
          <v-switch
            v-model="value.appendItemSlot"
            class="ma-2"
            label="Append item slot"
          ></v-switch>
          <v-switch
            v-model="value.prependIcon"
            class="ma-2"
            label="Prepend icon"
          ></v-switch>
          <v-switch
            v-model="value.prependSlot"
            class="ma-2"
            label="Prepend slot"
          ></v-switch>
          <v-switch
            v-model="value.prependItemSlot"
            class="ma-2"
            label="Prepend item slot"
          ></v-switch>
          <v-switch
            v-model="value.selectSlot"
            class="ma-2"
            label="Selection slot"
          ></v-switch>
          <v-text-field
            v-model="value.icon"
            label="icon"
            :append-icon="value.icon"
          ></v-text-field>
          <v-col cols="12">
            <v-select
              v-model="value.model"
              :items="value.items"
              :disabled="value.disabled"
              :readonly="value.readonly"
              :chips="value.chips"
              :multiple="value.multiple"
              :append-icon="value.appendIcon ? value.icon : ''"
              :prepend-icon="value.prependIcon ? value.icon.value : ''"
              label="Label"
            >
              <v-icon v-if="value.appendSlot" slot="append" color="green"
                >mdi-plus</v-icon
              >
              <v-icon v-if="value.prependSlot" slot="prepend" color="red"
                >mdi-minus</v-icon
              >
              <v-icon v-if="value.appendItemSlot" slot="append-item"
                >mdi-contain-end</v-icon
              >
              <v-icon v-if="value.prependItemSlot" slot="prepend-item"
                >mdi-contain-start</v-icon
              >
              <template
                v-if="value.selectSlot"
                v-slot:selection="{ item, index }"
              >
                <v-chip v-if="index === 0">
                  <span>{{ item }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text caption"
                  >(+{{ value.model.length - 1 }} others)</span
                >
              </template>
            </v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop, Watch } from "vue-property-decorator";
import { OptionSelectField } from "@/models/OptionSelectField";
@Component({
  name: "DialogSelectField",
  components: {}
  // Toutes les options de composant sont autorisées ici.
})
export default class DialogSelectField extends Vue {
  @Prop({
    required: true
  })
  value: OptionSelectField | any;
  @Emit("input")
  update() {
    this.$emit("input", this.value);
  }

  @Watch("value.multiple")
  multiple(newVal: any, oldVal: any) {
    if (newVal) this.value.model = [this.value.model];
    else this.value.model = this.value.model[0] || "Foo";
  }
  dialog = false;
  /**
  @Prop({ required: true })
  value: Field[] | any;

**/
}
</script>
