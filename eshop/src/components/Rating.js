import React from 'react'
import PropTypes from 'prop-types'
import {
  faStar,
  faStarHalf,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <i className="pr-1" style={{ color }}>
        <FontAwesomeIcon icon={faStar} />
      </i>
      {value}

      {/* {{ value } >= 1 ? (
        <FontAwesomeIcon icon={faStar} />
      ) : (
        <FontAwesomeIcon icon={faStarHalf} />
      )}
      <span>
        {{ value } >= 2 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : (
          <FontAwesomeIcon icon={faStarHalf} />
        )}
      </span>
      <span>
        {{ value } >= 3 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : (
          <FontAwesomeIcon icon={faStarHalf} />
        )}
      </span>
      <span>
        {{ value } >= 4 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : (
          <FontAwesomeIcon icon={faStarHalf} />
        )}
      </span>
      <span>
        {{ value } >= 5 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : (
          <FontAwesomeIcon icon={faStarHalf} />
        )}
      </span> */}
      <br></br>
      <span className="mt-1">{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  // value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
