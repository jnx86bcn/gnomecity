import { Gnome } from "../../models";

export enum ActionTypes {
    SET_LOADING = "SET_LOADING",   
    SET_ITEMS = "SET_ITEMS", 
    SET_SHOW_FILTERS = "SET_SHOW_FILTERS"
}

export type Action =
    { type: ActionTypes.SET_LOADING, payload: boolean } |
    { type: ActionTypes.SET_ITEMS, payload: Gnome[] } |
    { type: ActionTypes.SET_SHOW_FILTERS, payload: boolean };
