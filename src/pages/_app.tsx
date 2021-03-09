import { AppContext, AppInitialProps, NextWebVitalsMetric } from 'next/app';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { SWRConfig } from 'swr';
import anylogger from 'anylogger';
import '../../styles/feidao.css';
import '../../styles/globals.css';
import '../../styles/iconfont.css';

const logger = anylogger('app');

export function reportWebVitals(metric: NextWebVitalsMetric) {
	logger.info(metric);
}

function App({ Component, pageProps }: AppInitialProps & AppContext) {
	return (
		<SWRConfig
			value={{
				// refreshInterval: 10000,
				async fetcher(url: string) {
					const res = await fetch(url);
					return res.json();
				},
			}}
		>
			<GeistProvider>
				<CssBaseline />
				<Component {...pageProps} />
			</GeistProvider>
			<style jsx global>{`
body{
background-color:#f4f4f4;
}
`}</style>
		</SWRConfig>
	);
}

export default App;
