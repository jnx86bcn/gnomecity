import { Gnome } from "../../models";

export const actions_setGnomes = (gnomes: Gnome[]) => ({
    type: "SET_GNOMES",
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