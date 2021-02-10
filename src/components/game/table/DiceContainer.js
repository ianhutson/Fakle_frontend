import React from 'react'



const dicearr = [
  require('/mnt/i/Code/fuggle/fuggle_frontend/src/assets/1.png'),
  require('/mnt/i/Code/fuggle/fuggle_frontend/src/assets/2.png'),
  require('/mnt/i/Code/fuggle/fuggle_frontend/src/assets/3.png'),
  require('/mnt/i/Code/fuggle/fuggle_frontend/src/assets/4.png'),
  require('/mnt/i/Code/fuggle/fuggle_frontend/src/assets/5.png'),
  require('/mnt/i/Code/fuggle/fuggle_frontend/src/assets/6.png'),
]

function DiceContainer() {
  const [statearr, setStatearr] = React.useState([2, 5])
 
  return (
        <div className="diceContainer">
          <img source={dicearr[statearr[0]]}
            style={{width: 80, height: 80, marginHorizontal: 15 }}
          />
          <img source={dicearr[statearr[1]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img source={dicearr[statearr[1]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img source={dicearr[statearr[1]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img source={dicearr[statearr[1]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
           <img source={dicearr[statearr[1]]}
            style={{ width: 80, height: 80, marginHorizontal: 15 }}
          />
          <div className="buttonContainer">
         
        </div>
        </div>
 
  )
}


export default DiceContainer

