import React, { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'

import { Sidebar } from './Sidebar'
import { getTeamsArticles } from '../api'

export const Articles = () => {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])

  const { teamId } = useParams()
  const match = useRouteMatch()

  useEffect(() => {
    (async () => {
      setLoading(true)
      const arts = await getTeamsArticles(teamId)
      const titles = arts.map(articles => articles.title)
      setArticles(titles)
      setLoading(false)
    })()
  }, [teamId])

  return loading
    ? <h1>LOADING</h1>
    : (
      <div className="two-column container">
        <Sidebar loading={loading} title="Articles" list={articles} match={match} />
      </div>
    )
}
