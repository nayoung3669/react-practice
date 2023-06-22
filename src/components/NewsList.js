import { styled } from "styled-components"
import axios from 'axios';
import NewsItem from "./NewsItem"
import { useState } from "react";
import { useEffect } from "react";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 668px;
    margin-top: 2rem;
    background-color: lightgray;
    @media screen and (max-width: 668px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === "all" ? "" : `&category=${category}`
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=213efe280f8443fcabd141b11f4d00d2`)
                setArticles(response.data.articles)
            } catch (e) {
                console.log(e)
            }
            setLoading(false);
        }
        fetchData();
    },[category])

    if (loading) {
        return <NewsListBlock>로딩중...</NewsListBlock>
    }

    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList