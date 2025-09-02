import { useRef, useState } from 'react'

function Exersices03() {
    const [value, setValue] = useState("")
    const renderCount = useRef(1)

    renderCount.current += 1

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <p>So lan render: {renderCount.current}</p>
        </div>
    )
}

export default Exersices03