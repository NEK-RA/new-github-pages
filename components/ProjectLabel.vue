<template>
  <v-card class="mx-auto mb-1 mt-1">
    <v-list three-line>
      <v-list-item>
        <v-list-item-avatar size="64">
          <v-img :src="project.icon" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="project.title" />
          <v-list-item-subtitle>
            {{ project.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- <v-card-actions>
      <v-chip
        v-for="tag in user.tags"
        :key="tag"
        x-small
        class="ml-1 mr-1"
      >
        {{ tag.toUpperCase() }}
      </v-chip>
    </v-card-actions> -->
    {{ project }}
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
  }
}
</script>
