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
        :key="project"
        :project="project"
      />

    </v-col>
  </v-row>
</template>

<script>
// import ProjectLabel from '@/components/ProjectLabel'

export default {
  async asyncData ({ $content }) {
    const projects = await $content('projects').only(['title', 'description', 'icon']).fetch()

    return {
      projects
    }
  },
  components: {
    // ProjectLabel
  },
  head () {
    return {
      title: 'My Projects',
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
  }
}
</script>
