<template>
<div>
	<v-container>
		<v-row>
			<v-col class="pa-0">
				<div class="news-title">
					<h1>{{ newsTitle }}</h1>
				</div>
				<div v-show="hasSubtitle" class="text-center news-subtitle mb-10">
					<h2>
						{{ newsSubtitle }}
					</h2>
				</div>
			</v-col>
		</v-row>
	</v-container>
</div>
</template>

<script>

export default {
	name: "TitleBannerComponent",

	props:{
		imgName: {
			type: String,
			required: true,
		},

		imgLegend: {
			type: String,
			required: true,
		},

		newsTitle: {
			type: String,
			required: true,
		},

		newsSubtitle: {
			type: String,
			required: false,
		},

		hasSubtitle: {
			type: Boolean,
			required: false,
			default: true,
		}
	},

	methods: {
		formImgPath(name){
      return require('../../assets/' + name)
    }
	},
}

</script>

<style>
	.image-legend {
		position: absolute;
		top: 10px;
		color: grey;
		font-size: 0.8rem;
		left: 10px
	}

	.news-title {
		text-align: center;
		padding: 0.6rem;
		color: #2a2a2a;
		font: 0.8rem "Libre Baskerville", serif;
		background: #f8f50d;
		font-weight: bold;
		position: relative;
		z-index: 1;
		bottom: 30px;
	}

	.news-subtitle {
		text-align: center;
		color: #616161;
		font: 0.8rem "Open Sans", sans-serif;
	}
</style>