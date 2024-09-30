import { gql } from "@apollo/client";
import apolloClient from "../../../apollo-client";

export default async function optionsPageRoute(req, res) {
    try {
        // Effectuer la requête GraphQL
        const response = await apolloClient.query({
            query: gql`
                {
                    themeGeneralSettings {
                        option {
                            discount
                        }
                    }
                }
            `,
        });

        // Vérifier si la réponse contient des erreurs
        if (!response || !response.data || !response.data.themeGeneralSettings) {
            console.error("Erreur: Réponse inattendue de l'API GraphQL", response);
            return res.status(500).json({ error: true, message: "Erreur de l'API GraphQL" });
        }

        // Extraire les données
        const data = response.data.themeGeneralSettings.option;

        // Envoyer la réponse JSON avec les données récupérées
        res.status(200).json({ error: false, data: data });
    } catch (error) {
        // Gérer les erreurs et renvoyer une réponse avec le code d'erreur et un message d'erreur
        console.error("Erreur lors de la requête Apollo:", error);

        // Vérifier si l'erreur est liée à une réponse non JSON (souvent HTML)
        if (error.networkError && error.networkError.result) {
            return res.status(500).json({ error: true, message: "Erreur réseau", details: error.networkError.result });
        }

        // Renvoyer un message d'erreur générique
        res.status(500).json({ error: true, message: "Erreur interne du serveur", details: error.message });
    }
}
