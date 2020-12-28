<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-title>
          Here will be blog
        </v-card-title>
        <v-card-text>
          <nuxt-link
            v-for="post in posts"
            :key="post.slug"
            :to="'blog/'+post.slug"
          >
            <PostLabel
              :post="post"
            />
          </nuxt-link>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PostLabel from '@/components/PostLabel'
export default {
  components: {
    PostLabel
  },
  async asyncData ({ $content }) {
    const posts = await $content('blog').only(['title', 'description', 'slug', 'posted', 'tags']).fetch()
    return {
      posts
    }
  },
  data () {
    return {
      pageTitle: 'Blog'
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.pageTitle)
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Small blog of NEK-RA. Also here will be news about projects'
        }
      ]
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
