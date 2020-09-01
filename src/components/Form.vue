<template>
  <div v-if="value">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-col
              v-bind:key="index"
              v-for="(obj, index) in this.value"
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
                    :prepend-icon="
                      obj.component.options.prependIcon
                        ? obj.component.options.icon
                        : ''
                    "
                    :append-icon="
                      obj.component.options.appendIcon
                        ? obj.component.options.icon
                        : ''
                    "
                    :append-outer-icon="
                      obj.component.options.appendOuterIcon
                        ? obj.component.options.icon
                        : ''
                    "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                  <DialogTextField
                    v-bind:key="index"
                    v-model="obj.component.options"
                  ></DialogTextField>
                </v-col>
              </v-row>
              <v-row
                justify="center"
                align-content="center"
                v-else-if="obj.component.type === 'v-select'"
              >
                <v-col cols="12" sm="10">
                  <v-select
                    v-model="obj.component.options.model"
                    :items="obj.component.options.items"
                    :disabled="obj.component.options.disabled"
                    :readonly="obj.component.options.readonly"
                    :chips="obj.component.options.chips"
                    :multiple="obj.component.options.multiple"
                    :append-icon="
                      obj.component.options.appendIcon
                        ? obj.component.options.icon
                        : ''
                    "
                    :prepend-icon="
                      obj.component.options.prependIcon
                        ? obj.component.options.icon
                        : ''
                    "
                    label="Label"
                  >
                    <v-icon
                      v-if="obj.component.options.appendSlot"
                      slot="append"
                      color="green"
                      >mdi-plus</v-icon
                    >
                    <v-icon
                      v-if="obj.component.options.prependSlot"
                      slot="prepend"
                      color="red"
                      >mdi-minus</v-icon
                    >
                    <v-icon
                      v-if="obj.component.options.appendItemSlot"
                      slot="append-item"
                      >mdi-contain-end</v-icon
                    >
                    <v-icon
                      v-if="obj.component.options.prependItemSlot"
                      slot="prepend-item"
                      >mdi-contain-start</v-icon
                    >
                    <template
                      v-if="obj.component.options.selectSlot"
                      v-slot:selection="{ item, index }"
                    >
                      <v-chip v-if="index === 0">
                        <span>{{ item }}</span>
                      </v-chip>
                      <span v-if="index === 1" class="grey--text caption"
                        >(+{{
                          obj.component.options.model.length - 1
                        }}
                        others)</span
                      >
                    </template>
                  </v-select>
                </v-col>
                <v-col cols="12" sm="2">
                  <DialogSelectField
                    v-bind:key="index"
                    v-model="obj.component.options"
                  ></DialogSelectField>
                </v-col>
              </v-row>
              <v-row
                justify="start"
                align-content="center"
                v-else-if="obj.component.type === 'v-checkbox'"
              >
                <v-checkbox
                  v-model="obj.component.options.model"
                  :label="obj.component.options.label"
                ></v-checkbox>
              </v-row>
            </v-col>
          </v-col>
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
import DialogSelectField from "@/components/DialogSelectField.vue";
@Component({
  name: "Form",
  components: { DialogSelectField, DialogTextField }
  // Toutes les options de composant sont autorisées ici.
})
export default class Form extends Vue {
  @Prop({ required: true })
  value: Field[] | any;

  @Emit("input")
  update() {
    this.$emit("input", this.value);
  }

  mounted() {
    console.log(this.value);
  }
}
</script>
