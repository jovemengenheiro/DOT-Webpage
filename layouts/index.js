import React, { Component } from 'react';
import { Container, Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Row, Col } from 'reactstrap';
import graphql from 'graphql';
import Helmet from 'react-helmet';
//import 'font-awesome/css/font-awesome.min.css';
import LanguageSwitcher from '../components/LanguageSwitcher';

import picLogo from '../assets/images/dot-logo.png';
import picLBG from '../assets/images/LBG.png';
import picKL from '../assets/images/kl.png';
import picINESC from '../assets/images/inesc-id.png';
import picUB from '../assets/images/UB.png';
import picSAMARA from '../assets/images/samara-logo.png';
import picPoika from '../assets/images/poika_logo.png';
import picECPAT from '../assets/images/ECPAT_logo.png';
import picLogoText from '../assets/images/die-offene-tur.png';
import picInnocence from '../assets/images/innocence-logo.png';
import favicon from '../assets/images/favicon-32x32.png';


//localization initialization
import { translate } from "react-i18next";
import { i18n } from '../components/i18n';

// code syntax-highlighting theme
// feel free to change it to another one
//import 'prismjs/themes/prism-twilight.css'

import 'bootstrap/dist/css/bootstrap.css';
// main site style
import './index.scss'


class Template extends Component {

  render()
  {

    const {t} = this.props;

    return (
    
        <div className='App'>
          <Helmet title={this.props.data.site.siteMetadata.title}>
            <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
          </Helmet>
            <header>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
              
              <Navbar className="bg-dark navbar-expand justify-content-center" dark>
                  <Nav className="">
                      <NavLink href="https://twitter.com/projektDOT"><i className="fab text-secondary fa-twitter fa-2x"></i></NavLink>
                      <NavLink href="https://www.facebook.com/DOTDieoffeneTuer/"><i className="fab text-secondary fa-facebook fa-2x"></i></NavLink>
                  </Nav>
                  {/* <Nav className="ml-auto justify-content-center">
                      <NavLink href="http://www.lbg.ac.at/"><img src={picLBG} className="float-none" width="225"/></NavLink>
                      <NavLink href="http://www.kl.ac.at/"><img src={picKL2} className="float-none" width="190"/></NavLink>
                  </Nav> */}
              </Navbar>
              <Navbar className="bg-secondary navbar-expand flex-column flex-sm-row" light>
                <NavbarBrand href="/"><img src={picLogo}  width="130" /><img src={picLogoText} width="200" /></NavbarBrand>
                <Nav className="flex-column flex-md-row">
                  <NavItem >
                    <NavLink className="text-center text-info" href="/about"><strong>{t("about")}</strong></NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink className="text-center text-info" href="/news-events"><strong>{t("news-events")}</strong></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-center text-info" href="/team"><strong>{t("team")}</strong></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-center text-info" href="/getting-involved"><strong>{t("getting-involved")}</strong></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-center text-info" href="/media-news"><strong>{t("media")}</strong></NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink className="text-center  text-info" href="/partners">{t("partners")}</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink className="text-center text-info" href="/imprint"><strong>{t("imprint")}</strong></NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-sm-auto">
                  <NavItem>
                    <LanguageSwitcher />
                  </NavItem>
                </Nav>
              </Navbar>
            </header>
          {this.props.children()}
          <footer id="footer" className="bg-secondary">
          <Container fluid className="text-center">
            <Row>
              <Col>
                <p></p>
              </Col>
            </Row>
            <Row id="partners">
                <Col >
                  <h5>{t("research-partners")}</h5>
                    <Nav className="justify-content-center">
                      <NavLink className="text-center" href="http://www.lbg.ac.at/"><img src={picLBG} className="float-none" width="300"/></NavLink>
                      <NavLink href="http://www.kl.ac.at/"><img src={picKL} className="float-none" width="300"/></NavLink>
                    </Nav>
                </Col>
            </Row>
            <hr className="my-2" /> 
            <Row>
                <Col>
                  <h5>{t("coi-organizations")}</h5>
                  <Nav className="justify-content-center">
                      <NavLink href="https://www.inesc-id.pt/"><img src={picINESC} width="200"/></NavLink>
                      <NavLink href="https://www.birmingham.ac.uk/"><img src={picUB} width="300"/></NavLink>
                    </Nav>
                </Col>
            </Row>
            <hr className="my-2" /> 
            <Row>
                <Col>
                  <h5>{t("network-partners")}</h5>
                  <Nav className="justify-content-center">
                    <NavLink href="http://www.praevention-samara.at"><img src={picSAMARA} width="250"/></NavLink>
                    <NavLink href="https://www.poika.at/"><img src={picPoika} width="130"/></NavLink>
                    <NavLink href="https://www.ecpat.at/"><img src={picECPAT} width="100"/></NavLink>
                    <NavLink href="https://www.innocenceindanger.de/"><img src={picInnocence} width="200"/></NavLink>
                    
                  </Nav>
                </Col>
            </Row>
            <hr className="my-2" /> 
            
            <Row className="justify-content-center" >
              <Col className="text-center">
              <address>
                <strong>Forschungsgruppe DOT der LBG GmbH</strong><br/>
                c/o Karl Landsteiner Universität<br />
                Dr. Karl-Dorrekstraße 30 <br/>
                3500 Krems an der Donau, Austria
              </address>

              <address>
              </address>
              </Col>
            </Row>
            
            <Row className="bg-dark">
              <Col className="copyright">
                  <p>© Forschungsgruppe DOT der LBG GmbH. {t("rights-reserved")}</p>
              </Col>
            </Row>
          </Container>
          </footer>
      </div>
  
    )
  }
}

//Template.propTypes = {
//    props: PropTypes.node,
//    children: PropTypes.func
//}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default translate("IndexLayout")(Template);

//whenever we need links to social media
