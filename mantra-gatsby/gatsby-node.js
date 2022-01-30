exports.sourceNodes = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `
		type Concert {
			date: Date
			location: Location
			program: [Piece]
		}

		type Piece {
			composer: String
			description: String
			title: String
		}

		type Location {
			city: String
			support: String
			venue: String
		}

		interface GroupSchedule {
			year: Date @dateformat
			concerts: [Concert]
		}

		type DataJsonMantra implements Node & GroupSchedule {
			year: Date @dateformat
			concerts: [Concert]
		}
		
		type DataJsonMantraYouth implements Node & GroupSchedule {
			year: Date @dateformat
			concerts: [Concert]
		}
		
		type DataJsonRecap implements Node & GroupSchedule {
			year: Date @dateformat
			concerts: [Concert]
		}
	`
	createTypes(typeDefs)
}
