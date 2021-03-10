import Data from "../data.json";


export default {
    name: "MenuFilter",
    data() {
      return {
        searchQuery: null,
        motos: Data,
        currentMoto: {},
      };
    },
    methods: {
      testing(){
        this.$emit('clicked', 'someValue')
      },
      resultQuery(){
        if(this.searchQuery){
        return this.motos.filter((moto)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => moto.model.toLowerCase().includes(v))
        })
        }else{
          return this.motos;
        }
      }

    }
  };