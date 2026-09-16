import "@/styles/globals.css"
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }) {

	const [loading, setLoading] = useState(false);
  
  
	useEffect(() => {
	  Router.events.on('routeChangeStart', (url) => {
		setLoading(true);
  
	  });
  
	  Router.events.on('routeChangeComplete', (url) => {
		setTimeout(() => {
		  setLoading(false);
		}, 800);
	  });
	}, []);
  
	return (
	  <>
		<Head>
		  <meta
			name="viewport"
			content="width=device-width, initial-scale=1"
		  />
		</Head>
		{loading && <Loader />}
		<Component {...pageProps} />
	  </>
  
	)
  }





