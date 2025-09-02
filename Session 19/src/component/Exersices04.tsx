import { useState } from 'react'

function Exersices04() {
    const [form, setForm] = useState({ fullName: "", email: "" })
    const [errors, setErrors] = useState({ fullName: "", email: "" })

    const validate = (name: string, value: string) => {
        if (name === "fullName") {
            if (!value.trim()) return "Truong nay la bat buoc"
            return ""
        }
        if (name === "email") {
            if (!value.trim()) return "Truong nay la bat buoc"
            if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(value)) return "Email khong hop le"
            return ""
        }
        return ""
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const fullNameError = validate("fullName", form.fullName)
        const emailError = validate("email", form.email)
        setErrors({ fullName: fullNameError, email: emailError })
        if (!fullNameError && !emailError) {
            alert("Gui thanh cong!")
        }
    }

    const isDisabled = !!errors.fullName || !!errors.email || !form.fullName || !form.email

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Dang ky thong tin</h1>
                <p>Ho va ten</p>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Nhap ho ten"
                    value={form.fullName}
                    onChange={handleChange}
                />
                {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Nhap email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <button type="submit" disabled={isDisabled}>Gui</button>
            </form>
        </div>
    )
}

export default Exersices04