<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card>
        <v-card-title>
          Privacy Information
        </v-card-title>
        <v-card-text>
          This is a static site generated with NuxtJS. I don't use cookies at all, but please notice:
          <v-alert
            type="info"
            outlined
            text
          >
            Disqus is used to provide abilities to comment posts in
            <v-btn
              to="/blog"
              small
              class="accent"
            >
              <v-icon>
                mdi-mdi-newspaper-variant
              </v-icon>
              Blog / News
            </v-btn>
            section. <br>
            This means, that Disqus can use/store some cookies in your browser, when you visit my posts.
          </v-alert>
          <v-alert
            type="info"
            outlined
            text
          >
            I'm using Disqus basic (
            <a href="https://disqus.com/pricing" target="_blank">
              https://disqus.com/pricing
            </a>
            ), which runs with ADS. This means that Disqus will use it's own identifier (and etc) to show ads.
          </v-alert>
          I know that small, non-commercial site, can self identify to get a free subscription to Disqus Plus. But I'm not sure if I can do that before site is finished and didn't checked other details about that. <br>
          Nothing other external services are used.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      pageTitle: 'Privacy information'
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
          content: 'Information about any external services used, which use cookies'
        }
      ]
    }
  }
}
</script>
