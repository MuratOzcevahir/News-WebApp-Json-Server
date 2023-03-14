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
            <div id="news_form" className='container'>
                <div className='d-flex flex-column text-center'>
                    <div>
                        <input id="title" type="text" name="news" placeholder='Başlık' />
                    </div>
                    <div>
                        <input id="longTitle" type="text" name="news" placeholder='İkinci başlık' />
                    </div>
                    <div>
                        <textarea id="content" name="news" placeholder='İçerik'>
                        </textarea>
                    </div>
                    <div>
                        <input id="photo" type="text" name="news" placeholder='Fotoğraf Linki' />
                    </div>
                </div>

                <button className=' w-50' onClick={() => { NewsAdded() }}><span>Haber Ekle</span></button>
            </div>
            <div></div></>
    )
}
export default AddNews