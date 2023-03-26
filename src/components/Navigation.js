import style from '../css/navigation.module.css'
import person from '../images/person.svg'

const Navbar = ()=>
{
    return(
        <>
        <div className={style.container}>
            <p className={style.home} >HOME</p>
            <p className={style.activity} >ACTIVITY</p>
            <p className={style.todo} >TODO</p>
            <p className={`${style.user} ${style.filter}`}> <img src={person} alt="user_icon"></img> </p>
        </div>
        </>
    )
}

export default Navbar;