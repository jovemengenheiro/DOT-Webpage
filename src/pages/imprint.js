import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col} from 'reactstrap';
import { translate } from "react-i18next";


class Imprint extends React.Component {

    render()
    {
        const {t} = this.props;
        return (
            <main>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <br/>
                            <h1 className="display-3 text-center">{t("title")}</h1>
                            <hr className="my-2" />
                            <br/>
                            <p><strong>{t("website-provider")}</strong><br />
                            Forschungsgruppe DOT der LBG GmbH<br />
                            c/o Karl Landsteiner Universität<br />
                            Dr. Karl-Dorrekstraße 30 <br/>
                            3500 Krems an der Donau <br/>
                            Austria</p>
                            <p>
                            Email: <a href="mailto:office@dot.lbg.ac.at">office@dot.lbg.ac.at</a><br />
                            <br />
                            <br />
                            <strong>{t("legal-representative")}</strong><br />
                            Ludwig Boltzmann Gesellschaft<br />
                            Nußdorfer Straße 64, 6. Stock<br />
                            A-1090 {t("vienna")}</p>
                            <p>
                            {t("phone")} 01/513 27 50-18<br />
                            {t("fax")} 01/513 23 10</p>
                            <p>
                            FN 261775p, {t("jurisdiction")}<br />
                            {t("dvr")} 2111719<br />
                            {t("vat-number")} ATU 61640503</p>
                            <p>
                            <br />
                            <strong>{t("disclaimer")}</strong><br />
                            {t("disclaimer-text")}<br />
                            &nbsp;</p>
                            <p>
                            <strong>{t("webmaster")} </strong><Link to="/team/#joao">João Dias</Link><br />
                            <strong>Webdevelopement: </strong><a href="/team/#joao">João Dias</a></p>
                            <p>
                            <strong>{t("photos")} </strong><a className="link_external" href="https://pixabay.com/" target="_blank">Pixabay</a></p>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default translate("Imprint")(Imprint);