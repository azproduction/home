import {Fragment, PropsWithChildren, useEffect} from 'react';
import {Footer} from './Footer';
import {Header} from './Header';
import {PreLoader} from './PreLoader';
import {parallax} from '../parallax';

export const Layout = ({children, extraWrapClass}: PropsWithChildren<{extraWrapClass?: string}>) => {
    useEffect(() => {
        parallax();
    }, []);

    return (
        <Fragment>
            <div className='container-page '>
                <PreLoader />
                <Header />
                <div className={`wrapper ${extraWrapClass ?? ''}`}>{children}</div>
                <Footer />
            </div>
        </Fragment>
    );
};
