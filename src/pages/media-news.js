import React from 'react'
import Link, {withPrefix} from 'gatsby-link'
import { Media, Container, Row, Col} from 'reactstrap';
import { translate } from "react-i18next";

import media1Thumbnail from "../assets/images/media1-thumbnail.png";
import media2Thumbnail from "../assets/images/media2-thumbnail.jpg";
import media3Thumbnail from "../assets/images/media3-thumbnail.jpg";
import media4Thumbnail from "../assets/images/media4-thumbnail.jpg";
import media5Thumbnail from "../assets/images/media5-thumbnail.jpg";
import media6Thumbnail from "../assets/images/media6-thumbnail.jpg";
import media7Thumbnail from "../assets/images/media7-thumbnail.png";
import media8Thumbnail from "../assets/images/media8-thumbnail.png";


class MediaNews extends React.Component {

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
                        <p>{t("description")}</p>
                        <br/>
                        <br/>
                        <Media>
                            <a href={withPrefix('/media/oekz_180616.pdf')} target="_blank" ><img className="d-flex mr-3" width="200" src={media8Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media8Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media8Title")}
                                </Media>
                                {t("media8Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                        <Media>
                            <a className="link_external" href="https://derstandard.at/2000073755129/Mit-Games-und-Apps-spielerisch-psychische-Probleme-abfangen" target="_blank" ><img className="d-flex mr-3" width="200" src={media6Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media6Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media6Title")}
                                </Media>
                                {t("media6Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                        <Media>
                            <a className="link_external" href="http://www.economy.at/leben/dot-oder-die-offene-tur" target="_blank" ><img className="d-flex mr-3" width="200" src={media7Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media7Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media7Title")}
                                </Media>
                                {t("media7Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                        <Media>
                            <a className="link_external" href="https://science.apa.at/dossier/Serious_Games_Computerspiele_zur_Foerderung_psychischer_Kompetenzen_bei_Kindern/SCI_20171130_SCI77434352839384634" target="_blank" ><img className="d-flex mr-3" width="200" src={media2Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media2Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media2Title")}
                                </Media>
                                {t("media2Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                        <Media>
                            <a className="link_external" href="https://diepresse.com/home/science/5302465/Psychologie_Was-brauchen-die-Kinder-psychisch-Kranker" target="_blank" ><img className="d-flex mr-3" width="200" src={media3Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media3Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media3Title")}
                                </Media>
                                {t("media3Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                        <Media>
                            <a href={withPrefix('/media/2017-10-25_Wien_Mitte_Seite_18.pdf')} target="_blank" ><img className="d-flex mr-3" width="200" src={media1Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media1Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media1Title")}
                                </Media>
                                {t("media1Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                        <Media>
                            <a className="link_external" href="http://www.nachrichten.at/nachrichten/gesundheit/Forscher-wollen-Kinder-psychisch-kranker-Eltern-unterstuetzen;art114,2691861" target="_blank" ><img className="d-flex mr-3" width="200" src={media5Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media5Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media5Title")}
                                </Media>
                                {t("media5Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                        <Media>
                            <a className="link_external" href="https://derstandard.at/2000064956040/Forscher-wollen-Kinder-psychisch-kranker-Eltern-unterstuetzen" target="_blank" ><img className="d-flex mr-3" width="200" src={media4Thumbnail}/></a>
                            <Media left href="#">
                                <Media object data-src={media4Thumbnail} />
                            </Media>
                            <Media body>
                                <Media heading>
                                {t("media4Title")}
                                </Media>
                                {t("media4Description")}
                            </Media>
                        </Media>
                        <br/>
                        <br/>
                    </Col>
                </Row>
            </Container>
            </main>
        );
    }
}

export default translate("MediaNews")(MediaNews);