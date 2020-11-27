<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <hr>
      <br>
      <p class="ml-5">
        This page built with:
        <ul>
          <li>
            VueJS framework
          </li>
          <li>
            Nuxt Static Site Generator
          </li>
          <li>
            Vuetify UI components
          </li>
        </ul>
      </p>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="pageTitle" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>NEK-RA (Ryoidenshi Aokigahara) &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-newspaper-variant',
          title: 'Blog / News',
          to: '/blog'
        },
        {
          icon: 'mdi-apps',
          title: 'Projects',
          to: '/Projects'
        }
      ]
    }
  },
  computed: {
    pageTitle () {
      if (process.browser) {
        return window.document.title
      } else {
        return 'NEK-RA on Github'
      }
    }
  }
}
</script>
