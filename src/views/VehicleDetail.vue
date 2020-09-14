<template>
<div class="about-vehicle">
    <div class="item_img">
        <img :src="vehicle.image" alt="vehicle">
    </div>
    <div class="item_text">
        <div class="item_head">{{ vehicle.name }}</div>
        <div class="item_list item_list__margin">
            <ul>
                <li><router-link :to="toSpecifications" active-class="active">Specifications</router-link></li>
                <li><router-link :to="toTeam" active-class="active">Team</router-link></li>
                <li><router-link :to="toRentTerms" active-class="active">Rent terms</router-link></li>
            </ul>
        </div>
        <div class="item_description">
            <router-view :vehicle="vehicle"></router-view>
        </div>
        <div class="item_features item_features__margin">
            <h6>Features:</h6>
            <ul>
                <li>
                    <div class="feature">
                        <div class="feature_img">
                            <img src="../assets/img/feature1.png" alt="feature">
                        </div>
                        <div class="feature_text feature_text__marginLeft">
                            <div class="feature_head">A challenge for a true champion</div>
                            <div class="feature_description feature_description__marginTop">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="feature">
                        <div class="feature_img">
                            <img src="../assets/img/feature2.png" alt="feature">
                        </div>
                        <div class="feature_text feature_text__marginLeft">
                            <div class="feature_head">Pilot's sweaty hands</div>
                            <div class="feature_description feature_description__marginTop">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="item_rent item_rent__marginTop">
            <div class="item_price">Rent for <span>{{ vehicle.rent }} $/h</span></div>
            <div class="item_button">
                <button>Rent now</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        vehicle() {
            return this.$store.getters.vehicles.find(vehicle => vehicle.id === this.$route.params.id)
        },
        toSpecifications() {
            return `/vehicles/${this.vehicle.id}/specifications`
        },
        toTeam() {
            return `/vehicles/${this.vehicle.id}/team`
        },
        toRentTerms() {
            return `/vehicles/${this.vehicle.id}/rent-terms`
        }
    }
}
</script>