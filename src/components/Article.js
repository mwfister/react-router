import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getArticle } from '../api'

export const Article = ({ children }) => {
  const [article, setArticle] = useState(null)
  const { articleId, teamId } = useParams()

  useEffect(() => {
    (async () => {
      const art = await getArticle(teamId, articleId)
      setArticle(art)
    })()
    return () => setArticle(null)
  }, [articleId, teamId])

  return (
    <>
      {children(article)}
    </>
  )
}
