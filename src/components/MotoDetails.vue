<template>
    
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
          <div class="modal-content text-center">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="exampleModalLabel">{{moto.model}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 ml-3 text-left h-100 pb-3">
                        <div class="row mb-2">
                            Puissance : {{ moto.maximumPower}}
                        </div>
                        <div class="row mb-2">
                            Couple : {{ moto.maximumTorque }}
                        </div>
                        <div class="row mb-2">
                            Cylindrée : {{ moto.Displacement }}
                        </div>
                        <div class="row mb-2">
                            Accélération : <span v-if="isNaN(moto.acceleration)"> Indéfini</span> <span v-else>{{ moto.acceleration }}</span> 
                        </div>
                        <div class="row mb-2">
                            Poid à sec : {{ moto.kerbWeight }}
                        </div>
                        <div class="row mb-2">
                            Réservoir : {{ moto.tankCapacity }}
                        </div>
                        <div class="row border-bottom border-dark pb-3">
                            Nombre de rapports : <span v-if="isNaN(moto.Clutch)"> Indéfini</span> <span v-else>{{ moto.Clutch }}</span> 
                        </div>
                        <div class="row mb-2">
                            Suspension avant : {{ moto.frontSuspension }}
                        </div>
                        <div class="row mb-2">
                            Suspension arrière : {{ moto.rearSuspension }}
                        </div>
                        <div class="row mb-2">
                            Frein avant : {{ moto.frontBrake }}
                        </div>
                        <div class="row mb-2">
                            Frein arrière : {{ moto.rearBrake }}
                        </div>
                    </div>
                    <div class="col-8">
                        <div v-if="moto.image" class="moto-image">
                            <img :src="moto.image" class=" h-100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name: "ModalDetails",
    props: {
        moto: Object
    },
}
</script>