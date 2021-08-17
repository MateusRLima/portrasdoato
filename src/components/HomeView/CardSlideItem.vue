<template>
  <v-card tile color="#FCFCFC" class="card-item mr-5">
    <v-card-text class="pa-3">
      <v-row align="flex-start">
        <v-col cols="6" class="pb-0 px-6 pt-6" align="left">
          <v-chip outlined color="#2A2A2A" class="mb-5" label>
            {{ readTime }}min de leitura
          </v-chip>
          <p class="card-title">
            {{ title }}
          </p>
          <h4 class="card-subtitle">
            {{ subtitle.slice(0, 30) }} ...
          </h4>
          <router-link>
            Ver mais <v-icon color="#2A2A2A"
            >mdi-chevron-right</v-icon
          ></router-link>
          <v-btn
            class="pl-0"
            small
            @click="newsRoute()"
            text
            color="#2A2A2A"
            >Ver mais
            <v-icon color="#2A2A2A"
            >mdi-chevron-right</v-icon
            ></v-btn
          >
        </v-col>
        <v-col class="pa-0">
          <div class="d-flex justify-center chip-group">
            <v-chip
              color="#2A2A2A"
              dark
              class="chip mx-4"
              small
              label
            >
              <p class="ma-0">{{ format }}</p>
            </v-chip>
            <v-chip color="#2A2A2A" dark class="chip" small label>
              <p class="ma-0">{{ theme }}</p>
            </v-chip>
          </div>
          <img
            class="card-image"
            :src="formImgPath(imgName)"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardSlideItem",

  props: {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      required: true,
    },

    readTime: {
      type: String,
      required: true,
    },

    format: {
      type: String,
      required: true,
    },

    theme: {
      type: String,
      required: true,
    },

    imgName: {
      type: String,
      required: true,
    }
  },

  data: () => ({

  }),

  methods: {
    newsRoute(){
      this.$emit("sendTo")
    },

    formImgPath(name){
      return require('../../assets/cards/' + name)
    }
  }
}
</script>

<style>

.card-item {
  height: 280px;
  width: 550px;
}

.card-title {
  color: #2a2a2a;
  font: 1.4rem "Libre Baskerville", serif;
  text-align: left;
}

.card-subtitle {
  margin: 1rem 0;
  color: #2a2a2a;
  font: 0.8rem "Open Sans", sans-serif;
  text-align: left;
}

.chip-group {
  position: absolute;
  margin-top: 2rem;
  width: 50%;
  z-index: 1;
}

.card-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center;
  filter: opacity(0.6);
  z-index: 0;
}


</style>