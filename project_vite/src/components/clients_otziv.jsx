import data from '../data_site.json'
import i1 from '../images/Users/вадим.jpg'
import i2 from '../images/Users/владимир.jpg'
import i3 from '../images/Users/анастасия.jpg'
import back from '../images/отзыв.jpg'


export default function Otzivi(){
    const users = [
        i1,
        i2,
        i3
    ]
    return(
        <>
        <div className='main-otziv' style={{backgroundImage : `url(${back})`}}>
            <div className='main-otziv-i'>
                {users.map((v)=>{
                return(
                    <div className='main-otziv__item'>
                        <div className='otziv_box'>
                            <img src={v} />
                        </div>
                        <div className='otziv-item__name'>
                            {data.otziv[Object.keys(data.otziv)[users.indexOf(v)]].name}
                        </div>
                        <p className='otziv-item__caption'>
                            {data.otziv[Object.keys(data.otziv)[users.indexOf(v)]].text}
                        </p>
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
}