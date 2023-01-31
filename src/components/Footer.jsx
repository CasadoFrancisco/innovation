import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const FooterContainer = styled.div`
	grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
	align-items: center;
	display: grid;
	justify-content: center;
	padding: 8px;
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 11px;
`;
const LogoContainer = styled.div`
	display: flex;
	gap: 10px;
`;
const Logo = styled.img`
	height: 44.43px;
	width: 44.43px;
`;
const NameContainer = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Name = styled.span`
	font-family: Rubik;
	font-size: 16px;
	font-weight: 700;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: left;
`;
const Group = styled.span`
	font-family: Rubik;
	font-size: 13px;
	font-weight: 400;
	line-height: 16px;
	letter-spacing: 0em;
	text-align: left;
`;
const Detail = styled.p`
	font-family: Rubik;
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0.0025em;
	text-align: left;
`;
const SocialMedia = styled.div`
	display: flex;
	gap: 26px;
`;
const Button = styled.button`
	background-color: rgba(174, 174, 174, 1);
	border-radius: 22.2px;
	color: rgba(84, 84, 84, 1);
	font-size: 20px;
	height: 37.76px;
	transition: 0.5s ease-in-out;
	width: 60.26px;

	&:hover {
		background-color: rgba(84, 84, 84, 1);
		color: rgba(174, 174, 174, 1);
	}
`;
const Category = styled.div`
	width: 100%;
`;
const Title = styled.span`
	border-left: 6px solid transparent;
	border-image: linear-gradient(
			to bottom,
			rgba(226, 231, 15, 0.75) 0%,
			rgba(255, 6, 185, 0.51) 100%
		)
		1;
	font-family: Rubik;
	font-size: 24px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: 0.0025em;
	padding-left: 10px;
	text-align: left;
`;
const ListItem = styled.li`
	align-items: center;
	display: flex;
	gap: 10px;
	justify-content: flex-start;
	margin-bottom: 10px;
	font-family: Rubik;
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 0.0025em;
	transition: 0.5s ease-in-out;

	& i {
		font-size: 12px;
		color: #faff00;
	}

	&:hover {
		filter: opacity(0.7);
	}
`;
const Form = styled.form`
	align-items: center;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 25px;
	display: flex;
	height: 39px;
	justify-content: space-between;
	margin: 30px 0;
	padding: 0 8px;
	width: 208px;

	& input {
		outline: none;
		width: 147px;
	}

	& button {
		background-color: rgba(255, 230, 0, 1);
		border-radius: 50%;
		color: #c4c4c4;
		height: 33px;
		transition: 0.5s ease-in-out;
		width: 35px;
	}

	& button:hover {
		background-color: #c4c4c4;
		color: rgba(255, 230, 0, 1);
	}
`;

export const Footer = () => {
	const handlerForm = (e) => {
		e.preventDefault();
		alert('Email sent ✅');
	};

	return (
		<FooterContainer>
			<Info>
				<LogoContainer>
					<Logo src={logo} alt="logo" />
					<NameContainer>
						<Name>Flutterwave</Name>
						<Group>Phlox Group</Group>
					</NameContainer>
				</LogoContainer>
				<Detail>
					In a professional context it often happens that private or corporate
					clients a publication to be made and presented with the actual content
				</Detail>
				<SocialMedia>
					<Button>
						<i className="fa-brands fa-facebook-f"></i>
					</Button>
					<Button>
						<i className="fa-brands fa-twitter"></i>
					</Button>
					<Button>
						<i className="fa-brands fa-linkedin-in"></i>
					</Button>
					<Button>
						<i className="fa-brands fa-instagram"></i>
					</Button>
				</SocialMedia>
			</Info>
			<Category>
				<Title>Useful Links</Title>
				<ul>
					<ListItem>
						<i className="fa-sharp fa-solid fa-square"></i>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							General Information For Users
						</a>
					</ListItem>
					<ListItem>
						<i className="fa-sharp fa-solid fa-square"></i>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							Interactive Fairy Tales
						</a>
					</ListItem>
					<ListItem>
						<i className="fa-sharp fa-solid fa-square"></i>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							Official Storybook Maker Website
						</a>
					</ListItem>
					<ListItem>
						<i className="fa-sharp fa-solid fa-square"></i>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							Everyday Mathematics Links
						</a>
					</ListItem>
				</ul>
			</Category>
			<Category>
				<Title>Contact Us</Title>
				<ul>
					<ListItem>
						<i className="fa-sharp fa-solid fa-square"></i>
						<p>Address: 123 Ave, Lorem City, site Country, The World</p>
					</ListItem>
					<ListItem>
						<i className="fa-sharp fa-solid fa-square"></i>
						<p>Phone: +7 (212) 654-33-35</p>
					</ListItem>
					<ListItem>
						<i className="fa-sharp fa-solid fa-square"></i>
						<p>Email: Info@yourdomain.com</p>
					</ListItem>
				</ul>
			</Category>
			<Category>
				<Title>Contact Us</Title>
				<p>
					Subscribe to our MailChimp newsletter and stay up to date with all
					events coming straight in your mailbox:
				</p>
				<Form onSubmit={handlerForm}>
					<input type="text" placeholder="Your email address" />
					<button type="submit" onSubmit={handlerForm}>
						<i className="fa-solid fa-angles-right"></i>
					</button>
				</Form>
			</Category>
		</FooterContainer>
	);
};
