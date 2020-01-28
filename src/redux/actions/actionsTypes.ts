import { Citizen } from "../../models";

export enum ActionTypes {
    SET_LOADING = "SET_LOADING",   
    SET_CITIZENS = "SET_CITIZENS", 
    SET_SHOW_FILTERS = "SET_SHOW_FILTERS",
    SET_ISPRO = "SET_ISPRO",
    SET_CITY = "SET_CITY"
}

export type Action =
    { type: ActionTypes.SET_LOADING, payload: boolean } |
    { type: ActionTypes.SET_CITIZENS, payload: Citizen[] } |
    { type: ActionTypes.SET_SHOW_FILTERS, payload: boolean } |
    { type: ActionTypes.SET_ISPRO, payload: boolean } |
    { type: ActionTypes.SET_CITY, payload: string };
