import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Jumbotron, Button, UncontrolledCarousel, CarouselCaption, CarouselItem, Row, Col } from 'reactstrap';
import { translate } from "react-i18next";

import dotVideo from '../assets/videos/dot-video-loop2.mp4';

class Index extends Component {
    render() {
        const {t} = this.props;

        return (
            <main>
                
                <Container fluid id="teste">
                   <Row>
                       <Col>
                            <br/>
                        </Col>
                    </Row>
                </Container>
                <Container id="about">
                    <Row/>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <Jumbotron className="bg-highlight text-center" >
                                <h4>{t("heading1")}</h4>
                                <hr/>
                                <p>{t("shortdescription1")}</p>
                                <h4>{t("heading2")}</h4>
                                <p>{t("shortdescription2")}</p>
                                <h4>{t("heading3")}</h4>
                                <p>{t("shortdescription3")}</p>
                                <Link to="/about" className="btn btn-primary">{t("want-to-know-more")}</Link>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="video-header wrap">
                        <div className="embed-responsive embed-responsive-16by9 fullscreen-video-wrap">
                            <video className="embed-responsive-item" src={dotVideo} autoPlay loop></video>
                        </div>
                        <div className="header-overlay">
                                <Container fluid className="align-self-center" style={{height: '100%'}}>
                                    <Row className="h-100 align-items-center">
                                        <Col>
                                            {/* <h1>Die Offene Tür</h1> */}
                                            {/* <p>{t("want-to-know-more")}</p> */}
                                            <Link to="/video/#video" className="btn btn-primary">
                                                <h1>
                                                    <i class="fab fa-youtube fa-2x text-danger"></i>
                                                </h1>
                                            {/* {t("watch-video")} */}
                                            </Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                </Container>
                
        </main>
        )
    }
}

export default translate("Index")(Index);

{/*  */}