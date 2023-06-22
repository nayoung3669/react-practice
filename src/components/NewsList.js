import { styled } from "styled-components"
import NewsItem from "./NewsItem"

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin-top: 2rem;
`

const sampleArticle = {
    title: '제목제목',
    description: '내용내용',
    url: 'https://google.com',
    urlToImage: "https://kormedi.com/wp-content/uploads/2023/06/1-15.jpg",
}

const NewsList = () => {
    return (
        <NewsListBlock>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
        </NewsListBlock>
    )
}

export default NewsList