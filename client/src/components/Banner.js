import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle, Explicit } from "react-bootstrap-icons";



export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '')
        {
            setIsDeleting(false);
            setloopNum(loopNum +1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    {/* xs(extra small), md(medium), xl(extra large) reffer to the size of the screen a person is using to view the site. */}
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Alec Desrosiers "}<span className="wrap">{Text}</span></h1>
                        <p>About Me</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={} alt = "Header Img"/> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;