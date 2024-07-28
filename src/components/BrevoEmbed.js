// components/BrevoEmbed.js
import { useEffect } from "react"

const BrevoEmbed = () => {
	useEffect(() => {
		// Ajoute les styles et le script une seule fois lorsque le composant est monté
		const link = document.createElement("link")
		link.href = "https://meetings.brevo.com/assets/styles/popup.css"
		link.rel = "stylesheet"
		document.head.appendChild(link)

		const script = document.createElement("script")
		script.src = "https://meetings.brevo.com/assets/libs/popup.min.js"
		script.type = "text/javascript"
		document.body.appendChild(script)

		// Nettoyer après le démontage du composant
		return () => {
			document.head.removeChild(link)
			document.body.removeChild(script)
		}
	}, [])

	const handleClick = (event) => {
		event.preventDefault()
		if (window.BrevoBookingPage) {
			window.BrevoBookingPage.initStaticButton({
				url: "https://meet.brevo.com/amandine-test/borderless",
			})
		}
	}

	return (
		// <a
		// 	href=""
		// 	onClick={handleClick}
		// 	style={{
		// 		cursor: "pointer",
		// 		fontFamily: "Inter",
		// 		fontWeight: 500,
		// 		backgroundColor: "#1B1B1B",
		// 		color: "white",
		// 		padding: "0.5rem 1rem",
		// 		border: 0,
		// 		boxShadow: "rgba(0, 0, 0, 0.15) 0px -2px 0px inset",
		// 		borderRadius: "16px",
		// 		textDecoration: "none",
		// 		display: "inline-block",
		// 	}}
		// >
		// 	Book Now
		// </a>
		<iframe
			frameBorder="0"
			width="100%"
			height="720"
			src="https://meet.brevo.com/amandine-test/borderless"
			style={{ border: "0", width: "100%", height: "720px" }}
			allowFullScreen
		></iframe>
	)
}

export default BrevoEmbed
