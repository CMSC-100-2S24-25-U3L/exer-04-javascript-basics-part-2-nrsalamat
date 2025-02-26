//Salamat, Nathaniel R.

//Import modules
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

function generateUniqueID(fName, lName) {
	let id;
	let uuid = uuidv4(); //Generate random string of alphanumeric characters

	uuid = uuid.slice(0, 8); //Slice randomly generated string to the first 8 characters

	id = fName[0].toLowerCase() + lName.toLowerCase() + uuid; //Create the ID by concatenating the first letter of the first name, the entire last name, and the randomly generated string

	return id;
} //generateUniqueID()



function addAccount(account) {
	const fName = account[0];
	const lName = account[1];
	const email = account[2];
	const age = account[3];

	//Validate if all 4 fields are present (array is of length 4 and no null fields), the first and last names are not empty, the email is valid, and the age is at least 18
	if (account.length == 4 && fName != null && lName != null && email != null && age != null && !validator.isEmpty(fName) && !validator.isEmpty(lName) && validator.isEmail(email) && age >= 18) {
		appendFileSync('users.txt', `${fName},${lName},${email},${age},${generateUniqueID(fName, lName)}\n`);
		
		return true;
	} else {
		return false;
	} //if-else
} //addAccount()



export default { generateUniqueID, addAccount };