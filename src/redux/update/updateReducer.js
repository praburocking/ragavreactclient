import {UPDATE_FIELD} from './updateType'
const initialState = {
    supplyList:[],
    demandList:[],
    listingActiveTab:'supply'
}

const updateReducer = (state=initialState,action) => {
    switch(action.type){
        case UPDATE_FIELD:
        return{
            ...state,
            [action.field] : action.val
        }
        default: return state
    }
}

export default updateReducer