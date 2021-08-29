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
               teamlogo={`https://images.homedepot-static.com/productImages/f10649b1-73a2-4a69-963d-2d40fd77fae7/svn/green-applied-icon-wall-decals-nbop0203-64_600.jpg`}
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
	