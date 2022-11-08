# type-break-app ⌨️

I started developing a new version with React. 11/7/22

A writing app with some customization options, the themes are a bit like Visual Studio Code and the layout is a bit like [monkeytype](https://monkeytype.com/). You can change the theme, you can change the font and also the font size. If you don't like the colors you can change them to your liking, just go to the `src/index.js` file, there are some comments there so you can orient yourself, you just have to change values of an array [5]. <br/>
**\_If you have any idea, that you think can help this application, you can make me a pull request, I would be very grateful** 😃.

## Customize or add 🧱

- About index.js, The code is not very organized since it is not in modules, even so it is easy to understand in the first lines of code they are only variables, next comes the logic for the typing application, then they are only functions that are To customize the app, there are also comments, which explain what each function does.
- If you want to add many more texts to the application, you can modify the `/data/data.json` file, on the other hand in the `/src/index.js` file, look for the dataLength variable **(it is found in the async function of getText)**, and you initialize it with the number of texts you added.

## Technologies used in the project 🛠

- HTML
- CSS
- JavaScript
- Soon developed in React.
## Demo 💻

https://yerikah.github.io/type-break-app/
