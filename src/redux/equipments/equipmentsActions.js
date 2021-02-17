import axios from "axios"
import {FETCH_EQUIPMENTS_LIST,FETCH_EQUIPMENTS_SUCCESS,FETCH_EQUIPMENTS_ERROR} from './equipmentsTypes'

export const fetchequipmentsList = () => {
    return {
        type:FETCH_EQUIPMENTS_LIST
    }
}

export const fetchequipmentsSuccess = (list) => {
    return {
        type:FETCH_EQUIPMENTS_SUCCESS,
        payload:list,
    }
}

export const fetchequipmentsError = (error) => {
    return {
        type:FETCH_EQUIPMENTS_ERROR,
        payload:error
    }
}

 
export const fecthEquipments = () => {
    return (dispatch) => {
        dispatch(fetchequipmentsList)
        axios.get(`https://ohtelrest.hermitz.com/public/api/categories/2/subcategories`)
        .then(res => {
            const equipmentsList = res.data
            dispatch(fetchequipmentsSuccess(equipmentsList))
        })
        .catch(err => {
            const errorMsg =err.message
            dispatch(fetchequipmentsError(errorMsg))
        })
    }
}