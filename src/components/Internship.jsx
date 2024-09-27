import { Container,Row,Col,Tab } from "react-bootstrap"
import internship from "../assets/CRIS.jpg"
import ProjectCard from "./ProjectCard"

export default function Internship(){
    const pratice={
        title:"CRIS",
        description:"I work on Dataset of Rake Allotment (assignment of train coaches (rakes) to specific trains)",
        imgUrl:internship,
    }
    return(
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Intership</h2>
                        <p>I have done Intership at Centre railway of Information System from <b>8 august 2024 to 20 september 2024 </b><span style={{color:'Red'}}>(6 weeks)</span></p>
                        <Tab.Container id="projectss-tabs">
                            <Tab.Content>
                                <Row>
                                    {
                                        <ProjectCard key={0} {...pratice}/>

                                    }
                                </Row>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}