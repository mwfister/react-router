import React, { useEffect, useState } from 'react'
import { Route, useLocation, useRouteMatch } from 'react-router-dom'
import { parse } from 'query-string'

import { getPlayers } from '../api'
import { Player } from './Player'
import { Sidebar } from './Sidebar'

export const Players = () => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const match = useRouteMatch()

  useEffect(() => {
    const teamId = location.search && parse(location.search).teamId
    const fetchPlayers = async teamId => {
      setLoading(true)
      const result = await getPlayers(teamId)
      setPlayers(result)
      setLoading(false)
    }
    fetchPlayers(teamId)
  }, [location.search])

  return (
    <section className="container two-column">
      <Sidebar list={players.map(player => player.name)} match={match} loading={loading} title="Players" />

      {loading === false && match.isExact
        ? <div className="sidebar-instruction">Select a Player</div>
        : null
      }

      <Route path={`${match.path}/:playerId`}>
        {loading ? null : <Player players={players} />}
      </Route>

    </section>
  )
}
