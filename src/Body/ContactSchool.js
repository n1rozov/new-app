
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import GammaLogo from '../GammaLogo.jpg';
import './ContactSchool.scss'


function ContantSchoolComponent() {
    return (
        <>
            <Card className="position-absolute top-50 start-50 translate-middle mt-2" style={{ width: '30rem' }}>
                <Card.Img variant="top" src={GammaLogo} />
                <Card.Body>
                    <Card.Title className="text-center">Gamma Intelligence OÜ</Card.Title>
                    <Card.Text className="text-center">
                        Gamma Intelligence OÜ on Eesti ettevõte, mis aitab kiiresti arendada välja uusi tooteid, kasutades lai valiku võimalikedest teholoogiatest (prototüüpeerimine, komponendide valik, tarkvara arendus, testimine, prototüüpi kiirvalmistamine). Samuti pakume IT-konsultatsiooni ja koolitusi
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flushc text-center ">
                    <ListGroup.Item>Email: info@gammatest.net</ListGroup.Item>
                    <ListGroup.Item>Address: 10145, Tornimäe 7-170, Tallinn, Estonia</ListGroup.Item>
                    <ListGroup.Item>Phone: +372 555 81 521</ListGroup.Item>
                </ListGroup>
                <Card.Body className="text-center ">
                    <Card.Link href="https://www.gammatest.net/index.php" className="btn btn-dark stretched-link">Link to the Gamma Int. OÜ</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
};

export default ContantSchoolComponent;