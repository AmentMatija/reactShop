import React,  {Component} from 'react';
import {Link } from 'react-router-dom';
import logo from "../logo.png";
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
  render() {
	    return (
	    <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
	       	<Link to="/">
				<img src={logo} alt="Web Shop Logo"	className="navbar-brand" />
			</Link>

			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className='text-bright no-decor'>
						Proizvodi
					</Link>
				</li>
			</ul>

			<Link to="/cart" className="ml-auto">
				<ButtonContainer >
					<span className="mr-2">
						<i className="fas fa-paw"/>
					</span>
					Moja košarica
				</ButtonContainer>
			</Link>
	  	</NavWrapper>
	   	);
	 	}
	}

const NavWrapper = styled.nav`
    background: var(--navbarCol);
     border-radius: 0rem 0rem 0rem 2rem;
`;


  
