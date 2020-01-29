import React, { useEffect } from 'react';
import { SearchBar, Filters } from '../Search';
import { Dashboard } from '../Dashboard';
import { Spinner } from '../Spinner';
import { useDispatch,useSelector } from 'react-redux';
import { actions_setItems,actions_setLoading } from '../../redux/actions/actions';
import { Gnome } from '../../models';
import { getAllItems_DEV } from '../../services';

export function App(): JSX.Element {

  useEffect(()=>getGnomes(),[])

  const dispatch = useDispatch();

  const showFilter = useSelector( (state:any) => state.global.showFilter );

  function getGnomes() {
    dispatch(actions_setLoading(true));
    getAllItems_DEV().
    then((items: Gnome[]) => {
      dispatch(actions_setItems(items));
      dispatch(actions_setLoading(false));
    })
  }

  return (
    <>
      <Spinner />
      <SearchBar />
      <div className="filter_dashboard">
        { showFilter == true ? <Filters showFilter = {showFilter} /> : null } 
        <Dashboard />
      </div>
    </>
  )

}