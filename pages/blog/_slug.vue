<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card>
        <v-card-title>
          {{ post.title }} - {{ post.description }}
        </v-card-title>
        <v-card-text>
          <nuxt-content :document="post" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const post = await $content(`blog/${params.slug}`).fetch()
    return {
      post
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.post.title + ' | Blog')
  },
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>
