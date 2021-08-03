import  React, { Component } from 'react';
class Account extends Component {
  constructor(props){
    super()
    this.textInput = 0;
    this.state = {
      balance: 0,
    }
    this.setTextInputRef = element => {
      this.textInput = element;
    };
  }
Deposit = () => {
  console.log(this.textInput)
      let balance = this.state.balance + parseInt(this.textInput.value);
      this.setState({
        balance: balance
      });
};
Withdraw = () => {
    let balance = this.state.balance - parseInt(this.textInput.value);
    this.setState({
      balance: balance
   });
};

  render(){
    if(this.state.balance === 0){
      return(
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance zero">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount"  ref={this.setTextInputRef}/>
        <input type="button" value="Deposit" onClick={this.Deposit} />
        <input type="button" value="Withdraw" onClick={this.Withdraw} />
      </div>)
    }else{
      return (
        <div className="account">
          <h2>{this.props.name}</h2>
          <div className="balance">${this.state.balance}</div>
          <input type="text" placeholder="enter an amount"  ref={this.setTextInputRef}/>
          <input type="button" value="Deposit" onClick={this.Deposit} />
          <input type="button" value="Withdraw" onClick={this.Withdraw} />
        </div>
    )
  }
}
}
export default Account;