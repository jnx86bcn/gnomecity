import React from 'react';
import { Citizen } from '../../models';
import { DashboardItem } from './DashboardItem';


export function Dashboard({ items = new Array<Citizen>() }): JSX.Element {

    return (
        <>
        {items.length > 0 ?
            <div className="dashboard">
                {items.map((Citizen, index) => { return <DashboardItem item={Citizen} key={index} /> })}
            </div>
            :
            null
        }
        </>
    )

}