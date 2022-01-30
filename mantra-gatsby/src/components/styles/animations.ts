import { keyframes } from 'styled-components';

const makeColorAnimation = property => keyframes`
   0% {
     ${property} var(--lightpink);
   }
   10% {
      ${property}: var(--yellow);
   }
   20% {
      ${property}: var(--lightblue);
   }
   30% {
      ${property}: var(--green);
   }
   40% {
      ${property}: var(--peach);
   }
   50% {
      ${property}: var(--lightpink);
   }
   60% {
      ${property}: var(--yellow);
   }
   70% {
      ${property}: var(--lightblue);
   }
   80% {
      ${property}: var(--green);
   }
   90% {
      ${property}: var(--peach);
   }
   100% {
      ${property}: var(--lightpink);
   }
`;

export const colorChange = makeColorAnimation('color');

export const backgroundChange = makeColorAnimation('background');

export const borderColorChange = makeColorAnimation('border-color');

export const fadeIn = keyframes`
	from {
		opacity: 0.1;
		transform: perspective(60em) translateZ(-20px);
	}
	to {
		opacity: 1;
		transform: perspective(60em) translateZ(0px);
   }
`;
