import { Gnome } from "../../models";

export enum ActionTypes {
    SET_LOADING = "SET_LOADING",   
    SET_ITEMS = "SET_ITEMS",
    SET_ITEM = "SET_ITEM",
    SET_ORIGINAL_ITEMS = "SET_ORIGINAL_ITEMS",
    SET_SHOW_FILTERS = "SET_SHOW_FILTERS",
    SET_OPEN_DIALOG = "SET_OPEN_DIALOG"
}

export type Action =
    { type: ActionTypes.SET_LOADING, payload: boolean } |
    { type: ActionTypes.SET_ORIGINAL_ITEMS, payload: Gnome[] } |
    { type: ActionTypes.SET_ITEMS, payload: Gnome[] } |
    { type: ActionTypes.SET_ITEM, payload: Gnome } |
    { type: ActionTypes.SET_OPEN_DIALOG, payload: Gnome[] } |
    { type: ActionTypes.SET_SHOW_FILTERS, payload: boolean };
