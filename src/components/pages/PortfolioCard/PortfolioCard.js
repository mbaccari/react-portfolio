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
            <ul className="col-md-6">
              <li><h4>HTML & CSS</h4></li>
              <li><h4>JavaScript</h4></li>
              <li><h4>React.js</h4></li>
              <li><h4>MySQL</h4></li>
            </ul>
            <ul className="col-md-6">
              <li><h4>Node.js</h4></li>
              <li><h4>Express.js</h4></li>
              <li><h4>Graphql</h4></li>
              <li><h4>MongoDB</h4></li>
            </ul>
          </section>
          <hr className="t_border my-3"></hr>

        </div>

        <div className="container">
            <div className="mb-5 row">
            {dataportfolio.map((data, i) => {
                return (
                <div key={i} className="po_item col-md-6 col-sm-12">
                    <img src={data.img} alt="" />
                    <div className="content">
                    <p className='text-light' id="projectDesc">{data.description}</p>
                    <div className="container mt-5">
                        <a className="mx-2 text-light text-decoration-none" href={data.link} target='_blank'>View project</a>
                        <a className="mx-2 text-light text-decoration-none" href={data.github} target='_blank'>View code</a>
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