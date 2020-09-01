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
import { Emit, Prop, Watch } from "vue-property-decorator";
@Component({
  name: "CodeGenerator",
  components: { MonacoEditor }
})
export default class CodeGenerator extends Vue {
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

  @Watch("value", { deep: true })
  onValueChange() {
    this.parseFormData();
    console.log(this.defaultTemplate, this.value.metaJson[6].component.options.outlined);
  }

  mounted() {
    this.parseFormData();
  }

  private parseFormData() {
    let json = JSON.stringify(this.value.json);
    json = json.replace(/\\"/g, "\uFFFF"); // U+ FFFF
    json = json.replace(/"([^"]+)":/g, "$1:").replace(/\uFFFF/g, '\\"');
    const output = Mustache.render(require("@/assets/BaseForm.txt").default, {
      data: this.value.metaJson,
      value: json
    });
    this.defaultTemplate = output;
  }
}
</script>
