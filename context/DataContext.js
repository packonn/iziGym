import Cookies from "js-cookie"

const { createContext, useState, useEffect } = require("react")

export const DataContext = createContext()

const DataContextProvider = (props) => {
	const cookie = Cookies.get("dataOption")
		? JSON.parse(Cookies.get("dataOption"))
		: null
	const [dataInfosGeneral, setDataInfosGeneral] = useState(cookie)
	useEffect(() => {
		const getCategories = async () => {
			const options = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			}

			const results = await fetch("/api/get-general-infos", options)
			const response = await results.json()
			if (response.error) {
				console.log(response)
			} else {
				setDataInfosGeneral(response.generalInfos)
				Cookies.set("dataOption", JSON.stringify(response.generalInfos))
			}
		}
		if (!Cookies.get("dataOption")) {
			getCategories()
		}
	}, [])

	return (
		<DataContext.Provider value={{ dataInfosGeneral }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
