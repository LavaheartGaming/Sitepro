import React from 'react'
import useFetch from './hooks/useFetch'

export default function Reseaux(){
const { loading, error, data} = useFetch('http://localhost:1337/api/reseaux')

if (loading) return <p>Loading...</p>
if (error) return <p>Error</p>

    return (
        <div>
            {data.data.map(reseaux => (
                <div key={reseaux.attributes.id} className="reseau">
                    <div className="reseau-icon">{reseaux.lien}</div>
                    <p>{reseaux.lien}</p>
                </div>
            ))}
        </div>
    )
}