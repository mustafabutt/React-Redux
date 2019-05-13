import T from '../constants/types';
import S from '../constants/system';
import {get} from '../utils/nioUtils';
import 'isomorphic-fetch';

function beforFetching(type) {
    return {
        type:type,
        payload:{fetching:true}
    }
}

export  const logIn = (token,hostName) => dispatch => {
console.log("in action now")
    console.log(token)
    console.log(hostName)
    fetch(S.LOGIN,
        {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "token":token,
                "hostName":hostName
            })
        }
        ).then((body) => {


        return body.json()
            .then((myJson) => {
                console.log("yes in login")
                console.log(myJson)
                dispatch({
                    type:T.SITEMAP.LOGIN,
                    payload:{data:myJson}
                });
            });

    })


};
export  const getSiteMap = () => dispatch => {

  fetch(S.GET_SITEMAP).then((body) => {


    return body.json()
      .then((myJson) => {
        console.log("yes in action")
        console.log(myJson)
        dispatch({
          type:T.SITEMAP.GET_SITEMAP,
          payload:{data:myJson}
        });
      });

  })


};

export  const getHackerNewsData = () => dispatch => {
    dispatch(beforFetching(T.HACKERNEWS.UPDATES));
    get(S.HACKERNEWS_API.UPDATES).then((body) => {
        dispatch({
            type:T.HACKERNEWS.UPDATES,
            payload:{data:body.body,fetching:false}
        });
    }).catch(error => {

        });

    dispatch(beforFetching(T.HACKERNEWS.URL_1));
    get(S.HACKERNEWS_API.URL_1).then((body) => {
        dispatch ({
            type: T.HACKERNEWS.URL_1,
            payload: {data:body.body,fetching:false}
        })
    }).catch(error => {

    });

    dispatch(beforFetching(T.HACKERNEWS.URL_2));
    get(S.HACKERNEWS_API.URL_2).then((body) => {
        dispatch ({
            type: T.HACKERNEWS.URL_2,
            payload: {data:body.body,fetching:false}
        })
    }).catch(error => {

    });

    dispatch(beforFetching(T.HACKERNEWS.TOP_STORIES));
    get(S.HACKERNEWS_API.TOP_STORIES).then((body) => {
        dispatch ({
            type: T.HACKERNEWS.TOP_STORIES,
            payload: {data:body.body,fetching:false}
        })
    }).catch(error => {

    })
};


