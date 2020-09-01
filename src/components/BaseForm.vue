<template>
  <v-row justify="center">
    <v-col sm="12" md="8" lg="6" align="start" justify="start">
      <v-row align="start">
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="value.firstName"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="value.lastName"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.email" outlined clearable></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="value.avatar"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="value.userName"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select :items="value.tags" label="tags"></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.phone" outlined clearable></v-text-field>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style></style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  name: "BaseForm",
  components: {}
})
export default class BaseForm extends Vue {
  value = {
    firstName: "Aridatha",
    lastName: "Teager",
    email: "alexismw3@gmail.com",
    avatar: "https://robohash.org/officiisomnisaut.bmp?size=50x50&set=set1",
    userName: "ateagery",
    tags: ["Car", "Scooter", "Bus", "Truck"],
    phone: "+33609183128"
  };
}
</script>
