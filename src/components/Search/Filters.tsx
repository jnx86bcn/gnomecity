import React from 'react';
import { DropdownFilter } from '../../models/DropdownFilter';
import { FiltersValues } from '../../models/FiltersValues';
// import { getFilterHouses_DEV, getFilterHouses_PRO } from '../../services';
import { Gnome } from '../../models';
import { useSelector, useDispatch } from 'react-redux';
import { actions_setGnomes, actions_setLoading } from '../../redux/actions/actions';



export function Filters(): JSX.Element {

    const dispatch = useDispatch();

    const idDdlEdadMin = "ddlEdadMin";
    const idDdlEdadMax = "ddlEdadMax";
    const idDdlFriends = "ddlFriends";
    const idDdlJobs = "ddlJobs";

    const edadMin = getMappedOptions(idDdlEdadMin, DropdownFilter.getYearsValues("Edad mínima"));
    const edadMax = getMappedOptions(idDdlEdadMax, DropdownFilter.getYearsValues("Edad máxima"));
    const friends = getMappedOptions(idDdlFriends, DropdownFilter.getFriendsNumber());
    const jobs = getMappedOptions(idDdlJobs, DropdownFilter.getJobsNumber());


    function getMappedOptions(idSelector: string, values: DropdownFilter[]): JSX.Element {
        const mappedOptions = values.map((ddlValue, index) => { return <option value={ddlValue.value} key={index}>{ddlValue.label}</option> });
        return (<select data-testid={idSelector} id={idSelector}>{mappedOptions}</select>);
    }

    function getDdlSelectedValue(idSelector: string): number {
        const e = (document.getElementById(idSelector)) as HTMLSelectElement;
        const selected = +e.options[e.selectedIndex].value;

        return selected;
    }

    function saveFilters() {

        const edadMin = getDdlSelectedValue(idDdlEdadMin);
        const edadMax = getDdlSelectedValue(idDdlEdadMax);
        const friends = getDdlSelectedValue(idDdlFriends);
        const jobs = getDdlSelectedValue(idDdlJobs);

        const filters: FiltersValues = {
            edadMin: edadMin,
            edadMax: edadMax,
            minFriends: friends,
            minJobs: jobs
        }

        dispatch(actions_setGnomes([]));
        // if (isPro) {
        //     dispatch(actions_setLoading(true));
        //     getFilterHouses_PRO(filters).
        //         then((citizens: Citizen[]) => {
        //             dispatch(actions_setHouses(citizens));
        //             dispatch(actions_setLoading(false));
        //         })
        // }
        // else {
        //     dispatch(actions_setLoading(true));
        //     getFilterHouses_DEV(filters).
        //         then((citizens: Citizen[]) => {
        //             dispatch(actions_setHouses(citizens));
        //             dispatch(actions_setLoading(false));
        //         })
        // }
    }



    return (
        <>
            <div className="filterPanel">
                <div className="filterPanelItem">
                    <span className="title">EDAD</span>
                    <div className="selectors">
                        {edadMin}  {edadMax}
                    </div>
                </div>
                <div className="filterPanelItem">
                    <span className="title">AMIGOS</span>
                    <div className="selectors">
                        {friends}
                    </div>
                </div>
                <div className="filterPanelItem">
                    <span className="title">TRABAJOS</span>
                    <div className="selectors">
                        {jobs}
                    </div>
                </div>
                <button  data-testid={"ButtonFilterSearch"} onClick={() => saveFilters()}>Filtrar</button>
            </div>
        </>
    )

}