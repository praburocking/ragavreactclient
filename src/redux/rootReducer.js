import {combineReducers} from 'redux'
import catogeryReducer from './spaces/catogeryReducer'
import equipmentsReducer from './equipments/equipmentsReducer'
import jobReducer from './jobs/jobReducer'
import dealsReducer from './deals/dealsReducer'
import update from './update/updateReducer'

const rootReducer = combineReducers({
    categoryList:catogeryReducer ,
    equipmentsList:equipmentsReducer,
    jobList:jobReducer,
    dealsList:dealsReducer,
    update
})


export default rootReducer