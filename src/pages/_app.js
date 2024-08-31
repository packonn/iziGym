import "@/styles/globals.css"
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
		{loading && <Loader />}
		<Component {...pageProps} />
	  </>
  
	)
  }





