<template>
  <div v-if="value">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" lg="6"> </v-col>
          <v-col sm="6">
            <v-col
              v-bind:key="index"
              v-for="(obj, index) in Object.values(this.value)"
              cols="12"
              sm="12"
              lg="12"
            >
              <v-row
                justify="center"
                align-content="center"
                v-if="obj.component.type === 'v-text-field'"
              >
                <v-col cols="12" sm="10">
                  <v-text-field
                    v-model="obj.component.options.model"
                    :label="obj.component.options.label"
                    :hint="obj.component.options.hint"
                    :placeholder="obj.component.options.placeholder"
                    :shaped="obj.component.options.shaped"
                    :outlined="obj.component.options.outlined"
                    :rounded="obj.component.options.rounded"
                    :solo="obj.component.options.solo"
                    :single-line="obj.component.options.singleLine"
                    :filled="obj.component.options.filled"
                    :clearable="obj.component.options.clearable"
                    :persistent-hint="obj.component.options.persistentHint"
                    :loading="obj.component.options.loading"
                    :flat="obj.component.options.flat"
                    :counter="
                      obj.component.options.counterEn
                        ? obj.component.options.counter
                        : false
                    "
                    :dense="obj.component.options.dense"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                  <DialogTextField
                    v-bind:key="index"
                    v-model="obj.component.options"
                  ></DialogTextField>
                </v-col>
              </v-row>
            </v-col>
            <v-btn small color="primary" @click="generate">Send</v-btn></v-col
          >
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Field } from "@/models/Field";
import { Emit, Prop } from "vue-property-decorator";
import DialogTextField from "@/components/DialogTextField.vue";
@Component({
  name: "Form",
  components: { DialogTextField }
  // Toutes les options de composant sont autorisées ici.
})
export default class Form extends Vue {
  @Prop({ required: true })
  value: Field[] | any;

  @Emit("input")
  update() {
    this.$emit("input", this.value);
  }

  generate() {
    console.log(this.value);
  }
}
</script>
