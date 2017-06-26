import React from 'react';
import LanguageCard from './LanguageCard';

class LanguageCardSet extends React.Component {

  constructor(){
  	super();
  	this.readerCard = this.renderCard.bind(this);
  }	

  renderCard(card, key){
  	return(
  		<LanguageCard key={key} 
                    langIndex={key}
                    card={card} 
                    onMessageValueChange={this.props.onMessageValueChange}/>
  	)
  }

  render() {
    return (
      <div className="language-card-set">
      	{this.props.languageCardSet.map( (card, key) => this.renderCard(card, key))}
      </div>
    )
  }
}

export default LanguageCardSet;