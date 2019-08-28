import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import profile from "../components/profile.module.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      yourname: "",
      youremail: "",
      yourmessage: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const value = e.target.value;
    const id = e.target.id;
    this.setState[id] = value
  }


  handleSubmit(e) {
    e.preventDefault();
    axios.get('http://localhost:6343/getdata', {
      "yourname": this.setState.yourname,
      "youremail": this.setState.youremail,
      "yourmessage": this.setState.yourmessage
    })
      .then(res => {
        const data = res
        if (data) {
          alert(`Message received, I'll get in touch ASAP :)`)
        } else {
          alert(`Message not sent, please try again :(`)
        }
      })
      .catch(error => {
        console.log(error);

      })
  }

  render() {
    return (
      <div className={profile.body}>
        <Container className={profile.container}>
          <Row className={profile.row}>
            <Col sm="5" className={profile.col0}>
              <p className={profile.title}>Odufade </p>
              <p className={profile.dot}></p>

              <p className={profile.picture}>
                
              </p>

              <p className={profile.links}> <a className={profile.a} href="https://github.com/IkkyOdufade"> <i size="7x" className="fa fa-github" aria-hidden="false"></i></a>

              </p>
            </Col>
            <Col sm="7" className={profile.col1}>

              <section className={profile.name}>
                Hi there! My name is
                        <br></br><span className={profile.span}>Bukola Odufade. </span> <br></br>


                <p className={profile.intro}> A software developer who is passionate <br></br>
                  about creating innovative applications <br></br>
                  that enhance human experience.
                    </p>
              </section>
              <section className={profile.projects}>
                Some projects I've had the opportunity to work on include
                     <p className={profile.sch}>Scheduly</p><br></br>
                <p className={profile.par1}>A meeting scheduling app using redux, <br>
                </br>React and MongoDB</p> <br></br>
                <p className={profile.sign}>
                  The Resistance
              </p><br></br>
                <p className={profile.par2}>A sign-up and log-in form using React and MongoDB. </p><br></br>
                <p className={profile.blog}>The Passage</p><br></br>
                <p className={profile.par3}>A blog app </p><br></br>
                <p className={profile.par4}>A tip calculator with vanilla Javascript.</p><br></br>
              </section>


            </Col>
          </Row>
          <Row className={profile.secrow}>
            <Col className={profile.contact}>
              <p className={profile.sectitle}>Contact Me</p>
              <Form onSubmit={this.handleSubmit} className={profile.form}>
                <FormGroup className={profile.your}>
                  <Label className={profile.yourl}>Your name</Label>
                  <Col className={profile.col} sm={7}>
                    <Input onChange={this.handleChange} className={profile.youri} type="text" name="name" id="yourname" />

                  </Col>
                </FormGroup>

                <FormGroup className={profile.email}>
                  <Label className={profile.emailLa} for="email" >Your email address</Label>
                  <Col className={profile.col} sm={7}>
                    <Input onChange={this.handleChange} className={profile.emaili} type="email" name="email" id="youremail" />

                  </Col>
                </FormGroup>

                <FormGroup className={profile.msg}>
                  <Label className={profile.msgl} sm={5} >Your messsage</Label>

                  <Col className={profile.col} sm={7}>
                    <Input onChange={this.handleChange} className={profile.msgi} type="textarea" name="text" id="yourmessage" />

                  </Col>
                </FormGroup>
                <Button className={profile.button}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}



