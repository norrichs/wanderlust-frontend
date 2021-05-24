import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"

function Header(){
	return (
		<Wrapper>
			<ContentWrapper>
			<><img src="https://bn1304files.storage.live.com/y4m6eoCLVgWYHTvzFVWC_M6p1rYMiBuYNhbcKXEAn5hSEyvj153cCQHPClUVHmqi-mNU1SwcLN9GmaHZRcaYsTFMXNFMB18D0dxgxH1t88tO7Iqs-K_qH-kdIr09J_pjSHIm4-oQ028J1Q362Cf0fMpV3lgEPCiQOp6BKViirYTf9yxLKKDRGiGe1544sd4tGc2?width=500&height=500&cropmode=none" width="500" height="500" /></>
			<br />
				<TextWrapper>
					<Title>
						<h1>Nav</h1>
						<br />
						<h1>Home</h1>
					</Title>
					<Description>
						<p>This is my header.</p>
					</Description>
				</TextWrapper>
			</ContentWrapper>
		</Wrapper>
		
	)
}

export default Header

// const menuData = ["Home", "Agency Profile", "Booking", "Customer Profile", "Popular Trips", " Trip"]

// function Header () {
// 	return (
// 		<>
// 		{menuData.map(item => (
// 			<p>{item}</p>
// 		))}
// 		</>
// 	)
// }

const Wrapper = styled.div`
	background: linear-gradient(108deg, #FFBD08 0%, #FF5a5a 70%);
`
const ContentWrapper = styled.div `
	max-width: 1234px;
	margin: 0 auto;
	padding: 100px 30px;

`
const TextWrapper = styled.div`
	max-width: 360px;
	display: grid;
	gap: 30px;
`
const Title = styled.h1`
	font-weight: bold;
	font-size: 60px;
	color: black;
`
const Description = styled.p`

`


// const Header = (props) => {


// 	return (
// 		<div>hello world Header</div>
// 	)
// }
// export default Header