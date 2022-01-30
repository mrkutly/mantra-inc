import { useEffect } from 'react';
import LazyLoad from 'vanilla-lazyload';

const config = {
	elements_selector: '.lazy-loaded',
};

declare const window: { _lazyLoad: typeof LazyLoad; };

const useLazyIframe = () => {
	useEffect(() => {
		window._lazyLoad = window._lazyLoad ?? new LazyLoad(config);
	}, []);

	useEffect(() => window._lazyLoad?.update(), []);
};

export default useLazyIframe;
