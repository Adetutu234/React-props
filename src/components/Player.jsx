import React from 'react'

const Player = ({ name, team, nationality, jerseyNumber, age , image}) => {
    
  return (
<div className="flex justify-center items-center p-4">
  <div className="bg-white shadow-2xl rounded-2xl p-5 w-72 text-gray-800 space-y-2">
    <img src={image} alt={name} className="h-60 w-60 object-cover rounded-xl mb-4" />
    <h3 className="font-bold text-2xl mb-1">{name}</h3>
    <h3 className="text-base"><span className="text-blue-600 text-sm font-medium tracking-wide">AGE:</span> {age}</h3>
    <h3 className="text-base"><span className="text-blue-600 text-sm font-medium tracking-wide">JN:</span> {jerseyNumber}</h3>
    <h3 className="text-base"><span className="text-blue-600 text-sm font-medium tracking-wide">TEAM:</span> {team}</h3>
    <h3 className="text-base"><span className="text-blue-600 text-sm font-medium tracking-wide">NATIONALITY:</span> {nationality}</h3>
  </div>
</div>

  )
}

Player.defaultProps={
    name: 'Vinícius Júnior', 
    team: 'Real Madrid', 
    nationality: 'Brazil', 
    jerseyNumber: 7, 
    age: 24, 
    image: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250121533.webp',
}
export default Player
