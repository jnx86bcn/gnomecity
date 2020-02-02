import React from 'react';
import { useSelector } from 'react-redux';
import { Gnome } from '../../models';


export function DashboardItemDetail(): JSX.Element {

    const openDialog: boolean = useSelector( (state:any) => state.global.openDialog );
    const item: Gnome = useSelector( (state:any) => state.global.item );

    return(
        <>
            {openDialog == true ? 
            <div className="dashboard-dialog">
                <div className="dashboard-dialog-card">
                    <img src={item.thumbnail}/>
                    <div className="dashboard-dialog-card-panel">
                        <p className="dashboard-dialog-card-panel-name">{item.name}</p>
                        <p className="dashboard-dialog-card-panel-age">{item.age + ' años'}</p>
                        <p className="dashboard-dialog-card-panel-height">{Math.round(item.height * 100) / 100 + ' altura'}</p>
                        <p className="dashboard-dialog-card-panel-weight">{Math.round(item.weight * 100) / 100 + ' peso'}</p>
                    </div>
                </div>
            </div> : 
            null}
        </>
    )

}