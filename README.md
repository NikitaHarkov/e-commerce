# ComfySloth shop

It is an e-commerce application, create by using React.js (Hooks), and Stripe.js with deploying on Netlify created for education and learning purpose.

## Demo:

[ComfySloth](https://online-cumphy-shop.netlify.app/)

## How to run localy

- Clone on your local machine by using `https://github.com/NikitaHarkov/e-commerce.git`
- Navigate into the main directory
- Run `npm install` to install node modules
- To use such services as Auth0 and Stripe checkout you need to create your own accounts on those services and copy API keys to following variables in .env folder in root directory:

#### Auth0 Keys

```
REACT_APP_DOMAIN=
REACT_APP_CLIENT_ID=
```

#### Stripe keys

```
REACT_APP_STRIPE_PUBLIC_KEY=
REACT_APP_STRIPE_SECRET_KEY=
```

- Run `npm run dev` to run it locally then will open automatclly on your browser on `localhost:8888` port
- Run `npm run build` to create a production build

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

#### Dependecies for stripe checkout

```
npm install dotenv@8.2.0 stripe@8.130.0 @stripe/react-stripe-js@1.1.2 @stripe/stripe-js@1.11.0 netlify@6.0.12

```
