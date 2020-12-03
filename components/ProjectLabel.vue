<template>
  <v-card class="mx-auto mb-1 mt-1">
    <v-list three-line>
      <v-list-item>
        <v-list-item-avatar size="64">
          <v-img
            :src="project.icon.type === 'asset'
              ? require('@/assets'+project.icon.url)
              : project.icon.url"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ project.title }}
            <v-chip
              v-if="specified(project.version)"
              small
              label
              class="ml-1"
            >
              {{ project.version }}
            </v-chip>
            <v-chip
              v-if="specified(project.platform)"
              small
              label
              class="ml-1"
            >
              {{ project.platform }}
            </v-chip>
            <v-chip
              v-if="specified(project.status)"
              small
              label
              class="ml-1"
            >
              {{ project.status }}
            </v-chip>
            <v-chip
              v-if="specified(project.lang)"
              small
              label
              class="ml-1"
            >
              {{ project.lang }}
            </v-chip>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ project.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- {{ project }} -->
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    specified (smth) {
      let result = false
      if (smth !== '' && smth !== null && smth !== undefined) {
        result = true
      }
      return result
    }
  }
}
</script>
