import axios from 'axios'

var url = "https://66aa8a34c660.ngrok.io"

const api = () => 
	axios.create({
		baseURL: url,
		timeout: 20000,
	})

export const apiCreateNews = data => api().post("/news/create", data, {
	headers: {
		"Content-Type" : "multipart/form-data",
	}
})

export const apiListNews = () => api().get("/news")