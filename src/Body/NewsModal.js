import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import noImage from '../dummy-post-horisontal.jpg';
import Modal from 'react-bootstrap/Modal';


function NewsModalComponent({ setShow, show, article}) {

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt=""
                            src={article.urlToImgage || noImage}
                        />
                        <Figure.Caption>
                        {article.url}
                        </Figure.Caption>
                    </Figure>
                    <p>{article.content}</p>
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

