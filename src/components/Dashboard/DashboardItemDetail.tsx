import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Gnome } from '../../models';
import { actions_setOpenDialog,actions_setItem } from '../../redux/actions/actions';

export function DashboardItemDetail(): JSX.Element {

    const dispatch = useDispatch();

    const openDialog: boolean = useSelector( (state:any) => state.global.openDialog );
    const item: Gnome = useSelector( (state:any) => state.global.item );

    function onHandleClose(){
        dispatch(actions_setOpenDialog(false));
        dispatch(actions_setItem(new Gnome()));
    }

    return(
        <>
            {openDialog == true ? 
            <div className="dashboard-dialog">
                <div className="dashboard-dialog-card">
                    <div className="dashboard-dialog-card-closeButton arrowBack" onClick={() => onHandleClose()}/>
                    <img src={item.thumbnail}/>
                    <div className="dashboard-dialog-card-panel">
                        <p className="dashboard-dialog-card-panel-name">{item.name}</p>
                        <p className="dashboard-dialog-card-panel-age">{item.age + ' años'}</p>
                        <p className="dashboard-dialog-card-panel-height">{Math.round(item.height * 100) / 100 + ' cm'}</p>
                        <p className="dashboard-dialog-card-panel-weight">{Math.round(item.weight * 100) / 100 + ' kg'}</p>
                        <p className="dashboard-dialog-card-panel-jobs">{item.professions.length + ' trabajos'}</p>
                        <p className="dashboard-dialog-card-panel-friends">{item.friends.length + ' amigos'}</p>
                    </div>
                </div>
            </div> : 
            null}
        </>
    )

}