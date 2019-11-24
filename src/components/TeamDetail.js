import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams, useRouteMatch } from 'react-router-dom'

import { Team } from './Team'
import { TeamLogo } from './TeamLogo'
import { getTeamsArticles, getTeamNames } from '../api'

export const TeamDetail = () => {
  const { teamId } = useParams()
  const match = useRouteMatch()

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [teamNames, setTeamNames] = useState([])

  useEffect(() => {
    (async () => {
      setLoading(true)
      const [allTeams, allArticles] = await Promise.all([
        getTeamNames(),
        getTeamsArticles(teamId)
      ])
      setArticles(allArticles)
      setTeamNames(allTeams)
      setLoading(false)
    })()
  }, [teamId])

  if (!loading && !teamNames.includes(teamId)) {
    return <Redirect to='/' />
  }

  return (
    <Team>
      {team => (
        <>
          <TeamLogo id={teamId} className="center" />
          <h1 className="medium-header">{team.name}</h1>
          <h4>
            <Link to={{ pathname: `/players/`, search:`?teamId=${team.id}` }} style={{ margin: '5px' }}>
              View Roster
            </Link>
          </h4>
          <h4>Championships</h4>
          <ul className="championships">
            {team.championships.map(champ => (
              <li key={champ}>
                {champ}
              </li>
            ))}
          </ul>
          <ul className="info-list row" style={{ width: '100%' }}>
            <li>Established<div>{team.established}</div></li>
            <li>Manager<div>{team.manager}</div></li>
            <li>Coach<div>{team.coach}</div></li>
            <li>Record<div>{team.wins}-{team.losses}</div></li>
          </ul>
          <h2 className="header">Articles</h2>
          <ul className="articles">
            {articles.map(({ date, id, title }) => (
              <li key={id}>
                <Link to={`${match.url}/articles/${id}`}>
                  <h4 className="article-title">{title}</h4>
                  <div className="article-date">{date.toLocaleDateString()}</div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Team>
  )
}
