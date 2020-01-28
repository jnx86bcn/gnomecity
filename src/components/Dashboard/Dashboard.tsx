import React from 'react';
import { Gnome } from '../../models';
import { DashboardItem } from './DashboardItem';


export function Dashboard({ items = new Array<Gnome>() }): JSX.Element {

    return (
        <>
        {items.length > 0 ?
            <div className="dashboard">
                {items.map((gnome, index) => { return <DashboardItem item={gnome} key={index} /> })}
            </div>
            :
            null
        }
        </>
    )

}