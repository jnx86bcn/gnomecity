import React from 'react';
import { useSelector } from 'react-redux';


export function DashboardItemDetail(): JSX.Element {

    const openDialog = useSelector( (state:any) => state.global.openDialog );
    const item = useSelector( (state:any) => state.global.item );

    console.log(openDialog);
    console.log(item);

    return(
        <>
            <div data-testid={"item"} className="dashboard-item-detail">
                {/* <img src={item.thumbnail+'?size=200'}/>
                <div className="dashboard-item-panel">
                    <p className="dashboard-item-panel-name">{item.name}</p>
                    <p className="dashboard-item-panel-age">{item.age}</p>
                </div> */}
            </div>
        </>
    )

}