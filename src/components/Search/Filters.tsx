import React from 'react';
import { DropdownFilter } from '../../models/DropdownFilter';
import { FiltersValues } from '../../models/FiltersValues';
// import { getFilterHouses_DEV, getFilterHouses_PRO } from '../../services';
import { Citizen } from '../../models';
import { useSelector, useDispatch } from 'react-redux';
import { actions_setCitizens, actions_setLoading } from '../../redux/actions/actions';



export function Filters(): JSX.Element {

    const dispatch = useDispatch();

    const isPro = useSelector((state: any) => state.global.isPro);
    const city = useSelector((state: any) => state.global.city);

    const idDdlPricesMin = "ddlPricesMin";
    const idDdlPricesMax = "ddlPricesMax";
    const idDdlSizesMin = "ddlSizesMin";
    const idDdlSizesMax = "ddlSizesMax";
    const idDdlRooms = "ddlRooms";

    const pricesMin = getMappedOptions(idDdlPricesMin, DropdownFilter.getPricesValues("Precio mínimo"));
    const pricesMax = getMappedOptions(idDdlPricesMax, DropdownFilter.getPricesValues("Precio máximo"));
    const sizesMin = getMappedOptions(idDdlSizesMin, DropdownFilter.getSizesValues("Tamaño mínimo"));
    const sizesMax = getMappedOptions(idDdlSizesMax, DropdownFilter.getSizesValues("Tamaño máximo"));
    const rooms = getMappedOptions(idDdlRooms, DropdownFilter.getRoomsValues());


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

        const priceMin = getDdlSelectedValue(idDdlPricesMin);
        const priceMax = getDdlSelectedValue(idDdlPricesMax);
        const sizeMin = getDdlSelectedValue(idDdlSizesMin);
        const sizeMax = getDdlSelectedValue(idDdlSizesMax);
        const room = getDdlSelectedValue(idDdlRooms);

        const filters: FiltersValues = {
            priceMin: priceMin,
            priceMax: priceMax,
            sizeMin: sizeMin,
            sizeMax: sizeMax,
            minRoom: room,
            city: city
        }

        dispatch(actions_setCitizens([]));
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
                    <span className="title">PRECIO</span>
                    <div className="selectors">
                        {pricesMin}  {pricesMax}
                    </div>
                </div>
                <div className="filterPanelItem">
                    <span className="title">TAMAÑO</span>
                    <div className="selectors">
                        {sizesMin}   {sizesMax}
                    </div>
                </div>
                <div className="filterPanelItem">
                    <span className="title">HABITACIONES</span>
                    <div className="selectors">
                        {rooms}
                    </div>
                </div>
                <button  data-testid={"ButtonFilterSearch"} onClick={() => saveFilters()}>Ver inmuebles</button>
            </div>
        </>
    )

}