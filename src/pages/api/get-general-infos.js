import apolloClient from "../../../apollo-client";
import {gql} from "@apollo/client";


async function getGeneralInfos(req, res) {
let generalInfos = null
console.log('request')

    try {
        const response = await apolloClient.query({
            query: gql ` { themeGeneralSettings {
                option {
                    address
                    discount
                    email
                    phone
                    hoursacces
                    facebookurl
                    hoursreception
                    instagramurl
                    urlDeReservatioDesCoursEnLigne
                    
                  }
              }


             
    
     


             
            }`,
           
        });

        generalInfos = await response.data.themeGeneralSettings.option
        res.send({"error": false, generalInfos: generalInfos});
    } catch (error) {
        console.log('error',error);
    }

}

export default getGeneralInfos