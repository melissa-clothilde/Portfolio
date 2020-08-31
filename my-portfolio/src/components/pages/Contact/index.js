import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {  Form, Container, Columns, Button } from 'react-bulma-components';
import Connect from "../../Connect/index";
import Foot from "../../Foot/index";

function Contact() {
  const { Input, Field, Control, Label, Textarea } = Form;
  return (
    <React.Fragment>
      <Container>
        <h1 className="page-title">Contact Me</h1>
      </Container>
      <Container className="fist-cont">
        <Columns>
          <Columns.Column size={10}>
            <div>
              <Field>
                <Label>Name</Label>
                <Control>
                  <Input placeholder="Enter your name" />
                </Control>
              </Field>

              <Field>
                <Label>Email</Label>
                <Control>
                  <Input color="danger" type="email" placeholder="Enter your email" value="" />
                </Control>
                {/* <Help color="danger">This email is invalid</Help> */}
              </Field>

              <Field>
                <Label>Subject</Label>
                <Control>
                  <Input placeholder="Enter a subject" />
                </Control>
              </Field>

              <Field>
                <Label>Message</Label>
                <Control>
                  <Textarea placeholder="Enter a message" />
                </Control>
              </Field>

              <Field kind="group">
                <Control>
                  <Button type="primary">Submit</Button>
                </Control>
                <Control>
                  <Button color="link">Cancel</Button>
                </Control>
              </Field>
            </div>
          </Columns.Column>
          <Connect />
        </Columns>
      </Container>
      <Foot />
    </React.Fragment>
  );
}

export default Contact;
