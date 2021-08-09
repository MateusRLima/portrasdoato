<template>
  <div>
    <header-component :isWhite="false" color="#C9C9C9" textColor="#2A2A2A"></header-component>
    <v-form>
      <v-file-input v-model="image" label="Imagem"></v-file-input>
      <v-text-field v-model="title" label="Título"></v-text-field>
      <v-text-field v-model="subtitle" label="Subtítulo"></v-text-field>
      <v-text-field v-model="author" label="Autores"></v-text-field>
      <v-textarea v-model="newsDescription" label="Descrição da Notícia"></v-textarea>
      <v-checkbox v-model="isMainNews" label="É a notícia principal ?"></v-checkbox>
      <v-select v-model="selectedFormat" :items="format" label="Formato"></v-select>
      <v-text-field v-model="theme" label="Tema"></v-text-field>
      <v-text-field v-model="fonts" label="Fonte"></v-text-field>
      <v-btn @click="createNews()">Submit</v-btn>
    </v-form>
    <v-form>
      <v-file-input v-model="image" label="Imagem"></v-file-input>
      <v-text-field v-model="title" label="Título"></v-text-field>
      <v-text-field v-model="subtitle" label="Subtítulo"></v-text-field>
      <v-text-field v-model="author" label="Autores"></v-text-field>
      <v-textarea v-model="newsDescription" label="Descrição da Notícia"></v-textarea>
      <v-checkbox v-model="isMainNews" label="É a notícia principal ?"></v-checkbox>
      <v-select v-model="selectedFormat" :items="format" label="Formato"></v-select>
      <v-text-field v-model="theme" label="Tema"></v-text-field>
      <v-text-field v-model="fonts" label="Fonte"></v-text-field>
      <v-btn @click="createNews()">Submit</v-btn>
    </v-form>
    <v-form>
      <v-file-input v-model="image" label="Imagem"></v-file-input>
      <v-text-field v-model="title" label="Título"></v-text-field>
      <v-text-field v-model="subtitle" label="Subtítulo"></v-text-field>
      <v-text-field v-model="author" label="Autores"></v-text-field>
      <v-textarea v-model="newsDescription" label="Descrição da Notícia"></v-textarea>
      <v-checkbox v-model="isMainNews" label="É a notícia principal ?"></v-checkbox>
      <v-select v-model="selectedFormat" :items="format" label="Formato"></v-select>
      <v-text-field v-model="theme" label="Tema"></v-text-field>
      <v-text-field v-model="fonts" label="Fonte"></v-text-field>
      <v-btn @click="createNews()">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>

import { apiCreateNews } from "../services"

export default {
  data: () => ({
    title: "",
    subtitle: "",
    image: null,
    author: "",
    isMainNews: false,
    format: ["Dados", "Perfil", "Reportagem", "Expresso"],
    theme: "",
    tags: {},
    selectedFormat: "",
    newsDescription: "",
    fonts: ""
  }),

  methods: {

    getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach(key => formData.append(key, object[key]));
      return formData;
    },

    createNews(){
      this.tags.format = this.selectedFormat
      this.tags.theme = this.theme

      let data = new FormData()

      data.append("title", this.title)
      data.append("subtitle", this.subtitle)
      data.append("image", this.image)
      data.append("author", this.author)
      data.append("is_main_news", this.isMainNews)
      Object.keys(this.tags).forEach(key => data.append(key, this.tags[key]))
      data.append("news", this.newsDescription)
      data.append("fonts", this.fonts)

      apiCreateNews(data)
      .then(response => {
        alert(response)
      })
    }
  }

}

</script>

<style>

</style>