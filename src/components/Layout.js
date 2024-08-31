import * as React from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent"
import Script from "next/script"
import { useState, useEffect } from "react"
import { mentionslegalesURL } from "../../helpers"

export default function Layout(props) {
const [options, setOptions] = useState(null)

const loadData = async () => {
	const response = await fetch("/api/options-page", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})

	const result = await response.json()
	setOptions(result.data)

}

useEffect(()=> {
	loadData()
}, [])	


	
	const children = props.children
	const [cookieIsAccepted, setCookieIsAccepted] = useState(false)

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<title>
					Izi gym - Salle de sport à Aigrefeuille d'Aunis 17290,
					proche de La Rochelle
				</title>
				<meta name="description" content="Description du site" />
				<meta property="og:image" content={"/logo/logo.webp"} />
				<meta
					name="og:title"
					content="Izi gym - Salle de sport à Aigrefeuille d'Aunis, 17290, proche de La Rochelle"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/logo/logo.webp" />
				<meta property="og:url" content="https://www.izigym.fr" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header>
				{cookieIsAccepted && (
					<>
						<Script
							src="https://www.googletagmanager.com/gtag/js?id=G-1HLKVW9ME2"
							strategy="afterInteractive"
						/>
						<Script
							id="google-analytics"
							strategy="afterInteractive"
						>
							{`
							
							  window.dataLayer = window.dataLayer || [];
							  function gtag(){dataLayer.push(arguments);}
							  gtag('js', new Date());
							
							  gtag('config', 'G-1HLKVW9ME2');
							
				`}
						</Script>
					</>
				)}

				<Header
					classCustom={props.classCustom}
					backgroundImageURL={props.backgroundImageURL}
					title1={props.title1}
					title2={props.title2}
					title3={props.title3}
					center={props.center}
					hours={props.hours}
					options={options}
				/>
			</header>

			<main>
				{children}

				{!getCookieConsentValue() && (
					<CookieConsent
						enableDeclineButton
						flipButtons
						location="bottom"
						onDecline={() => {
							setCookieIsAccepted(false)
						}}
						onAccept={(acceptedByScrolling) => {
							if (acceptedByScrolling) {
								// triggered if user scrolls past threshold
								setCookieIsAccepted(true)
							} else {
								setCookieIsAccepted(true)
							}
						}}
						buttonText="Accepter"
						declineButtonText="Refuser"
						style={{
							background: "#1C1C1E",
							alignItems: "center",
							fontSize: "13px",
							zIndex: "99999",
						}}
						buttonStyle={{
							background: "#D9712E",
							color: "white",
							fontSize: "15px",
							borderRadius: "5px",
						}}
						declineButtonStyle={{
							background: "#D9712E",
							color: "white",
							fontSize: "15px",
							borderRadius: "5px",
						}}
						expires={150}
						debug={true}
					>
						Nous utilisons des cookies pour vous offrir la meilleure
						expérience sur notre site. Vous pouvez en savoir plus
						sur les cookies que nous utilisons ou les désactiver.
						<a
							href={mentionslegalesURL}
							style={{ color: "#D9712E" }}
						>
							Politique de confidentialité
						</a>
					</CookieConsent>
				)}
			</main>

			<Footer contactBannerColor={props.contactBannerColor} />
		</>
	)
}
