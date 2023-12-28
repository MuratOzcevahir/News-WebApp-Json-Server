import React, { useContext } from 'react'
import NewsContext from '../../context/NewsContext'

function ListNews() {

    var newsContext = useContext(NewsContext);

    newsContext.newsData
    return (
        <>

            <div className='container'>
                {
                    newsContext.newsData.length > 0 ?
                        newsContext.newsData.map((newsItem, i) => {
                            return (
                                <div key={i}>
                                    <div className='row mt-4 justify-content-between'>
                                        <div className='col-12 col-lg-4'>
                                            <img src={newsItem.Photo} alt="" />
                                        </div>
                                        <div className='col-12 col-lg-8 d-flex flex-column justify-content-between'>
                                            <div className='row'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <h3>     {i + 1}  {newsItem.Title}</h3>
                                                        <h6> {newsItem.LongTitle}</h6>
                                                    </div>
                                                    <div>
                                                        {newsItem.Date}
                                                        <button type="button" onClick={() => {

                                                            newsContext.deleteNews(newsItem.id)
                                                        }}> x</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    {newsItem.Content}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                        :
                        <>HABER YOK</>
                }
            </div>


        </>
    )
}

export default ListNews