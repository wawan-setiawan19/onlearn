import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = ({ variantValue, classValue, btnvalue, linkValue }) => {
  return (
    <Button as={Link} to={linkValue} variant={variantValue} className={classValue}>{btnvalue}</Button>
  )
}

export default CTA