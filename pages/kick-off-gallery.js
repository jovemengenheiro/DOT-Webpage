import React from 'react'
import Link, {withPrefix} from 'gatsby-link'
import { Container, Row, Col} from 'reactstrap';
import { translate } from "react-i18next";
import Img from 'gatsby-image';
import Lightbox from 'react-images';

class KickOffGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          shareOpen: false,
          anchorEl: null,
          lightbox: false,
          //photos: props.data.allFile.edges.map(photo => Object.assign({ src: photo.\\\\\\\\\                                                                                                                                                                                                                                                                                                         })),
        };
    }

    gotoPrevLightboxImage() {
        const { photo } = this.state;
        this.setState({ photo: photo - 1 });
      }
    
      gotoNextLightboxImage() {
        const { photo } = this.state;
        this.setState({ photo: photo + 1 });
      }
    
      openLightbox(index, event) {
        event.preventDefault();
        this.setState({ lightbox: true, photo: index });
      }
    
      closeLightbox() {
        this.setState({ lightbox: false });
      }

    render()
    {
        const { t } = this.props;

        return (
            <main>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <br/>
                            <h1 className="display-3 text-center">{t("title")}</h1>
                            <hr className="my-2" />
                            <br/>
                            <div className="row justify-content-center" >
                                {this.props.data.allFile.edges.map(({node},index) => 
                                        <div key={index} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-center">
                                        <a href={withPrefix(node.relativePath)} >
                                            <Img key={index} resolutions={node.childImageSharp.resolutions}/>
                                        </a>
                                        </div>
                                )}
                                {/* <Lightbox
                                    backdropClosesModal
                                    images={this.props.data.allFile.edges.map(({node},index) => src: {withPrefix(node.relativePath)})}
                                    currentImage={this.state.photo}
                                    isOpen={this.state.lightbox}
                                    onClickPrev={() => this.gotoPrevLightboxImage()}
                                    onClickNext={() => this.gotoNextLightboxImage()}
                                    onClose={() => this.closeLightbox()}
                                /> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default translate("KickOffGallery")(KickOffGallery);

export const GalleryQuery = graphql`
  query GalleryQuery {
    allFile(filter:{relativeDirectory:{ regex: "/kick-off-gallery/" }}){
        edges {
            node {
              childImageSharp{
                resolutions(width:256 height:185) {
                    ...GatsbyImageSharpResolutions
                }
              }
              relativePath
              extension
            }
          }
      }
  }
`
