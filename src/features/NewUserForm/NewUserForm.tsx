import React, { useState } from "react"
import TextField from "./TextField"
import { uid } from "utils"
import passwordStrength from "zxcvbn"

import styles from "./NewUserForm.module.css"

const PASSWORD_STRENGTH_VALUES = [ "Terrible", "Poor", "Weak", "Good", "Strong" ]

interface IExperienceItem {
	id: string
	text: string
}

export const NewUserForm: React.FC = () => {
	const [ name, setname ] = useState("")
	const [ email, setemail ] = useState("")
	const [ password, setpassword ] = useState("")
	const [ repeatPassword, setrepeatPassword ] = useState("")
	const [ newExperience, setnewExperience ] = useState("")
	const [ experiences, setexperiences ] = useState<IExperienceItem[]>([])
	const [ termsAccepted, settermsAccepted ] = useState(false)

	const onCheckboxChange = (setter: (newValue: boolean) => void) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setter(evt.target.checked)
	}

	const onExperienceKeyUp = (evt: React.KeyboardEvent) => {
		const target: HTMLInputElement = evt.target as any
		if (evt.key === "Enter") {
			const newExperiences = Array.from(experiences)
			newExperiences.push({
				id: `exp_${uid()}`,
				text: target.value
			})
			setexperiences(newExperiences)
			setnewExperience("")
		}
	}

	const nameValid = name.length > 0
	const emailValid = email.match(/[^\s]+@[^\s]+/gi)
	const passwordValid = password.length > 3 && password === repeatPassword
	const experienceValid = experiences.length > 0
	const formValid = nameValid && emailValid && passwordValid && experienceValid && termsAccepted
	const strength = passwordStrength(password)

	return (
		<div className={styles.newUserFormContainer}>
			<form className={styles.newUserForm}>
				<TextField value={name} onNewValue={setname} label="Name" />
				<TextField value={email} onNewValue={setemail} label="Email" />
				<TextField value={password} onNewValue={setpassword} label="Password" type="password" />
				<TextField value={repeatPassword} onNewValue={setrepeatPassword} label="Repeat password" type="password" />
				<TextField value={newExperience} onNewValue={setnewExperience} label="Experience" onKeyUp={onExperienceKeyUp} />
				<p>
					Password strengt: {PASSWORD_STRENGTH_VALUES[strength.score]} ({strength.crack_times_display.offline_fast_hashing_1e10_per_second})
				</p>
				<ul className="list-group">
					{experiences.map(({ id, text }) => (
						<li key={id} className="list-group-item">
							{text}
						</li>
					))}
				</ul>
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						id="termsAccepted"
						className="custom-control-input"
						checked={termsAccepted}
						onChange={onCheckboxChange(settermsAccepted)}
					/>
					<label className="custom-control-label" htmlFor="termsAccepted">
						Accept terms of use
					</label>
				</div>
				<div className={`btn-group ${styles.newUserControls}`}>
					<button type="submit" className={`btn btn-${formValid ? "primary" : "secondary"}`} disabled={!formValid}>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default NewUserForm
