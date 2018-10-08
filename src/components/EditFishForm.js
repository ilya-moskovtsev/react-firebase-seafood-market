import React from "react"

class EditFishForm extends React.Component {
    handleChange = (event) => {
        // update that fish
        const updatedFish = {
            // Take a copy of the current fish
            ...this.props.fish,
            // Overwrite one thing that changed
            //ES6 computed property names allow using one change handler for all properties
            [event.currentTarget.name]: event.currentTarget.value
        };
        // Send all changes upstream to the App component where state lives
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return <div className="fish-edit">
            <input name="name" onChange={this.handleChange} value={this.props.fish.name} ref={this.nameRef}
                   type="text"/>
            <input name="price" onChange={this.handleChange} value={this.props.fish.price} ref={this.priceRef}
                   type="text"/>
            <select name="status" onChange={this.handleChange} value={this.props.fish.status} ref={this.statusRef}>
                <option value="available">Fresh</option>
                <option value="unavailable">Sold Out</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} ref={this.descRef}/>
            <input name="image" onChange={this.handleChange} value={this.props.fish.image} ref={this.imageRef}
                   type="text"/>
        </div>
    }
}

export default EditFishForm;