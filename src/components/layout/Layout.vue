<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :color="this.$store.state.themes['$primary-color']"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      app
      clipped
      dark
      class="pb-2"
    >
      <v-list dense nav class="py-0 mt-2">
        <template v-for="item in items">
          <v-list-item
            v-if="item.items == undefined"
            :key="item.title"
            :to="item.route"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
            v-else
            :key="item.title"
            no-action
            active-class="active-subgroup"
          >
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.route"
              dark
              active-class="active-text-subgroup"
            >
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>


        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      :color="this.$store.state.themes['$primary-color-dark']"
      dense
      dark
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4" large>
        mdi-form-select
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Vuetify Form Generator</span>
      </v-toolbar-title>
      <v-spacer />
      <!-- Search bar if i need
     <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        />
      </v-row>-->
    </v-app-bar>

    <v-main align="start" style="padding: 20px">
      <v-container fluid align="start">
        <v-row
          align="start"
          justify="center"
          style="width: 100%; padding-top: 50px; padding-bottom: 100px;"
        >
          <router-view class="view one" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style lang="scss">
.bot-footer {
  background-color: $primary-color-dark;
}
.active-subgroup {
  background-color: white;
}
.active-text-subgroup {
  color: white!important;
}
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import navigation from "@/assets/navigation.json";
@Component({
  name: "Layout"
  // Toutes les options de composant sont autorisées ici.
})
export default class Home extends Vue {
  drawer = true;
  items = navigation;

  right = false;
  miniVariant = true;
  expandOnHover = true;
  background = false;
}
</script>
