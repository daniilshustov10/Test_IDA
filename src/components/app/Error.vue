<template>
    <div class="error">
        <div class="error_head">An error has occurred</div>
        <div class="error_advice error_advice__margin">Please refresh the page</div>
        <button class="error_refresh" @click.prevent="clickHandler">Reload page </button>
    </div>    
</template>

<script>
export default {
    methods: {
        clickHandler() {
            this.$store.commit('clearError')
            this.$store.dispatch('getVehiclesFromJSON')
        }
    }
}
</script>

<style scoped>
    .error {
        padding: 260px 448px;
        background: #F3F4F7;
        border-radius: 48px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .error {
            padding: 200px 310px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .error {
            padding: 160px 220px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .error {
            padding: 100px 150px;
        }
    }

    @media (max-width: 575px) {
        .error {
            border-radius: 24px;
            padding: 220px 60px;
        }
    }


    .error_head {
        font-family: 'Codec Pro Thin';
        font-weight: bold;
        font-size: 40px;
        color: #012345;
    }   

    @media (min-width: 768px) and (max-width: 1199px) {
        .error_head {
            font-size: 32px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .error_head {
            font-size: 28px;
        }
    }

     @media (max-width: 575px) {
        .error_head {
            font-size: 24px;
        }
    }

    .error_advice {
        font-family: 'Codec Pro Thin';
        font-weight: bold;
        font-size: 14px;
        color: #677B8F;
    }

    .error_advice__margin {
        margin: 24px 0;
    }

    .error_refresh {
        padding: 17px 32px;
        background: #4959FF;
        border-radius: 12px;
        color: #FCFCFC;
        border: none;
        font-family: 'Codec Pro Thin';
        font-weight: bold;
        font-size: 16px;
        align-self: center;
    }

     @media (max-width: 575px) {
        .error_refresh {
            padding: 16px 24px;
            font-size: 14px;
            line-height: 12px;
        }
    }

     .error_refresh:hover {
        color: #000000;
        background: #ccc;
        cursor: pointer;
     }

</style>



