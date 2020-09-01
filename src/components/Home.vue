<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12">
        <v-jsoneditor
          @input="update"
          v-model="data.json"
          :plus="true"
          :options="{ mode: 'code' }"
        ></v-jsoneditor>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" v-if="data.metaJson">
        <GlobalOption v-model="data.metaJson"></GlobalOption>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" v-if="data.metaJson">
        <Form
          @input="updateMeta"
          v-if="data.metaJson"
          v-model="data.metaJson"
        ></Form>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="12" v-if="data.metaJson">
        <CodeGenerator
          @input="updateMeta"
          v-if="data.metaJson"
          v-model="data"
        ></CodeGenerator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import VJsoneditor from "v-jsoneditor";
import Form from "@/components/Form.vue";
import {
  DefaultOptionCheckbox,
  DefaultOptionSelect,
  DefaultTextField
} from "@/models/DefaultValueField";
import CodeGenerator from "@/components/CodeGenerator.vue";
import GlobalOption from "@/components/GlobalOption.vue";
@Component({
  name: "Home",
  components: {
    GlobalOption,
    CodeGenerator,
    Form,
    VJsoneditor
  }
  // Toutes les options de composant sont autorisées ici.
})
export default class Home extends Vue {
  data = {
    metaJson: null,
    json: {
      firstName: "Aridatha",
      lastName: "Teager",
      email: "alexismw3@gmail.com",
      avatar: "https://robohash.org/officiisomnisaut.bmp?size=50x50&set=set1",
      userName: "ateagery",
      tags: ["Car", "Scooter", "Bus", "Truck"],
      phone: "+33609183128",
      banned: false
    }
  };
  mounted() {
    const stack = {};
    this.recursiveComputeScheme(this.data.json, stack);
    (this.data.metaJson as any) = Object.values(stack);
  }

  update($event: any) {
    this.data.json = $event;
    const stack = {};
    this.recursiveComputeScheme(this.data.json, stack);
    (this.data.metaJson as any) = Object.values(stack);
  }

  updateMeta($event: any) {
    console.log($event);
  }
  recursiveComputeScheme(obj: any, stack: any) {
    for (const key of Object.keys(obj)) {
      if (Array.isArray(obj[key])) {
        stack[key] = {
          name: key,
          fieldName: key,
          type: "array",
          component: this.selectDefaultComponent("array", obj[key], key)
        };
      } else if (typeof obj[key] === "object") {
        stack[key] = {};
        this.recursiveComputeScheme(obj[key], stack[key]);
      } else {
        const typeObject = typeof obj[key];
        const defaultComp = this.selectDefaultComponent(
          typeObject,
          obj[key],
          key
        );
        stack[key] = {
          name: key,
          fieldName: key,
          type: typeObject,
          component: defaultComp
        };
      }
    }
  }

  selectDefaultComponent(
    type: string,
    value: any = undefined,
    label = "Label PlaceHolder"
  ) {
    switch (type) {
      case "string": {
        const defaultText = { ...DefaultTextField };
        defaultText.model = value;
        defaultText.label = label;
        return {
          type: "v-text-field",
          options: defaultText,
          isTextField: true
        };
      }
      case "number":
        return {
          type: "v-input-number",
          options: "outlined",
          isNumberField: true
        };
      case "array": {
        const defaultText = { ...DefaultOptionSelect };
        if (value.length > 0 && typeof value[0] === "string")
          defaultText.items = value;
        return { type: "v-select", options: defaultText, isSelectField: true };
      }
      case "boolean": {
        const defaultText = { ...DefaultOptionCheckbox };
        defaultText.label = label;
        defaultText.model = value;
        return {
          type: "v-checkbox",
          options: defaultText,
          isCheckBoxField: true
        };
      }
    }
  }
}
</script>
