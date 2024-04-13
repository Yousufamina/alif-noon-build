"use client"

import React from 'react'
import { Marker } from '@googlemaps/react-wrapper'

function MyMarker() {
  return (
    <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
  )
}

export default MyMarker