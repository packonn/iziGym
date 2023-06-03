const { createContext, useState, useEffect } = require("react")

export const DataContext = createContext()

const DataContextProvider = (props) => {
	const [data, setData] = useState("les datas")
	useEffect(() => {}, [])

	return (
		<DataContext.Provider value={{ data }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
