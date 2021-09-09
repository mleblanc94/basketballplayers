import React from 'react';
import NbaCards from './NbaCards';

const NbaCardList = ({ players }) => {
return (
	<div>
	{
		players.map((player, i) => {
			return (
             <NbaCards 
               key={i}
               teamlogo={players[i].teamlogo}
               picture={players[i].picture}
               name={players[i].name}
               position={players[i].position}
               age={players[i].age}
               height={players[i].height}
               weight={players[i].weight}
               />
				);
		})
	}
	</div>
	);
		}

export default NbaCardList;
	