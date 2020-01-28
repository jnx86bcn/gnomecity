import React from 'react';
import { useSelector } from 'react-redux';

export function Spinner(): JSX.Element {

    const loading = useSelector((state: any) => state.global.loading);

    return (
        <>
            {loading ?
                <div className="spinner">
                    <div className="eye" />
                </div>
                :
                null
            }
        </>
    )

}