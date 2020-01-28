import { Gnome } from "../../models";

export enum ActionTypes {
    SET_LOADING = "SET_LOADING",   
    SET_GNOMES = "SET_GNOMES", 
    SET_SHOW_FILTERS = "SET_SHOW_FILTERS",
    SET_CITY = "SET_CITY"
}

export type Action =
    { type: ActionTypes.SET_LOADING, payload: boolean } |
    { type: ActionTypes.SET_GNOMES, payload: Gnome[] } |
    { type: ActionTypes.SET_SHOW_FILTERS, payload: boolean } |
    { type: ActionTypes.SET_CITY, payload: string };
