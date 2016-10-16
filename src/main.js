import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Image, Jumbotron, FormControl, FormGroup, Button, Nav, NavItem } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class HeaderRow extends React.Component {
    render() {
        return (
            <Row className="header-row">
                <Col md={6} className="vertical-align header-row-img-left">
                    <Image src="./bin/img/01.png" alt="" />
                </Col>
                <Col md={6} className="vertical-align text-right">
                    <p className="header-row-text">SHELL PRIVATENERGIE</p>
                    <Image src="./bin/img/02.png" alt="" />
                </Col>
            </Row>
        )
    }
}

class SearchRow extends React.Component {
    render() {
        return (
            <Row className="search-row">
                <Col md={12}>
                    <p className="text-center search-row-p">Berechnen Sie Ihren individuellen Tarif:</p>
                </Col>
                <Col md={4} className="search-row-input vertical-align">
                    <FormControl type="text" placeholder="Ihre Postleitzahl" />
                </Col>
                <Col md={4} className="search-row-select vertical-align">
                    <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">Ihr Jahresverbrauch</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col md={4} className="search-row-col-button vertical-align">
                    <Button className="search-row-button">Jetzt Tarif berechnen</Button>
                </Col>
            </Row>
        )
    }
}

class DisclaimerRow extends React.Component {
    render() {
        return (
            <Row className="disclaimer-row">
                <Col md={12}>
                    <p className="text-center disclaimer-row-text">Shell PrivatEnergie (Strom-und Gasprodukte fur Privathaushalte) ist ein Angebot der First Utility GmbH. First Utility GmbH nutzt Shell Marken unter Lizenzvereinbarung.</p>
                </Col>
            </Row>
        )
    }
}

class FooterRow extends React.Component {
    render() {
        return (
            <Row className="footer-row">
                <Col md={12}>
                    <Nav bsStyle="pills">
                        <NavItem className="nav-item-footer">Uber uns</NavItem>
                        <NavItem className="nav-item-footer">Kontakt</NavItem>
                        <NavItem className="nav-item-footer">Energiemix</NavItem>
                        <NavItem className="nav-item-footer">AGB</NavItem>
                        <NavItem className="nav-item-footer">Datenschutz</NavItem>
                        <NavItem className="nav-item-footer">Impressum</NavItem>
                    </Nav>
                </Col>
            </Row>
        )
    }
}

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <HeaderRow />
                <Jumbotron />
                <SearchRow />
                <DisclaimerRow />
                <FooterRow />
            </div>
        )
    }
}

ReactDOM.render(<Container />, document.getElementsByTagName("BODY")[0]);