<template>
  <v-row justify="center">
    <v-col sm="12" md="8" lg="6" align="start" justify="start">
      <v-row align="start">
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.firstName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.lastName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.email"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.avatar"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.userName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select v-model="value.tags"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="value.phone"
          ></v-text-field>
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
    value = {firstName:"Aridatha",lastName:"Teager",email:"alexismw3@gmail.com",avatar:"https://robohash.org/officiisomnisaut.bmp?size=50x50&set=set1",userName:"ateagery",tags:[{id:1,value:"group1"},{id:2,value:"night"},{id:3,value:"group2"},{id:4,value:"truck"},{id:5,value:"car"},{id:6,value:"scooter"}],phone:"+33609183128"}
  }
</script>
