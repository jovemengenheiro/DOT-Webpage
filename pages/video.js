import React from 'react'
import { Container} from 'reactstrap';

class Video extends React.Component {

    render()
    {
        return (
            <main>
                <Container>
                    <br/>
                    <h1 className="display-3 text-center">Die Offene Tür</h1>
                    <hr className="my-2" />
                    <br/>
                    <div id="video" class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CQBdrBFXbuQ?autoplay=1" allowfullscreen=""></iframe>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Container>
            </main>
        );
    }
}

export default Video;