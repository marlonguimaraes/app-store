import React, { Component } from 'react'

class Footer extends Component {
  render() {
    const year = new Date().getFullYear()
    return (
      <footer
        id="extension-store-footer"
        className="static-s relative-ns z-3 w-100 bottom-0 pa7 flex items-center justify-center-s justify-start-ns bg-light-silver gray"
      >
        <span className="mh2">&copy; {year}</span>
        <span>VTEX App Store</span>
      </footer>
    )
  }
}

export default Footer
