# BKTV full screen aspect ratio fix
BKTV stretches the video stream on full screen view. If your monitor is not 16:9, this will result in a distorted image. People will appear wide and short.

This chrome extension fixes the issue, by forcing the width of the video to be 1.78 times that of its height. (If you have a 4:3 screen, I'm sorry, this is not your fix.)

## How to install

1. In Chrome, navigate to `chrome://extensions`  

2. Activate developer mode using the toggle on the top right.  
![devmode](./images/devmode.png)  

3. Click the "Load unpackaged"-button that just popped up and select `./extensionCode`-folder from this repo.

4. Extension is now enabled. Reload auth0 site if it does not work.  


-------
## Before and after
![before](./images/before.png "Before")  
-Before

![after](./images/after.png "After")  
-After
