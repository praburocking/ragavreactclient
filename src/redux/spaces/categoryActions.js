import axios from "axios"
import {FETCH_CATEGORY_LIST,FETCH_CATEGORY_SUCCESS,FETCH_CATEGORY_ERROR} from './categoryTypes'

export const fetchCategoryList = () => {
    return {
        type:FETCH_CATEGORY_LIST
    }
}

export const fetchCategorySuccess = (list) => {
    return {
        type:FETCH_CATEGORY_SUCCESS,
        payload:list,
    }
}

export const fetchCategoryError = (error) => {
    return {
        type:FETCH_CATEGORY_ERROR,
        payload:error
    }
}

 
export const fecthCategroy = () => {
    return (dispatch) => {
        dispatch(fetchCategoryList)
        axios.get(`https://ohtelrest.hermitz.com/public/api/categories/1/subcategories`)
        .then(res => {
            const categoryList = res.data
            dispatch(fetchCategorySuccess(categoryList))
        })
        .catch(err => {
            const errorMsg =err.message
            dispatch(fetchCategoryError(errorMsg))
        })
    }
}