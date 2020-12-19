<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Filters
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item>
                  Language:
                  <v-btn-toggle
                    v-model="filter.lang"
                    dense
                    class="ml-2"
                  >
                    <v-btn
                      v-for="lang in langs"
                      :key="lang"
                    >
                      {{ lang }}
                    </v-btn>
                  </v-btn-toggle>
                </v-list-item>
                <v-list-item>
                  Platform:
                  <v-btn-toggle
                    v-model="filter.platform"
                    dense
                    class="ml-2"
                  >
                    <v-btn
                      v-for="platform in platforms"
                      :key="platform"
                    >
                      {{ platform }}
                    </v-btn>
                  </v-btn-toggle>
                </v-list-item>
                <v-list-item>
                  Status:
                  <v-btn-toggle
                    v-model="filter.status"
                    dense
                    class="ml-2"
                  >
                    <v-btn
                      v-for="status in statuses"
                      :key="status"
                    >
                      {{ status }}
                    </v-btn>
                  </v-btn-toggle>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <ProjectLabel
        v-for="project in filteredProjects"
        :key="project.path"
        :project="project"
      />
    </v-col>
  </v-row>
</template>

<script>
import ProjectLabel from '@/components/ProjectLabel'
export default {
  components: {
    ProjectLabel
  },
  async asyncData ({ $content }) {
    const projects = await $content('projects').only(['title', 'description', 'icon', 'version', 'platform', 'lang', 'status']).fetch()
    return {
      projects
    }
  },
  data () {
    return {
      filter: {
        platform: undefined,
        status: undefined,
        lang: undefined
      },
      platforms: ['WEB', 'ANDROID', 'WINDOWS', 'LINUX'],
      statuses: ['ACTIVE', 'DEVELOPMENT', 'FROZEN', 'SUPPORT', 'ARCHIVED'],
      langs: ['ENG', 'RUS', 'MULTILANGUAGE']
    }
  },
  computed: {
    filteredProjects () {
      let result = this.projects
      if (this.filter.platform !== undefined) {
        result = result.filter(project => project.platform === this.platforms[this.filter.platform])
      }
      if (this.filter.status !== undefined) {
        result = result.filter(project => project.status === this.statuses[this.filter.status])
      }
      if (this.filter.lang !== undefined) {
        result = result.filter(project => project.lang === this.langs[this.filter.lang])
      }
      return result
    }
  },
  head () {
    return {
      title: 'My Projects'
    }
  }
}
</script>
