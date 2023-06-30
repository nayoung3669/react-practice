import React from "react"
import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 668px;
    margin: 0 auto;
    margin-top: 1rem;
    justify-content: center;
    @media screen and (max-width: 668px) {
        width: 100%;
        overflow-x : auto;
    }
`

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left : 1rem;
    }
`

const categories = [
    {
        name: "all",
        text: "전체보기",
    },{
        name: "business",
        text: "비즈니스",
    },{
        name: "entertainment",
        text: "엔터테인먼트",
    },{
        name: "health",
        text: "건강",
    },{
        name: "science",
        text: "과학",
    },{
        name: "sports",
        text: "스포츠",
    },{
        name: "technology",
        text: "기술",
    },
]

const Categories = () => {

    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    //selected(active)일 경우 다르게 적용
                    className={({isActive}) => (isActive? 'active' : undefined) }
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default React.memo(Categories)