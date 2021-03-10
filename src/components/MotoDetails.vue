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
                    {{ moto.maximumPower}}
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
</template>

<script src="../js/MotoDetails.js" />