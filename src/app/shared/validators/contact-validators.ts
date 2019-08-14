import { FormControl, FormGroup } from '@angular/forms';

export const myRequiredValidator = (control: FormControl) => {
	if (control.value == null || String(control.value).length === 0) {
		return {
			myRequired: true,
		};
	}
	return null;
};

const hasInput = (control: FormControl) => !(control.value == null || String(control.value).length === 0)

export const emailOrPhoneValidator = (group: FormGroup) => {

	const emailInput = group.get('email') as FormControl;
	const phoneInput = group.get('phone') as FormControl;

	if (hasInput(emailInput) || hasInput(phoneInput)) {
		return null;
	}

	return {
		emailOrPhone: true,
	};

};
