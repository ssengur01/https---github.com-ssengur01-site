import React from 'react'
import { Container, Row } from 'react-bootstrap';
import styles from './about.module.scss'

const About = () => {
    return (
      <div>
        <Container className={styles.Container}>
        <Row>
            <h1 className="py-3 text-center">About Us</h1>
        </Row>

        </Container>
      </div>
    );
}

export default About;
