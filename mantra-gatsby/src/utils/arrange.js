// const fs = require('fs')

// function arrangeConcerts(year) {
// 	const { concerts } = JSON.parse(
// 		fs.readFileSync(`./data/calendar/${year}/${year}.json`, `utf8`)
// 	)

// 	concerts.forEach((concert, idx) => {
// 		fs.writeFileSync(
// 			`./data/calendar/${year}/concerts/${concerts.length - idx}.json`,
// 			JSON.stringify(concert),
// 			'utf8'
// 		)
// 	})
// }
