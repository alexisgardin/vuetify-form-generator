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
              <v-row justify="center"  align-content="center">
                <v-col cols="12" sm="10">
                  <v-text-field
                    v-if="obj.component.type === 'v-text-field'"
                    value=""
                    :label="obj.name"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                  <DialogTextField></DialogTextField>
                </v-col>
              </v-row>
            </v-col
          ></v-col>
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
}
</script>
