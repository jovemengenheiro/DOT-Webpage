import React from 'react'
import Link from 'gatsby-link'
import { Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import { translate } from "react-i18next";


import picJD from '../assets/images/joaodias.jpg';
import picMarija from '../assets/images/IMG_MM.jpg';
import picAdam from '../assets/images/IMG_AB.jpg';
import picEsther from '../assets/images/IMG_ES.jpg';
import picKate from '../assets/images/IMG_KW.jpg';
import picBeate from '../assets/images/IMG_BS.jpg';
import picRaphaela from '../assets/images/IMG_RK.jpg';
import picPR from '../assets/images/IMG_PR.jpg';
import picIna from '../assets/images/IMG_INA.jpg';
import picAL from '../assets/images/Anna-LenaMadge.jpg';
import picSD from '../assets/images/IMG_SD.jpg';
import picSally from '../assets/images/IMG_sally.png';


class Team extends React.Component {

    render()
    {
        const {t} = this.props;

        return (
            <main>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8">
                        <br/>
                        <h1 className="display-3 text-center">Team</h1>
                        <hr className="my-2" />
                        <br/>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                                <Col className="align-self-center" xs="4" md="2" >
                                        <CardImg src={picBeate} width="100" alt="" />
                                </Col>
                                <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Beate Schrank</CardTitle>
                                        <CardSubtitle>{t("bs-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("bs-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("bs-role")}</CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Marija Mitic</CardTitle>
                                        <CardSubtitle>{t("mm-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("mm-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("mm-role")}</CardText>
                                    </CardBody>
                            </Col>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picMarija} width="100" alt="" />
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picRaphaela} width="100" alt="" />
                            </Col>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Raphaela Kaisler</CardTitle>
                                        <CardSubtitle>{t("rk-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("rk-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("rk-role")}</CardText>
                                    </CardBody>
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Adam Barnard</CardTitle>
                                        <CardSubtitle>{t("ab-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("ab-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("ab-role")}</CardText>
                                    </CardBody>
                            </Col>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picAdam} width="100" alt="" />
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <div id="joao"></div>
                            <Row className="justify-content-center" noGutters>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picJD} width="100" alt="" />
                            </Col>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>João Dias</CardTitle>
                                        <CardSubtitle>{t("jd-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("jd-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("jd-role")}</CardText>
                                    </CardBody>
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Kate Woodcock</CardTitle>
                                        <CardSubtitle>{t("kw-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("kw-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("kw-role")}</CardText>
                                    </CardBody>
                            </Col>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picKate} width="100" alt="" />
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picEsther} width="100" alt="" />
                            </Col>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Esther Judith Schek</CardTitle>
                                        <CardSubtitle>{t("es-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("es-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("es-role")}</CardText>
                                    </CardBody>
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                    <CardTitle>Pedro Rodrigues</CardTitle>
                                        <CardSubtitle>{t("pr-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("pr-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("pr-role")}</CardText>
                                    </CardBody>
                            </Col>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picPR} width="100" alt="" />
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picIna} width="100" alt="" />
                            </Col>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Ina Stacher</CardTitle>
                                        <CardSubtitle>{t("ina-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("ina-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("ina-role")}</CardText>
                                    </CardBody>
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                    <CardTitle>Anna-Lena Mägde</CardTitle>
                                        <CardSubtitle>{t("al-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("al-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("al-role")}</CardText>
                                    </CardBody>
                            </Col>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picAL} width="100" alt="" />
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picSD} width="100" alt="" />
                            </Col>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                        <CardTitle>Sylvia Dörfler</CardTitle>
                                        <CardSubtitle>{t("sd-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("sd-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("sd-role")}</CardText>
                                    </CardBody>
                            </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row className="justify-content-center" noGutters>
                            <Col xs="12" md="10" >
                                    <CardBody>
                                    <CardTitle>Sally Reynard</CardTitle>
                                        <CardSubtitle>{t("sr-affiliation")}</CardSubtitle>
                                        <CardText></CardText>
                                        <CardText><strong>{t("about")}</strong> {t("sr-about")}</CardText>
                                        <CardText><strong>{t("my-role")}</strong> {t("sr-role")}</CardText>
                                    </CardBody>
                            </Col>
                            <Col className="align-self-center" xs="4" md="2" >
                                    <CardImg src={picSally} width="100" alt="" />
                            </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </main>
        );
    }
}

export default translate("Team")(Team);
