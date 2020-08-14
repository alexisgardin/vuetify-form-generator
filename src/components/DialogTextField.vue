<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="secondary" fab x-small dark>
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
    </template>
    <v-card v-if="optionsTextField">
      <v-card-title>
        <span class="headline">Field editor</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="optionsTextField.label"
              label="Label"
            ></v-text-field>
            <v-text-field
              v-model="optionsTextField.hint"
              label="Hint"
            ></v-text-field>
            <v-text-field
              v-model="optionsTextField.placeholder"
              label="Placeholder"
            ></v-text-field>
          </v-col>
          <v-col cols="12"></v-col>
          <v-col cols="12" md="6">
            <v-switch
              v-model="optionsTextField.shaped"
              class="ma-1"
              label="Shaped (requires Filled, Outlined or Solo)"
              :disabled="
                !optionsTextField.outlined &&
                  !optionsTextField.filled &&
                  !optionsTextField.solo
              "
            ></v-switch>
            <v-switch
              v-model="optionsTextField.outlined"
              class="ma-1"
              label="Outlined"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.rounded"
              class="ma-1"
              label="Rounded (requires Filled, Outlined or Solo)"
              :disabled="
                !optionsTextField.filled &&
                  !optionsTextField.outlined &&
                  !optionsTextField.solo
              "
            ></v-switch>
            <v-switch
              v-model="optionsTextField.solo"
              class="ma-1"
              label="Solo"
              :disabled="optionsTextField.filled"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.singleLine"
              class="ma-1"
              label="Single-line"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.filled"
              class="ma-1"
              label="Filled"
              :disabled="optionsTextField.outlined || optionsTextField.solo"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.clearable"
              class="ma-1"
              label="Clearable"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.persistentHint"
              class="ma-1"
              label="Persistent Hint"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.loading"
              class="ma-1"
              label="Loading"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.flat"
              class="ma-1"
              label="Flat (requires Solo)"
              :disabled="!optionsTextField.solo"
            ></v-switch>
            <v-switch
              v-model="optionsTextField.dense"
              class="ma-1"
              label="Dense"
            ></v-switch>
            <v-row>
              <v-switch
                v-model="optionsTextField.counterEn"
                class="ma-0 mr-2 ml-1"
                label="Counter"
              ></v-switch>
              <v-slider
                v-model="optionsTextField.counter"
                :disabled="!optionsTextField.counterEn"
              ></v-slider>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-sheet elevation="12" class="pa-12">
              <v-text-field
                v-model="optionsTextField.model"
                :label="optionsTextField.label"
                :hint="optionsTextField.hint"
                :placeholder="optionsTextField.placeholder"
                :shaped="optionsTextField.shaped"
                :outlined="optionsTextField.outlined"
                :rounded="optionsTextField.rounded"
                :solo="optionsTextField.solo"
                :single-line="optionsTextField.singleLine"
                :filled="optionsTextField.filled"
                :clearable="optionsTextField.clearable"
                :persistent-hint="optionsTextField.persistentHint"
                :loading="optionsTextField.loading"
                :flat="optionsTextField.flat"
                :counter="optionsTextField.counterEn ? optionsTextField.counter : false"
                :dense="optionsTextField.dense"
              ></v-text-field>
              <div class="mt-12 text-center">Value: {{ optionsTextField.model }}</div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  name: "DialogTextField",
  components: {}
  // Toutes les options de composant sont autorisées ici.
})
export default class DialogTextField extends Vue {
  optionsTextField = {
    model: "I'm a text field",
    label: "Hey!",
    hint: "Customize me!",
    placeholder: "",
    shaped: false,
    outlined: false,
    rounded: false,
    solo: false,
    singleLine: false,
    filled: false,
    clearable: false,
    persistentHint: false,
    loading: false,
    flat: false,
    counterEn: false,
    counter: 0,
    dense: false
  };

  dialog = false;
}
</script>
