/**
 * Created by chris on 13/03/17.
 */
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]); //we use concat as this returns a new state, rather than mutating existing, which is Bad
            return [action.payload.data, ...state]; // this is effectively the same.  ...state flattens out existing array and flattens it out, so [city, city, not [city, [city]]
            // this does add the record at the head.
    }
    return state
}