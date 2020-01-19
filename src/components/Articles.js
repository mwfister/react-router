import React, { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'

import { Article } from './Article'
import { Loading } from './Loading'
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
    ? <Loading />
      : (
      <div className="two-column container">
        <Sidebar loading={loading} title="Articles" list={articles} match={match} />

        <Route path={`${match.path}/:articleId`}>
          <Article teamId={teamId}>
            {article => !article ? <Loading /> : (
              <div className="panel">
                <article className="article" key={article.id}>
                  <h1 className="header">{article.title}</h1>
                  <p>{article.body}</p>
                </article>
              </div>
            )}
          </Article>
        </Route>
      </div>
    )
}
