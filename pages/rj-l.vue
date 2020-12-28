<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card>
        <v-card-title>
          RJ-Leisure
        </v-card-title>
        <v-card-text>
          RJ-Leisure is a small team of me and my friend
        </v-card-text>
      </v-card>
      <PersonLabel :user="nekra" />
      <PersonLabel :user="jonsi" />
      <v-card>
        <v-card-text>
          We decided to call us "RJ-Leisure Team" when we will do any content together :)
          <br>
          I'm not sure if we will do any content in English, but you can visit now Jonsi's profiles at VK and Instagram.
          <v-row
            justify="center"
            class="mr-2"
          >
            <v-col
              cols="12"
              :sm="4"
              :md="4"
            >
              <v-btn
                block
                class="accent mr-2"
                href="https://www.instagram.com/ing.jonsi/"
              >
                <v-icon
                  class="mr-2"
                >
                  mdi-instagram
                </v-icon>
                Instagram
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              :sm="4"
              :md="4"
            >
              <v-btn
                block
                class="accent"
                href="https://vk.com/jonsi_art/"
                target="_blank"
              >
                <v-icon
                  class="mr-2"
                >
                  mdi-vk
                </v-icon>
                VKontakte
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PersonLabel from '@/components/PersonLabel'
export default {
  components: {
    PersonLabel
  },
  data () {
    return {
      pageTitle: 'RJ-Leisure Team',
      nekra: {
        name: 'NEK-RA',
        avatar: {
          url: 'https://i.comss.pics/2020/11/29/100x100-min.th.jpg',
          type: 'other'
        },
        shortly: 'Beginner developer, a little bit everything',
        tags: [
          'Russian',
          'English',
          'Java',
          'VueJS'
        ]
      },
      jonsi: {
        name: 'Jonsi',
        avatar: {
          url: 'https://i.comss.pics/2020/11/30/gT5JES0JnA8.jpg',
          type: 'other'
        },
        shortly: 'Aspiring artist',
        tags: [
          'Russian',
          'Photoshop'
        ]
      }
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
          content: 'Information about RJ-Leisure team'
        }
      ]
    }
  }
}
</script>
