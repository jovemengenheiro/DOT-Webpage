import React from 'react'
import { Container, Row, Col, Table, UncontrolledTooltip} from 'reactstrap';
import { translate } from 'react-i18next';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

class Workflow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalWP1: false,
          modalWP2: false,
          modalWP3: false,
          modalWP4: false,
          modalWP5: false,
          modalWP6: false,
          modalWP7: false,
          modalWP8: false
        };

        this.toggleWP1 = this.toggleWP1.bind(this);
        this.toggleWP2 = this.toggleWP2.bind(this);
        this.toggleWP3 = this.toggleWP3.bind(this);
        this.toggleWP4 = this.toggleWP4.bind(this);
        this.toggleWP5 = this.toggleWP5.bind(this);
        this.toggleWP6 = this.toggleWP6.bind(this);
        this.toggleWP7 = this.toggleWP7.bind(this);
        this.toggleWP8 = this.toggleWP8.bind(this);
    }

    toggleWP1() {
        this.setState({
            modalWP1: !this.state.modalWP1
        });
    }

    toggleWP2() {
        this.setState({
            modalWP2: !this.state.modalWP2
        });
    }

    toggleWP3() {
        this.setState({
            modalWP3: !this.state.modalWP3
        });
    }

    toggleWP4() {
        this.setState({
            modalWP4: !this.state.modalWP4
        });
    }

    toggleWP5() {
        this.setState({
            modalWP5: !this.state.modalWP5
        });
    }

    toggleWP6() {
        this.setState({
            modalWP6: !this.state.modalWP6
        });
    }

    toggleWP7() {
        this.setState({
            modalWP7: !this.state.modalWP7
        });
    }

    toggleWP8() {
        this.setState({
            modalWP8: !this.state.modalWP8
        });
    }

    render()
    {
        const {t} = this.props;

        return (
            <main>
                <Container>
                  <Row>
                    <Col>
                    <br/>
                    <h1 className="display-3 text-center">D.O.T Workflow Diagram</h1>
                    <hr className="my-2" />
                    <br/>
                    <p className="text-center">
                      This diagram presents D.O.T's research and development workflow. Would you like to know more about each component and its current status?
                      <br/>
                      <br/>
                      <strong>click a component in the diagram to find additional information about it.</strong>
                    </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col lg="8">

                         <svg id="diagram"
    viewBox="120 0 880 824"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ marginLeft: 'auto', marginRight: 'auto' }}
    display="block"
  >
    <defs>
      <clipPath id="prefix__c0_1">
        <path d="M0 825V0h1100v825z" />
      </clipPath>
      <style>
        {
          'text{white-space:pre}path{pointer-events:none}text::-moz-selection{color:transparent;background:rgba(0,106,173,.4)}text::selection{color:transparent;background:rgba(0,106,173,.4)}.prefix__s1_1,.prefix__s2_1{font-size:27.5px;font-family:Carlito-Bold_g;fill:TRANSPARENT}.prefix__s2_1{font-size:24.44px;font-family:Carlito_b}.prefix__g0_1{fill:#fff}.prefix__g2_1{fill:none;stroke:#c6d9f1;stroke-width:3.069764;stroke-linecap:butt;stroke-linejoin:round}.prefix__g3_1{fill:#c6d9f1}.prefix__g6_1{fill:none;stroke:#00b050;stroke-width:7.6095405;stroke-linecap:butt;stroke-linejoin:round}.prefix__g7_1{fill:#00b050}.prefix__g8_1{fill:none;stroke:#000;stroke-width:7.6095405;stroke-linecap:butt;stroke-linejoin:round}.prefix__g11_1{fill:#002060}.prefix__g12_1{fill:none;stroke:#002060;stroke-width:3.069764;stroke-linecap:butt;stroke-linejoin:round}'
        }
      </style>
    </defs>
    <path d="M0 0v824h1099V0z" fill="#FFF" />
    <a xlinkHref="#" id="wp8Link" onClick={this.toggleWP8}>
    <g clipPath="url(#prefix__c0_1)">
      <path
        fillRule="evenodd"
        d="M0 .1h1100v825H0V.1z"
        className="prefix__g0_1"
      />
      <path
        fillRule="evenodd"
        d="M0 .1h1100v825H0V.1z"
        className="prefix__g0_1"
      />
    </g>
    <path
      fillRule="evenodd"
      d="M120.8 167.1l.2-6.4.5-6.4.9-6.5 1-6.2 1.6-6.3 1.8-6.1 2.1-6.1 2.5-6 2.7-5.6 3.2-5.8 3.3-5.4 3.6-5.3 4-5.1 4.1-4.8 4.4-4.8 4.6-4.4 5.1-4.1 5-4 5.4-3.5 5.5-3.4 5.5-3 5.8-2.9 5.9-2.5 6.1-2.1 6.2-1.9 6.2-1.3 6.3-1.3 6.4-.7 6.4-.6 6.4-.2h613l6.2.2 6.5.6 6.4.7 6.2 1.3 6.3 1.3 6.3 1.9 5.9 2.1 6 2.5 5.8 2.9 5.6 3 5.5 3.4 5.2 3.5 5.2 4 4.9 4.1 4.6 4.4 4.4 4.8 4.3 4.8 3.8 5.1 3.7 5.3 3.4 5.5 3 5.7 2.8 5.6 2.4 6 2.1 6.1 1.9 6.1 1.5 6.3 1.2 6.2.8 6.5.4 6.4.4 6.4V658l-.4 6.4-.4 6.4-.8 6.4-1.2 6.3-1.5 6.2-1.9 6.2-2.1 6.1-2.4 5.9-2.8 5.8-3 5.5-3.4 5.5-3.7 5.4-3.8 5.2-4.3 4.7-4.2 4.7-4.8 4.5-4.9 4.1-5 4-5.4 3.6-5.5 3.3-5.6 3.2-5.8 2.7-5.8 2.5-6.1 2.1-6.1 1.8-6.3 1.6-6.4 1-6.3.9-6.4.5-6.4.2h-613l-6.4-.2-6.4-.5-6.4-.9-6.3-1-6.2-1.6-6.2-1.8-6.1-2.1-5.9-2.5-5.8-2.7-5.5-3.1-5.5-3.4-5.4-3.6-5-4-4.9-4.1-4.8-4.5-4.4-4.5-4.1-4.9-4-5.2-3.6-5.4-3.3-5.3-3.2-5.7-2.7-5.8-2.5-5.9-2.1-6.1-1.8-6.2-1.6-6.2-1-6.3-.9-6.4-.5-6.4-.2-6.4V167.1z"
      fill="#c6d9f1"
      fillOpacity={0.5}
    />
    <path
      d="M120.8 167.1l.2-6.4.5-6.4.9-6.5 1-6.2 1.6-6.3 1.8-6.1 2.1-6.1 2.5-6 2.7-5.6 3.2-5.8 3.3-5.4 3.6-5.3 4-5.1 4.1-4.8 4.4-4.8 4.6-4.4 5.1-4.1 5-4 5.4-3.5 5.5-3.4 5.5-3 5.8-2.9 5.9-2.5 6.1-2.1 6.2-1.9 6.2-1.3 6.3-1.3 6.4-.7 6.4-.6 6.4-.2h613l6.2.2 6.5.6 6.4.7 6.2 1.3 6.3 1.3 6.3 1.9 5.9 2.1 6 2.5 5.8 2.9 5.6 3 5.5 3.4 5.2 3.5 5.2 4 4.9 4.1 4.6 4.4 4.4 4.8 4.3 4.8 3.8 5.1 3.7 5.3 3.4 5.5 3 5.7 2.8 5.6 2.4 6 2.1 6.1 1.9 6.1 1.5 6.3 1.2 6.2.8 6.5.4 6.4.4 6.4V658l-.4 6.4-.4 6.4-.8 6.4-1.2 6.3-1.5 6.2-1.9 6.2-2.1 6.1-2.4 5.9-2.8 5.8-3 5.5-3.4 5.5-3.7 5.4-3.8 5.2-4.3 4.7-4.2 4.7-4.8 4.5-4.9 4.1-5 4-5.4 3.6-5.5 3.3-5.6 3.2-5.8 2.7-5.8 2.5-6.1 2.1-6.1 1.8-6.3 1.6-6.4 1-6.3.9-6.4.5-6.4.2h-613l-6.4-.2-6.4-.5-6.4-.9-6.3-1-6.2-1.6-6.2-1.8-6.1-2.1-5.9-2.5-5.8-2.7-5.5-3.1-5.5-3.4-5.4-3.6-5-4-4.9-4.1-4.8-4.5-4.4-4.5-4.1-4.9-4-5.2-3.6-5.4-3.3-5.3-3.2-5.7-2.7-5.8-2.5-5.9-2.1-6.1-1.8-6.2-1.6-6.2-1-6.3-.9-6.4-.5-6.4-.2-6.4V167.1zm0-122.7zm858.4 736.3z"
      className="prefix__g2_1"
    />
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_2"
        transform="matrix(18 0 0 18 396.9 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 411.5 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 426.2 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 439.8 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 450.7 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_8"
        transform="matrix(18 0 0 18 470.7 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_9"
        transform="matrix(18 0 0 18 484.8 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 498.5 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 509.4 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 524.1 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_c"
        transform="matrix(18 0 0 18 537.6 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 547.2 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 567.3 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_e"
        transform="matrix(18 0 0 18 582.1 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_c"
        transform="matrix(18 0 0 18 596.8 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_f"
        transform="matrix(18 0 0 18 612.6 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_i"
        transform="matrix(18 0 0 18 627.9 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_j"
        transform="matrix(18 0 0 18 642.5 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_k"
        transform="matrix(18 0 0 18 657.2 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_i"
        transform="matrix(18 0 0 18 663.9 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_m"
        transform="matrix(18 0 0 18 678.6 739.2)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 691.7 739.2)"
      />
    </g>
    <text
      x={396}
      y={739}
      dx="0,0,-0.1,0,0,0.1,-0.1,0.1,-0.1,0,0,-0.1,-0.1,-0.1,0.1,0,0,-0.1,0,-0.1,0,-0.1,-0.1,0,-0.1,0.1"
      className="prefix__s1_1"
    >
      {'Phase 8: share our fidiigs'}
    </text>
    </a>
    <a xlinkHref="#" onClick={this.toggleWP2}>
    <path
      fillRule="evenodd"
      d="M286.8 299.1v-4l.3-3.9.6-4.2.7-3.9 1-4 1-3.8 1.4-3.9 1.5-3.6 1.9-3.7 1.8-3.7 2.1-3.3 2.3-3.4 2.5-3.2 2.6-3 2.9-2.9 2.9-2.9 3-2.6 3.2-2.5 3.4-2.3 3.4-2.1 3.6-1.9 3.5-1.8 3.9-1.5 3.8-1.4 3.8-1.1 4-.9 3.9-.7 4.2-.7 3.9-.3h519.2l4 .3 3.9.7 4.2.7 3.8.9 3.9 1.1 3.9 1.4 3.6 1.5 3.7 1.8 3.5 1.9 3.5 2.1 3.4 2.3 3.2 2.5 3 2.6 3 2.9 2.7 2.9 2.6 3 2.4 3.2 2.3 3.4 2.2 3.3 2 3.7 1.6 3.7 1.7 3.6 1.2 3.9 1.3 3.8.9 4 .7 3.9.5 4.2.5 3.9v317l-.3 4.2-.7 3.9-.7 4-.9 4-1.1 3.8-1.4 3.8-1.5 3.8-1.8 3.7-1.9 3.5-2.1 3.5-2.3 3.2-2.4 3.2-2.6 3.3-2.9 2.9-3 2.7-3 2.6-3.2 2.5-3.4 2.2-3.3 2.2-3.7 2-3.7 1.6-3.6 1.6-3.9 1.4-3.8 1.2-3.9.9-4 .8-4.1.4-4 .3-4 .2H359.9l-3.9-.5-4.2-.4-3.9-.8-4-.9-3.8-1.2-3.8-1.3-3.9-1.7-3.5-1.6-3.6-2-3.4-2.2-3.4-2.2-3.2-2.5-3-2.6-2.9-2.7-2.9-2.9-2.6-3.1-2.5-3.2-2.3-3.4-2.1-3.5-1.8-3.5-1.9-3.7-1.5-3.6-1.4-3.8-1-4-1-3.8-.7-4.2-.6-3.9-.3-4V299.1z"
      className="prefix__g3_1"
    />
    <path
      d="M286.8 299.1v-4l.3-3.9.6-4.2.7-3.9 1-4 1-3.8 1.4-3.9 1.5-3.6 1.9-3.7 1.8-3.7 2.1-3.3 2.3-3.4 2.5-3.2 2.6-3 2.9-2.9 2.9-2.9 3-2.6 3.2-2.5 3.4-2.3 3.4-2.1 3.6-1.9 3.5-1.8 3.9-1.5 3.8-1.4 3.8-1.1 4-.9 3.9-.7 4.2-.7 3.9-.3h519.2l4 .3 3.9.7 4.2.7 3.8.9 3.9 1.1 3.9 1.4 3.6 1.5 3.7 1.8 3.5 1.9 3.5 2.1 3.4 2.3 3.2 2.5 3 2.6 3 2.9 2.7 2.9 2.6 3 2.4 3.2 2.3 3.4 2.2 3.3 2 3.7 1.6 3.7 1.7 3.6 1.2 3.9 1.3 3.8.9 4 .7 3.9.5 4.2.5 3.9v317l-.3 4.2-.7 3.9-.7 4-.9 4-1.1 3.8-1.4 3.8-1.5 3.8-1.8 3.7-1.9 3.5-2.1 3.5-2.3 3.2-2.4 3.2-2.6 3.3-2.9 2.9-3 2.7-3 2.6-3.2 2.5-3.4 2.2-3.3 2.2-3.7 2-3.7 1.6-3.6 1.6-3.9 1.4-3.8 1.2-3.9.9-4 .8-4.1.4-4 .3-4 .2H359.9l-3.9-.5-4.2-.4-3.9-.8-4-.9-3.8-1.2-3.8-1.3-3.9-1.7-3.5-1.6-3.6-2-3.4-2.2-3.4-2.2-3.2-2.5-3-2.6-2.9-2.7-2.9-2.9-2.6-3.1-2.5-3.2-2.3-3.4-2.1-3.5-1.8-3.5-1.9-3.7-1.5-3.6-1.4-3.8-1-4-1-3.8-.7-4.2-.6-3.9-.3-4V299.1zm0-77.2zm665.5 463.6z"
      className="prefix__g2_1"
    />
    <g clipPath="url(#prefix__c0_1)">
      <use xlinkHref="#prefix__f0_2" transform="matrix(18 0 0 18 441.2 282)" />
      <use xlinkHref="#prefix__f0_3" transform="matrix(18 0 0 18 455.9 282)" />
      <use xlinkHref="#prefix__f0_4" transform="matrix(18 0 0 18 470.5 282)" />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 484.1 282)" />
      <use xlinkHref="#prefix__f0_6" transform="matrix(18 0 0 18 495 282)" />
      <use xlinkHref="#prefix__f0_n" transform="matrix(18 0 0 18 515 282)" />
      <use xlinkHref="#prefix__f0_9" transform="matrix(18 0 0 18 529.1 282)" />
      <use xlinkHref="#prefix__f0_p" transform="matrix(18 0 0 18 542.8 282)" />
      <use xlinkHref="#prefix__f0_d" transform="matrix(18 0 0 18 554.1 282)" />
      <use xlinkHref="#prefix__f0_i" transform="matrix(18 0 0 18 568.9 282)" />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 583.5 282)" />
      <use xlinkHref="#prefix__f0_e" transform="matrix(18 0 0 18 594.5 282)" />
      <use xlinkHref="#prefix__f0_q" transform="matrix(18 0 0 18 609.2 282)" />
      <use xlinkHref="#prefix__f0_r" transform="matrix(18 0 0 18 616 282)" />
      <use xlinkHref="#prefix__f0_s" transform="matrix(18 0 0 18 631.7 282)" />
      <use xlinkHref="#prefix__f0_k" transform="matrix(18 0 0 18 652.2 282)" />
      <use xlinkHref="#prefix__f0_r" transform="matrix(18 0 0 18 659 282)" />
      <use xlinkHref="#prefix__f0_3" transform="matrix(18 0 0 18 668.5 282)" />
      <use xlinkHref="#prefix__f0_4" transform="matrix(18 0 0 18 689.4 282)" />
      <use xlinkHref="#prefix__f0_j" transform="matrix(18 0 0 18 702.9 282)" />
      <use xlinkHref="#prefix__f0_e" transform="matrix(18 0 0 18 717.6 282)" />
      <use xlinkHref="#prefix__f0_q" transform="matrix(18 0 0 18 732.3 282)" />
      <use xlinkHref="#prefix__f0_r" transform="matrix(18 0 0 18 739 282)" />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 748.6 282)" />
    </g>
    <text
      x={441}
      y={281}
      dx="0,0,-0.1,0,0,0.1,-0.1,0.1,-0.1,0,-0.2,0,-0.1,0,-0.1,0.1,-0.1,0,0,0.1,-0.1,-0.1,0,0,-0.1,-0.1,0,0.1"
      className="prefix__s1_1"
    >
      {'Phase 2: coisult with adults'}
    </text>
    </a>
    <a xlinkHref="#" onClick={this.toggleWP3}>
    <path
      fillRule="evenodd"
      d="M304.3 377.9l.2-2.9.1-2.9.5-3 .5-2.9.7-2.9.8-2.8.9-2.7 1.1-2.9 1.2-2.6 1.4-2.6 1.5-2.6 1.7-2.5 1.7-2.4 1.9-2.3 2-2.2 2-2.1 2.3-2 2.1-1.8 2.5-1.8 2.4-1.6 2.6-1.5 2.6-1.4 2.8-1.2 2.7-1.1 2.8-1 2.9-.8 2.7-.6 3.1-.6 2.9-.3 2.9-.3H885l3.1.3 3.1.4 3 .5 2.9.8 2.9.9 2.9.9 2.9 1.2 2.8 1.4 2.6 1.4 2.6 1.5 2.6 1.8 2.4 1.9 2.3 1.9 2.1 2.2 2.2 2.1 2 2.5 1.8 2.3 1.8 2.6 1.6 2.5 1.5 2.6 1.2 2.9 1.2 2.8 1.1 2.9.8 2.9.7 3.1.6 2.9.3 3 .3 3.1v3l.2 233.8-.2 3-.1 3.1-.5 3-.6 2.9-.6 3.1-.9 2.9-1.1 2.9-1 2.8-1.4 2.7-1.5 2.8-1.6 2.6-1.7 2.6-1.8 2.2-2 2.3-2.1 2.3-2.3 2.2-2.3 2-2.4 1.8-2.5 1.7-2.6 1.6-2.7 1.6-2.8 1.2-2.7 1.2-2.9.9-2.9 1-3.1.7-3 .5-2.9.4-3.1.3H359.8l-3.1-.3-3-.4-3.1-.5-2.9-.7-2.9-1-2.9-.9-2.7-1.2-2.9-1.2-2.6-1.6-2.6-1.5-2.6-1.8-2.5-1.8-2.3-2-2.3-2.2-1.9-2.1-2-2.5-1.9-2.2-1.8-2.6-1.5-2.6-1.6-2.6-1.2-2.9-1.2-2.8-1.1-2.9-.7-2.9-.8-3.1-.6-2.9-.5-3-.1-3.1-.2-3V377.9z"
      fill="#558ed5"
    />
    <path
      d="M304.3 377.9v0l.2-2.9.1-2.9.5-3 .5-2.9.7-2.9.8-2.8.9-2.7 1.1-2.9 1.2-2.6 1.4-2.6 1.5-2.6 1.7-2.5 1.7-2.4 1.9-2.3 2-2.2 2-2.1 2.3-2 2.1-1.8 2.5-1.8 2.4-1.6 2.6-1.5 2.6-1.4 2.8-1.2 2.7-1.1 2.8-1 2.9-.8 2.7-.6 3.1-.6 2.9-.3 2.9-.3H885l3.1.3 3.1.4 3 .5 2.9.8 2.9.9 2.9.9 2.9 1.2 2.8 1.4 2.6 1.4 2.6 1.5 2.6 1.8 2.4 1.9 2.3 1.9 2.1 2.2 2.2 2.1 2 2.5 1.8 2.3 1.8 2.6 1.6 2.5 1.5 2.6 1.2 2.9 1.2 2.8 1.1 2.9.8 2.9.7 3.1.6 2.9.3 3 .3 3.1v3l.2 233.8-.2 3-.1 3.1-.5 3-.6 2.9-.6 3.1-.9 2.9-1.1 2.9-1 2.8-1.4 2.7-1.5 2.8-1.6 2.6-1.7 2.6-1.8 2.2-2 2.3-2.1 2.3-2.3 2.2-2.3 2-2.4 1.8-2.5 1.7-2.6 1.6-2.7 1.6-2.8 1.2-2.7 1.2-2.9.9-2.9 1-3.1.7-3 .5-2.9.4-3.1.3H359.8l-3.1-.3-3-.4-3.1-.5-2.9-.7-2.9-1-2.9-.9-2.7-1.2-2.9-1.2-2.6-1.6-2.6-1.5-2.6-1.8-2.5-1.8-2.3-2-2.3-2.2-1.9-2.1-2-2.5-1.9-2.2-1.8-2.6-1.5-2.6-1.6-2.6-1.2-2.9-1.2-2.8-1.1-2.9-.7-2.9-.8-3.1-.6-2.9-.5-3-.1-3.1-.2-3V377.9zm0-58.3v0zM940.5 670v0z"
      fill="none"
      stroke="#558ed5"
      strokeWidth={3.07}
      strokeLinejoin="round"
    />
    <g fill="#FFF" clipPath="url(#prefix__c0_1)">
      <use xlinkHref="#prefix__f0_2" transform="matrix(18 0 0 18 454.8 373)" />
      <use xlinkHref="#prefix__f0_3" transform="matrix(18 0 0 18 469.4 373)" />
      <use xlinkHref="#prefix__f0_4" transform="matrix(18 0 0 18 484.1 373)" />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 497.7 373)" />
      <use xlinkHref="#prefix__f0_6" transform="matrix(18 0 0 18 508.6 373)" />
      <use xlinkHref="#prefix__f0_t" transform="matrix(18 0 0 18 528.6 373)" />
      <use xlinkHref="#prefix__f0_9" transform="matrix(18 0 0 18 542.7 373)" />
      <use xlinkHref="#prefix__f0_p" transform="matrix(18 0 0 18 556.4 373)" />
      <use xlinkHref="#prefix__f0_d" transform="matrix(18 0 0 18 567.7 373)" />
      <use xlinkHref="#prefix__f0_i" transform="matrix(18 0 0 18 582.5 373)" />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 597.1 373)" />
      <use xlinkHref="#prefix__f0_e" transform="matrix(18 0 0 18 608.1 373)" />
      <use xlinkHref="#prefix__f0_q" transform="matrix(18 0 0 18 622.8 373)" />
      <use xlinkHref="#prefix__f0_r" transform="matrix(18 0 0 18 629.6 373)" />
      <use xlinkHref="#prefix__f0_s" transform="matrix(18 0 0 18 645.3 373)" />
      <use xlinkHref="#prefix__f0_k" transform="matrix(18 0 0 18 665.8 373)" />
      <use xlinkHref="#prefix__f0_r" transform="matrix(18 0 0 18 672.6 373)" />
      <use xlinkHref="#prefix__f0_3" transform="matrix(18 0 0 18 682.1 373)" />
      <use xlinkHref="#prefix__f0_v" transform="matrix(18 0 0 18 703 373)" />
      <use xlinkHref="#prefix__f0_k" transform="matrix(18 0 0 18 716.1 373)" />
      <use xlinkHref="#prefix__f0_j" transform="matrix(18 0 0 18 723 373)" />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 737.6 373)" />
    </g>
    <text
      x={454}
      y={373}
      dx="0,0,-0.1,0,0,0.1,-0.1,0.1,-0.1,0,-0.2,0,-0.1,0,-0.1,0.1,-0.1,0,0,0.1,-0.1,-0.1,0,0,0.1,-0.1"
      className="prefix__s1_1"
    >
      {'Phase 3: coisult with kids'}
    </text>
    </a>
    <a xlinkHref="#" onClick={this.toggleWP1}>
    <path
      fillRule="evenodd"
      d="M286.8 101.7v-1.5l.1-.9.2-.8.1-.8.2-.7.3-.9.3-.7.3-.7.5-.8.3-.7.4-.7.6-.7.5-.6.4-.6.7-.7.6-.4.6-.5.7-.6.7-.4.7-.3.6-.5.9-.3.7-.3.9-.3.7-.2.8-.1.8-.3h1.6l.8-.2h633.3l.9.2h.7l1 .1.7.2.9.1.8.2.8.3.7.3.8.4.8.4.7.4.6.5.8.6.6.4.6.6.6.7.7.6.4.7.5.6.4.8.3.8.5.7.3.8.3.8.2.9.3.7.1 1 .2.7v68.2l-.2.9-.1.7-.2 1-.3.7-.3.8-.3.8-.3.9-.5.6-.4.7-.5.8-.4.6-.7.6-.6.6-.4.7-.8.6-.6.4-.8.5-.6.4-.7.5-.8.3-.8.3-.9.3-.8.3-.7.2-.9.1-.8.2H301.1l-.7-.2-1-.1-.7-.2-.8-.3-.7-.3-1-.3-.7-.3-.6-.5-.8-.4-.8-.5-.6-.4-.6-.6-.6-.7-.6-.4-.6-.8-.5-.6-.4-.8-.5-.6-.5-.7-.3-.8-.3-.8-.3-.9-.3-.7-.1-.8-.2-.9-.1-.8v-66.6z"
      className="prefix__g3_1"
    />
    <path
      d="M286.8 101.7v-1.5l.1-.9.2-.8.1-.8.2-.7.3-.9.3-.7.3-.7.5-.8.3-.7.4-.7.6-.7.5-.6.4-.6.7-.7.6-.4.6-.5.7-.6.7-.4.7-.3.6-.5.9-.3.7-.3.9-.3.7-.2.8-.1.8-.3h1.6l.8-.2h633.3l.9.2h.7l1 .1.7.2.9.1.8.2.8.3.7.3.8.4.8.4.7.4.6.5.8.6.6.4.6.6.6.7.7.6.4.7.5.6.4.8.3.8.5.7.3.8.3.8.2.9.3.7.1 1 .2.7v68.2l-.2.9-.1.7-.2 1-.3.7-.3.8-.3.8-.3.9-.5.6-.4.7-.5.8-.4.6-.7.6-.6.6-.4.7-.8.6-.6.4-.8.5-.6.4-.7.5-.8.3-.8.3-.9.3-.8.3-.7.2-.9.1-.8.2H301.1l-.7-.2-1-.1-.7-.2-.8-.3-.7-.3-1-.3-.7-.3-.6-.5-.8-.4-.8-.5-.6-.4-.6-.6-.6-.7-.6-.4-.6-.8-.5-.6-.4-.8-.5-.6-.5-.7-.3-.8-.3-.8-.3-.9-.3-.7-.1-.8-.2-.9-.1-.8v-66.6zm0-16.2zm665.5 97.2z"
      className="prefix__g2_1"
    />
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_2"
        transform="matrix(18 0 0 18 425.2 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 439.8 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 454.5 145.1)"
      />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 468 145.1)" />
      <use xlinkHref="#prefix__f0_6" transform="matrix(18 0 0 18 479 145.1)" />
      <use
        xlinkHref="#prefix__f0_w"
        transform="matrix(18 0 0 18 499.1 145.1)"
      />
      <use xlinkHref="#prefix__f0_9" transform="matrix(18 0 0 18 513 145.1)" />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 526.8 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_x"
        transform="matrix(18 0 0 18 540.2 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_y"
        transform="matrix(18 0 0 18 552.9 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_q"
        transform="matrix(18 0 0 18 567.5 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 574.2 145.1)"
      />
      <use xlinkHref="#prefix__f0_c" transform="matrix(18 0 0 18 589 145.1)" />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 598.7 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_s"
        transform="matrix(18 0 0 18 618.8 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 639.2 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 653.9 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 667.3 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_z"
        transform="matrix(18 0 0 18 677.5 145.1)"
      />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 683 145.1)" />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 700.3 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_e"
        transform="matrix(18 0 0 18 715.1 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 729.7 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 745.4 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 754.9 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 769.7 145.1)"
      />
      <use
        xlinkHref="#prefix__f0_c"
        transform="matrix(18 0 0 18 783.6 145.1)"
      />
      <use xlinkHref="#prefix__f0_6" transform="matrix(18 0 0 18 793 145.1)" />
    </g>
    <text
      x={425}
      y={145}
      dx="0,0,-0.1,0,0,0.1,0,0,0.1,-0.1,-0.4,0,-0.1,0,0,-0.1,0.1,0,0,-0.1,-0.1,0.7,-1.6,0,0,0,-0.1,-0.1,0,-0.1,0.1,0.1,-0.3"
      className="prefix__s1_1"
    >
      {'Phase 1: explore what\u2019s out there'}
    </text>
    </a>
    <path d="M366.5 277.9H196.2V363" className="prefix__g6_1" />
    <path
      fillRule="evenodd"
      d="M196.2 384.2l-11.3-22.8h22.7l-11.4 22.8z"
      className="prefix__g7_1"
    />
    <path d="M286.8 134.1h-90.6V363" className="prefix__g6_1" />
    <path
      fillRule="evenodd"
      d="M196.2 384.2l-11.3-22.8h22.7l-11.4 22.8z"
      className="prefix__g7_1"
    />
    <path d="M366.5 353.3H196.2v9.7" className="prefix__g6_1" />
    <path
      fillRule="evenodd"
      d="M196.2 384.3l-11.3-22.9h22.7l-11.4 22.9z"
      className="prefix__g7_1"
    />
    <path d="M619.5 182.8v17.8" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M619.7 221.9L608.1 199H631l-11.3 22.9z"
      className="prefix__g9_1"
    />
    <path
      d="M661.1 563.9l32.2-.2"
      fill="none"
      stroke="#fff"
      strokeWidth={7.61}
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M714.7 563.7l-22.9 11.5v-23l22.9 11.5z"
      className="prefix__g0_1"
    />
    <path d="M196.2 576.1v126.8h426.2v-11.5" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M622.4 670l11.5 23H611l11.4-23z"
      className="prefix__g9_1"
    />
     <a xlinkHref="#" onClick={this.toggleWP4}>
    <path
      fillRule="evenodd"
      d="M320.1 423.2v-.8l.1-.8.2-.9.1-.8.2-.7.1-.8.3-.7.3-.8.4-.6.4-.8.5-.8.4-.6.5-.6.4-.6.7-.6.6-.6.6-.5.6-.4.6-.5.8-.4.6-.3.7-.5.8-.3.8-.3.7-.2.8-.1.8-.2.9-.1h204.5l1 .1.7.2.8.1.8.2.7.3.6.3.8.5.8.3.6.4.7.5.6.4.7.5.6.6.6.6.4.6.5.6.4.6.5.8.3.8.5.6.3.8.1.7.3.8.2.7.1.8.2.9v1.6l.1 61.5h-.1v1.7l-.2.8-.1.7-.2.8-.3.8-.1.7-.3.8-.5.7-.3.7-.5.7-.4.6-.5.6-.4.7-.6.6-.6.6-.7.4-.6.6-.6.4-.7.4-.7.5-.7.3-.8.3-.7.3-.8.1-.8.3h-.7l-1 .2-.7.2H334.7l-.7-.2h-.9l-.8-.2-.8-.3-.7-.1-.8-.3-.8-.3-.7-.3-.6-.3-.8-.5-.6-.5-.6-.6-.6-.4-.6-.6-.7-.5-.4-.6-.5-.8-.4-.6-.5-.6-.4-.8-.4-.7-.3-.6-.3-.9-.1-.7-.2-.7-.1-.9-.2-.8v-.8l-.1-.7v-61.7z"
      className="prefix__g11_1"
    />
    <path
      d="M320.1 423.2v-.8l.1-.8.2-.9.1-.8.2-.7.1-.8.3-.7.3-.8.4-.6.4-.8.5-.8.4-.6.5-.6.4-.6.7-.6.6-.6.6-.5.6-.4.6-.5.8-.4.6-.3.7-.5.8-.3.8-.3.7-.2.8-.1.8-.2.9-.1h204.5l1 .1.7.2.8.1.8.2.7.3.6.3.8.5.8.3.6.4.7.5.6.4.7.5.6.6.6.6.4.6.5.6.4.6.5.8.3.8.5.6.3.8.1.7.3.8.2.7.1.8.2.9v1.6l.1 61.5h-.1v1.7l-.2.8-.1.7-.2.8-.3.8-.1.7-.3.8-.5.7-.3.7-.5.7-.4.6-.5.6-.4.7-.6.6-.6.6-.7.4-.6.6-.6.4-.7.4-.7.5-.7.3-.8.3-.7.3-.8.1-.8.3h-.7l-1 .2-.7.2H334.7l-.7-.2h-.9l-.8-.2-.8-.3-.7-.1-.8-.3-.8-.3-.7-.3-.6-.3-.8-.5-.6-.5-.6-.6-.6-.4-.6-.6-.7-.5-.4-.6-.5-.8-.4-.6-.5-.6-.4-.8-.4-.7-.3-.6-.3-.9-.1-.7-.2-.7-.1-.9-.2-.8v-.8l-.1-.7v-61.7zm0-15.3zm232.3 92.3z"
      className="prefix__g12_1"
    />
    <g fill="#FFF" clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_2"
        transform="matrix(18 0 0 18 339.6 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 354.3 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 368.9 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 382.5 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 393.4 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_10"
        transform="matrix(18 0 0 18 413.6 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_9"
        transform="matrix(18 0 0 18 427.5 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_j"
        transform="matrix(18 0 0 18 441.2 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 455.9 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_12"
        transform="matrix(18 0 0 18 469.6 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 482.5 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_q"
        transform="matrix(18 0 0 18 496.3 448.5)"
      />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 503.1 448.5)"
      />
      <use xlinkHref="#prefix__f0_y" transform="matrix(18 0 0 18 518 448.5)" />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 374.2 481.5)"
      />
    </g>
    <text
      x={339}
      y={448}
      dx="0,0,-0.1,0,0,0.1,0,0,-0.1,0,-0.1,-0.1,-0.2,0.1,0,0.2,-0.1"
      className="prefix__s1_1"
    >
      {'Phase 4: develop'}
    </text>
    <g fill="#FFF" clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 383.6 481.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 398.4 481.5)"
      />
      <use
        xlinkHref="#prefix__f0_m"
        transform="matrix(18 0 0 18 418.4 481.5)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 431.1 481.5)"
      />
      <use
        xlinkHref="#prefix__f0_13"
        transform="matrix(18 0 0 18 444.6 481.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 466.9 481.5)"
      />
      <use xlinkHref="#prefix__f0_5" transform="matrix(18 0 0 18 481 481.5)" />
    </g>
    <text
      x={374}
      y={481}
      dx="0,-0.1,0.1,0.1,-0.1,-0.4,0,-0.1,0.2,0"
      className="prefix__s1_1"
    >
      {'the games'}
    </text>
    </a>
    <a xlinkHref="#" onClick={this.toggleWP5}>
    <path
      fillRule="evenodd"
      d="M320.1 562v-.7l.1-.8.2-.8.1-.7.2-.8.1-.8.3-.7.3-.6.4-.8.3-.8.4-.6.5-.6.4-.6.5-.6.6-.6.6-.5.6-.4.6-.6.6-.5.7-.3.7-.5.6-.3.8-.3.8-.1.7-.3.6-.2 1-.1.7-.2h204.9l.8.2.7.1.8.2.7.3.8.1.8.3.6.3.7.5.7.3.6.5.6.6.6.4.6.5.5.6.6.6.4.6.5.6.3.6.5.8.3.8.3.6.3.7.1.8.2.8.1.7.2.8v1.5l.1 59.6v.8l-.1.7-.2 1-.1.7-.2.8-.1.6-.3.8-.3.7-.3.8-.4.6-.4.6-.5.8-.4.6-.5.4-.6.7-.6.6-.6.4-.6.5-.6.4-.7.5-.7.3-.6.3-.8.3-.8.3-.7.2-.6.3-.9.1h-.8l-.8.2H333.5l-.7-.2-1-.1-.6-.2-.7-.3-.8-.1-.8-.3-.6-.3-.7-.5-.7-.5-.6-.4-.6-.5-.6-.4-.6-.6-.6-.5-.5-.6-.4-.6-.5-.6-.4-.8-.3-.6-.4-.8-.3-.7-.3-.7-.1-.7-.2-.8-.1-.7-.2-.8-.1-.8V562z"
      className="prefix__g11_1"
    />
    <path
      d="M320.1 562v-.7l.1-.8.2-.8.1-.7.2-.8.1-.8.3-.7.3-.6.4-.8.3-.8.4-.6.5-.6.4-.6.5-.6.6-.6.6-.5.6-.4.6-.6.6-.5.7-.3.7-.5.6-.3.8-.3.8-.1.7-.3.6-.2 1-.1.7-.2h204.9l.8.2.7.1.8.2.7.3.8.1.8.3.6.3.7.5.7.3.6.5.6.6.6.4.6.5.5.6.6.6.4.6.5.6.3.6.5.8.3.8.3.6.3.7.1.8.2.8.1.7.2.8v1.5l.1 59.6v.8l-.1.7-.2 1-.1.7-.2.8-.1.6-.3.8-.3.7-.3.8-.4.6-.4.6-.5.8-.4.6-.5.4-.6.7-.6.6-.6.4-.6.5-.6.4-.7.5-.7.3-.6.3-.8.3-.8.3-.7.2-.6.3-.9.1h-.8l-.8.2H333.5l-.7-.2-1-.1-.6-.2-.7-.3-.8-.1-.8-.3-.6-.3-.7-.5-.7-.5-.6-.4-.6-.5-.6-.4-.6-.6-.6-.5-.5-.6-.4-.6-.5-.6-.4-.8-.3-.6-.4-.8-.3-.7-.3-.7-.1-.7-.2-.8-.1-.7-.2-.8-.1-.8V562zm0-14.8zm231.7 89.4z"
      className="prefix__g12_1"
    />
    <g fill="#FFF" clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_2"
        transform="matrix(18 0 0 18 339.3 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 353.9 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 368.6 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 382.2 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 393.1 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_14"
        transform="matrix(18 0 0 18 413.3 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_9"
        transform="matrix(18 0 0 18 427.2 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_j"
        transform="matrix(18 0 0 18 440.9 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 455.6 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_12"
        transform="matrix(18 0 0 18 469.3 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 482.2 586.3)"
      />
      <use xlinkHref="#prefix__f0_q" transform="matrix(18 0 0 18 496 586.3)" />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 502.8 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_y"
        transform="matrix(18 0 0 18 517.7 586.3)"
      />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 352.8 619.3)"
      />
    </g>
    <text
      x={339}
      y={586}
      dx="0,0,-0.1,0,0,0.1,0,0,-0.1,0,-0.1,-0.1,-0.2,0.1,0,0.2,-0.1"
      className="prefix__s1_1"
    >
      {'Phase 5: develop'}
    </text>
    <g fill="#FFF" clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 362.2 619.3)"
      />
      <use xlinkHref="#prefix__f0_6" transform="matrix(18 0 0 18 377 619.3)" />
      <use xlinkHref="#prefix__f0_d" transform="matrix(18 0 0 18 397 619.3)" />
      <use
        xlinkHref="#prefix__f0_i"
        transform="matrix(18 0 0 18 411.9 619.3)"
      />
      <use
        xlinkHref="#prefix__f0_q"
        transform="matrix(18 0 0 18 426.6 619.3)"
      />
      <use
        xlinkHref="#prefix__f0_k"
        transform="matrix(18 0 0 18 433.3 619.3)"
      />
      <use xlinkHref="#prefix__f0_i" transform="matrix(18 0 0 18 440 619.3)" />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 454.8 619.3)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 474.9 619.3)"
      />
      <use
        xlinkHref="#prefix__f0_e"
        transform="matrix(18 0 0 18 489.5 619.3)"
      />
      <use
        xlinkHref="#prefix__f0_16"
        transform="matrix(18 0 0 18 504.3 619.3)"
      />
    </g>
    <text
      x={352}
      y={619}
      dx="0,-0.1,0.1,0.1,-0.1,0.2,-0.1,0,0,0.1,0.1,0,-0.2,0.1"
      className="prefix__s1_1"
    >
      {'the oiliie hub'}
    </text>
    </a>
    <a xlinkHref="#" onClick={this.toggleWP6}>
    <path
      fillRule="evenodd"
      d="M608.4 444.8V443l.1-1.8.2-2 .4-1.8.5-1.9.4-2 .7-1.6.7-1.9.9-1.7.9-1.6 1-1.7 1-1.5 1.3-1.6 1.2-1.5 1.4-1.4 1.3-1.2 1.4-1.2 1.5-1.2 1.6-1.1 1.6-1.1 1.7-.9 1.9-.8 1.6-.7 1.9-.6 1.8-.6 1.8-.5 1.9-.3 2-.2 1.8-.1 2-.2h254.8l2 .2 1.8.1 2 .2 1.8.3 1.9.5 1.8.6 1.8.6 1.7.7 1.9.8 1.6.9 1.7 1.1 1.6 1.1 1.5 1.2 1.4 1.2 1.3 1.2 1.4 1.4 1.2 1.5 1.2 1.6 1.1 1.5.9 1.7 1 1.6.9 1.7.7 1.9.6 1.6.5 2 .5 1.9.4 1.8.2 2 .1 1.8.2 1.8v146.4l-.2 1.8-.1 2-.2 1.9-.4 1.9-.5 1.9-.5 1.8-.6 1.8-.7 1.7-.9 1.9-1 1.6-.9 1.6-1.1 1.6-1.2 1.6-1.2 1.4-1.4 1.3-1.3 1.4-1.4 1.2-1.5 1.1-1.6 1.1-1.7 1-1.6.9-1.7 1-1.9.6-1.6.6-2 .6-1.9.5-1.8.3-2 .3-1.8.1h-1.8l-255 .2v-.2h-2l-1.8-.1-2-.3-1.9-.3-1.8-.5-1.8-.5-1.9-.7-1.6-.6-1.9-1-1.7-.9-1.5-.9-1.7-1.1-1.5-1.2-1.4-1.2-1.3-1.4-1.4-1.3-1.2-1.4-1.3-1.6-1-1.6-1-1.6-.9-1.6-.9-1.7-.7-1.9-.7-1.8-.4-1.8-.5-1.9-.3-1.8-.3-2-.1-1.8V444.8z"
      fill="#b9cde5"
    />
    <path
      d="M608.4 444.8v0-1.8l.1-1.8.2-2 .4-1.8.5-1.9.4-2 .7-1.6.7-1.9.9-1.7.9-1.6 1-1.7 1-1.5 1.3-1.6 1.2-1.5 1.4-1.4 1.3-1.2 1.4-1.2 1.5-1.2 1.6-1.1 1.6-1.1 1.7-.9 1.9-.8 1.6-.7 1.9-.6 1.8-.6 1.8-.5 1.9-.3 2-.2 1.8-.1 2-.2h254.8l2 .2 1.8.1 2 .2 1.8.3 1.9.5 1.8.6 1.8.6 1.7.7 1.9.8 1.6.9 1.7 1.1 1.6 1.1 1.5 1.2 1.4 1.2 1.3 1.2 1.4 1.4 1.2 1.5 1.2 1.6 1.1 1.5.9 1.7 1 1.6.9 1.7.7 1.9.6 1.6.5 2 .5 1.9.4 1.8.2 2 .1 1.8.2 1.8v146.4l-.2 1.8-.1 2-.2 1.9-.4 1.9-.5 1.9-.5 1.8-.6 1.8-.7 1.7-.9 1.9-1 1.6-.9 1.6-1.1 1.6-1.2 1.6-1.2 1.4-1.4 1.3-1.3 1.4-1.4 1.2-1.5 1.1-1.6 1.1-1.7 1-1.6.9-1.7 1-1.9.6-1.6.6-2 .6-1.9.5-1.8.3-2 .3-1.8.1h-1.8l-255 .2v-.2h-2l-1.8-.1-2-.3-1.9-.3-1.8-.5-1.8-.5-1.9-.7-1.6-.6-1.9-1-1.7-.9-1.5-.9-1.7-1.1-1.5-1.2-1.4-1.2-1.3-1.4-1.4-1.3-1.2-1.4-1.3-1.6-1-1.6-1-1.6-.9-1.6-.9-1.7-.7-1.9-.7-1.8-.4-1.8-.5-1.9-.3-1.8-.3-2-.1-1.8V444.8zm0-36.5v0zm328 219.6v0z"
      fill="none"
      stroke="#b9cde5"
      strokeWidth={3.07}
      strokeLinejoin="round"
    />
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_2"
        transform="matrix(18 0 0 18 653.4 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 668.2 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 682.7 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 696.3 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 707.3 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_17"
        transform="matrix(18 0 0 18 727.4 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_9"
        transform="matrix(18 0 0 18 741.3 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_j"
        transform="matrix(18 0 0 18 755.2 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 769.7 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_12"
        transform="matrix(18 0 0 18 783.6 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 796.3 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_q"
        transform="matrix(18 0 0 18 810.3 446.5)"
      />
      <use xlinkHref="#prefix__f0_d" transform="matrix(18 0 0 18 817 446.5)" />
      <use
        xlinkHref="#prefix__f0_y"
        transform="matrix(18 0 0 18 831.8 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 852.7 446.5)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 862.2 446.5)"
      />
      <use xlinkHref="#prefix__f0_6" transform="matrix(18 0 0 18 877 446.5)" />
      <use
        xlinkHref="#prefix__f0_p"
        transform="matrix(18 0 0 18 641.8 479.5)"
      />
    </g>
    <text
      x={653}
      y={446}
      dx="0,0.2,-0.2,0,0,0.1,0,0,0.1,0,-0.2,0.1,-0.3,0.2,0,0,-0.1,0,-0.1,0.1,0.1"
      className="prefix__s1_1"
    >
      {'Phase 6: develop the'}
    </text>
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_q"
        transform="matrix(18 0 0 18 653.3 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 660.1 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 673.7 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 684.7 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_c"
        transform="matrix(18 0 0 18 695.6 479.5)"
      />
      <use xlinkHref="#prefix__f0_d" transform="matrix(18 0 0 18 705 479.5)" />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 719.8 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_13"
        transform="matrix(18 0 0 18 734.5 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_y"
        transform="matrix(18 0 0 18 763.1 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_c"
        transform="matrix(18 0 0 18 777.8 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 787.1 479.5)"
      />
      <use xlinkHref="#prefix__f0_m" transform="matrix(18 0 0 18 802 479.5)" />
      <use xlinkHref="#prefix__f0_c" transform="matrix(18 0 0 18 815 479.5)" />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 824.1 479.5)"
      />
      <use
        xlinkHref="#prefix__f0_13"
        transform="matrix(18 0 0 18 837.7 479.5)"
      />
      <use xlinkHref="#prefix__f0_13" transform="matrix(18 0 0 18 860 479.5)" />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 882.4 479.5)"
      />
    </g>
    <text
      x={641}
      y={479}
      dx="0,0,0.1,0,0,0,-0.4,0,0,0.1,-0.1,-0.1,-0.4,0.2,-0.1,-0.6,0,-0.1,0.1"
      className="prefix__s1_1"
    >
      {'classroom programme'}
    </text>
    </a>
    <a xlinkHref="#" onClick={this.toggleWP7}>
    <path
      fillRule="evenodd"
      d="M623.9 529.5l.2-.8v-.9l.2-.9.1-.9.2-.8.3-.9.3-.8.3-.9.4-.8.3-.7.5-.8.5-.7.6-.7.6-.7.6-.6.6-.6.8-.7.6-.4.7-.5.8-.4.8-.5.7-.4.8-.4.9-.3.8-.3.9-.1.9-.2.8-.1h264.3l.9.1.8.2.9.1.9.3.8.3.9.4.7.4.8.5.8.4.6.5.7.4.6.7.8.6.6.6.5.7.6.7.5.7.4.8.5.7.3.8.4.9.3.8.2.9.1.8.3.9v.9l.2.9v70.1l-.2 1-.1.9-.2.7-.3 1-.3.9-.3.7-.4.8-.3.8-.6.7-.5.8-.5.6-.6.8-.6.6-.6.6-.8.6-.6.5-.7.6-.8.4-.8.3-.7.5-.9.3-.8.3-.9.3-.8.2-.9.1-.9.2h-1.7l-260.8.1-.9-.1h-.9l-.8-.2-.9-.1-.9-.2-.8-.3-.9-.3-.8-.3-.7-.5-.8-.3-.8-.4-.7-.5-.6-.6-.8-.6-.6-.6-.6-.6-.6-.6-.6-.8-.5-.8-.5-.7-.3-.8-.4-.8-.3-.7-.3-.9-.3-.8-.2-.9-.1-.9-.2-.8v-.9l-.2-.9v-67.7z"
      className="prefix__g11_1"
    />
    <path
      d="M623.9 529.5l.2-.8v-.9l.2-.9.1-.9.2-.8.3-.9.3-.8.3-.9.4-.8.3-.7.5-.8.5-.7.6-.7.6-.7.6-.6.6-.6.8-.7.6-.4.7-.5.8-.4.8-.5.7-.4.8-.4.9-.3.8-.3.9-.1.9-.2.8-.1h264.3l.9.1.8.2.9.1.9.3.8.3.9.4.7.4.8.5.8.4.6.5.7.4.6.7.8.6.6.6.5.7.6.7.5.7.4.8.5.7.3.8.4.9.3.8.2.9.1.8.3.9v.9l.2.9v70.1l-.2 1-.1.9-.2.7-.3 1-.3.9-.3.7-.4.8-.3.8-.6.7-.5.8-.5.6-.6.8-.6.6-.6.6-.8.6-.6.5-.7.6-.8.4-.8.3-.7.5-.9.3-.8.3-.9.3-.8.2-.9.1-.9.2h-1.7l-260.8.1-.9-.1h-.9l-.8-.2-.9-.1-.9-.2-.8-.3-.9-.3-.8-.3-.7-.5-.8-.3-.8-.4-.7-.5-.6-.6-.8-.6-.6-.6-.6-.6-.6-.6-.6-.8-.5-.8-.5-.7-.3-.8-.4-.8-.3-.7-.3-.9-.3-.8-.2-.9-.1-.9-.2-.8v-.9l-.2-.9v-67.7zm0-16.8zm294.6 101.4z"
      className="prefix__g12_1"
    />
    <g fill="#FFF" clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f0_2"
        transform="matrix(18 0 0 18 669.5 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_3"
        transform="matrix(18 0 0 18 684.1 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 698.8 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_5"
        transform="matrix(18 0 0 18 712.3 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 723.3 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_18"
        transform="matrix(18 0 0 18 743.4 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_9"
        transform="matrix(18 0 0 18 757.3 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_y"
        transform="matrix(18 0 0 18 771.2 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_k"
        transform="matrix(18 0 0 18 785.7 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_q"
        transform="matrix(18 0 0 18 792.6 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_d"
        transform="matrix(18 0 0 18 799.3 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 814.1 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 829.8 557.9)"
      />
      <use
        xlinkHref="#prefix__f0_i"
        transform="matrix(18 0 0 18 843.3 557.9)"
      />
      <use xlinkHref="#prefix__f0_j" transform="matrix(18 0 0 18 858 557.9)" />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 719.1 590.9)"
      />
    </g>
    <text
      x={669}
      y={557}
      dx="0,0,-0.1,0,0,0.1,0,0,0.1,0,-0.2,0.1,0,0,0.1,-0.1,0,-0.1,-0.1"
      className="prefix__s1_1"
    >
      {'Phase 7: pilot aid'}
    </text>
    <g fill="#FFF" clipPath="url(#prefix__c0_1)">
      <use xlinkHref="#prefix__f0_12" transform="matrix(18 0 0 18 733 590.9)" />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 745.6 590.9)"
      />
      <use
        xlinkHref="#prefix__f0_q"
        transform="matrix(18 0 0 18 759.1 590.9)"
      />
      <use xlinkHref="#prefix__f0_e" transform="matrix(18 0 0 18 766 590.9)" />
      <use
        xlinkHref="#prefix__f0_4"
        transform="matrix(18 0 0 18 780.5 590.9)"
      />
      <use
        xlinkHref="#prefix__f0_r"
        transform="matrix(18 0 0 18 793.9 590.9)"
      />
      <use
        xlinkHref="#prefix__f0_6"
        transform="matrix(18 0 0 18 803.1 590.9)"
      />
    </g>
    <text
      x={719}
      y={590}
      dx="0,0.1,-0.5,0,0.1,-0.2,-0.1,-0.4,0.1"
      className="prefix__s1_1"
    >
      {'evaluate'}
    </text>
    </a>
    <path d="M196.3 575.9v126.2h767.6V518h-6.1" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M936.4 518l22.7-11.4v22.9L936.4 518z"
      className="prefix__g9_1"
    />
    <path d="M196.2 576.1v127.4h239.7V658" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M435.9 636.6l11.4 22.9h-22.7l11.3-22.9z"
      className="prefix__g9_1"
    />
    <path d="M271.6 480h17.8v-26.1h9.3" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M320.1 453.9l-22.9 11.4v-22.9l22.9 11.5z"
      className="prefix__g9_1"
    />
    <path d="M552.3 454h35.9v109.4h14.4" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M623.9 563.4L601 574.9v-23l22.9 11.5z"
      className="prefix__g9_1"
    />
    <path d="M196.2 576.1v126.5h575v-67.1" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M771.2 614.1l11.3 22.9h-22.7l11.4-22.9z"
      className="prefix__g9_1"
    />
    <path d="M551.8 591.8h36.1v-28.6h14.8" className="prefix__g8_1" />
    <path
      fillRule="evenodd"
      d="M623.9 563.2l-22.7 11.5v-22.8l22.7 11.3z"
      className="prefix__g9_1"
    />
    <path
      d="M436.2 508.6l-.2 30.1"
      fill="none"
      stroke="#000"
      strokeWidth={1.513}
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M436.2 500.2l4.6 9.1-9.2-.1 4.6-9zM435.9 547.2l-4.5-9.2h9.1l-4.6 9.2z"
      className="prefix__g9_1"
    />
    <path
      fillRule="evenodd"
      d="M120.8 409.4v-2.6l.4-1.4.1-1.2.3-1.2.5-1.4.4-1.2.5-1.2.4-1.3.8-1 .6-1.2.8-1.1.7-.9 1-1.1.9-.9.9-.9 1.1-1 .9-.7 1.1-.8 1.2-.6 1-.8 1.3-.4 1.2-.5 1.2-.4 1.2-.5 1.4-.3 1.2-.1 1.4-.4H249l1.4.4 1.2.1 1.2.3 1.4.5 1.2.4 1.3.5 1 .4 1.3.8 1 .6 1.3.8.9.7 1 1 1 .9.9.9.9 1.1.8.9.7 1.1.6 1.2.6 1 .6 1.3.5 1.2.5 1.2.4 1.4.3 1.2.2 1.2.1 1.4.2 1.4v1.2l.1 141.5-.1 1.2v1.4l-.2 1.3-.3 1.3-.3 1.2-.3 1.4-.4 1.2-.7 1.2-.4 1.1-.8 1.2-.6 1.1-.7 1-.8 1.1-.9 1.1-.9.9-1 .9-.9.9-1 .8-1.1.8-1.2.6-1.1.6-1.2.6-1.3.4-1.2.5-1.2.5-1.4.3-1.2.1-1.4.2-1.2.1h-1.4l-100.5.2-1.4-.2h-1.2l-1.4-.1-1.2-.3-1.4-.3-1.2-.3-1.2-.7-1.2-.4-1.3-.5-1-.7-1.2-.6-1.1-.8-.9-.8-1.1-.9-.9-.9-.9-.9-1-.9-.7-1.1-.8-1.1-.6-1.2-.8-1.1-.4-1.2-.5-1.2-.4-1.2-.5-1.3-.3-1.3-.1-1.3-.4-1.3V409.4z"
      className="prefix__g3_1"
    />
    <path
      d="M120.8 409.4v-2.6l.4-1.4.1-1.2.3-1.2.5-1.4.4-1.2.5-1.2.4-1.3.8-1 .6-1.2.8-1.1.7-.9 1-1.1.9-.9.9-.9 1.1-1 .9-.7 1.1-.8 1.2-.6 1-.8 1.3-.4 1.2-.5 1.2-.4 1.2-.5 1.4-.3 1.2-.1 1.4-.4H249l1.4.4 1.2.1 1.2.3 1.4.5 1.2.4 1.3.5 1 .4 1.3.8 1 .6 1.3.8.9.7 1 1 1 .9.9.9.9 1.1.8.9.7 1.1.6 1.2.6 1 .6 1.3.5 1.2.5 1.2.4 1.4.3 1.2.2 1.2.1 1.4.2 1.4v1.2l.1 141.5-.1 1.2v1.4l-.2 1.3-.3 1.3-.3 1.2-.3 1.4-.4 1.2-.7 1.2-.4 1.1-.8 1.2-.6 1.1-.7 1-.8 1.1-.9 1.1-.9.9-1 .9-.9.9-1 .8-1.1.8-1.2.6-1.1.6-1.2.6-1.3.4-1.2.5-1.2.5-1.4.3-1.2.1-1.4.2-1.2.1h-1.4l-100.5.2-1.4-.2h-1.2l-1.4-.1-1.2-.3-1.4-.3-1.2-.3-1.2-.7-1.2-.4-1.3-.5-1-.7-1.2-.6-1.1-.8-.9-.8-1.1-.9-.9-.9-.9-.9-1-.9-.7-1.1-.8-1.1-.6-1.2-.8-1.1-.4-1.2-.5-1.2-.4-1.2-.5-1.3-.3-1.3-.1-1.3-.4-1.3V409.4zm0-25.1zm150.8 191.8z"
      className="prefix__g2_1"
    />
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f1_3"
        transform="matrix(16 0 0 16 145.1 431.4)"
      />
      <use xlinkHref="#prefix__f1_4" transform="matrix(16 0 0 16 158 431.4)" />
      <use
        xlinkHref="#prefix__f1_5"
        transform="matrix(16 0 0 16 169.9 431.4)"
      />
      <use
        xlinkHref="#prefix__f1_9"
        transform="matrix(16 0 0 16 182.7 431.4)"
      />
      <use
        xlinkHref="#prefix__f1_4"
        transform="matrix(16 0 0 16 195.5 431.4)"
      />
      <use
        xlinkHref="#prefix__f1_a"
        transform="matrix(16 0 0 16 213.1 431.4)"
      />
      <use xlinkHref="#prefix__f1_b" transform="matrix(16 0 0 16 226 431.4)" />
      <use
        xlinkHref="#prefix__f1_c"
        transform="matrix(16 0 0 16 238.8 431.4)"
      />
      <use
        xlinkHref="#prefix__f1_d"
        transform="matrix(16 0 0 16 151.9 460.6)"
      />
    </g>
    <text
      x={145}
      y={431}
      dx="0,-0.4,-0.2,-0.1,0,-0.1,0,0,0,-0.1"
      className="prefix__s2_1"
    >
      {'Refne our'}
    </text>
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f1_a"
        transform="matrix(16 0 0 16 171.3 460.6)"
      />
      <use
        xlinkHref="#prefix__f1_e"
        transform="matrix(16 0 0 16 184.1 460.6)"
      />
      <use
        xlinkHref="#prefix__f1_4"
        transform="matrix(16 0 0 16 196.9 460.6)"
      />
      <use xlinkHref="#prefix__f1_f" transform="matrix(16 0 0 16 209 460.6)" />
      <use
        xlinkHref="#prefix__f1_a"
        transform="matrix(16 0 0 16 220.1 460.6)"
      />
      <use xlinkHref="#prefix__f1_g" transform="matrix(16 0 0 16 233 460.6)" />
      <use
        xlinkHref="#prefix__f1_h"
        transform="matrix(16 0 0 16 168.4 489.9)"
      />
    </g>
    <text x={151} y={460} dx="0,-0.1,0,0,-0.1,0,0,0,0" className="prefix__s2_1">
      {'model of'}
    </text>
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f1_a"
        transform="matrix(16 0 0 16 177.8 489.9)"
      />
      <use
        xlinkHref="#prefix__f1_i"
        transform="matrix(16 0 0 16 190.7 489.9)"
      />
      <use
        xlinkHref="#prefix__f1_j"
        transform="matrix(16 0 0 16 200.9 489.9)"
      />
      <use
        xlinkHref="#prefix__f1_l"
        transform="matrix(16 0 0 16 206.5 489.9)"
      />
      <use
        xlinkHref="#prefix__f1_f"
        transform="matrix(16 0 0 16 218.3 489.9)"
      />
      <use
        xlinkHref="#prefix__f1_i"
        transform="matrix(16 0 0 16 144.4 519.2)"
      />
    </g>
    <text x={168} y={489} dx="0,-0.1,0,-0.1,0,0,0" className="prefix__s2_1">
      {'social'}
    </text>
    <g clipPath="url(#prefix__c0_1)">
      <use
        xlinkHref="#prefix__f1_a"
        transform="matrix(16 0 0 16 154.4 519.2)"
      />
      <use
        xlinkHref="#prefix__f1_9"
        transform="matrix(16 0 0 16 167.1 519.2)"
      />
      <use
        xlinkHref="#prefix__f1_9"
        transform="matrix(16 0 0 16 180.1 519.2)"
      />
      <use
        xlinkHref="#prefix__f1_4"
        transform="matrix(16 0 0 16 192.9 519.2)"
      />
      <use xlinkHref="#prefix__f1_i" transform="matrix(16 0 0 16 205 519.2)" />
      <use
        xlinkHref="#prefix__f1_m"
        transform="matrix(16 0 0 16 215.2 519.2)"
      />
      <use xlinkHref="#prefix__f1_4" transform="matrix(16 0 0 16 223 519.2)" />
      <use
        xlinkHref="#prefix__f1_e"
        transform="matrix(16 0 0 16 235.2 519.2)"
      />
      <use
        xlinkHref="#prefix__f1_9"
        transform="matrix(16 0 0 16 174.2 548.4)"
      />
    </g>
    <text
      x={144}
      y={519}
      dx="0,-0.2,-0.2,0.1,0,-0.1,-0.1,-0.4,0"
      className="prefix__s2_1"
    >
      {'connected'}
    </text>
    <g clipPath="url(#prefix__c0_1)">
      <use xlinkHref="#prefix__f1_4" transform="matrix(16 0 0 16 187 548.4)" />
      <use
        xlinkHref="#prefix__f1_h"
        transform="matrix(16 0 0 16 199.1 548.4)"
      />
      <use
        xlinkHref="#prefix__f1_h"
        transform="matrix(16 0 0 16 208.7 548.4)"
      />
    </g>
    <text x={174} y={548} dx="0,0,-0.1,0" className="prefix__s2_1">
      {'ness'}
    </text>
    <defs>
      <path
        d="M404 496s90 0 132 47c0 0 41 48 41 130 0 0 0 77-42 122 0 0-43 45-131 45H282V496zM86 0v991h318s97 0 166-24c0 0 69-24 115-66 0 0 45-42 67-101 0 0 22-58 22-127 0 0 0-73-23-134 0 0-23-60-69-103 0 0-46-44-115-68 0 0-69-24-163-24H282V0z"
        id="prefix__f0_2"
        transform="scale(.001 -.001)"
      />
      <path
        d="M93 0v1072h190V666s42 39 92 63c0 0 49 24 118 24 0 0 61 0 107-21 0 0 46-21 77-58 0 0 32-38 48-90 0 0 16-51 16-113V0H551v471s0 64-29 99c0 0-29 35-87 35 0 0-43 0-81-19 0 0-38-18-71-52V0z"
        id="prefix__f0_3"
        transform="scale(.001 -.001)"
      />
      <path
        d="M329 118s51 0 88 18c0 0 37 18 73 56v120s-74-3-123-12c0 0-48-10-78-24 0 0-29-15-41-34 0 0-12-20-12-42 0 0 0-45 25-63 0 0 25-19 68-19zM270-10s-48 0-87 12c0 0-40 13-68 38 0 0-29 26-45 63 0 0-16 38-16 87 0 0 0 41 21 82 0 0 21 41 72 75 0 0 50 33 134 55 0 0 84 22 209 25v39s0 72-30 105c0 0-30 34-86 34 0 0-41 0-69-10 0 0-27-9-48-21 0 0-21-12-38-21 0 0-18-10-41-10 0 0-19 0-33 10 0 0-14 10-22 24l-34 60s64 60 142 89c0 0 77 29 167 29 0 0 65 0 117-21 0 0 51-22 87-60 0 0 36-38 54-91 0 0 19-53 19-117V0h-86s-27 0-41 8c0 0-15 8-23 32l-16 49s-29-25-55-43c0 0-26-19-54-32 0 0-28-13-59-18 0 0-32-6-71-6z"
        id="prefix__f0_4"
        transform="scale(.001 -.001)"
      />
      <path
        d="M284-10s-36 0-71 7c0 0-35 5-67 18 0 0-32 12-60 28 0 0-28 17-48 36l44 72s8 12 19 20c0 0 12 7 30 7 0 0 16 0 31-9 0 0 14-9 31-19 0 0 17-11 41-20 0 0 24-9 60-9 0 0 27 0 46 7 0 0 19 6 30 18 0 0 12 11 18 26 0 0 5 15 5 31 0 0 0 33-24 51 0 0-25 18-62 32 0 0-38 13-81 27 0 0-42 14-80 39 0 0-37 25-62 65 0 0-24 40-24 107 0 0 0 46 17 87 0 0 17 42 51 73 0 0 34 31 84 50 0 0 51 19 118 19 0 0 36 0 71-7 0 0 34-7 64-19 0 0 30-12 55-30 0 0 25-17 45-37l-43-68s-7-13-16-18c0 0-8-5-21-5 0 0-14 0-28 7 0 0-15 7-32 16 0 0-18 9-40 16 0 0-22 7-52 7 0 0-44 0-69-21 0 0-25-20-25-55 0 0 0-23 15-38 0 0 14-15 37-27 0 0 24-11 53-21 0 0 30-10 61-21 0 0 31-11 61-27 0 0 29-15 53-37 0 0 23-23 38-55 0 0 14-32 14-77 0 0 0-53-19-99 0 0-19-45-55-78 0 0-36-33-89-52 0 0-54-17-124-17z"
        id="prefix__f0_5"
        transform="scale(.001 -.001)"
      />
      <path
        d="M553 457s0 32-9 61c0 0-8 29-27 51 0 0-18 23-46 36 0 0-27 13-65 13 0 0-73 0-114-42 0 0-41-43-53-119zM411-10s-77 0-143 24c0 0-67 26-116 76 0 0-49 50-77 124 0 0-28 75-28 172 0 0 0 76 25 143 0 0 24 66 70 116 0 0 46 50 112 79 0 0 65 29 148 29 0 0 70 0 129-23 0 0 59-23 102-66 0 0 42-43 66-105 0 0 24-63 24-143 0 0 0-22-2-36 0 0-3-14-7-22 0 0-5-8-14-11 0 0-8-4-21-4H236s4-54 19-93c0 0 15-40 40-65 0 0 24-25 58-38 0 0 33-12 74-12 0 0 41 0 72 10 0 0 30 10 53 22 0 0 22 11 40 21 0 0 18 10 35 10 0 0 21 0 35-17l54-70s-30-36-68-59c0 0-37-24-77-37 0 0-40-14-81-19 0 0-41-6-79-6z"
        id="prefix__f0_6"
        transform="scale(.001 -.001)"
      />
      <path
        d="M387 136s37 0 65 12c0 0 28 12 46 34 0 0 17 22 26 51 0 0 9 30 9 65 0 0 0 81-34 124 0 0-35 43-112 43 0 0-76 0-111-44 0 0-35-43-35-123 0 0 0-35 9-65 0 0 9-29 27-51 0 0 18-22 45-34 0 0 28-12 65-12zm0 477s37 0 61 14c0 0 24 13 39 35 0 0 14 21 20 50 0 0 5 28 5 58 0 0 0 27-7 54 0 0-7 26-22 45 0 0-15 19-39 31 0 0-23 12-57 12 0 0-33 0-57-12 0 0-23-12-39-31 0 0-15-19-22-45 0 0-7-27-7-54 0 0 0-30 5-58 0 0 6-29 21-50 0 0 14-22 38-35 0 0 24-14 61-14zm0-623s-76 0-139 20c0 0-63 22-108 62 0 0-45 40-70 97 0 0-24 56-24 126 0 0 0 89 40 153 0 0 40 64 130 96 0 0-70 31-104 90 0 0-34 58-34 140 0 0 0 59 22 111 0 0 23 51 64 89 0 0 41 38 98 59 0 0 57 22 125 22 0 0 68 0 125-22 0 0 57-21 98-59 0 0 41-38 64-89 0 0 23-52 23-111 0 0 0-82-35-140 0 0-34-59-104-90 0 0 90-32 130-96 0 0 41-64 41-153 0 0 0-70-25-126 0 0-24-57-70-97 0 0-45-40-108-62 0 0-63-20-139-20z"
        id="prefix__f0_8"
        transform="scale(.001 -.001)"
      />
      <path
        d="M211-9s-24 0-45 8c0 0-21 8-36 23 0 0-15 15-24 35 0 0-8 21-8 45 0 0 0 23 8 44 0 0 9 21 24 36 0 0 15 15 36 24 0 0 21 9 45 9 0 0 24 0 45-9 0 0 21-9 36-24 0 0 15-15 24-36 0 0 9-21 9-44 0 0 0-24-9-45 0 0-9-20-24-35 0 0-15-15-36-23 0 0-21-8-45-8zm0 504s-24 0-45 9c0 0-21 8-36 23 0 0-15 15-24 36 0 0-8 21-8 45 0 0 0 23 8 44 0 0 9 21 24 36 0 0 15 15 36 24 0 0 21 9 45 9 0 0 24 0 45-9 0 0 21-9 36-24 0 0 15-15 24-36 0 0 9-21 9-44 0 0 0-24-9-45 0 0-9-21-24-36 0 0-15-15-36-23 0 0-21-9-45-9z"
        id="prefix__f0_9"
        transform="scale(.001 -.001)"
      />
      <path
        d="M82 0v741h111s29 0 41-11c0 0 11-10 15-36l10-76s33 64 78 100c0 0 45 37 104 37 0 0 48 0 80-23l-14-142s-2-13-9-19c0 0-8-6-21-6 0 0-11 0-32 4 0 0-21 3-38 3 0 0-27 0-47-7 0 0-21-8-37-22 0 0-16-15-28-36 0 0-13-21-23-47V0z"
        id="prefix__f0_c"
        transform="scale(.001 -.001)"
      />
      <path
        d="M412 134s86 0 127 60c0 0 41 60 41 177 0 0 0 117-41 177 0 0-41 60-127 60 0 0-87 0-129-60 0 0-41-60-41-177 0 0 0-117 41-177 0 0 42-60 129-60zm0-144s-82 0-150 26c0 0-67 27-115 76 0 0-49 50-75 121 0 0-26 70-26 159 0 0 0 88 26 158 0 0 26 71 75 120 0 0 48 50 115 76 0 0 68 27 150 27 0 0 81 0 148-27 0 0 67-26 115-76 0 0 48-49 74-120 0 0 26-70 26-158 0 0 0-89-26-159 0 0-26-71-74-121 0 0-48-49-115-76 0 0-67-26-148-26z"
        id="prefix__f0_d"
        transform="scale(.001 -.001)"
      />
      <path
        d="M327-10s-60 0-106 20c0 0-46 21-78 58 0 0-31 37-47 89 0 0-16 51-16 113v471h189V270s0-64 29-99c0 0 29-35 88-35 0 0 42 0 80 19 0 0 38 19 72 52v534h189V0H611s-18 0-30 9c0 0-13 8-16 25l-14 54s-44-44-97-72c0 0-53-26-127-26z"
        id="prefix__f0_e"
        transform="scale(.001 -.001)"
      />
      <path
        d="M119 0v601l-56 11s-21 3-34 15c0 0-13 11-13 32v77h103v82s0 117 58 183c0 0 57 66 164 66 0 0 19 0 35-2 0 0 16-1 31-7V956s0-15-11-20c0 0-12-5-27-5 0 0-37 0-52-26 0 0-14-26-14-87v-82h445V0H559v601H309V0zm534 838s-24 0-45 9c0 0-22 9-38 25 0 0-16 16-25 38 0 0-9 21-9 46 0 0 0 24 9 46 0 0 9 21 25 38 0 0 16 16 38 25 0 0 21 9 45 9 0 0 24 0 47-9 0 0 22-9 39-25 0 0 16-17 26-38 0 0 9-22 9-46 0 0 0-25-9-46 0 0-10-22-26-38 0 0-17-16-39-25 0 0-23-9-47-9z"
        id="prefix__f0_f"
        transform="scale(.001 -.001)"
      />
      <path
        d="M93 0v741h116s18 0 30-8c0 0 12-9 16-26l13-54s22 22 46 40c0 0 24 19 52 32 0 0 27 13 58 20 0 0 31 8 68 8 0 0 61 0 107-21 0 0 46-21 78-58 0 0 31-38 47-90 0 0 16-51 16-113V0H551v471s0 64-30 99c0 0-29 35-87 35 0 0-43 0-81-19 0 0-37-18-71-52V0z"
        id="prefix__f0_i"
        transform="scale(.001 -.001)"
      />
      <path
        d="M381 139s26 0 48 5c0 0 22 6 41 16 0 0 19 11 35 26 0 0 17 15 33 36v326s-28 36-62 50c0 0-33 14-71 14 0 0-36 0-67-15 0 0-30-14-51-44 0 0-21-30-33-76 0 0-12-46-12-108 0 0 0-64 10-108 0 0 10-43 28-70 0 0 18-28 43-40 0 0 26-12 58-12zM315-10s-59 0-108 24c0 0-50 26-85 74 0 0-35 49-55 119 0 0-20 71-20 162 0 0 0 82 22 153 0 0 23 70 64 122 0 0 41 52 99 81 0 0 57 30 128 30 0 0 60 0 102-18 0 0 42-19 76-51v386h189V0H610s-17 0-29 9c0 0-13 8-16 25l-17 67s-44-50-100-81c0 0-57-30-133-30z"
        id="prefix__f0_j"
        transform="scale(.001 -.001)"
      />
      <path
        d="M93 0v741h190V0zm91 836s-24 0-45 9c0 0-21 9-37 25 0 0-16 16-26 37 0 0-9 22-9 46 0 0 0 25 9 47 0 0 10 21 26 37 0 0 16 16 37 26 0 0 21 9 45 9 0 0 25 0 47-9 0 0 23-10 39-26 0 0 16-16 26-37 0 0 10-22 10-47 0 0 0-24-10-45 0 0-10-22-26-38 0 0-16-16-39-25 0 0-22-9-47-9z"
        id="prefix__f0_k"
        transform="scale(.001 -.001)"
      />
      <path
        d="M354-124s47 0 78 8c0 0 32 7 52 19 0 0 20 12 28 29 0 0 9 18 9 38 0 0 0 20-11 31 0 0-12 13-31 20 0 0-19 7-46 11 0 0-26 3-55 5 0 0-30 2-61 3 0 0-32 2-63 6 0 0-24-16-40-37 0 0-15-20-15-48 0 0 0-18 8-34 0 0 8-15 26-27 0 0 18-11 47-17 0 0 30-7 74-7zm-10 519s57 0 85 32c0 0 27 31 27 83 0 0 0 52-27 82 0 0-28 30-85 30 0 0-57 0-84-30 0 0-27-30-27-82 0 0 0-51 27-83 0 0 27-32 84-32zm7-653s-81 0-141 17c0 0-59 16-98 43 0 0-39 27-58 62 0 0-19 36-19 74 0 0 0 50 28 83 0 0 29 35 79 56 0 0-26 15-42 41 0 0-16 26-16 66 0 0 0 17 5 34 0 0 6 18 18 35 0 0 12 18 29 33 0 0 17 16 41 29 0 0-54 30-85 81 0 0-31 50-31 118 0 0 0 55 22 100 0 0 21 44 59 75 0 0 38 31 90 48 0 0 51 16 112 16 0 0 45 0 85-9 0 0 39-10 73-28h206v-71s0-16-9-26c0 0-10-10-31-14l-59-12s14-37 14-79c0 0 0-55-21-100 0 0-22-44-59-75 0 0-38-32-89-48 0 0-51-17-110-17 0 0-18 0-35 1 0 0-17 2-34 5 0 0-28-18-28-42 0 0 0-22 19-31 0 0 20-10 51-14 0 0 31-4 72-5 0 0 40-2 82-5 0 0 42-4 83-13 0 0 40-9 71-29 0 0 31-20 51-54 0 0 19-33 19-86 0 0 0-48-23-95 0 0-23-47-67-83 0 0-44-37-108-59 0 0-64-22-146-22z"
        id="prefix__f0_m"
        transform="scale(.001 -.001)"
      />
      <path
        d="M51 0v60s0 18 8 37c0 0 7 20 25 37l287 296s37 38 65 73c0 0 28 34 47 68 0 0 19 34 29 69 0 0 9 34 9 72 0 0 0 69-34 104 0 0-34 35-97 35 0 0-27 0-49-8 0 0-22-8-40-22 0 0-18-15-31-34 0 0-13-19-19-42 0 0-12-34-33-45 0 0-12-6-35-6-6 0-13 1-21 2l-96 16s12 73 41 127c0 0 29 54 72 90 0 0 44 36 101 55 0 0 56 18 121 18 0 0 69 0 125-21 0 0 57-20 97-57 0 0 39-38 61-90 0 0 22-53 22-116 0 0 0-55-15-101 0 0-16-47-42-89 0 0-26-42-61-82 0 0-35-40-74-80L304 145s33 11 67 17c0 0 33 5 62 5h225s28 0 46-16c0 0 17-17 17-44V0z"
        id="prefix__f0_n"
        transform="scale(.001 -.001)"
      />
      <path
        d="M348-10s-62 0-118 25c0 0-55 25-98 75 0 0-42 49-66 120 0 0-25 71-25 162 0 0 0 82 22 151 0 0 21 69 63 120 0 0 43 52 105 81 0 0 62 29 144 29 0 0 78 0 137-28 0 0 59-27 106-78l-50-68s-9-11-17-17c0 0-8-6-23-6 0 0-14 0-26 8l-27 18s-15 10-36 19c0 0-20 8-52 8 0 0-39 0-67-17 0 0-29-16-48-47 0 0-18-30-28-74 0 0-9-44-9-99 0 0 0-115 40-178 0 0 39-62 108-62 0 0 37 0 59 10 0 0 21 11 36 23 0 0 15 13 27 23 0 0 13 10 30 10 0 0 22 0 33-17l56-70s-30-36-64-59c0 0-33-24-69-38 0 0-35-14-71-19 0 0-37-5-72-5z"
        id="prefix__f0_p"
        transform="scale(.001 -.001)"
      />
      <path
        d="M93 0v1072h190V0z"
        id="prefix__f0_q"
        transform="scale(.001 -.001)"
      />
      <path
        d="M316-10s-96 0-147 54c0 0-52 56-52 153v404H50s-15 0-25 10c0 0-11 10-11 30v75l113 22 39 195s7 31 42 31h99V736h182V601H307V210s0-33 14-51c0 0 14-19 40-19 0 0 14 0 24 4 0 0 9 3 16 7 0 0 6 5 12 8 0 0 6 4 12 4 0 0 8 0 14-4 0 0 5-5 11-14l57-91s-39-32-88-49c0 0-50-15-103-15z"
        id="prefix__f0_r"
        transform="scale(.001 -.001)"
      />
      <path
        d="M236 0L5 741h151s21 0 35-10c0 0 15-10 19-25l94-378s8-33 15-66c0 0 7-32 12-64 0 0 8 32 18 64 0 0 9 33 20 66l111 379s5 15 18 25c0 0 14 10 33 10h84s20 0 34-10c0 0 14-10 19-25l107-379s21-68 36-130c0 0 6 32 13 64 0 0 6 32 16 67l98 377s4 15 18 25c0 0 14 10 33 10h144L903 0H750s-26 0-36 33L592 445s-15 45-23 88c0 0-9-44-22-89L422 33S412 0 381 0z"
        id="prefix__f0_s"
        transform="scale(.001 -.001)"
      />
      <path
        d="M397-9S326-9 272 6c0 0-54 16-95 50 0 0-40 33-70 82 0 0-29 49-50 114l79 34s20 8 42 8c5 0 11-1 16-2 0 0 28-6 39-29 0 0 13-26 28-48 0 0 15-22 34-39 0 0 19-16 44-26 0 0 24-10 56-10 0 0 40 0 69 13 0 0 30 13 49 35 0 0 20 21 29 48 0 0 10 27 10 53 0 0 0 35-6 63 0 0-7 28-29 49 0 0-22 20-64 31 0 0-43 11-116 11v128s61 0 101 11c0 0 39 10 61 29 0 0 22 19 31 45 0 0 8 27 8 59 0 0 0 68-34 102 0 0-34 34-95 34 0 0-55 0-91-30 0 0-37-31-51-76 0 0-12-34-32-45 0 0-12-6-34-6-7 0-14 1-22 2l-95 16s11 73 40 127c0 0 29 54 73 90 0 0 44 36 100 55 0 0 57 18 122 18 0 0 68 0 123-20 0 0 55-20 93-55 0 0 38-35 58-81 0 0 21-47 21-100 0 0 0-47-10-83 0 0-10-36-30-62 0 0-19-27-47-46 0 0-29-19-65-31 0 0 170-57 170-229 0 0 0-75-27-132 0 0-28-57-74-96 0 0-45-39-106-58 0 0-61-18-128-18z"
        id="prefix__f0_t"
        transform="scale(.001 -.001)"
      />
      <path
        d="M80 0v1072h189V462h29s18 0 28 5c0 0 9 5 19 19l135 223s12 15 26 23c0 0 15 9 36 9h173L536 468s-12-16-26-29c0 0-14-12-30-23 0 0 15-11 26-25 0 0 12-15 23-32L724 0H554s-44 0-63 33L355 309s-9 17-19 22c0 0-10 5-29 5h-38V0z"
        id="prefix__f0_v"
        transform="scale(.001 -.001)"
      />
      <path
        d="M176 0v134h192v555s0 35 2 72L241 650s-13-11-25-13c0 0-6-1-13-1-4 0-8 0-11 1 0 0-11 2-20 8 0 0-9 5-13 11l-57 78 298 258h148V134h169V0z"
        id="prefix__f0_w"
        transform="scale(.001 -.001)"
      />
      <path
        d="M12 0l215 382L21 741h182s20 0 29-6c0 0 10-5 17-18l117-227 8 18s5 10 11 19l80 187s17 27 42 27h174L474 392 690 0H508s-20 0-33 11c0 0-12 11-20 23L337 269s-3-8-6-15l-7-14-93-206s-9-12-20-23c0 0-12-11-30-11z"
        id="prefix__f0_x"
        transform="scale(.001 -.001)"
      />
      <path
        d="M414 132s37 0 67 15c0 0 30 14 52 44 0 0 21 30 33 76 0 0 11 46 11 109 0 0 0 63-9 106 0 0-10 44-28 71 0 0-18 27-43 40 0 0-26 12-58 12 0 0-53 0-89-21 0 0-37-22-69-62V194s29-34 62-48c0 0 33-14 71-14zM92-239v980h116s18 0 30-8c0 0 13-9 16-26l16-65s22 25 47 46c0 0 25 21 53 36 0 0 29 15 62 23 0 0 33 8 72 8 0 0 59 0 108-25 0 0 50-26 85-74 0 0 36-48 56-119 0 0 20-71 20-161 0 0 0-83-23-154 0 0-22-71-63-122 0 0-41-52-99-82 0 0-58-28-129-28 0 0-61 0-102 17 0 0-42 18-76 50v-296z"
        id="prefix__f0_y"
        transform="scale(.001 -.001)"
      />
      <path
        d="M172 649l-60 36s-16 10-14 24c0 0 2 15 10 24 0 0 15 16 29 45 0 0 14 28 19 65 0 0 6 37-1 79 0 0-7 42-33 85 0 0-14 22-8 38 0 0 6 17 26 23l114 44s35-59 48-121c0 0 13-63 2-124 0 0-10-61-43-117 0 0-33-56-89-101z"
        id="prefix__f0_z"
        transform="scale(.001 -.001)"
      />
      <path
        d="M480 377v306s0 22 2 48c0 0 1 25 4 53L201 377zm0-377v238H78s-17 0-31 11c0 0-13 11-17 28l-19 90 454 624h172V377h114V274s0-15-9-26c0 0-10-10-27-10h-78V0z"
        id="prefix__f0_10"
        transform="scale(.001 -.001)"
      />
      <path
        d="M275 0L8 741h157s21 0 35-10c0 0 13-10 19-25l108-378s23-68 36-138c0 0 8 35 17 68 0 0 9 34 22 70l112 378s5 15 19 25c0 0 13 10 32 10h150L448 0z"
        id="prefix__f0_12"
        transform="scale(.001 -.001)"
      />
      <path
        d="M95 0v741h117s18 0 30-8c0 0 12-9 16-26l13-52s20 21 41 39c0 0 21 18 46 31 0 0 25 13 53 20 0 0 28 8 61 8 0 0 71 0 117-38 0 0 46-38 68-100 0 0 18 37 45 63 0 0 26 26 58 43 0 0 32 16 68 24 0 0 35 8 71 8 0 0 63 0 111-19 0 0 49-19 82-56 0 0 34-36 51-88 0 0 17-52 17-119V0H971v471s0 134-120 134c0 0-27 0-50-9 0 0-23-8-40-25 0 0-18-17-28-42 0 0-10-25-10-58V0H533v471s0 72-29 103c0 0-30 31-87 31 0 0-38 0-71-17 0 0-33-17-61-49V0z"
        id="prefix__f0_13"
        transform="scale(.001 -.001)"
      />
      <path
        d="M333-9s-47 0-88 9c0 0-41 9-78 25 0 0-36 17-67 38 0 0-31 22-56 46l55 76s19 25 46 25c0 0 18 0 36-11 0 0 17-11 39-24 0 0 22-14 51-25 0 0 30-10 72-10 0 0 44 0 77 14 0 0 32 15 54 41 0 0 21 27 32 62 0 0 11 35 11 77 0 0 0 79-44 123 0 0-44 43-128 43 0 0-33 0-67-7 0 0-35-6-69-19L98 505l80 486h485v-76s0-38-24-62c0 0-25-24-82-24H304l-33-195s59 12 113 12c0 0 76 0 135-23 0 0 58-24 98-65 0 0 39-41 60-96 0 0 20-55 20-119 0 0 0-79-27-144 0 0-28-65-76-112 0 0-49-46-115-72 0 0-67-24-146-24z"
        id="prefix__f0_14"
        transform="scale(.001 -.001)"
      />
      <path
        d="M413 132s38 0 68 14c0 0 31 14 52 44 0 0 21 30 33 77 0 0 11 48 11 115 0 0 0 60-9 102 0 0-10 42-28 69 0 0-19 27-46 39 0 0-27 13-62 13 0 0-48 0-83-21 0 0-35-22-67-62V195s28-35 61-49c0 0 33-14 70-14zm49-142s-35 0-62 7c0 0-27 5-50 18 0 0-23 12-42 29 0 0-19 18-37 40l-8-48s-4-20-15-28c0 0-12-8-29-8H93v1072h189V653s43 45 96 72c0 0 53 28 120 28 0 0 63 0 114-26 0 0 50-25 86-72 0 0 36-48 55-115 0 0 20-67 20-151 0 0 0-90-23-164 0 0-22-74-63-126 0 0-41-53-98-81 0 0-57-28-127-28z"
        id="prefix__f0_16"
        transform="scale(.001 -.001)"
      />
      <path
        d="M388 142s35 0 65 15c0 0 30 14 52 38 0 0 22 25 34 59 0 0 12 34 12 73 0 0 0 44-12 78 0 0-12 34-33 58 0 0-21 24-51 37 0 0-31 12-67 12 0 0-34 0-63-13 0 0-29-14-49-38 0 0-21-25-32-59 0 0-12-33-12-74 0 0 0-42 10-76 0 0 9-34 29-58 0 0 20-25 49-38 0 0 29-14 68-14zm4-152s-80 0-143 26c0 0-63 27-108 75 0 0-44 49-68 116 0 0-23 68-23 150 0 0 0 75 28 152 0 0 28 77 84 160l224 330s14 19 41 31c0 0 27 13 60 13h169L369 668l-29-38s26 12 54 18c0 0 28 6 61 6 0 0 53 0 104-19 0 0 52-20 92-58 0 0 41-39 65-98 0 0 25-59 25-137 0 0 0-73-26-138 0 0-25-64-71-111 0 0-46-48-110-76 0 0-64-27-142-27z"
        id="prefix__f0_17"
        transform="scale(.001 -.001)"
      />
      <path
        d="M131 0l364 744s12 24 26 45c0 0 13 21 30 40H102s-15 0-28 12c0 0-13 12-13 29v121h673v-77s0-34-7-56c0 0-8-22-15-36L357 61s-13-25-35-43c0 0-22-18-60-18z"
        id="prefix__f0_18"
        transform="scale(.001 -.001)"
      />
      <path
        d="M373 507s54 0 94 13c0 0 41 14 69 39 0 0 27 26 41 61 0 0 14 36 14 78 0 0 0 176-213 176H245V507zM110 0v980h268s90 0 155-19c0 0 65-19 107-54 0 0 43-36 63-86 0 0 20-50 20-113 0 0 0-52-15-96 0 0-16-45-44-81 0 0-29-36-71-61 0 0-42-26-95-40 0 0 13-8 24-18 0 0 11-10 22-24L807 0H686s-35 0-54 28L400 377s-11 16-24 23c0 0-13 7-40 7h-91V0z"
        id="prefix__f1_3"
        transform="scale(.001 -.001)"
      />
      <path
        d="M587 445s0 44-13 81c0 0-12 36-36 63 0 0-24 26-59 41 0 0-34 15-78 15 0 0-91 0-145-53 0 0-53-54-67-147zM406-9s-76 0-140 24c0 0-65 25-111 75 0 0-47 50-73 122 0 0-26 73-26 168 0 0 0 76 23 142 0 0 24 66 68 115 0 0 45 49 108 76 0 0 64 28 144 28 0 0 66 0 122-22 0 0 56-22 97-63 0 0 41-42 64-102 0 0 23-61 23-139 0 0 0-31-7-41 0 0-6-10-24-10H186s1-69 18-120c0 0 18-51 48-84 0 0 30-34 72-51 0 0 42-16 93-16 0 0 48 0 83 10 0 0 35 11 60 25 0 0 25 13 42 24 0 0 17 11 30 11 0 0 8 0 14-4 0 0 6-3 10-9l38-48s-25-29-58-50c0 0-33-21-71-35 0 0-38-14-79-20 0 0-41-6-80-6z"
        id="prefix__f1_4"
        transform="scale(.001 -.001)"
      />
      <path
        d="M131 0v620l-78 10s-16 1-25 9c0 0-10 9-10 23v54h113v95s0 119 53 181c0 0 54 61 151 61 0 0 17 0 31-1 0 0 14-2 26-6v-72s0-11-10-14c0 0-11-3-28-3 0 0-50 0-73-34 0 0-24-34-24-111v-96h434V0H559v621H262V0zm493 871s-18 0-35 8c0 0-16 7-28 20 0 0-13 12-20 29 0 0-8 16-8 35 0 0 0 19 8 36 0 0 7 17 20 30 0 0 12 12 28 20 0 0 17 7 35 7 0 0 19 0 36-7 0 0 17-8 30-20 0 0 13-13 20-30 0 0 8-17 8-36 0 0 0-19-8-35 0 0-7-17-20-29 0 0-13-13-30-20 0 0-17-8-36-8z"
        id="prefix__f1_5"
        transform="scale(.001 -.001)"
      />
      <path
        d="M104 0v730h79s14 0 23-7c0 0 9-6 10-20l12-78s47 52 105 84c0 0 58 32 134 32 0 0 60 0 105-20 0 0 45-20 76-56 0 0 30-36 46-87 0 0 15-51 15-113V0H578v465s0 81-37 127c0 0-37 45-112 45 0 0-56 0-104-26 0 0-49-27-89-74V0z"
        id="prefix__f1_9"
        transform="scale(.001 -.001)"
      />
      <path
        d="M404 92s53 0 92 18c0 0 40 18 66 53 0 0 27 35 40 86 0 0 13 51 13 116 0 0 0 65-13 115 0 0-13 51-40 86 0 0-26 35-66 54 0 0-39 19-92 19 0 0-54 0-94-19 0 0-40-19-66-54 0 0-27-35-40-86 0 0-13-50-13-115 0 0 0-65 13-116 0 0 13-51 40-86 0 0 26-35 66-53 0 0 40-18 94-18zm0-101s-80 0-145 25c0 0-64 27-109 75 0 0-46 49-70 119 0 0-24 69-24 156 0 0 0 85 24 155 0 0 24 69 70 118 0 0 45 49 109 75 0 0 65 27 145 27 0 0 79 0 144-27 0 0 64-26 108-75 0 0 45-49 69-118 0 0 25-70 25-155 0 0 0-87-25-156 0 0-24-70-69-119 0 0-44-48-108-75 0 0-65-25-144-25z"
        id="prefix__f1_a"
        transform="scale(.001 -.001)"
      />
      <path
        d="M336-10s-60 0-105 19c0 0-45 19-76 56 0 0-30 36-46 87 0 0-16 51-16 113v465h132V265s0-82 36-127c0 0 37-45 113-45 0 0 56 0 104 26 0 0 48 26 89 73v538h131V0h-79s-13 0-22 6c0 0-9 7-11 21l-12 77s-47-52-104-83c0 0-58-31-134-31z"
        id="prefix__f1_b"
        transform="scale(.001 -.001)"
      />
      <path
        d="M98 0v730h75s21 0 30-9c0 0 8-8 10-27l9-108s33 73 82 114c0 0 50 42 119 42 0 0 23 0 43-5 0 0 20-4 37-16l-11-97s-2-18-21-18c0 0-10 0-29 4 0 0-19 4-42 4 0 0-34 0-59-10 0 0-26-10-47-30 0 0-20-20-36-48 0 0-16-28-29-65V0z"
        id="prefix__f1_c"
        transform="scale(.001 -.001)"
      />
      <path
        d="M110 0v730h77s15 0 24-7c0 0 8-6 10-20l11-75s21 25 44 45c0 0 22 21 49 36 0 0 26 15 55 24 0 0 30 8 64 8 0 0 75 0 123-41 0 0 47-41 67-111 0 0 16 41 41 69 0 0 26 28 58 47 0 0 31 19 67 27 0 0 36 9 73 9 0 0 119 0 184-72 0 0 66-71 66-204V0H991v465s0 85-38 128c0 0-39 44-112 44 0 0-32 0-61-11 0 0-30-11-52-33 0 0-22-22-35-54 0 0-13-32-13-74V0H549v465s0 87-36 130c0 0-36 42-106 42 0 0-48 0-90-25 0 0-42-25-76-69V0z"
        id="prefix__f1_d"
        transform="scale(.001 -.001)"
      />
      <path
        d="M371 95s62 0 108 28c0 0 45 29 85 81v353s-35 47-76 66c0 0-41 19-91 19 0 0-99 0-153-73 0 0-54-72-54-206 0 0 0-71 13-122 0 0 12-51 35-83 0 0 23-33 57-48 0 0 33-15 76-15zM328-9s-62 0-112 23c0 0-50 24-86 71 0 0-36 47-55 117 0 0-20 70-20 161 0 0 0 80 21 150 0 0 22 70 62 120 0 0 40 51 98 80 0 0 58 29 131 29 0 0 66 0 113-22 0 0 47-22 84-63v404h131V0h-78s-14 0-23 6c0 0-9 7-11 21l-13 87s-46-56-105-90c0 0-59-33-137-33z"
        id="prefix__f1_e"
        transform="scale(.001 -.001)"
      />
      <path
        d="M110 0v1061h131V0z"
        id="prefix__f1_f"
        transform="scale(.001 -.001)"
      />
      <path
        d="M127 0v620l-74 10s-16 1-25 9c0 0-10 9-10 23v54h109v70s0 62 17 111c0 0 16 49 48 82 0 0 31 33 76 51 0 0 45 17 101 17 0 0 23 0 45-3 0 0 22-4 42-11l-4-65s-1-18-18-19c0 0-16-2-44-2 0 0-31 0-56-9 0 0-25-8-43-27 0 0-18-20-28-51 0 0-9-32-9-78v-66h196v-95H258V0z"
        id="prefix__f1_g"
        transform="scale(.001 -.001)"
      />
      <path
        d="M284-10s-72 0-131 23c0 0-60 25-101 65l31 49s6 10 14 15c0 0 8 5 21 5 0 0 13 0 27-10 0 0 13-10 32-22 0 0 19-13 46-23 0 0 27-10 67-10 0 0 35 0 59 10 0 0 25 9 42 25 0 0 16 17 25 38 0 0 8 22 8 46 0 0 0 30-16 49 0 0-15 20-39 34 0 0-25 14-57 24 0 0-32 11-65 22 0 0-33 12-65 26 0 0-31 15-56 38 0 0-25 22-40 55 0 0-15 33-15 80 0 0 0 42 16 81 0 0 17 38 48 67 0 0 31 29 78 47 0 0 46 17 106 17 0 0 67 0 123-23 0 0 55-22 94-62l-29-47s-9-17-27-17c0 0-12 0-25 9 0 0-13 8-31 17 0 0-18 9-43 18 0 0-25 8-59 8 0 0-30 0-53-8 0 0-23-9-39-23 0 0-17-14-26-33 0 0-9-19-9-41 0 0 0-28 15-47 0 0 15-18 40-32 0 0 25-13 56-24 0 0 32-11 65-22 0 0 33-11 64-26 0 0 32-15 57-37 0 0 24-21 39-52 0 0 15-31 15-75 0 0 0-51-17-94 0 0-17-43-50-74 0 0-34-31-83-49 0 0-48-17-112-17z"
        id="prefix__f1_h"
        transform="scale(.001 -.001)"
      />
      <path
        d="M357-9s-64 0-120 24c0 0-56 25-97 73 0 0-42 49-65 118 0 0-24 70-24 160 0 0 0 81 22 150 0 0 22 69 63 119 0 0 42 50 102 78 0 0 61 28 140 28 0 0 75 0 131-25 0 0 56-25 99-70l-34-48s-6-8-12-12c0 0-5-4-16-4 0 0-11 0-23 9 0 0-12 9-30 20 0 0-18 10-44 19 0 0-25 9-63 9 0 0-49 0-86-19 0 0-38-19-63-54 0 0-25-36-38-86 0 0-13-51-13-114 0 0 0-66 14-117 0 0 13-51 39-86 0 0 25-35 61-54 0 0 36-18 80-18 0 0 44 0 71 11 0 0 28 11 47 25 0 0 18 13 31 24 0 0 12 12 25 12 0 0 15 0 24-13l38-48s-24-29-53-50c0 0-29-21-62-35 0 0-34-14-70-20 0 0-36-6-74-6z"
        id="prefix__f1_i"
        transform="scale(.001 -.001)"
      />
      <path
        d="M110 0v730h131V0zm63 866s-19 0-35 8c0 0-16 7-29 19 0 0-12 13-19 29 0 0-8 17-8 36 0 0 0 19 8 36 0 0 7 17 19 29 0 0 13 13 29 21 0 0 16 7 35 7 0 0 19 0 35-7 0 0 17-8 30-21 0 0 13-12 21-29 0 0 7-17 7-36 0 0 0-19-7-36 0 0-8-16-21-29 0 0-13-12-29-19 0 0-17-8-36-8z"
        id="prefix__f1_j"
        transform="scale(.001 -.001)"
      />
      <path
        d="M307 81s32 0 60 6c0 0 28 7 52 19 0 0 25 13 47 31 0 0 22 18 44 41v150s-88-3-149-14c0 0-61-11-100-29 0 0-38-18-55-42 0 0-17-24-17-54 0 0 0-29 9-49 0 0 9-21 25-34 0 0 16-13 37-19 0 0 22-6 47-6zm-40-91s-42 0-79 10c0 0-37 12-65 36 0 0-28 24-44 61 0 0-16 36-16 85 0 0 0 43 23 83 0 0 24 40 77 71 0 0 53 32 138 52 0 0 85 19 209 22v56s0 85-37 128c0 0-36 43-105 43 0 0-46 0-78-12 0 0-32-12-55-26 0 0-23-14-40-26 0 0-17-12-34-12 0 0-13 0-23 7 0 0-10 6-16 17l-24 42s61 58 131 87c0 0 69 28 154 28 0 0 62 0 109-20 0 0 48-19 80-56 0 0 32-36 49-87 0 0 17-51 17-113V0h-58s-20 0-30 6c0 0-11 6-14 25l-17 67s-28-26-55-46c0 0-28-21-57-35 0 0-30-14-65-20 0 0-34-7-75-7z"
        id="prefix__f1_l"
        transform="scale(.001 -.001)"
      />
      <path
        d="M311-10s-84 0-130 47c0 0-45 49-45 139v445H52s-11 0-19 7c0 0-8 8-8 22v52l115 15 31 224s1 12 9 18c0 0 8 7 20 7h67V716h201v-95H267V185s0-45 21-67c0 0 20-23 53-23 0 0 19 0 33 6 0 0 14 5 24 12 0 0 9 6 16 12 0 0 7 5 13 5 0 0 7 0 11-3 0 0 4-3 8-10l39-63s-34-31-79-48c0 0-46-16-95-16z"
        id="prefix__f1_m"
        transform="scale(.001 -.001)"
      />
    </defs>
    <style>
      {
        '@font-face{font-family:Carlito_b;src:url(../static/Carlito_b.woff) format("woff")}@font-face{font-family:Carlito-Bold_g;src:url(../static/Carlito-Bold_g.woff) format("woff")}'
      }
    </style>
  </svg>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr className="my-2" />
                      <h1 className="display-5 text-center">Our evolving model of social connectedness</h1>
                      <p>
                        For the purposes of our research, social connectedness has been operationalized through any aspect of quality, such as intimacy, value, supportive function or closeness, of social relations with at least one specific peer or with peers in general.
                        <br/>
                        <br/>
                        Throughout the research process, we will refine our model of social connectedness in early adolescents in times of change. The model will provide an evidence-based, stakeholder-informed background for the development of the envisaged blended preventive intervention, including online and offline components. 
                        <br/>
                        <br/>
                        The initial model, based on literature reviews, will identify a broad spectrum of determinants of social connectedness in early adolescents, regardless of their position on continuum of needs. The literature-based model will be then iteratively refined based on the adult and early adolescent stakeholder consultation, and adjusted to fit their specific needs and the Austrian school context. 
                        <br/>
                        <br/>
                        ........
                        <br/>
                        More about the formation of our research group <a className="link_external" href="https://ois.lbg.ac.at/en/methods-projects/ideas-lab" target="_blank" >HERE</a>
                      </p>
                    </Col>
                  </Row>


                        <Modal isOpen={this.state.modalWP1} size="lg" toggle={this.toggleWP1} className={this.props.className}>
                            <ModalHeader toggle={this.toggleWP1}>
                                <strong>Phase 1:</strong>
                                <br/>
                                Explore what's out there
                            </ModalHeader>
                            <ModalBody>
                                <p>As a first step, we are conducting a series of systematic reviews to identify:</p>
                                <Table>
                                  <tbody>
                                    <tr>
                                      <td><strong>Determinants of social connectedness</strong>, and skills relevant to gaining and maintaining social connectedness, in children in the general population</td>
                                      <td className="align-middle"><i className="fas fa-check fa-lg text-success">done</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Determinants of social connectedness</strong>, and skills relevant to gaining and maintaining social connectedness, in children with mental health problems</td>
                                      <td className="align-middle"><i className="fas fa-check fa-lg text-success">done</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Existing evidence-based interventions</strong> that support social connectedness in children and adolescents from any background</td>
                                      <td className="align-middle"><i className="fas fa-check fa-lg text-success">done</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Existing evidence-based digital interventions</strong> that foster skills related to social connectedness, in particular metacognitive skills, emotion regulation, communication and general social skills</td>
                                      <td className="align-middle"><i className="fas fa-wrench fa-lg text-warning">ongoing...</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Existing intelligent systems</strong> that support the individualised guidance of support options to recipients</td>
                                      <td className="align-middle"><i className="fas fa-check fa-lg text-success">done</i></td>
                                    </tr>
                                  </tbody>
                                </Table>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.modalWP2} size="lg" toggle={this.toggleWP2} className={this.props.className}>
                            <ModalHeader toggle={this.toggleWP2}>
                                <strong>Phase 2:</strong>
                                <br/>
                                Consult with adults
                            </ModalHeader>
                            <ModalBody>
                                <p>This stage aims to ensure that the needs and concerns of adult stakeholders are accommodated throughout the project, and their knowledge and experience included. To achieve this, we are consulting with adult stakeholders on a regular basis, including:</p>
                                <Table>
                                  <tbody>
                                    <tr>
                                      <td><strong>Initial consultations:</strong> Interviews with parents from diverse backgrounds, teachers, other school professionals, health and social care professionals, and older adolescents from diverse backgrounds to
                                        <ol>
                                            <li>Understand, from their experience, the processes, resources and challenges of building and maintaining social connectedness at time of school transition; and</li>
                                            <li>understand and accommodate their concerns around using digital technologies to support social connectedness in adolescents at school transition</li>
                                        </ol>
                                      </td>
                                      <td className="align-middle"><i className="fas fa-check fa-lg text-success">done</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Co-development of research processes:</strong> Consultation with parents, teachers, young adults, network partners from NGOs who provide workshops in schools, and specialists in creative work with children from our network partners in citizen’s theatre and rhythmic and music therapy, drawing on personal experience and external knowledge in order to develop workshops to be conducted with children on the theme of school transition (see early adolescent stakeholder consultation) and guide our intervention development, data-gathering and interpretation. The wide involvement of adult stakeholders aims to ensure that our workshops are valuable, exciting and safe for children, as well as useful for our research purposes.</td>
                                      <td className="align-middle"><i className="fas fa-wrench fa-lg text-warning">ongoing...</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Drawing on international leading scientific expertise:</strong> The entire research process is being supported by an international group of researchers with diverse expertise.</td>
                                      <td className="align-middle"td><i className="fas fa-wrench fa-lg text-warning">ongoing...</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Drawing on first-hand knowledge of growing up under difficult circumstances:</strong> The entire research process is being supported by a group of adults with the experience of growing up with a parent with mental illness. This group (our “competence group”) meets on a monthly basis to make sure we adequately address the needs of children of parents with mental illness.</td>
                                      <td className="align-middle"><i className="fas fa-wrench fa-lg text-warning">ongoing...</i></td>
                                    </tr>
                                  </tbody>
                                </Table>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.modalWP3} size="lg" toggle={this.toggleWP3} className={this.props.className}>
                            <ModalHeader toggle={this.toggleWP3}>
                                <strong>Phase 3:</strong>
                                <br/>
                                Consult with kids
                            </ModalHeader>
                            <ModalBody>
                                <p>This process is central to our research. It aims to ensure that the needs and concerns of early adolescents are accommodated throughout the project, and their knowledge and experience included in everything we develop. This reflects our ambition to create a complex support offer truly tailored to recipients’ needs.</p>
                                <Table>
                                  <tbody>
                                    <tr>
                                      <td><strong>“Happy Zone” workshops</strong> on social wellbeing and the influence of digital media on social connectedness, developed via the adult stakeholder consultation process and conducted with entire classes, Grade 4 and 5 (aged 9/10 or 10/11). These workshops aim to understand the social world of our target group. The workshops use methods like storytelling and brainstorming with post-it notes to gather anonymous data on participants’ views on friendships and what helps and hinders them in a school context. A summary of the workshop manual can be found here.</td>
                                      <td className="align-middle"><i className="fas fa-wrench fa-lg text-warning">ongoing...</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Co-development workshops,</strong> developed via the adult stakeholder consultation process, will be conducted with groups of up to 12 interested children in Grades 4 to 6 (age 9 to 12). These repeated workshops will serve the co-development of all aspects of the complex support offer. The workshop manual will be available here soon.</td>
                                      <td className="align-middle"><i className="fas fa-wrench fa-lg text-warning">ongoing...</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>We invite adolescent champions,</strong> who are interested in more in-depth involvement in our research. This includes opportunities to learn about game development and course development as well as scientific work; it also offers young people a unique form of connection with their peers and the chance to advise us directly on development and data interpretation. If you are between 10 and 16 years of age and interested in becoming involved, please send us an email.</td>
                                      <td className="align-middle"><i className="fas fa-wrench fa-lg text-warning">ongoing...</i></td>
                                    </tr>
                                  </tbody>
                                </Table>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.modalWP4} size="lg" toggle={this.toggleWP4} className={this.props.className}>
                            <ModalHeader  toggle={this.toggleWP4} >
                                <strong>Phase 4:</strong>
                                <br/>
                                Develop the games
                            </ModalHeader>
                            <ModalBody>
                                <p>This phase aims to develop digital experiences that foster skills that facilitate social connectedness, and then to test their feasibility. The development work is based on previous work packages and especially on the early adolescent stakeholder consultation. </p>
                                <Table>
                                <tbody>
                                    <tr>
                                      <td><strong>Digital trainning experiences.</strong> The related skills, determinants and topics identified from the scientific literature and through the “Happy Zone” workshops in schools will guide the development of experiences, which, for example, foster emotion regulation, perspective-taking skills and in-class group connectedness. The digital experiences will be adapted and/or newly developed together with early adolescents through the workshops.</td>
                                      <td className="align-middle"><i className="fas fa-pencil-alt fa-lg text-info">in preparation...</i></td>
                                    </tr>
                                    <tr>
                                      <td><strong>Fun games.</strong> In addition, existing digital experiences and fun games can help increase engagement with the hub, while addressing additional challenges mapped during our consultations. These will be identified, assessed for eligibility and incorporated into the online hub. Together with our stakeholders and expert advisors, we will make sure that included content is in line with our aim of increasing social connectedness, and with our values of inclusiveness, mutual respect, and safety.</td>
                                      <td className="align-middle"><i className="fas fa-pencil-alt fa-lg text-info">in preparation...</i></td>
                                    </tr>
                                  </tbody>
                                </Table>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.modalWP5} size="lg" toggle={this.toggleWP5} className={this.props.className}>
                            <ModalHeader toggle={this.toggleWP5} >
                                <strong>Phase 5:</strong>
                                <br/>
                                Develop the online hub
                            </ModalHeader>
                            <ModalBody>
                                <p>This work package focuses on the integration of all aspects of the support hub. We envisage the hub to include not only digital experiences that help adolescents improve their social skills but also a safe, guided system for interacting with other young users, practicing learned social skills and so improving real-life social connectedness. The interaction component of the hub will use guided prompts to help adolescents communicate in a positive manner.</p>
                                <Table>
                                <tbody>
                                    <tr>
                                      <td>The communication component of the hub is being developed together with adult and adolescent stakeholders with a focus on appropriately matching people to complete the guided prompts together in order to create a positive learning experience. The emphasis will be on (1) safeguarding and (2) transferring learning from the digital environment to the real world. A key innovative focus of the project is the exploration of individualised support mechanisms to better direct individual users to digital experiences, and to match peers in a way that best increases their social connectedness.</td>
                                      <td className="align-middle"><i className="fas fa-pencil-alt fa-lg text-info">in preparation...</i></td>
                                    </tr>
                                </tbody>
                                </Table>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.modalWP6} size="lg" toggle={this.toggleWP6} className={this.props.className}>
                            <ModalHeader toggle={this.toggleWP6}>
                                <strong>Phase 6:</strong>
                                <br/>
                                Develop the classroom programme
                            </ModalHeader>
                            <ModalBody>
                              <Table>
                                <tbody>
                                    <tr>
                                      <td>A school/service-based programme will seek to raise adolescents’ knowledge of social connectedness and support associated skill development, in a manner consistent with successful positive youth development approaches. It will also pave the way for adolescents to engage with the integrated support hub. This blended approach of face-to face tutoring and online learning provides the framework for safe online interaction and for appropriate support to transfer learning into the real world. As with the entire DOT project, the Social Wellbeing Engagement Package (SWEP) will be co-developed, with comprehensive adult and adolescent stakeholder involvement.</td>
                                      <td className="align-middle"><i className="fas fa-pencil-alt fa-lg text-info">in preparation...</i></td>
                                    </tr>
                                </tbody>
                              </Table>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.modalWP7} size="lg" toggle={this.toggleWP7} className={this.props.className}>
                            <ModalHeader toggle={this.toggleWP7} >
                                <strong>Phase 7:</strong>
                                <br/>
                                Pilot and Evaluate
                            </ModalHeader>
                            <ModalBody>
                                <Table>
                                  <tbody>
                                      <tr>
                                        <td>The developed blended intervention will be evaluated as appropriate for a prototype intervention and as deemed appropriate by stakeholders, including teachers, parents, health and social care professionals and adolescents themselves.</td>
                                        <td className="align-middle"><i className="fas fa-pencil-alt fa-lg text-info">in preparation...</i></td>
                                      </tr>
                                  </tbody>
                                </Table>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.modalWP8} size="lg" toggle={this.toggleWP8} className={this.props.className}>
                            <ModalHeader  toggle={this.toggleWP8} >
                                <strong>Phase 8:</strong>
                                <br/>
                                Share our findings
                            </ModalHeader>
                            <ModalBody>
                              <Table>
                              <tbody>
                                <tr>
                                  <td>We aim to distribute our intermediate and final results to both lay and scientific communities. Sometimes we do lag behind a bit with publishing materials on our webpage. <strong>If you have specific questions, or are generally interested to learn more about the project, please contact us.</strong></td>
                                  <td className="align-middle"><i className="fas fa-pencil-alt fa-lg text-info">in preparation...</i></td>
                                </tr>
                             </tbody>
                             </Table>
                            </ModalBody>
                        </Modal>
                </Container>
                {/* <Container>
                    <h3 className="text-center">Glossary</h3>
                    <p>
                        <ul>
                            <li><strong>Project steering group: </strong>a group of neutral experts who will be invited to form the project steering group before initiation of the study and will act as outside governors/auditors. We will report to them regularly and they will be able to enforce action if they deem there to be ethical/scientific risk that needs to be managed.</li>
                            <br/>
                            <li><strong>Scientific advisory group: </strong>a group of researchers with related interests who will be engaged with the study throughout and who will provide ongoing advice.</li>
                            <br/>
                            <li><strong>Adult stakeholder advisory group: </strong>a group of adult stakeholders (parents with/without mental illness; educators; other school officials such as managers/governors; health/social care professionals; adult COPMI). They will be engaged with the study throughout and provide ongoing feedback that will allow us to tailor all project aspects to meet the needs of adult stakeholders.</li>
                            <br/>
                            <li><strong>Early adolescent stakeholder group: </strong>a group of adolescent stakeholders recruited from approximately 5 schools and 3 COPMI services after the initial adult stakeholder consultation and expert retreat.  The group will participate in school/extra-curricular activities that will allow us to tailor all project aspects to meet the needs of adolescent stakeholders.  These activities will also include those necessary for the co-development of the digital experiences and the hub.</li>
                            <br/>
                            <li><strong>Social Wellbeing Engagement Programme: </strong>the manualised package designed co-designed with stakeholders that will be delivered in schools/services teachers/social care professionals; psychoeducation on social wellbeing that includes invitation onto the hub; and potentially the opportunity to invest/tailor something in the hub that would give young people a stake in it and encourage them to engage with it.</li>
                            <br/>
                            <li><strong>Adult stakeholder/expert consultation: </strong>includes consultation on all aspects of the project from the scientific and scientific advisory groups; and includes the expert retreat.</li>
                            <br/>
                            <li><strong>Early adolescent stakeholder consultation: </strong>includes activities with the adolescent stakeholder group that will be delivered in schools/extra-curricular settings.  The adult consultation will include input into the final design of this consultation, notably the people from the Lower Austrian Education authority, who will be part of the adult stakeholder group.</li>
                            <br/>
                            <li><strong>Co-development with adolescents: </strong>includes the development of the digital experiences and the hub collaboratively with adolescents.  These adolescents will be part of the adolescent stakeholder group.</li>
                            <br/>
                            <li><strong>Social connectedness: </strong>For the purposes of our research, social connectedness has been operationalized through any aspect of quality, such as intimacy, value, supportive function or closeness, of social relations with at least one specific peer or with peers in general.</li>
                        </ul>
                    </p>
                </Container> */}
            </main>
        );
    }
}

export default translate("Workflow")(Workflow);