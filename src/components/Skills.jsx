import { Container,Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import four from "../assets/four.svg"
import three from "../assets/three.svg"
import { SiCplusplus} from 'react-icons/si';
import { SiPython,SiJavascript, SiHtml5, SiCss3, SiMysql, SiMongodb, SiReact } from 'react-icons/si';
export default function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I have been praticing on these below Skills</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <SiCplusplus style={{ fontSize: '50px'}}/>
                                    <h2>C++</h2>
                                </div>
                                <div className="item">
                                    <SiPython style={{ fontSize: '50px' }} />
                                    <h2>Python</h2>
                                </div>
                                <div className="item">
                                <SiHtml5 style={{ fontSize: '50px' }} />
                                    <h2>HTML</h2>
                                </div>
                                <div className="item">
                                <SiCss3 style={{ fontSize: '50px' }} />
                                    <h2>CSS</h2>
                                </div>
                                <div className="item">
                                <SiJavascript style={{ fontSize: '50px' }} />
                                    <h2>Javascript</h2>
                                </div>
                                <div className="item">
                    
                                <SiMysql style={{ fontSize: '50px' }} />
                                    <h2>MySQL</h2>
                                </div>
                                <div className="item">
                                <SiMongodb style={{ fontSize: '50px' }} />
                                    <h2>MongoDB</h2>
                                </div>
                                <div className="item">
                                <SiReact style={{ fontSize: '50px' }} />
                                    <h2>ReactJS</h2>
                                </div>
                            </Carousel>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}