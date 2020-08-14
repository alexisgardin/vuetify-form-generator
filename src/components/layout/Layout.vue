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
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/1.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Votre compte</v-list-item-title>
            <v-list-item-subtitle>Alexis Gardin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
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
        <v-list-item
                to="/login"
                link
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        mdi-truck
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">fleetd.cloud</span>
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

    <v-content align="start" style="padding: 20px">
      <v-container fluid align="start">
        <v-row
          align="start"
          justify="center"
          style="width: 100%; padding-top: 50px; padding-bottom: 100px;"
        >
          <router-view class="view one" />
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      :color="this.$store.state.themes['$accent-color']"
      padless
      :inset="false"
      app
      style=" margin-top: 50px"
    >
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="bot-footer lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
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
  links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];

  right = false;
  miniVariant = true;
  expandOnHover = true;
  background = false;
}
</script>
