import './../assets/listWrapper.css';

function ListWrapper(props) {

	return (
		<div className="section small list-wrapper">
			<h2 className="list-wrapper-title" dangerouslySetInnerHTML={{__html: props.title}}></h2>
			<div className="lists">
				{props.children}
			</div>
		</div>
	)
}

export default ListWrapper;
