import BackgroundImage from '../images/header_background.jpg'
import header_data from '../data_site.json'
 
export default function Header(){
    
    return (
        <>
        <header id='header'>
            <div className='header-nav'>
                    <a href='#header' className='header-nav__item'>Главная</a>
                    <a href='#article'className='header-nav__item'>Почему мы?</a>
                    <a className='header-nav__item'>Контакты</a>
                    <a className='header-nav__item'>Отзывы</a>
            </div>
            <div className='layers'>
                <div className='layer__header'>
                    <div className='layer__title'>
                        {header_data.header.name}
                    </div>
                    <div className='layer__caption'>
                        {header_data.header.caption}
                    </div>
                </div>
            </div>
            <div className='main-header'></div>
        </header>
        </>
    )
}