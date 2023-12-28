import React, { useContext } from 'react'
import NewsContext from '../../context/NewsContext'

function AddNews() {

    var newsContext = useContext(NewsContext)

    function NewsAdded() {

        var newsObj = {
            Title: document.getElementById("title").value,
            Content: document.getElementById("content").value,
            Photo: document.getElementById("photo").value,
            LongTitle: document.getElementById("longTitle").value,
            Date: new Date().toLocaleString()
        }
        newsContext.addNews(newsObj)

        console.log(document.getElementsByName("news").values());
    }


    return (
        <>

            <div id="news_form" className='container justify-content-center'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex flex-column'>
                            <label >Başlık</label>
                            <input id="title" type="text" name="news" placeholder='Başlık' />
                        </div>
                        <div>
                            <label >Uzun başlık</label>
                            <input id="longTitle" type="text" name="news" placeholder='İkinci başlık' />
                        </div>
                        <label >İçerik</label>

                        <textarea id="content" name="news" placeholder='örn; gündem değişmiyor' >
                        </textarea>
                        <label >Fotoğraf linki</label>

                        <input id="photo" type="text" name="news" placeholder='örn; http://www.photo.com' />
                    </div>
                </div>


            </div>

            <button className=' w-50' onClick={() => { NewsAdded() }}><span>Haber Ekle</span></button>


        </>
    )
}
export default AddNews