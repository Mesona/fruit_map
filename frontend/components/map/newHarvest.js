import React from 'react';

export class NewHarvest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      harvest_name: "",
      ripe: true,
      lat: this.props.location.lat(),
      lng: this.props.location.lng(),
      harvest_selection: "harvest",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRipe = this.updateRipe.bind(this);
    this.swapSelection = this.swapSelection.bind(this);

  }

  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.stopPropagation();
    this.props.createHarvest(this.state)
      .then(() => location.reload());

  }

  updateRipe(status) {
    this.setState({ ripe: status});
  }

  swapSelection(type) {

    if (this.state.harvest_selection === "harvest" && type === "barter") {
      this.setState({ harvest_selection: "barter" });
    } else if (this.state.harvest_selection === "barter" && type === "harvest") {
      this.setState({ harvest_selection: "harvest" });
    }

  }

  render() {

    return(
      <div>
        Add new harvest!

        <form className="new-harvest-form"  onSubmit={(e) => this.handleSubmit(e)}>

          <section className="harvest-type">
            <span>Harvest Type: </span>
          </section>

          <label onClick={e => e.stopPropagation()} >
            <input
              type="radio"
              value="harvest"
              name="harvest_selection"
              defaultChecked
              onChange={() => this.swapSelection("harvest")}
            />New Harvest
          </label>

          {/* TODO: Uncomment after a/A job fair */}
          {/* <label onClick={e => e.stopPropagation()} >
            <input
              type="radio"
              value="barter"
              name="harvest_selection"
              onChange={() => this.swapSelection("barter")}
            />New Barter
            <br></br>
          </label> */}

          { this.state.harvest_selection === "harvest" ? 
            (
            <div>
              Harvest
              <input
                type="text"
                value={this.state.harvest_name}
                onChange={this.handleInput('harvest_name')}
              />

              <section className="ripe">
                <span>Ripe? </span>
              </section>

              <label onClick={e => e.stopPropagation()} >
                <input
                  type="radio"
                  value={this.state.ripe}
                  name="ripe"
                  defaultChecked
                  onChange={() => this.updateRipe(true)}
                />Ripe
              </label>
              <label onClick={e => e.stopPropagation()} >
                <input
                  type="radio"
                  value={this.state.ripe}
                  name="ripe"
                  onChange={() => this.updateRipe(false)}
                />Not Ripe
              </label>
            </div>
            
            )
          : 
            (<div>
              Barter
              <input
                type="text"
                value={this.state.harvest_name}
                onChange={this.handleInput('harvest_name')}
              />
            </div>)
          } 

          

          <br></br>

          <input type="submit" className="new-harvest-button"></input>
        </form>
      </div>
    )
  }

}

export default NewHarvest;