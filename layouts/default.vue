<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-flex text-center class="mt-5 mb-3">
        <img src="/favicon.ico" alt="Here is logo (128x128)">
        <h2>Menu</h2>
      </v-flex>

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

      <div class="ml-4 mt-3">
        This site built with:
        <ul>
          <li>
            VueJS framework
          </li>
          <li>
            NuxtJS Static Site Generator
          </li>
          <li>
            Vuetify UI components
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title v-text="pageTitle" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <v-flex text-center>
        <div>NEK-RA (Ryoidenshi Aokigahara) <br> &copy; 2017 — {{ new Date().getFullYear() }}</div>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-account-details',
          title: 'About / Contact',
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
        },
        {
          icon: 'mdi-account-group',
          title: 'RJ-Leisure',
          to: '/rj-l'
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
