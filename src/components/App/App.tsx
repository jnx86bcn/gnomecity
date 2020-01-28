import React from 'react';
import { SearchBar, Filters } from '../Search';
import { Dashboard } from '../Dashboard';
import { Spinner } from '../Spinner';
import { useSelector } from 'react-redux';

export function App(): JSX.Element {

  const gnomes = useSelector((state: any) => state.global.gnomes);
  const showFilter = useSelector((state: any) => state.global.showFilter);

  return (
    <>
      <Spinner />
      <SearchBar />
      <div className="filter_dashboard">
        {showFilter ? <Filters /> : null}
        <Dashboard items={gnomes} />
      </div>
    </>
  )

}