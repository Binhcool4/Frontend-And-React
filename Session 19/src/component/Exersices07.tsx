import { useRef } from 'react'

function Exersices07() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const handleScroll = () => sectionRef.current?.scrollIntoView({ behavior: "smooth" })

    return (
        <div>
            <button onClick={handleScroll}>Di toi phan noi dung</button>
            <div style={{ height: 500, color: "black", background: "#f0f0f0", margin: "24px 0" }} />
            <div ref={sectionRef} style={{ padding: 32, color: "black", background: "#d0eaff", borderRadius: 8 }}>
                <h2>Phan noi dung</h2>
                <p>Day la phan noi dung ban muon cuon toi.</p>
            </div>
        </div>
    )
}

export default Exersices07