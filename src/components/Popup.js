import style from '../css/popup.module.css'

import right from "../images/check-mark-svgrepo-com.svg"
import wrong from "../images/wrong-svgrepo-com.svg"


//Popup zeby ladnie wyswietlalo czy mozna dodac dana aktywnosc
const Popup = ({name, visible})=>
{
    if(!visible) return;
    if(name === "right" )
    {
        return (
            <>
            <div className={style.popup}><img src={right} alt="symbol"></img></div>
            </>
        )
    }
    else
    {
        return (
            <>
            <div className={style.popup}><img src={wrong} alt="symbol"></img></div>
            </>
        )
    }

}

export default Popup;