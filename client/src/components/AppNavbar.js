import React, {Component} from "react";

import{
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

class AppNavbar extends Component{
	constructor(props){
		super(props);
		this.state = { isOpen: false};
	}
/* overridden method is to in the constructor call:
constructor(props){
super(props);
this.toggle = this.toggle.bind(this);  // which binds the toggle method to 
}
toggle(){
}
*/

	// or just do this to override
	toggle = () => {
		this.setState({
		isOpen: !this.state.isOpen});
	}
	render(){
		return(
		<div>
			<Navbar color="dark" dark expand="sm" className="mb-5" >
				<Container>
					<NavbarBrand href="/">Shopping List </NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="www.google.com"> Search </NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
		);
	}
	
}



export default AppNavbar;