import React from 'react'
import useFetch from './hooks/useFetch'

export default function Reseaux(){
const { loading, error, data} = useFetch('http://localhost:1337/api/reseaux')

if (loading) return <p>Loading...</p>
if (error) return <p>Error</p>

    return (
        <div>
            {data.map(reseaux => (
                <div key={reseaux.id} className="reseau">
                    <div className="reseau-name">{reseaux.name}</div>
                </div>
            ))}
        </div>
    )
}