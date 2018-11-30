import React, {Component} from 'react'
import { Container, Jumbotron, Button, UncontrolledCarousel, CarouselCaption, CarouselItem, Row, Col } from 'reactstrap';
import DotCarousel from '../components/DotCarousel';
import { translate } from "react-i18next";

import picSocialConnectednessLarge from '../assets/images/social-connectedness2.png';
import picSocialConnectednessMobile from '../assets/images/social-connectedness2Mobile.png';
import picDigitalExperiencesLarge from '../assets/images/digital-experiences3.png';
import picDigitalExperiencesMobile from '../assets/images/digital-experiences3Mobile.png';
import picParticipatoryResearchLarge from '../assets/images/participatory-research3.png';
import picParticipatoryResearchMobile from '../assets/images/participatory-research3Mobile.png';

class About extends Component {
    render() {
        const {t} = this.props;

        const items = [
            {
              id: 1,
              src: picSocialConnectednessLarge,
              srcMobile: picSocialConnectednessMobile,
              altText: 'shortdescription1',
              caption: 'heading1'
            },
            {
              id: 2,
              src: picDigitalExperiencesLarge,
              srcMobile: picDigitalExperiencesMobile,
              altText: 'shortdescription2',
              caption: "heading2"
            },
            {
              id: 3,
              src: picParticipatoryResearchLarge,
              srcMobile: picParticipatoryResearchMobile,
              altText: 'shortdescription3',
              caption: "heading3"
            }
          ];

        return (
            <main>
                <DotCarousel items={items}></DotCarousel>
                <Container id="about">
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <br/>
                            <h1 className="display-3 text-center">Die Offene Tür</h1>
                            <hr className="my-2" /> 
                            <p><em><strong>{t("heading1")}</strong></em><br/>
                            {t("description1")}</p>
                            <p><em><strong>{t("heading2")}</strong></em><br/>
                            {t("description2")}</p>
                            <p><em><strong>{t("heading3")}</strong></em><br/>
                            {t("description3a")}</p>
                            <ul>
                                <li>{t("description3b")}</li>
                                <li>{t("description3c")}</li>
                                <li>{t("description3d")}</li>
                                <li>{t("description3e")}</li>
                                <li>{t("description3f")}</li>
                                <li>{t("description3g")}</li>
                            </ul>
                            <p><em><strong>{t("heading4")}</strong></em><br/>
                            {t("description4")}</p>
                            <br/>
                        </Col>
                    </Row>
                </Container>
        </main>
        )
    }
}

export default translate("About")(About);

{/*  */}