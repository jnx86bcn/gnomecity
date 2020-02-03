import React from 'react';
import { Gnome } from '../../models';
import { useDispatch } from 'react-redux';
import { actions_setOpenDialog,actions_setItem } from '../../redux/actions/actions';

export function DashboardItem({item=new Gnome()}): JSX.Element {

    const dispatch = useDispatch();

    function showDetailItem(item: Gnome) {
        dispatch(actions_setOpenDialog(true));
        dispatch(actions_setItem(item));
    }

    return(
        <>
            <div data-testid={"item"} className="dashboard-main-item" onClick={() => showDetailItem(item)}>
                <img src={item.thumbnail}/>
                <div className="dashboard-main-item-panel">
                    <p className="dashboard-main-item-panel-name">{item.name}</p>
                    <p className="dashboard-main-item-panel-age">{item.age}</p>
                </div>
            </div>
        </>
    )

}