import { useState, useEffect } from "react"
import { Alert, Col, Row } from "react-bootstrap"


export const Newsletter = ({ onValidated, subscribe, status, message }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }


    useEffect(() => {
        if (status === "success") clearFields();
        clearFields()
    }, [status])


    const clearFields = () => {
        setEmail('')
    }
    return (
        <Col>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3> Subscribe to my Newsletter</h3>
                        {status === 'sending' && <Alert> Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message} </Alert>}
                        {status === 'success' && <Alert variant="success"> {message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>

                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Adress" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>

            </div>
        </Col>
    )

}