import React from 'react';

const NbaCards = ({ teamlogo, picture, name, position, age, height, weight  }) => {
  return (
     <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
     <img alt='Team Logo' src={teamlogo} height={170} width={170}/>
     <div>
     <h3>Name: {name}</h3>
     <img alt='player image' src={picture} height={180} width={180} />
     <h3>Position: {position}</h3>
     <h3>Age: {age}</h3>
     <h3>Height: {height}</h3>
     <h3>Weight: {weight}</h3>
     </div>
   </div>
  	);
}

export default NbaCards;