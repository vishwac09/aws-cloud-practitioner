import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import ccp from '../../../data/ccp.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Exam() {
  // Get the active certification selected by the user
  const activeCert = useSelector(state => state.certificate.active)
  let q = []
  if (activeCert.file.trim() !== "") {
    const questions = require('../../../data/' + activeCert.file);
    q = questions[0]
  }
  return (
    <Card className="mt-2">
      <Card.Title>{q.q}</Card.Title>
    </Card>
  );
}

export {Exam};
