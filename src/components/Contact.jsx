
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg"

export default function Contact(){
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("connected");
    };
    return(
        <section>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="ContactUs" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit} style={{marginTop:'1rem'}}>
                            <Row>
                                <Col sm={6} className="px-2" style={{padding:'1rem'}}>
                                    <input type="text" placeholder="First Name"style={{height:'50px'}}/>
                                </Col>
                                <Col sm={6} className="px-2"style={{padding:'1rem'}}>
                                    <input type="text" placeholder="Last Name" style={{height:'50px'}}/>
                                </Col>
                                <Col sm={6} className="px-2"style={{padding:'1rem'}}>
                                    <input type="text" placeholder="Email" style={{height:'50px'}}/>
                                </Col>
                                <Col sm={6} className="px-2"style={{padding:'1rem'}}>
                                    <input type="text" placeholder="Phone"style={{height:'50px'}} />
                                </Col>
                                <Col sm={6} className="px-2"style={{padding:'1rem'}}>
                                    <input type="text" placeholder="write your message"style={{height:'50px'}}/>
                                </Col>
                                <Col sm={12} className="px-2 d-flex justify-content-center mt-2">
        <button type="submit" className="btn btn-primary" style={{ width: '200px', height: '50px' }}>Send</button>
    </Col>                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}