<template>
	<div id="header" :style="{backgroundColor: hColor}">
		<h1>The Great <br>
			<span id="colorDisplay">{{pickedColor}}</span>
			<br>
			Guessing Game</h1>
	</div>
</template>

<script>

  export default  {
    name: 'src-components-index-header',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
  
}
#colorDisplay {
font-size: 200%;
}
</style>