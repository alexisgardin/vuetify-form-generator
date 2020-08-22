<template>
  <v-col cols="12" sm="12" lg="12">
    <MonacoEditor
      @editorWillMount="willMount"
      ref="editor"
      class="editor"
      v-model="value"
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
@Component({
  name: "CodeGenerator",
  components: { MonacoEditor }
})
export default class DialogTextField extends Vue {
  value =
    "<template>\n" +
    "  <MonacoEditor\n" +
    '    width="800"\n' +
    '    height="500"\n' +
    '    theme="vs-dark"\n' +
    '    language="typescript"\n' +
    '    :options="options"\n' +
    '    @change="onChange"\n' +
    '    v-model="value"\n' +
    "  ></MonacoEditor>\n" +
    "</template>\n" +
    '<script lang="ts">\n' +
    'import MonacoEditor from "monaco-editor-vue";\n' +
    'import Vue from "vue";\n' +
    'import Component from "vue-class-component";\n' +
    'import { Emit, Prop } from "vue-property-decorator";\n' +
    "@Component({\n" +
    '  name: "CodeGenerator",\n' +
    "  components: { MonacoEditor }\n" +
    "  // Toutes les options de composant sont autorisées ici.\n" +
    "})\n" +
    "export default class DialogTextField extends Vue {\n" +
    "  @Prop({\n" +
    "    required: false,\n" +
    '    default: `<script>` + "<"+\'/\'+"script>"\n' +
    "  })\n" +
    "  value: any;\n" +
    "  options = {\n" +
    "    //Monaco Editor Options\n" +
    "  };\n" +
    "\n" +
    '  @Emit("input")\n' +
    "  update() {\n" +
    '    this.$emit("input", this.value);\n' +
    "  }\n" +
    "\n" +
    "  onChange(value: any) {\n" +
    "    console.log(value);\n" +
    "  }\n" +
    "}\n" +
    "<" +
    "/" +
    "script>\n";

  willMount(event: any) {
    event.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true
    });
  }

  options = {
    //Monaco Editor Options
  };
}
</script>
