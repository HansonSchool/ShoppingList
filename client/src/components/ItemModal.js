import React, {Component} from "react";
import {
	Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label,Input
} from "reactstrap"

import {connect} from "react-redux";
import {addItem, getItems} from "../actions/itemActions";

class ItemModal extends Component{
	state = {
		modalOpen:false,
		name:"",
		quantity:0
	}
	
	toggle = () => {
		this.setState(
		{modalOpen: !this.state.modalOpen}
		);
	}
	onSubmit = (e) =>{
		e.preventDefault();
		
		const newItem = {
			name:this.state.name,
			quantity:this.state.quantity
		}
		this.props.addItem(newItem);// TODO:  This always places new entry into list, even if it is a duplicate.
									// so it shows up twice.  When I refresh page, data is correct.
		//this.props.getItems();// I tried to get it to refresh the view here...
		this.toggle();
	}
	
	onChangeName = (e) => {
		console.log(this.state);
		this.setState({name:e.target.value.toLowerCase().trim() });
		
	}
	onChangeQuantity = (e) => {
		console.log(this.state);
		/*
		var q = 0;
		try{
			q=;
		}
		finally {
			q = 0;
		}
		*/
		this.setState({quantity: parseInt(e.target.value)});
	}
	render(){
		return(
			<div>
				<Button color="dark"  style = {{marginBottom:"2rem"}}
				        onClick = {this.toggle}
						>Add Item
				</Button>
				
				<Modal  isOpen = {this.state.modalOpen} toggle = {this.toggle} >
					<ModalHeader 
						toggle = {this.toggle}>Add To Shopping List
					</ModalHeader>
					<ModalBody >
						<Form onSubmit={ this.onSubmit} >
						 <FormGroup>
							<Label for="item">Item</Label>
							<Input type = "text" name="name" id="item" placeholder="Item to add"
									onChange={this.onChangeName}/>
							<Label for="quantity">Quantity</Label>
							<Input type = "number" name="quantity" id="quantity" placeholder="How many?"
									onChange={this.onChangeQuantity}
							/>
							
							
						 <Button color="dark" block style={{marginTop:"2rem"}}>Submit</Button>
						 </FormGroup>
						 
						</Form>
						
						
					</ModalBody>
					
				</Modal>
			</div>
		
		);
	}
}

const mapStateToProps = state =>({
	item:state.item
});


export default connect(mapStateToProps, {addItem, getItems})(ItemModal);