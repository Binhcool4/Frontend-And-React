import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Exersices02() {
  return (
    <div>
        <InputGroup size="lg">
            <InputGroup></InputGroup>
            <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder='Input co lon'
            />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
            <InputGroup></InputGroup>
            <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder='Input co vua'
            />
        </InputGroup>
        <br />
        <InputGroup size="sm" className="mb-3">
            <InputGroup></InputGroup>
            <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder='Input co nho'
            />
        </InputGroup>
    </div>
  )
}
