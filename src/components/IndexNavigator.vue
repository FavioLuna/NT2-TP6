<template>
	<div id="navigator">
		<button v-if="isHard" id="reset" @click="hardButton()"> {{buttonMessage}}</button>
		<button v-if="!isHard" id="reset" @click="easyButton()"> {{buttonMessage}}</button>
		<span id="message">{{message}} </span>
		
		<button id="easy" @click="easyButton()" :class="{selected: !isHard}">easy</button>
		<button id="hard" @click="hardButton()" :class="{selected: isHard}">hard</button>
	</div>
</template>

<script>

  export default  {
    name: 'src-components-index-navigator',
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
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
	color: #000000;
	display: inline-block;
	width: 20%;
}
.selected {
	background-color: steelblue;
	color: white;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
</style>
