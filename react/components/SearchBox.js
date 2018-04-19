import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'

import SearchIcon from './icons/SearchIcon'
import AppShelf from '../AppShelf'

class SearchBox extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
  }

  state = {
    searchValue: '',
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchValue: value })
  }

  translate = id => this.props.intl.formatMessage({ id: `extensions.${id}` })

  render() {
    const { searchValue } = this.state
    return (
      <div className="w-100 pv8-ns">
        <div className="flex flex-row w-100 mb7-ns bg-white gray">
          <div className="flex items-center bb bw1 b--rebel-pink pa4">
            <SearchIcon colorFill="gray" />
          </div>
          <input
            className="pv4 pl2 w-100 f5 gray bw0 extensions-search outline-0"
            type="text"
            placeholder={this.translate('search')}
            value={searchValue}
            onChange={this.handleChange}
          />
        </div>
        <div
          className={`w-100 h-100 h5-l bg-white ${
            searchValue ? 'vh-100-s h-100-ns db' : 'dn'
          }`}
        >
          <AppShelf query={searchValue} />
        </div>
      </div>
    )
  }
}

export default injectIntl(SearchBox)
