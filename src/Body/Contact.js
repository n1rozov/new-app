import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardPhoto from '../CardPhoto.jpg';
import './Contact.scss'

function ContantComponent() {
    return (
        <>
            <Link to="/contact/school" className="btn btn-secondary stretched-link">Gamma Intelligence</Link>
            <Card className="position-absolute top-50 start-50 translate-middle mt-1" style={{ width: '30rem' }}>
                <Card.Img variant="top" src={CardPhoto} />
                <Card.Body>
                    <Card.Title className="text-center">Nikita Rozov</Card.Title>
                    <Card.Text className="text-center">
                        I have passed front-end academy in Gamma Intelligence OÜ
                    </Card.Text>
                </Card.Body>
                <ListGroup className="text-center">
                    <ListGroup.Item>My Email: nrozov1805@gmail.com</ListGroup.Item>
                    <ListGroup.Item>My phone number: 56828562</ListGroup.Item>
                </ListGroup>
                <Card.Body className="text-center ">
                    <Card.Link href="https://github.com/n1rozov" className="btn btn-dark stretched-link">My github link</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
};

export default ContantComponent;