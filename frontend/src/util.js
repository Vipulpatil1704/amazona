import React from 'react'

export default function getError(error) {
  console.log(error);
  return (
    error.response && error.response.data.message ? error.response.data.message : error.message
  )
}
