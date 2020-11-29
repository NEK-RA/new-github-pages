<template>
  <v-card class="mx-auto mb-2 mt-1">
    <v-list three-line>
      <v-list-item>
        <v-list-item-avatar size="64">
          <v-img :src="user.avatar" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="user.name" />
          <v-list-item-subtitle>
            {{ user.shortly }}.
            <v-chip
              v-for="tag in user.tags"
              :key="tag"
              class="ml-1 mr-1"
            >
              {{ tag }}
            </v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    {{ JSON.stringify(user) }}
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
