import Tab from '@material-ui/core/Tab';


function Standings({setValue}){


    function setIndex()
    {

setValue(0)    }

    return(

        <Tab onClick={setIndex} label="Standings" />

    )
}

export default Standings