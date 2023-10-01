import data from '../data_site.json'

export default function Article(){
    return (
        <article id='article'>
            <div className='main-article'>
                <div className='main-article__title'>
                    {data.article.name}
                </div>
                <p className='main-article__caption'>
                    {data.article.caption}
                </p>
            </div>
        </article>
    )
}