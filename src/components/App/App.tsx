import React from 'react';
import { SearchBar, Filters } from '../Search';
import { Dashboard } from '../Dashboard';
import { Spinner } from '../Spinner';

export function App(): JSX.Element {

  return (
    <>
      <Spinner />
      <SearchBar />
      <div className="filter_dashboard">
        <Filters />
        <Dashboard />
      </div>
    </>
  )

}