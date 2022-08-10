import React from "react";
import "./PortfolioCard.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../../data/content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header d-flex justify-content-center flex-column">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 justify-content-center text-center">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="w-100 container">
          <h1 className="">Proficiencies</h1>
          <hr className="t_border my-3"></hr>
          <section className="row">
            <ul className="col-6 col-xs-12 text-center">
              <li><h4>HTML & CSS</h4></li>
              <li><h4>JavaScript</h4></li>
              <li><h4>React.js</h4></li>
              <li><h4>MySQL</h4></li>
            </ul>
            <ul className="col-6 col-xs-12 text-center">
              <li><h4>Node.js</h4></li>
              <li><h4>Express.js</h4></li>
              <li><h4>Graphql</h4></li>
              <li><h4>MongoDB</h4></li>
            </ul>
          </section>
          <hr className="t_border my-3"></hr>

        </div>

        <div className="container w-100">
            <div className="mb-5 row w-100">
            {dataportfolio.map((data, i) => {
                return (
                    <div key={i} className="card col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-auto bg-transparent border-0 text-center p-5" >
                      <img src={data.img} className="card-img-top" alt="..." />
                      <div className="card-body bg-dark">
                        <h5 className="card-title">{data.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data.sub}</h6>
                        <p className="card-text">{data.description}</p>
                        <h4>Built with:</h4>
                        <div className="container">
                        
                          <div className="row">
                            {data.technologies.map((e, i) => {
                              return(
                                <p key={i} className='col-6 fs-6'><em>{e}</em></p>
                              )
                            })}
                          </div>
                        </div>
                        
                          

                        <div className="text-center pb-0 mb-0">
                          { data.link ? <a href={data.link} className="btn mr-2"><i className="fas fa-link" /> Visit Site</a> : ''}
                          { data.github ? <a href={data.github} className="btn mr-2"><i className="fas fa-link" /> Github</a> : ''}
                        </div>
                      </div>
                    </div>
                );
            })}
            </div>
        </div>


      </Container>
    </HelmetProvider>
  );
};
