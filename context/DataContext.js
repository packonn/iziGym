const { createContext, useState, useEffect } = require("react")

export const DataContext = createContext()

const DataContextProvider = (props) => {
	const [dataInfosGeneral, setDataInfosGeneral] = useState(null)
	
	useEffect(() => {
		console.log('useEffect context')
        const getCategories = async () => {
            const options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
            };

            const results = await fetch(
                "/api/get-general-infos",
                options
            );
            const response = await results.json();
			setDataInfosGeneral(response.generalInfos)
         
        };
        getCategories();
    }, []);

	return (
		<DataContext.Provider value={{ dataInfosGeneral }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
