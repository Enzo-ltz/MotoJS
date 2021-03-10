import Data from "../data.json";
import MotoDetails from "../components/MotoDetails.vue";

export default {
  name: "DataDisplayer",
  components: {
    MotoDetails
  },
  data() {
    return {
      searchQuery: null,
      motos: Data,
      currentMoto: {},
    };
  },
  methods: {
    resultQuery(){
      if(this.searchQuery){
      return this.motos.filter((moto)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => moto.model.toLowerCase().includes(v))
      })
      }else{
        return this.motos;
      }
    }
  },
 
  
  
};
