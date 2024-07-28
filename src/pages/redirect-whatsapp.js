// pages/redirect.js
import { useEffect } from "react"
import { useRouter } from "next/router"

const RedirectPage = () => {
	const router = useRouter()

	useEffect(() => {
		// URL de redirection
		const redirectTo =
			"https://wa.me/?text=Hey%20Viens%20me%20rejoindre%20chez%20IZI%20gym%20pour%20une%20sceance%20decouverte.%20Clique%20ici%20:%20https://reservation.izigym.fr"
		// Effectuer la redirection
		router.push(redirectTo)
	}, [router])

	return (
		<div>
			<p>
				Redirection en cours... Si vous n'êtes pas redirigé
				automatiquement,{" "}
				<a href="https://wa.me/?text=Hey%20Viens%20me%20rejoindre%20chez%20IZI%20gym%20pour%20une%20sceance%20decouverte.%20Clique%20ici%20:%20https://reservation.izigym.fr">
					cliquez ici
				</a>
				.
			</p>
		</div>
	)
}

export default RedirectPage
