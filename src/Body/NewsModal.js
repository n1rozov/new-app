import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import noImage from '../dummy-post-horisontal.jpg';
import Modal from 'react-bootstrap/Modal';


function NewsModalComponent(props, {article}) {

    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal size="lg" show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt=""
                            src={article.urltoImgage || noImage}
                        />
                        <Figure.Caption>
                        {article.url}
                        </Figure.Caption>
                    </Figure>
                    {article.content}
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

