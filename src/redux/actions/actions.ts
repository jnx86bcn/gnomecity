import { Gnome } from "../../models";

export const actions_setOriginalItems = (items: Gnome[]) => ({
    type: "SET_ORIGINAL_ITEMS",
    payload: items
});

export const actions_setItems = (items: Gnome[]) => ({
    type: "SET_ITEMS",
    payload: items
});

export const actions_setItem = (item: Gnome) => ({
    type: "SET_ITEM",
    payload: item
});

export const actions_setLoading = (loading: boolean) => ({
    type: "SET_LOADING",
    payload: loading
});

export const actions_setShowFilters = (showFilter: boolean) => ({
    type: "SET_SHOW_FILTERS",
    payload: showFilter
});

export const actions_setOpenDialog = (openDialog: boolean) => ({
    type: "SET_OPEN_DIALOG",
    payload: openDialog
});