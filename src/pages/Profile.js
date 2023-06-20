import { useParams } from "react-router-dom"

const data = {
    nayoung : {
        name: "김나영",
        description: "리액트를 좋아하는 개발자",
    },
    gildong : {
        name: "홍길동",
        description: "자바를 좋아하는 개발자"
    }
}

const Profile = () => {
    const params = useParams();
    const profile = data[params.username] //nayoung key를 가진 value 객체가 담김
    console.log(profile)
    return (
        <div>
            <h1> 사용자 프로필 </h1>
            {profile ? (
                <div>
                    {profile.name}
                    {profile.description}
                </div>
            ):(
                <div>
                    <p>존재하지 않는 프로필입니다.</p>
                </div>
            )}
        </div>
    )
}

export default Profile