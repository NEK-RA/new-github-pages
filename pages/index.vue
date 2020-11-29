<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <PersonLabel :user="user" />
      <v-card>
        <v-card-title class="headline">
          Welcome here :)
        </v-card-title>
        <v-card-text>
          Some text here
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
      user: {
        name: 'NEK-RA',
        avatar: 'https://i.comss.pics/2020/11/29/100x100-min.th.jpg',
        shortly: 'Beginner developer, a little bit everything',
        tags: [
          'Russian',
          'English',
          'Java',
          'VueJS'
        ]
      }
    }
  },
  head () {
    return {
      title: 'About me'
    }
  }
}
</script>
