import React from "react"

interface IDisplayListSearchProps {
	searchText: string
	onChange: (newSearchText: string) => void
}

export const DisplayListSearch: React.FC<IDisplayListSearchProps> = ({ searchText, onChange }) => {
	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.value)
	}

	return (
		<div>
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<span className="input-group-text" id="search-text">
						Search
					</span>
				</div>
				<input
					type="text"
					className="form-control"
					id="basic-url"
					aria-describedby="search-text"
					value={searchText}
					onChange={onInputChange}
				/>
			</div>
		</div>
	)
}

export default DisplayListSearch
