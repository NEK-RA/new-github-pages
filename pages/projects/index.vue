<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-title>
          My projects list
          <v-spacer />
          <v-btn>Filter</v-btn>
        </v-card-title>
        <v-card-text>
          {{ projects }}
          <!-- <v-chip
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip> -->
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
  async asyncData ({ $content }) {
    const projects = await $content('projects').only(['title', 'description', 'icon', 'platform', 'lang', 'status']).fetch()
    return {
      projects
    }
  },
  components: {
    ProjectLabel
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
