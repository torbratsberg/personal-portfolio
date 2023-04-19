import './../assets/contact.css';

function Contact(props) {
	return (
		<div className="contact small section" id="contact">
			<h2>{props.title}</h2>
			<p>{props.email}</p>
		</div>
	);
}

export default Contact;
