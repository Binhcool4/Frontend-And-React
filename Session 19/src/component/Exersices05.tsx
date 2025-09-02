import { useState } from 'react'
const quote = ["Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
]
function Exersices05() {
    const [quotes, setQuote] = useState("");
    const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quote.length);
        setQuote(quote[randomIndex]);
    }
    return (
        <div>
            <h1>Cau noi truyen cam hung hom nay</h1>
            <p>{quotes}</p>
            <button onClick={randomQuote}>Lay cau noi ngau nhien</button>
        </div>
    )
}

export default Exersices05