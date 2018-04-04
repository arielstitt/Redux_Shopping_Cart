import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shelfItem: [
                "Bananas",
                "Frozen Pizza",
                "Flamin' Hot Cheetos",
                "Arugula"
            ]
        }
    }
    render() {
      const shelfItems = this.state.shelfItems.map( (item, id) => {
          return (
              <li key={id}>
                {item}
                <button onClick={()=> this.props.addItem(item)}> + </button>
              </li>
          )
      })



        return (
            <div>

            </div>
        );
    }
}

export default Shelf;