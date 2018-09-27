import { JssProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import React from 'react';

require('dotenv').config();

import getPageContext from './src/getPageContext';
import createStore from './src/state/store';
import theme from './src/styles/theme';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const pageContext = getPageContext();
    const store = createStore();

    replaceBodyHTMLString(
        renderToString(
            <Provider store={store}>
                <JssProvider registry={pageContext.sheetsRegistry} generateClassName={pageContext.generateClassName}>
                    {React.cloneElement(bodyComponent, {
                        pageContext
                    })}
                </JssProvider>
            </Provider>
        )
    );

    setHeadComponents([
        <style
            type="text/css"
            id="server-side-jss"
            key="server-side-jss"
            dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
    ]);
};

exports.onRenderBody = ({ setHeadComponents }) => {
    return setHeadComponents([]);
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
    return setPostBodyComponents([
        <script
            key={`webfontsloader-setup`}
            dangerouslySetInnerHTML={{
                __html: `
        WebFontConfig = {
          google: {
            families: ["${theme.base.fonts.styledFamily}:${theme.base.fonts.styledFonts}"]
          }
        };

        (function(d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
		})(document);

		(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
			h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
			(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
			})(window,document.documentElement,'async-hide','dataLayer',4000,
			{'GTM-5RH6MX9':true});

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r; i[r]=i[r]||function(){
				(i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-55915436-1', 'auto');
			ga('require', 'GTM-5RH6MX9');
			ga('send', 'pageview');`
            }}
        />
    ]);
};
