import T from '../constants/types'
import State from '../constants/initialState';
import { combineReducers } from 'redux'


export const SiteMap = (state={}, action) => {
    console.log(`state & payload: ${JSON.stringify(action.payload)}`)
    switch(action.type) {

        // case T.HACKERNEWS.URL_1 :
        //     return Object.assign({},state,{url1:action.payload});
        // case T.HACKERNEWS.URL_2 :
        //     return Object.assign({},state,{url2:action.payload});
        // case T.HACKERNEWS.TOP_STORIES :
        //     return Object.assign({},state,{topstories:action.payload});
        // case T.HACKERNEWS.UPDATES :
        //     return Object.assign({},state,{updates:action.payload});
        case T.SITEMAP.GET_SITEMAP :
            return action.payload
        case T.SITEMAP.LOGIN :
            return action.payload
        default:
            return state
    }
};

export default combineReducers({
    SiteMap
})



