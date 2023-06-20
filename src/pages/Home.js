import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/about">소개</Link>
            <br />
            <Link to="/profiles/nayoung">nayoung의 프로필</Link>
            <br />
            <Link to="/profiles/gildong">gildong 프로필</Link>
            <br />
            <Link to="/articles"> 게시글 목록</Link>
            <Link to="/mypage">마이페이지</Link>
        </div> 
    )
}

export default Home;