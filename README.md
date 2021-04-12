# Who Is Imposter

The project is an effort in the direction of coping with the very important issue of authenticity and security for the users.

We share a lot of data with the world and keeping the log of it is impossible, but who is imposter is here to help. It keeps log of all the data, breaches, shared information with various websites and if future there is data breach, you have the data set to find out the imposters among hundreds.

Additionallu, it is a Chrome Extension that helps you check the issues you might face on a site based on the cookies the site uses. We implemented a Fake News Detector for Twitter posts. This would blur out a tweet whose "fakeness-probability" is more than 0.9 or 90%. But would give you an option to deblur it in case you wish to see what these creepy imposters are up to, Haha! We also implemented a "Form/Input scraper" in order to scrape the labels of a Google form and judge the safety of it, however, a lot of it becomes pretty obvious! Like if some form is asking for your credit card details, our crawlers would cross-check it, etc. We also included a posting feature in the prototype in which people can come up and post their views on a site and others can decide if they wanna use it or how much do they wanna use it. This feature is a little glitchy for some reason but on it!

Your data can be categorised into 3 category:

-    Most secure data: Credit, Debit cards etc
-    Scamming purpose data: Mobile Number where you can get potential spam calls if you expose it to someone.
-    Normal Data: Your email adresses, etc. It keeps a minimal record of everydata you give to the websites and categorise those data as according.

## Build Setup

```bash
# install dependencies
npm install

# development run
npm run start

# build for production
npm run build
```

## Design

- Home : https://www.figma.com/file/QQgKJkUVNRV1Y0VGkH6RLt/who-is-imposter?node-id=0%3A1

## Project Structure

    .
    ├── build                   # Compiled files
    ├── src                     # Source files
    └── ...

## Src Structure

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── assets              # assets for the website
    |   ├── index.js            # starting point
    │   └── ...
    └── ...

## Contributions and PR
- PRs and contributions are welcome if you find any bug
- Feel free to create your own issues and work on existing issues and come up with PR

![imposter1](https://user-images.githubusercontent.com/64865136/114348619-6b1d4200-9b84-11eb-805b-7748f46027df.png)
![imposter0](https://user-images.githubusercontent.com/64865136/114349098-10d0b100-9b85-11eb-9be7-b4867f865d4d.jpg)
![imposter2](https://user-images.githubusercontent.com/64865136/114349100-1201de00-9b85-11eb-8788-a6b94b44fcb6.jpg)
![imposter3](https://user-images.githubusercontent.com/64865136/114349106-13330b00-9b85-11eb-9410-6bcae0649eb3.jpg)
