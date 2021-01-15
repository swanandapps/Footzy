import React from 'react'
import Tabs from '../src/components/tabs'
import './App.css'

const App=()=> {
 /*

const [footzy, setfootzy] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const response = await axios('http://api.football-data.org/v2/competitions/2021/standings',{

    headers:{
      'X-Auth-Token':'a12fe71181fb4a09aa1c36d1d3aee52c'
    }

    })
    if (response.status===200) {
      const footzy = await response.data.standings[0].table
      setfootzy(footzy)
      console.log('Use Effect',response)


    } 

  }

  fetchData();


}, []);
*/


console.log('App.js Run')

return(

  <div className='App'> 

<div className="main">

<div className="footzy-header">
<img alt=""  src="https://i.giphy.com/media/WvuTFk2IN7jxoLVDkP/200w.webp"/>

<h1>Footzy</h1>

</div>
<Tabs />

</div>
  </div>
)

/*
    return footzy.length > 0
      ? (
        <table>
         
          <tbody>
            {footzy.map(el=>{
              return <h1>{el.lost}</h1>
            })}
          </tbody>
        </table>
      ) : (
        <div>
          No footzy.
      </div>
      )

      */
  
}


export default App