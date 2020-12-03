<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-title>
          My projects list
          <v-spacer />
          <v-btn disabled>
            Filter
          </v-btn>
        </v-card-title>
        <v-card-text>
          <!-- {{ projects }} -->
        </v-card-text>
      </v-card>

      <ProjectLabel
        v-for="project in projects"
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
      status: {
        active: 'ACTIVE',
        archived: 'ARCHIVED',
        frozen: 'FROZEN'
      },
      lang: {
        rus: 'RUSSIAN',
        eng: 'ENGLISH'
      },
      tags: []
    }
  },
  head () {
    return {
      title: 'My Projects'
    }
  }
}
</script>
