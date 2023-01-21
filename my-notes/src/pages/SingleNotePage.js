import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../assets/data'

const SingleNotePage = (props) => {
  console.log(`props: ${JSON.stringify(useParams())}`)
  return (
    <div>
      <p>{JSON.stringify(useParams())}</p>
    </div>
  )
}

export default SingleNotePage
