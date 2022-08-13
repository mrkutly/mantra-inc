import React from 'react'
import { graphql } from 'gatsby'

export const CALENDAR_QUERY = graphql`
	query {
		api {
			concerts(where: { group: { equals: "recap" } }) {
				dateFrom 
        dateTo 
        location {
          venue 
          city 
          support
        }
        program {
          title
          description
          composer
        }
			}
		}
	}
`

const Schedule = () => {
  return <div>schedule</div>
}

export default Schedule
