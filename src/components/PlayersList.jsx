import React from 'react'
import Player from './Player'
import {PlayersDetails} from '../players'

const PlayersList = () => {
  return (
    <div className='grid grid-cols-4 gap-5 p-5'>
    {PlayersDetails.map((player)=>(
        <Player image={player.image} name={player.name} age={player.age} team={player.team} jerseyNumber={player.jerseyNumber} nationality={player.nationality}/>
    ))}
    </div>
  )
}

export default PlayersList
