import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getTeam } from '../api'

export const Team = ({ children }) => {
  const { teamId } = useParams()

  const [team, setTeam] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true)
      setTeam(await getTeam(teamId))
      setLoading(false)
    }
    fetchTeam()
  }, [teamId])

  if (loading) {
    return <div className="sidebar-instruction">loading...</div>
  }

  return (
    <div className="panel">
      {children(team)}
    </div>
  )
}
