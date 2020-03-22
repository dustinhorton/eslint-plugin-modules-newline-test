import classNames from 'classnames'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'

import Text from 'components/Text'
import formatDate from 'libs/format-date'

export default function DateTime({ className, data, ...props }) {
  const date = new Date(data)

  return (
    <Text
      {...props}
      element="time"
      dateTime={formatDate.timestamp(date)}
      className={classNames('DateTime', className)}>
      {format(date, 'y-MM-dd')}
    </Text>
  )
}

DateTime.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string.isRequired,
}