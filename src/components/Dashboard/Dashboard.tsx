import React from 'react';
import { Gnome } from '../../models';
import { DashboardItem,DashboardItemDetail } from '.';
import { useSelector } from 'react-redux';


export function Dashboard(): JSX.Element {


    const items = useSelector((state: any) => state.global.items);

    return (
        <>
            <div className="dashboard">
                {items.length > 0 ?
                    <div className="dashboard-main">
                        {items.map((item:Gnome, index:number) => { return <DashboardItem item={item} key={index} /> })}
                    </div>
                    :
                    null
                }
                <DashboardItemDetail />
            </div>
        </>
    )

}