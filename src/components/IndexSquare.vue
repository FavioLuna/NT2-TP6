<template>
	<div id="container">
		<div class="square" :style="{backgroundColor: color}" @click="onClick()"></div>
	</div>
</template>

<script>

  export default  {
    name: 'src-components-index-square',
    props: ['color'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      onClick(){
        this.$store.dispatch("clickSquare", this.color)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
#container {
	margin: 20px auto;
	max-width: 600px;
}
.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}
</style>
