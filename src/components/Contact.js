import './../assets/contact.css';

function Contact(props) {
	return (
		<div className="contact small section" id="contact">
			<h2>{props.title}</h2>
			<h3>{props.email}</h3>
		</div>
	);
}

export default Contact;
