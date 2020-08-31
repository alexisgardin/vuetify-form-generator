<template>
  <v-col cols="12" sm="12" lg="12">
    <MonacoEditor
      @editorWillMount="willMount"
      ref="editor"
      class="editor"
      v-model="defaultTemplate"
      language="typescript"
      theme="vs-dark"
      :options="{
        lineNumbers: true
      }"
    />
  </v-col>
</template>
<style>
.editor {
  height: 300px;
}
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MonacoEditor from "vue-monaco";
import * as Mustache from "mustache";
import { Emit, Prop } from "vue-property-decorator";
@Component({
  name: "CodeGenerator",
  components: { MonacoEditor }
})
export default class DialogTextField extends Vue {
  @Prop({ required: true })
  value: any;

  @Emit("input")
  update() {
    this.$emit("input", this.value);
  }
  defaultTemplate = require("@/assets/BaseForm.txt").default;

  willMount(event: any) {
    event.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true
    });
  }

  options = {
    //Monaco Editor Options
  };

  mounted() {
    const output = Mustache.render(this.defaultTemplate, {
      data: JSON.stringify(this.value)
    });
    console.log(output);
  }
}
</script>
