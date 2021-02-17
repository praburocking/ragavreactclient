import axios from "axios"
import {FETCH_DEALS_LIST,FETCH_DEALS_SUCCESS,FETCH_DEALS_ERROR} from './dealsTypes'

export const fetchdealsList = () => {
    return {
        type:FETCH_DEALS_LIST
    }
}

export const fetchdealsSuccess = (list) => {
    return {
        type:FETCH_DEALS_SUCCESS,
        payload:list,
    }
}

export const fetchdealsError = (error) => {
    return {
        type:FETCH_DEALS_ERROR,
        payload:error
    }
}

 
export const fecthdeals = () => {
    return (dispatch) => {
        dispatch(fetchdealsList)
        axios.get(`https://ohtelrest.hermitz.com/public/api/categories/4/subcategories`)
        .then(res => {
            const dealsList = res.data
            dispatch(fetchdealsSuccess(dealsList))
        })
        .catch(err => {
            const errorMsg =err.message
            dispatch(fetchdealsError(errorMsg))
        })
    }
}