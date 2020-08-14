<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12">
        <v-jsoneditor v-model="json" :plus="false"></v-jsoneditor>
      </v-col>
      <v-col cols="12" lg="12" v-if="metaJson">
        <Form v-if="metaJson" v-model="this.metaJson"></Form>
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
  DefaultOptionSelect,
  DefaultTextField
} from "@/models/DefaultValueField";
@Component({
  name: "Home",
  components: {
    Form,
    VJsoneditor
  }
  // Toutes les options de composant sont autorisées ici.
})
export default class Home extends Vue {
  json = {
    firstName: "Aridatha",
    lastName: "Teager",
    email: "alexismw3@gmail.com",
    avatar: "https://robohash.org/officiisomnisaut.bmp?size=50x50&set=set1",
    userName: "ateagery",
    tags: [
      {
        id: 1,
        value: "group1"
      },
      {
        id: 2,
        value: "night"
      },
      {
        id: 3,
        value: "group2"
      },
      {
        id: 4,
        value: "truck"
      },
      {
        id: 5,
        value: "car"
      },
      {
        id: 6,
        value: "scooter"
      }
    ],
    phone: "+33609183128"
  };
  metaJson: any = {};
  mounted() {
    const stack = {};
    this.recursiveComputeScheme(this.json, stack);
    this.metaJson = stack;
  }

  recursiveComputeScheme(obj: any, stack: any) {
    for (const key of Object.keys(obj)) {
      if (Array.isArray(obj[key])) {
        stack[key] = {
          name: key,
          type: "array",
          component: this.selectDefaultComponent( "array", obj[key], key)
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
        stack[key] = { name: key, type: typeObject, component: defaultComp };
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
        return { type: "v-text-field", options: defaultText };
      }
      case "number":
        return { type: "v-input-number", options: "outlined" };
      case "array": {
        const defaultText = { ...DefaultOptionSelect };
        if (value.length > 0 && typeof value[0] === "string")
          defaultText.items = value;
        return { type: "v-select", options: defaultText };
      }
    }
  }
}
</script>
