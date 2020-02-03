import React, { useEffect } from 'react';
import { DropdownFilter } from '../../models/DropdownFilter';
import { FiltersValues } from '../../models/FiltersValues';
import { getFilteredItems_DEV } from '../../services';
import { Gnome } from '../../models';
import { useSelector,useDispatch } from 'react-redux';
import { actions_setItems, actions_setLoading } from '../../redux/actions/actions';



export function Filters(): JSX.Element {

    const dispatch = useDispatch();

    const items = useSelector( (state:any) => state.global.originalItems );

    const idDdlEdadMin = "ddlEdadMin";
    const idDdlEdadMax = "ddlEdadMax";
    const idDdlFriends = "ddlFriends";
    const idDdlJobs = "ddlJobs";

    const minEdadValue: number = items.length > 0 ? Gnome.getYoungerGnome(items).age : 0;
    const maxEdadValue: number = items.length > 0 ? Gnome.getOlderGnome(items).age : 0;
    const maxNumFriends: number = items.length > 0 ? Gnome.getMostPopular(items).friends.length : 0;
    const maxNumJobs: number = items.length > 0 ? Gnome.getMostHardworking(items).professions.length : 0;

    const minEdadString = getMappedOptions(idDdlEdadMin, DropdownFilter.getYearsValues("Edad mínima",minEdadValue,maxEdadValue));
    const maxEdadString = getMappedOptions(idDdlEdadMax, DropdownFilter.getYearsValues("Edad máxima",minEdadValue,maxEdadValue));
    const numFriendsString = getMappedOptions(idDdlFriends, DropdownFilter.getFriendsNumber(maxNumFriends));
    const numJobsString = getMappedOptions(idDdlJobs, DropdownFilter.getJobsNumber(maxNumJobs));


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

        const edadMinSelectedNum = getDdlSelectedValue(idDdlEdadMin);
        const edadMaxSelectedNum = getDdlSelectedValue(idDdlEdadMax);
        const minFriendsSelectedNum = getDdlSelectedValue(idDdlFriends);
        const minJobsSelectedNum = getDdlSelectedValue(idDdlJobs);

        const filters: FiltersValues = {
            edadMinSelected: edadMinSelectedNum,
            edadMaxSelected: edadMaxSelectedNum == 0 ? maxEdadValue : edadMaxSelectedNum ,
            minFriendsSelected: minFriendsSelectedNum,
            minJobsSelected: minJobsSelectedNum
        }

        dispatch(actions_setLoading(true));
        dispatch(actions_setItems([]));
        getFilteredItems_DEV(filters).
        then((items: Gnome[]) => {
            dispatch(actions_setItems(items));
            dispatch(actions_setLoading(false));
        })

    }



    return (
        <>
            <div className="filterPanel">
                <div className="filterPanelItem">
                    <span className="title">EDAD</span>
                    <div className="selectors">
                        {minEdadString}  {maxEdadString}
                    </div>
                </div>
                <div className="filterPanelItem">
                    <span className="title">AMIGOS</span>
                    <div className="selectors">
                        {numFriendsString}
                    </div>
                </div>
                <div className="filterPanelItem">
                    <span className="title">TRABAJOS</span>
                    <div className="selectors">
                        {numJobsString}
                    </div>
                </div>
                <button  data-testid={"ButtonFilterSearch"} onClick={() => saveFilters()}>Buscar</button>
            </div>
        </>
    )

}