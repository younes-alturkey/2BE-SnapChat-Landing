![](walkthrough.gif)
## Homepage
* The App's homepage is set to https://snap.bassamatexp.com
* The font-end should work successfully once the build is extracted to the PUBLIC_HTML of the server
## Back-end and Contact Form
* The Contact Form uses Express.js and Sendgrid Email API service
* The index.js located at ../src/server has to be launched and set to listen on port 4000 at URL https://snap.bassamatexp.com:4000/send-email so that the API calls are passed to SendGrid API servers
* I set the recipient email to be Abdulsalam <social@bassamatexp.com>
* Please, use your own SendGrid API key. It's 100 emails free a day forever.
## Deployment Recap
1. Extract Build.zip to PUBLIC_HTML
2. Run the Express.js Server send through email to get the Contact Form to work
3. Done
## Configured By
* by Younes Alturkey - https://github.com/younes-alturkey
