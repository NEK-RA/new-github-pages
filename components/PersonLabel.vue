<template>
  <v-card class="mx-auto mb-1 mt-1">
    <v-row>
      <v-col cols="12" sm="8" md="8">
        <v-list three-line>
          <v-list-item>
            <v-list-item-avatar size="64">
              <v-img :src="user.avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="user.name" />
              <v-list-item-subtitle>
                {{ user.shortly }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-chip
          v-for="tag in user.tags"
          :key="tag"
          small
          class="ml-1 mr-1 mt-1 mb-1"
        >
          {{ tag.toUpperCase() }}
        </v-chip>
      </v-col>
    </v-row>
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
