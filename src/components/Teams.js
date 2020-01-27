import React, { useEffect, useState } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import { Loading } from './Loading'
import { Sidebar } from './Sidebar'
import { Team } from './Team'
import { TeamLogo } from './TeamLogo'
import { getTeamNames } from '../api'

export const Teams = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const match = useRouteMatch()

  useEffect(() => {
    const getTeams = async () => {
      setLoading(true)
      setTeams(await getTeamNames())
      setLoading(false)
    }
    getTeams()
  }, [])

  return (
    <section className="container two-column">
      <Sidebar title="Teams" loading={loading} list={teams} />

      {loading === false && match.isExact
        ? <div className="sidebar-instruction">Select a team</div>
        : null
      }

      <Route path={`${match.url}/:teamId`}>
        <Team>
          {team => team === null
            ? <Loading />
            : (
              <div style={{ width: '100%' }}>
                <TeamLogo id={team.id} className="center" />
                <h1 className="medium-header">{team.name}</h1>
              <ul className="info-list row">
                <li>Established <div>{team.established}</div></li>
                <li>Manager <div>{team.manager}</div></li>
                <li>Coach <div>{team.coach}</div></li>
              </ul>
              <Link to={`/${team.id}`} className="center btn-main">
                {`${team.name} Team Page`}
              </Link>
            </div>
          )}
        </Team>
      </Route>
    </section>
  )
}
