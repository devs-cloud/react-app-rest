import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, FormText, Input, Col, Row } from 'reactstrap';
import Button from 'components/Button'

import styles from './styles.module.scss'

const Login = () => {
    return (
      <div  className={styles['form-container']}>
        <Form>
          <div className={styles['form-header']}>
            <Label>Sign In</Label>
          </div>
          <div className={styles['form-content']}>
            <FormGroup>
              <Label>Username</Label>
              <Input></Input>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input></Input>
            </FormGroup>
            <FormGroup>
              <Button color="primary" size="lg">Continue</Button>
            </FormGroup>
          </div>
          <div>
            <FormGroup className={styles['form-buttons']}>
              <Row> <h1>Create an Account: </h1> </Row>
              <Link >
                <Button color="primary" size="lg">Real Estate Agent</Button>
              </Link>
              <Link>
                <Button color="primary" size="lg">Home Buyer or Seller</Button>
              </Link>
            </FormGroup>            
          </div>
          <div className={styles['form-footer']}>
            <Link>Forgot your password? Click here to start the reset flow.</Link>
          </div>

          {/* <Row>
            <Button></Button>
          </Row> */}

          {/* </FormGroup> */}
        </Form>
      </div>
    )
}

export default Login