import React from 'react'
import PropTypes from 'prop-types'
import { Link, matchPath, useLocation } from 'react-router-dom'
import slug from 'slug'

import { Loading } from './Loading'

export const Sidebar = ({ title, list, loading, match }) => {
  const location = useLocation()

  return loading === true
    ? <Loading />
    : (
      <div>
        <h3 className="header">{title}</h3>
        <ul className="sidebar-list">
          {list.map(item => {
            const isExact = matchPath(`${match.url}/${slug(item)}`, { path: location.pathname, exact: true })
            return (
              <li key={item} style={{ listStyleType: 'none', fontWeight: isExact ? 'bold' : 'normal' }}>
                <Link to={{ pathname: `${match.url}/${slug(item)}`, search: location.search }}>
                  {item.toUpperCase()}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
