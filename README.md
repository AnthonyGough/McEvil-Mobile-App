# Music-House-mobile

# Zoe - Instructions for Mobile & Server

## Webserver - Express App
* Need to run it remotely - currently setup on one of my Webservers as a service
* My webserver is  configured to auto start the **Music House Express Server** so you need to start it using the following address
    - https://status.ifn666.com/start?name=136b96d7-dcf9-4d4f-a64d-dd6293e8232b
    - This starts your Music House application (Server/backend)
    - To make sure it is working can send in browser    `https://anthony05.ifn666.com/zoe/mhouse/` and you will get back -->    `{"message":"User hit the server"}`
    - When you start the server then `musichouse.sh` script is executed which starts the **Music House Server**
    - To query server using **Insomnia** use
        - A POST Request - `https://anthony05.ifn666.com/zoe/mhouse/api/auth/register`
        - Send a JSON object in body such as `{	"username":"anthony", "password":"McEvil" }
        - Should get back `{"message": "User registered successfully"}`
        - At some point you obviously need to deploy it on your own webserver but all the code is in the repository
    -Finally the Caddyfile - This is my Caddyfile on my server as your application is at `/home/ubuntu/zoe/mhouse`
        - This is the root directory so this is where `server.js` is located

                anthony05.ifn666.com {
                        handle /api/* {
                                reverse_proxy localhost:3000
                        }

                        handle /zoe/mhouse/* {
                                uri strip_prefix /zoe/mhouse
                                reverse_proxy localhost:5010
                        }
                }

## Mobile Application
* This is in the repository - you will need to look at 