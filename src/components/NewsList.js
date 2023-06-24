import { css, styled } from "styled-components"
import axios from 'axios';
import NewsItem from "./NewsItem"
import React, { useState } from "react";
import { useEffect } from "react";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 668px;
    margin-top: 1rem;
    padding: 1rem;
    background-color: lightgray;
    @media screen and (max-width: 668px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    ${props => props.active && css`
        display: flex;
        justify-content: center;
        padding-top: 50px;
        width: 668px;
    `}
`

const NewsList = ({ category }) => {
    const [loading, response, error] =usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`
        //promise 객체를 건네줘야 함
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=213efe280f8443fcabd141b11f4d00d2`)
    },[category])


    if (loading) {
        return <NewsListBlock active={loading === true}>로딩중...</NewsListBlock>
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const { articles } = response.data

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default React.memo(NewsList)