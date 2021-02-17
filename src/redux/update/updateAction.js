import {UPDATE_FIELD} from './updateType'

export function updateField(field,val){
    return{
        type:UPDATE_FIELD,
        field,
        val
    }
}