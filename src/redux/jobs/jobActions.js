import axios from "axios"
import {FETCH_JOB_LIST,FETCH_JOB_SUCCESS,FETCH_JOB_ERROR} from './jobTypes'

export const fetchJobList = () => {
    return {
        type:FETCH_JOB_LIST
    }
}

export const fetchJobSuccess = (list) => {
    return {
        type:FETCH_JOB_SUCCESS,
        payload:list,
    }
}

export const fetchJobError = (error) => {
    return {
        type:FETCH_JOB_ERROR,
        payload:error
    }
}

 
export const fecthJob = () => {
    return (dispatch) => {
        dispatch(fetchJobList)
        axios.get(`https://ohtelrest.hermitz.com/public/api/categories/3/subcategories`)
        .then(res => {
            const JobList = res.data
            dispatch(fetchJobSuccess(JobList))
        })
        .catch(err => {
            const errorMsg =err.message
            dispatch(fetchJobError(errorMsg))
        })
    }
}