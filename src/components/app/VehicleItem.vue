<template>
        <div class="vehicles_item" @click="clickHandler()">
            <div class="vehicle_img">
                <img :src="vehicle.preview" alt="vehicle">
            </div>
            <div class="vehicle_text vehicle_text__marginLeft">
                <div class="vehicle_head">{{ vehicle.name }}</div>
                <div class="vehicle_description vehicle_description__margin">{{ vehicle.description }}</div>
                <div class="vehicle_price">{{ vehicle.rent }} $/h</div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['vehicle'],
    methods: {
        clickHandler() {
            this.$router.push('/vehicles/' + this.vehicle.id)
        }
    }
}
</script>

