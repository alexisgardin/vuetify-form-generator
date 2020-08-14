<template>
  <div v-if="value">
    <v-form>
      <v-container>
        <v-row>
          <v-col
            v-bind:key="index"
            v-for="(obj, index) in Object.values(this.value)"
            cols="12"
          >
            <v-text-field
              v-if="obj.component.type === 'v-text-field'"
              value=""
              :label="obj.name"
              required
              outlined
            ></v-text-field>
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
@Component({
  name: "Form",
  components: {}
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
