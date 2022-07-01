import Vue from 'vue'

const miMixinGlobal = {
    methods: {  
        easyButton(){
            this.$store.dispatch('setDificultad', false)
            this.init(3)
        },
        hardButton(){
            this.$store.dispatch('setDificultad', true)
            this.init(6)
        },
        init(cCount){
            
            this.$store.state.colors = this.createNewColors(cCount)
            this.$store.state.pickedColor = this.$store.state.colors[this.PickColor()]
            this.$store.state.message = ""
            this.$store.state.buttonMessage = "New Colors!"
            this.$store.state.hColor = "steelblue"
        },
        createNewColors(numbers){
            var arr = [];
            for (var i = 0; i < numbers; i++) {
              arr.push(this.createRandomStringColor());
            }
              return arr;
        },
        createRandomStringColor(){
            var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
            return newColor;
        },
        randomInt(){
            return Math.floor(Math.random() * 256);
        },
        PickColor(){
            var quantity;
            if (this.$store.state.isHard) {
              quantity = 6;
            } else {
              quantity = 3;
            }
            return Math.floor(Math.random() * quantity );
        },
    },
    computed: {
        isHard(){
            return this.$store.state.isHard
        },
        message(){
            return this.$store.state.message
        },
        buttonMessage(){
            return this.$store.state.buttonMessage
        },
        colors(){
            return this.$store.state.colors
        },
        hColor(){
            return this.$store.state.hColor
        },
        pickedColor(){
            return this.$store.state.pickedColor
        }
    }
}

Vue.mixin(miMixinGlobal)