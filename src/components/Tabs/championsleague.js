import Tab from '@material-ui/core/Tab';


function CL({setValue}){


    function setIndex()
    {

setValue(2)    }

    return(

        <Tab onClick={setIndex} label="Champions League" />

    )
}

export default CL