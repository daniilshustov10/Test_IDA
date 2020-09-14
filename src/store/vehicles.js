import { getVehicles } from '@/api/request.js'

export default {
    state: {
        vehicles: [],
        error: null
    },
    mutations: {
        setVehicles(state, vehicles) {
            state.vehicles = vehicles
        },
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        async getVehiclesFromJSON({commit}) {
            try {
                const data = await getVehicles()
                commit('setVehicles', data)
            } catch(e) {
                console.log(e)
                commit('setError', e)
            }
        }
    },
    getters: {
        vehicles(state) {
            return state.vehicles
        },
        error(state) {
            return state.error
        }
    }
}