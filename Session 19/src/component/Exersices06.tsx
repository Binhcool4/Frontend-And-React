import { useEffect, useState } from 'react'

function Exersices06() {
    const [key, setKey] = useState<string>("")

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setKey(e.key)
        }
        window.addEventListener('keydown', handler)
        return () => {
            window.removeEventListener('keydown', handler)
        }
    }, [key])

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "64px",
                fontWeight: "bold"
            }}
        >
            {<span>{key}</span>}
        </div>
    )
}
export default Exersices06