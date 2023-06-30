import { useEffect } from "react";
import { useState } from "react"

const usePromise = (promiseCreator, deps) => {
    // 대기중, 성공, 실패에 관한 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true)
            try { //성공
                const resolved = await promiseCreator();
                setResolved(resolved)
            } catch (e) { //실패
                setError(e)
            }
            setLoading(false)
        }
        process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },deps) //dependencies eslint 경고 무시
    return [loading, resolved, error] //상태 return
}

export default usePromise