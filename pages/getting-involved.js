import React from 'react'
import Link, {withPrefix} from 'gatsby-link'
import { Container, Col, Row} from 'reactstrap';
import { translate } from "react-i18next";

class GettingInvolved extends React.Component {

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
                            <p >{t("description")} <a href="mailto:office@dot.lbg.ac.at">office@dot.lbg.ac.at</a></p>
                            <br/>
                            <br/>

                            <br/>
                            
                            <h2 className="text-center">{t("discussion-forum")}</h2>
                            <br/>
                            <hr className="my-2" />

                            <p>{t("discussion-forum-link")} <a className="link_external" href="https://groups.google.com/forum/#!forum/projektdot" target="_blank" >https://groups.google.com/forum/#!forum/projektdot</a></p>

                            <br/>

                            <h2 className="text-center">{t("vacancies")}</h2>
                            <br/>
                            <hr className="my-2" />
                            
                            <p>{t("positions")} </p>
                            <ul>
                                {/*<li><a href={withPrefix('/documents/DOT_TeamassistentIn_Ausschreibung_final.pdf')} target="_blank" >{t("project-assistance")}</a></li>
                                <li><a href={withPrefix('/documents/DOT_Wissenschaftliche MitarbeiterIn_final.pdf')} target="_blank" >{t("scientific-staff")}</a></li>
                                */}
                                <li><a href={withPrefix('/documents/201807Ausschreibung_Wissenschaftliche MitarbeiterIn_DOT.pdf')} target="_blank" >{t("scientific-staff")}</a></li>
                            </ul>
                            
                            <p>{t("looking-forward")}<br/>
                            {t("send-application")} <a href="mailto:bewerbung@kl.ac.at">bewerbung@kl.ac.at</a></p>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default translate("GettingInvolved")(GettingInvolved);
