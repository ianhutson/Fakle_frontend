import React from 'react'

const dicearr = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
]

function DiceContainer() {
  const [statearr] = React.useState([2, 5, 3, 1, 2, 5])
 
  return (
        <div className="diceContainer">
          <img alt="" src={process.env.PUBLIC_URL + dicearr[statearr[0]]}
            style={{width: 80, height: 80, marginHorizontal: 15 }}
          />
          <img alt="" src={process.env.PUBLIC_URL + dicearr[statearr[1]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[statearr[2]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[statearr[3]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[statearr[4]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[statearr[5]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
         

        </div>
 
  )
}


export default DiceContainer

