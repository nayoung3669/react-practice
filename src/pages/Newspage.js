import { useParams } from "react-router-dom"
import NewsList from "../components/NewsList";

const Newspage = () => {
    const params = useParams();
    const category = params.category || 'all' //없으면 기본값 all 적용
    return (
        <div>
            <NewsList category={category}/>
        </div>
    )
}

export default Newspage