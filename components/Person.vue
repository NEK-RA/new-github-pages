<template>
  <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-row
      align="end"
      class="fill-height"
    >
      <v-col
        align-self="start"
        class="pa-0"
        cols="12"
      >
        <v-avatar
          class="profile"
          color="black"
          size="64"
        >
          <v-img :src="require(`~/assets/avatars/nekra64.jpg`)" />
        </v-avatar>
      </v-col>
      <v-col class="py-0">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Marcus Obrien
            </v-list-item-title>
            <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {

}
</script>
