import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import NewsContext from './context/NewsContext'
import Main from './page/main-page/Main'

function App() {
    var newsContext = useContext(NewsContext);
    const [newsData, setnewsData] = useState([])
    newsContext.newsData = newsData;
    newsContext.deleteNews = (id) => {
        console.log("çaıştı")
        axios
            .delete("http://localhost:2020/NewsData/" + id)
            .then(() => {
                GetAll();
            })
            .catch((err) => {
                console.log("hatalandın" + err);
            })
    }
    newsContext.addNews = (newsObj) => {
 
        axios
            .post("http://localhost:2020/NewsData/", newsObj)
            .then((respond) => {

                GetAll()
            })
            .catch((err) => { console.log("hatalandın " + err) })
    }
    useEffect(() => {
        GetAll()
    }, [])

    function GetAll() {
        axios
            .get("http://localhost:2020/NewsData")
            .then((respond) => {
                setnewsData(respond.data);

            })
            .catch((err) => {
                console.log("hatalandı" + err)
            })
    }

    console.log(newsData)
    return (
        <>

            <NewsContext.Provider value={newsContext}>
                <Main />
            </NewsContext.Provider>

        </>



    )
}

export default App