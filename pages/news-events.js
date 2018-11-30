import React from 'react'
import { Container, Row, Col, Card, CardLink, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';
import { translate } from "react-i18next";

import picKickOff from "../assets/images/004.jpg";


class NewsEvents extends React.Component {

    render()
    {
        const {t} = this.props;

        return (
            <main>
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <br/>
                            <h1 className="display-3 text-center">{t("title")}</h1>
                            <hr className="my-2" />
                            <br/>
                            <div className="row justify-content-center">
                                <div className="col-xs-12 col-sm-10 col-md-6 col-lg-5 ">
                                <Card>
                                    <CardImg top width="100%" src={picKickOff} />
                                    <CardBody>
                                        <CardTitle>{t("n1-title")}</CardTitle>
                                        <CardText>{t("n1-text")}</CardText>
                                        <CardLink href="/kick-off-gallery">{t("n1-link")}</CardLink>
                                    </CardBody>
                                    <CardFooter className="text-center">25/01/2018</CardFooter>
                                </Card>
                                </div>
                            </div>
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default translate("NewsEvents")(NewsEvents);