import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux'

import {startExam, Exam} from '../../exam'

function Certification() {
  // Get the active certification set by the user
  const state = useSelector(state => state)
  const activeCert = state.certificate.active;
  const exam = state.exam;
  // Initialize the dispatch method
  const dispatch = useDispatch();
  // Method sets the exam status
  const setExamStatus = (status) => {
    dispatch(startExam(status));
  }

  return (
    <div className="m-3">
      <Card bg="light" text="dark" className="w-100">
        <Card.Header as="h5">{activeCert.title}</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12} sm={3} md={3}>
              <Card.Img style={{width: '100%'}} variant="top" src={"/images/" + activeCert.img} />
            </Col>
            <Col xs={12} sm={9} md={9}>
              <Card.Text>{activeCert.description.join(' ')}</Card.Text>
              <Card.Title as="h6">Useful Links:</Card.Title>
              {
                activeCert.links.map(link => {
                  return (
                    <Card.Text key={Math.random()}>
                      <Card.Link href={link}>{link}</Card.Link>
                    </Card.Text>
                  );
                })
              }
              <Button className="mb-1 mb-sm-1" onClick={e => setExamStatus(true)} variant="primary">
                Start Practice Exam
              </Button>{' '}
              <Button className="mb-1 mb-sm-1" onClick={e => setExamStatus(false)} variant="danger">
                End Exam
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="w-100">
        {exam.start === true ?
          <Exam /> : <React.Fragment />
        }
      </div>
    </div>
  );
}
  
export {Certification};
