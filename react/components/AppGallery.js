import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import productsQuery from '../queries/productsQuery.gql'

import Loading from './Loading'
import AppItem from './AppItem'

class AppGallery extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    homePage: PropTypes.bool,
    category: PropTypes.string,
    collection: PropTypes.string,
    specificationFilters: PropTypes.arrayOf(PropTypes.string),
    from: PropTypes.number,
    to: PropTypes.number,
  }

  render() {
    const { data, homePage } = this.props
    const { error, loading, products } = data
    return (
      <div className="w-100">
        {!error &&
          <div className="w-100">
            {loading ? (
              <div className="flex justify-center pt9 pb10">
                <Loading />
              </div>
            ) : (
              <div
                className={`flex flex-column-s flex-row-l flex-wrap-ns justify-center items-center ${
                  homePage ? 'relative card-top' : 'mv4'
                }`}
              >
                {products.map(product => (
                  <AppItem
                    key={product.productId}
                    name={product.productName}
                    imageUrl={product.items && product.items[0].images[0].imageUrl}
                    shortDescription={product.description}
                    category={product.categories[product.categories.length - 1]}
                    seller={product.brand}
                    appId={product.linkText}
                    specifications={product.jsonSpecifications}
                    isShelf={false}
                  />
                ))}
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}

const defaultOptions = {
  options: props => ({
    variables: {
      query: props.query,
      category: props.category,
      collection: props.collection,
      specificationFilters: props.specificationFilters || null,
      from: props.from || 0,
      to: props.to || 2,
    },
  }),
}

export default graphql(productsQuery, defaultOptions)(AppGallery)