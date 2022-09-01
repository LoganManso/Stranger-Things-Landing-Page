
import { subscribeToHellfireClub } from "./Firebase/hellfire-club.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById ('txtEmail')
const txtLevel = document.getElementById ('txtLevel')
const txtCharacter = document.getElementById ('txtCharacter')

const btnSubscribe = document.getElementById ('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
	const subscription = {
		nome:  txtName.value,
		email: txtEmail.value,
		level: txtLevel.value,
		character: txtCharacter.value
	}

	const subscriptionId = await subscribeToHellfireClub(subscription)
  console.log('Inscrito com sucesso: ${subscriptionId}')
})