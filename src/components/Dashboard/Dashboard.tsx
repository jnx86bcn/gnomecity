import React from 'react';
import { Gnome } from '../../models';
import { DashboardItem } from './DashboardItem';
import { useSelector } from 'react-redux';


export function Dashboard(): JSX.Element {


    const items = useSelector((state: any) => state.global.items);

    return (
        <>
        {items.length > 0 ?
            <div className="dashboard">
                {items.map((gnome:Gnome, index:number) => { return <DashboardItem item={gnome} key={index} /> })}
            </div>
            :
            null
        }
        </>
    )

}