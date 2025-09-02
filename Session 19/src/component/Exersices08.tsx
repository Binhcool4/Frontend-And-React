import { useState } from 'react'

function Exersices08() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        
        setTimeout(() => {
            alert(`Đăng nhập thành công! Username: ${username}`)
            setLoading(false)
        }, 2000)
    }

    return (
        <div>
            <h2>Đăng nhập</h2>
            
            <div>
                <label>Username:</label>
                <br />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label>Password:</label>
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                onClick={handleLogin}
                disabled={loading || !username || !password}
            >
                {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
        </div>
    )
}

export default Exersices08