import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VTEXIcon extends Component {
  static propTypes = {
    colorFill: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }

  render() {
    const { colorFill, className } = this.props
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M22.2029951,2 L4.28456322,2 C2.89573023,2 2.00548,3.45312422 2.65431247,4.64375547 L4.44783693,7.95552421 L1.19680743,7.95552421 C0.296493196,7.95552421 -0.280470412,8.85287845 0.140086685,9.62472859 L5.90522357,20.1887392 C6.35336788,21.0110278 7.56744234,21.0045158 8.01748106,20.1831745 L9.58332217,17.3210893 L11.5485268,20.925543 C12.2398649,22.1940814 14.1130726,22.195147 14.8071339,20.9280294 L23.7877802,4.5463122 C24.4227598,3.38729378 23.5564264,2 22.2029951,2 M14.1533286,8.98098734 L10.2804619,16.0501827 C9.98102805,16.5965991 9.17318428,16.5957703 8.87505286,16.0487619 L5.03936375,9.00975856 C4.75958436,8.4962574 5.14355582,7.87820895 5.74242344,7.87820895 L13.4699233,7.87820895 C14.0535173,7.87820895 14.427188,8.48110219 14.1533286,8.98098734"
          className={`fill-${colorFill}`}
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    )
  }
}

export default VTEXIcon
