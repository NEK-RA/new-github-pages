<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card>
        <v-card-title>
          Search and tag filter
        </v-card-title>
        <v-card-text>
          Filters will be here
          <hr>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Filter by tags
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-alert
                  type="info"
                  color="grey darken-3"
                >
                  You will see posts which contain all selected tags
                </v-alert>
                Selected tags:
                <v-chip
                  v-for="(tag,index) in selected"
                  :key="'selected'+index"
                  small
                  class="ml-1 mt-1 mr-1 mb-1"
                  close
                  @click:close="selected.splice(index, 1)"
                >
                  {{ tag }}
                </v-chip>
                <br>
                All tags:
                <template
                  v-for="(tag,index) in tags"
                >
                  <v-chip
                    v-if="!selected.includes(tag)"
                    :key="'all'+index"
                    small
                    class="ml-1 mt-1 mr-1 mb-1"
                    @click="selected.push(tag)"
                  >
                    {{ tag }}
                  </v-chip>
                </template>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>

      <v-alert
        v-if="filteredPosts.length===0"
        type="info"
        color="grey darken-3"
        prominent
        class="mt-2"
      >
        Sorry, but there are no posts which contain all selected tags or search query :c
      </v-alert>
      <nuxt-link
        v-for="post in filteredPosts"
        :key="post.slug"
        :to="'blog/'+post.slug"
      >
        <PostLabel
          :post="post"
        />
      </nuxt-link>
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
    const posts = await $content('blog').only(['title', 'description', 'slug', 'posted', 'tags']).sortBy('posted', 'desc').fetch()
    const tags = []

    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
    })

    return {
      tags,
      posts
    }
  },
  data () {
    return {
      pageTitle: 'Blog',
      selected: []
    }
  },
  computed: {
    filteredPosts () {
      let result = this.posts
      if (this.selected.length !== 0) {
        result = result.filter(post => (this.includeAll(post.tags, this.selected)))
      }
      return result
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.pageTitle)
  },
  methods: {
    includeAll (arr, values) {
      let result = true
      for (let i = 0; i < values.length; i++) {
        if (!arr.includes(values[i])) {
          result = false
          break
        }
      }
      return result
    }
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
