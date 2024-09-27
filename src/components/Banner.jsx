import { useState,useEffect } from "react";
import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle}  from "react-bootstrap-icons"
import me from "../assets/me.jpg"
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export default function Banner(){
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Web Developer","Data Analyst"];
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(100-Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker =setInterval(()=>{
            tick();
        },delta)

        return () =>{clearInterval(ticker)}
    },[text]);

    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    
    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Kush `}<span className="wrap">{text}</span></h1>
                                <p>Seeking an Entry-Level Position in a Software Company to leverage my technical skills and academic background to contribute effectively and grow professionally.</p>
                                <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col >
                    <Col xs={12} md={6} xl={5}>
                    <img src={me} alt="me"  />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}