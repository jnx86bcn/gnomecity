import React, { useRef, useEffect, useState } from 'react';
import { getAllItems_DEV } from '../../services';
import { Gnome } from '../../models';
import { useSelector, useDispatch } from 'react-redux';
import { actions_setItems,actions_setLoading,actions_setShowFilters } from '../../redux/actions/actions';


export function SearchBar(): JSX.Element {

  const dispatch = useDispatch();

  const showFilter = useSelector( (state:any) => state.global.showFilter );

  useEffect(() => {
    getGnomes();
  },[])

  function getGnomes() {
    dispatch(actions_setItems([]))
    dispatch(actions_setLoading(true));
    getAllItems_DEV().
    then((items: Gnome[]) => {
      dispatch(actions_setItems(items));
      dispatch(actions_setLoading(false));
    })
  }


  function updateShowFilter() {
    showFilter == false ? dispatch(actions_setShowFilters(true)) : dispatch(actions_setShowFilters(false))
  }


  return (
    <>
      <div className="searchbar">
        <div className="searchnavbar">
        </div>
        <button className="margin-left10" data-testid={"ButtonFilter"} onClick={()=>{updateShowFilter()}}>Filtros</button>
      </div>
    </>
  )

}