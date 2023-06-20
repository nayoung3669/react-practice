import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/about">소개</Link>
            <Link to="/profiles/nayoung">nayoung의 프로필</Link>
            <Link to="/profiles/gildong">gildong 프로필</Link>
        </div> 
    )
}

export default Home;