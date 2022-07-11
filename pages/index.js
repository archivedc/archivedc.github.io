import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Strip, Row, Col, List, Button } from '@canonical/react-components'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="p-strip--suru">
        <div className="row u-vertically-cente">
          <Col size={8}>
            <h1>Archive your memories.</h1>
            <p><b>Archive Data Center Project</b> will save your online memries</p>
          </Col>
        </div>
      </div>
      <Strip bordered type="light">
        <h2>Our Projects</h2>
        <ul className="p-matrix">
          <li className="p-matrix__item">
            <div className="p-matrix__content">
              <h3 className="p-matrix__title"><a className="p-matrix__link" href="https://github.com/archivedc/single-page-archiver">Single Page Archiver</a></h3>
              <div className="p-matrix__desc">
                <p>Web site archive application. It can archive HTML, CSS, JS and Images.</p>
              </div>
            </div>
          </li>
          <li className="p-matrix__item">
            <div className="p-matrix__content">
              <h3 className="p-matrix__title">Person Archives (Temporary Closed)</h3>
              <div className="p-matrix__desc">
                <p>Archive talent links and informations to find.</p>
              </div>
            </div>
          </li>
          <li className="p-matrix__item">
            <div className="p-matrix__content">
              <h3 className="p-matrix__title"><a className="p-matrix__link" href="https://github.com/archivedc/HistoryPageGenerator">History Page Generator</a></h3>
              <div className="p-matrix__desc">
                <p>Make person or project timeline style history page easier.</p>
              </div>
            </div>
          </li>
        </ul>
      </Strip>
      <Strip type="light">
        <Row>
          <Col size={6}>
            <h2>Our Storages</h2>
            <p>We have trustable data store in several locations.</p>
          </Col>
          <Col size={6}>
            <List items={[
              "5+ data center active",
              "Across 2+ countries",
              "More than 2 backups activated"]} ticked />
          </Col>
        </Row>
      </Strip>
      <Footer />
    </div>
  )
}
