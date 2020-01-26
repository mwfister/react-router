import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import slug from 'slug'

export const Player = ({ players }) => {
  const { playerId } = useParams()

  const player = useMemo(() =>
    players.find(player => slug(player.name) === playerId), [players, playerId]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TransitionGroup className="panel">
      <CSSTransition classNames="fade" timeout={200} key={playerId}>
        <div className="panel">
          <img src={player.avatar} alt={player.name} className="avatar" />
          <h1 className="medium-header">{player.name}</h1>
          <h3 className="header">#{player.number}</h3>
          <div className="row">
            <ul className="info-list" style={{ marginRight: '80px' }}>
              <li>
                Team
                <div>
                  <Link style={{ color: '#68809a' }} to={`/${player.teamId}`}>
                    {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
                  </Link>
                </div>
              </li>
              <li>Position<div>{player.positon}</div></li>
              <li>PPG<div>{player.ppg}</div></li>
            </ul>
            <ul className="info-list">
              <li>APG<div>{player.apg}</div></li>
              <li>SPG<div>{player.spg}</div></li>
              <li>RPG<div>{player.rpg}</div></li>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}
