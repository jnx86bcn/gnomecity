import { Citizen } from "../../models";

export const actions_setCitizens = (citizens: Citizen[]) => ({
    type: "SET_CITIZENS",
    payload: citizens
});

export const actions_setLoading = (loading: boolean) => ({
    type: "SET_LOADING",
    payload: loading
});

export const actions_setShowFilters = (showFilter: boolean) => ({
    type: "SET_SHOW_FILTERS",
    payload: showFilter
});

export const actions_setIsPro = (isPro: boolean) => ({
    type: "SET_ISPRO",
    payload: isPro
});

export const actions_setCity = (city: string) => ({
    type: "SET_CITY",
    payload: city
});