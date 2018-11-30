import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { translate } from "react-i18next";


class DotCarousel extends Component {
  constructor(props) {
    super(props);
    this.items = props.items;
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const {t} = this.props;

    const mappingf = (item) => {
      return (
        
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.id}>
            <div className="image-cropper">
              {/* <img className="image-centered" src={item.src} alt={t(item.altText)} /> */}
              <div className="d-block d-sm-none">  
                <img className="image-centered img-fluid" src={item.srcMobile} alt={t(item.altText)} />    
              </div>
              <div className="d-none d-sm-block">
                <img className="image-centered img-fluid" src={item.src} alt={t(item.altText)} />
              </div>
              <CarouselCaption className="d-block" captionText={t(item.altText)} captionHeader={t(item.caption)} />
            </div>
        </CarouselItem>
      );
    };

    return (
        <Carousel
        
          ride='carousel'
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators  items={this.items.map(mappingf)} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {this.items.map(mappingf)}
          <CarouselControl className="text-dark" direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
    );
  }
}

export default translate("Index")(DotCarousel);