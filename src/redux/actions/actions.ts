import { Gnome } from "../../models";

export const actions_setItems = (gnomes: Gnome[]) => ({
    type: "SET_ITEMS",
    payload: gnomes
});

export const actions_setLoading = (loading: boolean) => ({
    type: "SET_LOADING",
    payload: loading
});

export const actions_setShowFilters = (showFilter: boolean) => ({
    type: "SET_SHOW_FILTERS",
    payload: showFilter
});