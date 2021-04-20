import { getField, updateField } from 'vuex-map-fields';
export const namespaced = true;


export const initState = () => {
    return {
        form: {
            image: null,
            phone: null,
            email: null,
        },
    }
}

export const state = initState()


export const actions = {


}

export const mutations = {
    updateField,
 
    
}

export const getters = {
    getField,
    getStaticData: state => state.staticData,
    followers: state => state.followers,
}