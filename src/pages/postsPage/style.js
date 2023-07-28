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

export const Logout = styled.a`
	color: #4088cb;
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.125rem;
	font-weight: 600;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	padding: 32px;
`;

export const WritePost = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 12px;
`;

export const NewPost = styled.textarea`
	color: #6f6f6f;
	background-color: #ededed;
	border: none;
	border-radius: 12px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 1.125rem;
	font-weight: 400;
	height: 130px;
	line-height: normal;
	padding: 17px;
	resize: none;

	&:focus {
		outline: none;
		border: 1px solid #6f6f6f;
	}
`;

export const NewPostButton = styled.button`
	background: linear-gradient(90deg, var(--gradiente1), var(--gradiente2));
	color: #fff;
	border: none;
	border-radius: 12px;
	height: 50px;
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.125rem;
	font-weight: 700;
`;

export const Line = styled.hr`
	background: linear-gradient(90deg, var(--gradiente1), var(--gradiente2));
	border: none;
	height: 1px;
	margin: 32px 0 26px 0;
`

export const PostList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`
