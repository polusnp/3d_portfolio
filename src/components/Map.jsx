import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps"

const Map = () => {
  return (
    // <div className="w-1/2 flex lg:w-full">
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [0, -40, 0],
        center: [10, 15],
        scale: 210,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#64748b"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[31, 50]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#38bdf8",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#38bdf8"
          fontSize="20"
          fontFamily="sans-serif"
          fontWeight="bold"
        >
          {"Ukraine"}
        </text>
      </Annotation>
    </ComposableMap>
    // </div>
  )
}

export default Map
