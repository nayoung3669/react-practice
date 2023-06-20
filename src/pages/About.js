import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    //searchParams : 조회, 수정 가능한 메소드를 모은 객체가 담겨있음
    //get으로 조회, set으로 업데이트
    const detail = searchParams.get('detail')
    const mode = searchParams.get('mode')
    const location = useLocation();

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === "true" ? "false" : "true"}) // 쿼리는 문자열이므로 "boolean"
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1
        setSearchParams({mode : nextMode ,detail})
    }

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 페이지입니다.</p>
            <p>쿼리 스트링: {location.search}</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>Mode + 1</button>
        </div>
    )
}

export default About;