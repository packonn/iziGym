import { gql } from "@apollo/client";
import apolloClient from "../../../apollo-client";

export default optionsPageRoute

async function optionsPageRoute(req, res) {
		const response = await apolloClient.query({
			query: gql`
				{
					themeGeneralSettings{
						option{
						discount
						}
					}
 			}
			`,
		})

		const data = await response?.data.themeGeneralSettings.option;
	
		res.status(200).json({ error: false, data: data }) //, pageInfo: data.products.pageInfo, found: data.products.found });

	
	

}
