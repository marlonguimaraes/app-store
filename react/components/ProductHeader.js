import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape, FormattedNumber } from 'react-intl'
import withCulture from '../withCulture'

import GetButton from './GetButton'

class ProductHeader extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
    culture: PropTypes.shape({
      currency: PropTypes.string.isRequired,
    }).isRequired,
  }

  translate = id => this.props.intl.formatMessage({ id: `extensions.${id}` })

  render() {
    const {
      imageUrl,
      name,
      category,
      seller,
      price,
      culture: { currency },
    } = this.props
    return (
      <div className="flex flex-row mt5-s mt8-ns pb3-s pb6-ns mb6 mh4-s mh0-ns b--light-gray bb">
        <div className="tl-s tc-m tl-l mr4-s mr0-m mh0-m ml4-l mr6-l w-25-m w-10-l">
          <img className="image-size br2" src={imageUrl} alt={name} />
        </div>
        <div className="w-75 flex flex-column justify-center lh-copy">
          <div className="f3-s f2-ns b near-black">{name}</div>
          <div className="f6-s f5-ns dark-gray">
            {category || 'Sales'}{' '}
            <span className="f9 light-gray mb2">&#9679;</span>{' '}
            {this.translate('developedBy')} {seller}
          </div>
        </div>
        <div className="dn flex-ns flex-column-ns justify-center items-end w-20 lh-copy">
          <div className="w-80 f4 normal near-black tc mv2">
            <FormattedNumber
              value={price}
              style="currency"
              currency={currency}
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </div>
          <GetButton />
        </div>
      </div>
    )
  }
}

export default withCulture()(injectIntl(ProductHeader))
