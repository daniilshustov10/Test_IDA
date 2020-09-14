<template>
    <Error v-if="error" />

    <Loader v-else-if="!vehicles.length" />

    <div v-else class="vehicles">
        <div class="vehicles_header">
            <div class="vehicles_select">
                <label for="select">Rent <span>whatever</span></label>
                <select name="select" id="select"></select>
             </div>
            <div class="vehicles_add">
                <label for="add">Add new</label>
                <button id="add" class="vehicles_button vehicles_button__marginLeft">+</button>
            </div>                   
        </div>

        <div class="vehicles_list vehicles_list__marginTop">
            <VehicleItem 
                v-for="vehicle of vehicles"
                :key="vehicle.id"
                :vehicle="vehicle"
            />
        </div>             
    </div>
</template>

<script>
import VehicleItem from '@/components/app/VehicleItem'
import Error from '@/components/app/Error'
import Loader from '@/components/app/Loader'

export default {
    computed: {
        vehicles() {
            return this.$store.getters.vehicles
        },
        error() {
            return this.$store.getters.error
        }
    },
    components: {
        VehicleItem,
        Error,
        Loader
    }
}
</script>