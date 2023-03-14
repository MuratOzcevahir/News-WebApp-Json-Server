import { createContext } from "react";

var newsObj = {
    newsData: [],
    addNews: () => { },
    deleteNews: () => { }
}

var NewsContext = createContext(newsObj)

export default NewsContext;