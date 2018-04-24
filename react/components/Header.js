import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import Button from '@vtex/styleguide/lib/Button'

import Profile from './Profile'
import VTEXIcon from './icons/VTEXIcon'
import BackIcon from './icons/BackIcon'
import SearchBox from './SearchBox'

class Header extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    logged: PropTypes.bool,
  }

  state = {
    scroll: 0,
    shouldShowSearch: true,
    headerSize: 0,
    jumbontronSize: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.watchScrollUpMobile)
    this.watchScrollUpMobile()
    this.setState({
      headerSize: window.document.getElementById('extension-store-header')
        .offsetHeight,
      jumbontronSize:
        window.document.getElementById('jumbotron-home') &&
        window.document.getElementById('jumbotron-home').offsetHeight,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.watchScrollUpMobile)
  }

  watchScrollUpMobile = () => {
    const currentScroll = window.scrollY
    const { scroll } = this.state
    if (currentScroll < scroll) {
      this.setState({ shouldShowSearch: true, scroll: currentScroll })
    } else {
      this.setState({ shouldShowSearch: false, scroll: currentScroll })
    }
  }

  translate = id => this.props.intl.formatMessage({ id: `extensions.${id}` })

  handleBack = () => {
    window.history.back()
  }

  handleHome = () => {
    window.location.assign('/')
  }

  render() {
    const { logged } = this.props
    const { shouldShowSearch, scroll, headerSize, jumbontronSize } = this.state
    const notHome = window.location && window.location.pathname.length > 1
    const titleClasses = notHome ? 'dn db-ns' : 'db'
    return (
      <div className="fixed-ns w-100 z-2">
        <div
          id="extension-store-header"
          className="flex justify-between items-center w-100 top-0 ph4 ph7-ns pv4 pv5-ns bg-serious-black tc tl-ns white"
        >
          <div className="flex items-center">
            <VTEXIcon colorFill="white" className={titleClasses} />
            <BackIcon
              colorFill="white"
              className={`${notHome ? 'db dn-ns rotate-180' : 'dn'}`}
            />
            <div
              className={`pointer b f5-s f4-ns white tc tl-ns lh-solid ml3 ph3 b--white bl ${
                notHome ? 'ml0-s ph0-s bl-0-s ml3-ns ph3-ns bl-ns' : ''
              }`}
              onClick={this.handleHome}
            >
              <span className={titleClasses}>Extension Store</span>
            </div>
            <div
              className={`pointer b f4 white tc tl-ns lh-solid ml3 ph3 b--white bl ${
                notHome ? 'ml0-s ph0-s bl-0-s ml3-ns ph3-ns bl-ns' : ''
              }`}
              onClick={this.handleBack}
            >
              <span className={`${notHome ? 'db dn-ns' : 'dn'}`}>
                {this.translate('back')}
              </span>
            </div>
          </div>
          <div className="tr-ns flex items-center">
            {!logged ? (
              <Profile
                name="Bill Zoo"
                store="Redley"
                pictureUrl="https://hindizenblog.files.wordpress.com/2009/03/harshil-gudka-379676.jpg"
              />
            ) : (
              <div className="b--white bw1 ba br2">
                <Button onClick={this.handleModal}>
                  <span className="white">{this.translate('login')}</span>
                </Button>
              </div>
            )}
          </div>
        </div>
        {!notHome && (
          <div
            className={`db dn-ns ${
              scroll > headerSize
                ? `z-3 fixed w-100 ma0 bg-white ${
                  shouldShowSearch ? 'slideDownMobile' : 'slideUpMobile'
                }`
                : ''
            }`}
          >
            <SearchBox />
          </div>
        )}
        {!notHome && (
          <div
            className={`dn ${
              scroll > jumbontronSize
                ? 'db-ns z-3 ma0 w-100 ph9 fixed bg-white slideDown'
                : 'slideUp'
            }`}
          >
            <SearchBox />
          </div>
        )}
      </div>
    )
  }
}

export default injectIntl(Header)
