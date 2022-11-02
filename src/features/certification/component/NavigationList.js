import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from 'react-redux'

import {setActive} from '../reducer/Reducer'
// get the json raw data
import certifications from '../../../data/certifications.json';

function CertificationList() {
  // Get the state of the active certification if any selected by the user
  const activeCertificate = useSelector(state => state.certificate.active)
  // Initialize the dispatch method
  const dispatch = useDispatch()
  // Active Navigation
  let activeNav = activeCertificate.href ? activeCertificate.href : ''
  // No certification is selected by the user, set the default one
  if (activeNav === '') {
    const defaultCertKey = process.env.REACT_APP_DEFAULT_CERT ? process.env.REACT_APP_DEFAULT_CERT : 'certified_cloud_practitioner';
    dispatch(setActive(certifications[defaultCertKey]))
    activeNav = defaultCertKey;
  }

  // Method which sets the active certification
  const setSelectedCertification = (selectedByUser) => {
    dispatch(setActive(certifications[selectedByUser]));
  }

  return (
    <div className="pt-2 pb-2">
      <Nav variant="pills" activeKey={activeNav}>
        <div>
          <p className="small text-muted">
            Please select a certification from below to start the practice exam.
          </p>
        </div>
        {
          Object.keys(certifications).map(index => {
            if (certifications[index].active) {
              return (
                <Nav.Item
                  key={index}
                  className="text-center w-100"
                  onClick={(e) => setSelectedCertification(index)}
                >
                  <Nav.Link href={certifications[index].href}>
                    <span>
                      {certifications[index].title}
                    </span>
                  </Nav.Link>
                </Nav.Item>
              );
            } else {
              return (<React.Fragment key={index}></React.Fragment>);
            }
          })
        }
      </Nav>
    </div>
  );
}

export {CertificationList};
