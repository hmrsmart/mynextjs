import Script from "next/script";

export default function OAuth() {
return(
  <>
  
      <Script strategy="lazyOnload" 
      async defer src={"https://apis.google.com/js/api.js"}
      onload="this.onload=function(){};initClient()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
        {`
var GoogleAuth; // Google Auth object.
 function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }
function initClient() {
  gapi.client.init({
      'clientId': '961417719029-9hllsbhmph2qou5mf8cjg2br8jeqe090.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}
initClient();
 `}
      </Script>

<Script
        strategy="lazyOnload"
        async defer src={"https://apis.google.com/js/api.js"}
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()"
      />

      </>
)
}