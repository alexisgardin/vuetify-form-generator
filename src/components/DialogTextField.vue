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
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="value.label" label="Label"></v-text-field>
            <v-text-field v-model="value.hint" label="Hint"></v-text-field>
            <v-text-field
              v-model="value.placeholder"
              label="Placeholder"
            ></v-text-field>

            <v-text-field
              v-model="value.icon"
              label="icon"
              :append-icon="value.icon"
            ></v-text-field>
          </v-col>
          <v-col cols="12"></v-col>
          <v-col cols="12" md="6">
            <v-switch
              v-model="value.shaped"
              class="ma-1"
              label="Shaped (requires Filled, Outlined or Solo)"
              :disabled="!value.outlined && !value.filled && !value.solo"
            ></v-switch>
            <v-switch
              v-model="value.outlined"
              class="ma-1"
              label="Outlined"
            ></v-switch>
            <v-switch
              v-model="value.rounded"
              class="ma-1"
              label="Rounded (requires Filled, Outlined or Solo)"
              :disabled="!value.filled && !value.outlined && !value.solo"
            ></v-switch>
            <v-switch
              v-model="value.solo"
              class="ma-1"
              label="Solo"
              :disabled="value.filled"
            ></v-switch>
            <v-switch
              v-model="value.prependIcon"
              class="ma-1"
              label="Prepend Icon"
            ></v-switch>
            <v-switch
              v-model="value.appendIcon"
              class="ma-1"
              label="Append Icon"
            ></v-switch>
            <v-switch
              v-model="value.appendOuterIcon"
              class="ma-1"
              label="Append Outer Icon"
            ></v-switch>
            <v-switch
              v-model="value.singleLine"
              class="ma-1"
              label="Single-line"
            ></v-switch>
            <v-switch
              v-model="value.filled"
              class="ma-1"
              label="Filled"
              :disabled="value.outlined || value.solo"
            ></v-switch>
            <v-switch
              v-model="value.clearable"
              class="ma-1"
              label="Clearable"
            ></v-switch>
            <v-switch
              v-model="value.persistentHint"
              class="ma-1"
              label="Persistent Hint"
            ></v-switch>
            <v-switch
              v-model="value.loading"
              class="ma-1"
              label="Loading"
            ></v-switch>
            <v-switch
              v-model="value.flat"
              class="ma-1"
              label="Flat (requires Solo)"
              :disabled="!value.solo"
            ></v-switch>
            <v-switch
              v-model="value.dense"
              class="ma-1"
              label="Dense"
            ></v-switch>
            <v-row>
              <v-switch
                v-model="value.counterEn"
                class="ma-0 mr-2 ml-1"
                label="Counter"
              ></v-switch>
              <v-slider
                v-model="value.counter"
                :disabled="!value.counterEn"
              ></v-slider>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-sheet elevation="12" class="pa-12">
              <v-text-field
                v-model="value.model"
                :label="value.label"
                :hint="value.hint"
                :placeholder="value.placeholder"
                :shaped="value.shaped"
                :outlined="value.outlined"
                :rounded="value.rounded"
                :solo="value.solo"
                :single-line="value.singleLine"
                :filled="value.filled"
                :clearable="value.clearable"
                :persistent-hint="value.persistentHint"
                :loading="value.loading"
                :flat="value.flat"
                :counter="value.counterEn ? value.counter : false"
                :dense="value.dense"
                :prepend-icon="value.prependIcon ? value.icon : ''"
                :append-icon="value.appendIcon ? value.icon : ''"
                :append-outer-icon="value.appendOuterIcon ? value.icon : ''"
              ></v-text-field>
              <div class="mt-12 text-center">Value: {{ value.model }}</div>
            </v-sheet>
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
import { OptionTextField } from "@/models/OptionTextField";
import { Emit, Prop } from "vue-property-decorator";
@Component({
  name: "DialogTextField",
  components: {}
  // Toutes les options de composant sont autorisées ici.
})
export default class DialogTextField extends Vue {
  @Prop({
    required: true
  })
  value: OptionTextField | any;

  @Emit("input")
  update() {
    this.$emit("input", this.value);
  }
  dialog = false;
  /**
  @Prop({ required: true })
  value: Field[] | any;

**/
}
</script>
