export const prerender = false
export const POST = async ({ request } )  =>{

    try {
        const { recaptcha, firstname, lastname, email, contactNumber, website, companyName, additionalContent, webApp, mobileApp, websiteDev, automationAsAService } = await request.json();

        // if(recaptcha === undefined){
        //     return new Response(JSON.stringify({ error: 'Unable to authorize' }), { status: 401 });
        // }

        // const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';
        // const requestHeaders = {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // };

        // const requestBody = new URLSearchParams({
        //   secret: import.meta.env.RECAPTCHA_KEY,   // This can be an environment variable
        //   response: recaptcha          // The token passed in from the client
        // });

        // const response = await fetch(recaptchaURL, {
        //   method: "POST",
        //   headers: requestHeaders,
        //   body: requestBody.toString()
        // });


        const webhook = await fetch(import.meta.env.AUTOMATION_WEBHOOK,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstname,
                    lastname,
                    email,
                    contactNumber,
                    website,
                    companyName,
                    additionalContent,
                    webApp,
                    mobileApp,
                    websiteDev,
                    automationAsAService
            })
        })

        return new Response(JSON.stringify({message: 'success'}), { status: 200 });
    } catch (error) {
        console.error(error, 'error');
        return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 500 });
    }
  }