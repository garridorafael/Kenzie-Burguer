import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span,
h1, h2, h3, h4, h5, h6, p,
a, img, ol, ul, li,
fieldset, form, label, legend, aside, 
figure, figcaption, footer, header, nav, section{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 16px;
	vertical-align: baseline;
    box-sizing: border-box;
    list-style: none;
    
}

:root {
	--color-color-primary: #27ae60;
    --color-primary-2: #93d7af;
	--color-color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-300: #828282;
    --color-grey-400: #BDBDBD;
    --color-grey-200: #f5f5f5;
	--color-grey-100: #e0e0e0;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-information: #155bcb;
}


body{
    background-color: white;
	font-family: 'Inter', sans-serif;
}

#root{
    height: 100%;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    background-color: white;
}

`;
export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
`;
