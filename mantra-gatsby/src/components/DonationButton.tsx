import React from 'react'
import { Button } from './styles'

const DonationButton = () => (
	<form
		action="https://www.paypal.com/cgi-bin/webscr"
		method="post"
		target="_blank"
	>
		<input type="hidden" name="cmd" value="_s-xclick" />
		<input type="hidden" name="hosted_button_id" value="NMEN8M5VNN2U4" />
		<Button type="submit">Click here to donate and support new music!</Button>
	</form>
)

export default DonationButton
