import styled from 'styled-components';

export const Header = styled.header`
	align-items: center;
	background-color: #ededed;
	display: flex;
	height: 50px;
	padding: 0 30px;
	justify-content: flex-end;
`;

export const Logo = styled.img`
	margin: 0 auto;
	width: 28px;
`;

export const Login = styled.a`
	color: #4088cb;
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.125rem;
	font-weight: 600;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 32px;
	height: calc(100% - 64px - 50px);
`;

export const Title = styled.h1`
	color: #373737;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 2rem;
	font-weight: 700;
	line-height: normal;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 65px;
`;

export const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	width: 100%;
`;

export const ContinueDiv = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 17px;
`

export const Text = styled.p`
	font-family: 'Noto Sans', sans-serif;
	font-size: 0.875rem;
	font-weight: 400;
	line-height: normal;
`

export const Span = styled.span`
	color: #4088CB;
	font-weight: 500;
`

export const SignUpButton = styled.button`
	background: linear-gradient(90deg, var(--gradiente1), var(--gradiente2));
	color: #fff;
	border: none;
	border-radius: 27px;
    height: 50px;
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.125rem;
	font-weight: 700;
`;

export const AgreeDiv = styled.div`
	column-gap: 11px;
	display: flex;
`

export const Error = styled.span`
	color: var(--gradiente1);
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.125rem;
	font-weight: 700;
	text-align: center;
`;
