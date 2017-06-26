import React from 'react';
import Messages from './Messages';
import RawJSON from './RawJSON';

class LanguageCard extends React.Component {

  state = {
    showRaw: false
  }

  constructor() {
    super();
    this.toggleRaw = this.toggleRaw.bind(this);
  }

  toggleRaw(){
  	this.setState({showRaw: !this.state.showRaw});
  }

  render() {
  	let content;
  	if(this.state.showRaw){
  		content = <RawJSON messages={this.props.card.messages}/>
  		
  	} else {
  		content = <Messages messages={this.props.card.messages}/>
  	}


    return (
      <div className="language-card">
      	<div className="language-card-header">
      		<span>
      	    <span className="language-card-header-label">
      				Language:
      			</span>
      			<span className="language-card-header-language"> 
      				{this.props.card.languageName} 
      			</span>
      		</span>
      		<button className="language-card-header-raw-json" 
      		        onClick={this.toggleRaw}>
      			Edit raw JSON
      		</button>      	
      	</div>

      	<div className="language-card-body">
      		{content}
      	</div>
      </div>
    )
  }
}

export default LanguageCard;
