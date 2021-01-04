import {combineReducers} from "redux";
import tracks from "./tracks";
import info from "./info";
import filterTracks from "./filterTracks";

export default combineReducers({
    tracks,
    info,
    filterTracks
})