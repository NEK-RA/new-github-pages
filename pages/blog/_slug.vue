<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <PostLabel
        :post="postLabel"
      />
      <v-card>
        <div
          class="ml-4"
        >
          <v-card-title>
            {{ post.title }}
          </v-card-title>
          <v-card-text>
            Author: {{ post.author }} <br>
            Posted: {{ new Date(post.createdAt).toLocaleString() }} <br>
            Updated: {{ new Date(post.updatedAt).toLocaleString() }} <br>
          </v-card-text>
          <v-card-actions>
            Tags:
            <v-chip
              v-for="(tag,index) in post.tags"
              :key="index"
              small
              class="ml-1"
            >
              {{ tag }}
            </v-chip>
          </v-card-actions>
        </div>
      </v-card>
      <v-card>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Fetched post data
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ post }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-card>
        <v-card-text>
          <nuxt-content :document="post" />
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
  async asyncData ({ params, $content }) {
    const post = await $content(`blog/${params.slug}`).fetch()
    return {
      post
    }
  },
  computed: {
    postLabel () {
      return {
        title: this.post.title,
        description: this.post.description,
        tags: this.post.tags,
        time: {
          created: this.post.createdAt,
          updated: this.post.updatedAt
        }
      }
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.post.title)
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ]
    }
  }
}
</script>
