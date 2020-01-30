import React from 'react';
import { Gnome } from '../../models';
import { useSelector, useDispatch } from 'react-redux';
import { actions_setOpenDialog,actions_setItem } from '../../redux/actions/actions';

export function DashboardItem({item=new Gnome()}): JSX.Element {

    const dispatch = useDispatch();

    function showDetailItem(item: Gnome) {
        dispatch(actions_setOpenDialog(true));
        dispatch(actions_setItem(item));
    }

    return(
        <>
            <div data-testid={"item"} className="dashboard-item" onClick={() => showDetailItem(item)}>
                <img src={item.thumbnail+'?size=200'}/>
                <div className="dashboard-item-panel">
                    <p className="dashboard-item-panel-name">{item.name}</p>
                    <p className="dashboard-item-panel-age">{item.age}</p>
                </div>
            </div>
        </>
    )

}