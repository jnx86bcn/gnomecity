import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions_setShowFilters } from '../../redux/actions/actions';


export function SearchBar(): JSX.Element {

  const dispatch = useDispatch();

  const showFilter = useSelector( (state:any) => state.global.showFilter );


  function updateShowFilter() {
    showFilter == false ? dispatch(actions_setShowFilters(true)) : dispatch(actions_setShowFilters(false))
  }

  return (
    <>
      <div className="searchbar">
        <button className="margin-left10" data-testid={"ButtonFilter"} onClick={()=>{updateShowFilter()}}>Filtros</button>
      </div>
    </>
  )

}