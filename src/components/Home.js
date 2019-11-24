import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { TeamLogo } from './TeamLogo'
import { getTeamNames } from '../api'

export const Home = () => {
  const [teamNames, setTeamNames] = useState([])

  useEffect(() => {
    const getTeams = async () => {
      const response = await getTeamNames()
      setTeamNames(response)
    }
    getTeams()
  }, [])

  return (
    <section className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <div className="text-center">
        <h2 className="header">Select a team</h2>
        {teamNames.map(teamName => (
          <Link key={teamName} to={teamName}>
            <TeamLogo id={teamName} width="150px" />
          </Link>
        ))}
      </div>
    </section>
  )
}
