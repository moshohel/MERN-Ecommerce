import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <main>{this.props.children}</main>
        </Container>
        <Footer />
      </>
    )
  }
}

export default Layout
