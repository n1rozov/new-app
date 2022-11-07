
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from './NewsModal';

function NewsCardComponent() {

    const [show, setShow] = useState(false);

    return (
        <>
            <Card onClick={() => setShow(true)}>
                <Card.Img variant="top" src={noImage} />
                <Card.Body>
                    <Card.Title>Aaron Carter Remembered By Nick Carter, The Backstreet Boys - Vulture</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Vulture</Card.Subtitle>
                    <Card.Text>
                        Nick Carter, The Backstreet Boys, Hilary Duff, Paris Hilton, New Kids on the Block, *NSYNC, and more celebrities have reacted to the death of singer and actor Aaron Carter.
                    </Card.Text>
                    <blockquote className="blockquote mb-0">
                        <footer className="blockquote-footer">
                            <cite title="Author">Jennifer Zhan</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">2022-11-07T14:25:00Z</small>
                </Card.Footer>
            </Card>
            <NewsModalComponent show={show} setShow={setShow} />

        </>
    );
}

export default NewsCardComponent;