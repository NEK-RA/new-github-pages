<template>
  <v-card>
    <v-row>
      <v-col cols="12" sm="8" md="8">
        {{ post }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
