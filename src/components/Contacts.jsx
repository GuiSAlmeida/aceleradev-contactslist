import React, { Component } from "react";

import Contact from './Contact';

class Contacts extends Component {
	render() {
		const { contacts } = this.props;
		
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data" >Nome</span>
						<span className="contact__data" >Telefone</span>
						<span className="contact__data" >País</span>
						<span className="contact__data" >Admissão</span>
						<span className="contact__data" >Empresa</span>
						<span className="contact__data" >Departamento</span>
					</article>

					{ contacts &&
						contacts.map(contact => {
							return (
								<Contact data={contact} key={contact.id} />
							);
						})
					}

				</section>
			</div>
		);
	}
}

export default Contacts;
