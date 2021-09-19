const url = window.location.host === 'tesi.life' ? { url: 'https://tesi.life', keycloak: 'https://auth.tesi.life'} : {url: 'http://localhost:3000', keycloak: 'http://localhost:8080'};
export function redirectToLogin() {
  window.location.href =
    `${url.keycloak}/auth/realms/Tesi/protocol/openid-connect/auth?response_type=token&client_id=browser-login&redirect_uri=${url.url}&login=true&scope=openid&nonce=${Date.now()}`;  
}

export function redirectoToLogout() {
  window.localStorage.clear(); // Maybe we should only get rid of the neccessary items
  window.location.href =
  `${url.keycloak}/auth/realms/Tesi/protocol/openid-connect/logout?client_id=browser-login&redirect_uri=${url.url}`;
}

export function processUrlParams() {
  const urlParsedParams = {};
  window.location.hash.split('&')
    .forEach(param => {
      const parts = param.split('=');
      urlParsedParams[parts[0].replace('#', '')] = parts[1];
    });

  if (urlParsedParams.access_token) {
    window.localStorage.setItem('token_requested_at', String(Date.now()));

    Object.keys(urlParsedParams).forEach((urlParamKey) => {
      window.localStorage.setItem(urlParamKey, urlParsedParams[urlParamKey]);
    });
    
    return {
      isLoggedIn: true,
      accessToken: urlParsedParams.access_token,
      tokenRequestedAt: window.localStorage.getItem('token_requested_at'),
      tokenValidity: 900 * 1000,
      tokenType: urlParsedParams.token_type
    };
  } else {
    if (window.localStorage.getItem('access_token')) {
      const tokenRequestedAt = window.localStorage.getItem('token_requested_at');
      const tokenValidity = 900 * 1000;
      const now = Date.now();
      const objectOfParams = {
        isLoggedIn: (now - tokenRequestedAt) >= tokenValidity ? false : true,
        accessToken: window.localStorage.getItem('access_token'),
        tokenRequestedAt,
        tokenValidity,
        tokenType: window.localStorage.getItem('token_type'),
      }
      // Ha le van járva a token alapból átirányít
      /*
      if ((now - tokenRequestedAt) >= tokenValidity) {
      // Only needed in vanilla JS cuz this runs before the page is initialized, add this to created hook of production app.controller.ts
        setTimeout(() => {
          redirectToLogin();
        }, 100);
      }
      */
      console.log('volt access token');
      return objectOfParams;
    }
  }
  return 0;
}

