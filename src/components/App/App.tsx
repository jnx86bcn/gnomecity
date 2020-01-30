import React, { useEffect } from 'react';
import { SearchBar, Filters } from '../Search';
import { Dashboard } from '../Dashboard';
import { Spinner } from '../Spinner';
import { useDispatch,useSelector } from 'react-redux';
import { actions_setItems,actions_setLoading,actions_setOriginalItems } from '../../redux/actions/actions';
import { Gnome } from '../../models';
import { getAllItems_DEV } from '../../services';

export function App(): JSX.Element {

  useEffect(()=>getAllItems(),[])

  const dispatch = useDispatch();

  const showFilter = useSelector( (state:any) => state.global.showFilter );

  function getAllItems() {
    dispatch(actions_setLoading(true));
    dispatch(actions_setItems([]));
    getAllItems_DEV().
    then((items: Gnome[]) => {
      dispatch(actions_setOriginalItems(items));
      dispatch(actions_setItems(items));
      dispatch(actions_setLoading(false));
    })
  }

  return (
    <>
      <Spinner />
      <SearchBar />
      <div className="filter_dashboard">
        { showFilter == true ? <Filters/> : null }
        <Dashboard />
      </div>
    </>
  )

}