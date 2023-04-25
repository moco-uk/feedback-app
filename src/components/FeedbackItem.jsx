import { FaTime } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTime color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.PropTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
