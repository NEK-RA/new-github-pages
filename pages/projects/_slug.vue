<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <ProjectLabel
        :project="labelData"
      />

      <v-card
        class="mt-2"
      >
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Changelog
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-content :document="log" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <v-card
        class="mt-2"
      >
        <v-card-text>
          <nuxt-content :document="page" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import ProjectLabel from '@/components/ProjectLabel'
export default {
  components: {
    // ProjectLabel
  },
  async asyncData ({ params, $content }) {
    const project = await $content(`projects/${params.slug}`).fetch()
    const changes = await $content(`changelogs/${params.slug}`).fetch()
    return {
      page: project,
      log: changes
    }
  },
  computed: {
    labelData () {
      return {
        title: this.page.title,
        description: this.page.description,
        icon: this.page.icon,
        version: this.page.version,
        status: this.page.status,
        lang: this.page.lang,
        platform: this.page.platform
      }
    }
  }
}
</script>
