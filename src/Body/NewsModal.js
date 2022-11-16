import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import noImage from '../dummy-post-horisontal.jpg';
import Modal from 'react-bootstrap/Modal';

function NewsModalComponent(props) {

    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal size="lg" show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt=""
                            src={noImage}
                        />
                        <Figure.Caption>
                        urlToImage: http://www.vulture.com/2022/11/aaron-carter-dead-reactions-tributes.html"
                        <br></br>
                        urlToArticle: "https://pyxis.nymag.com/v1/imgs/389/d12/e73b5ebde6bdd2a5481919651e5e34dbf1-aaron-nick-carter.1x.rsocial.w1200.jpg"
                        </Figure.Caption>
                    </Figure>
                    <p>Friends, fans, and former collaborators are paying tribute to singer and actor Aaron Carter after he died on Saturday at age 34. Known for hits like I Want Candy and Thats How I Beat Shaq, Aaron grew… [+5445 chars]</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewsModalComponent;
