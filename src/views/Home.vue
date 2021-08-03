<template>
  <div class="home">
    <header-component></header-component>
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
        </v-card>
        
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>

export default {
  name: 'Home',



}
</script>
