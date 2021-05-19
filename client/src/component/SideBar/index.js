import React, { Component } from 'react'

const filters = [
    {name: 'brands', values: ['Redmi', 'Samsung', 'Nokia', 'Lava', 'Karbon', 'Motorola']},
    {name: "price", values: ['Under ₹1,000', '₹1,000 - ₹5,000', '₹5,000 - ₹10,000']},
    {name: "deals", values: ["Today's Deals"]}
]


export default class SideBar extends Component {

    renderValues = (values) => (
            values.map(value => (<div>
                <input type="checkbox" className="form-control-inline mx-2" id="exampleInputPassword1" placeholder={value} />
                <label htmlFor="exampleInputPassword1">{value}</label>
                </div>
            ))
    )

    render() {
        return (
            <div className="p-2">
                <div className="title py-2" style={{color: '#454'}}>
                        Filter
                </div> 
                {filters.map(obj => (
                <div> 
                    <b>{obj.name}</b>
                    {this.renderValues(obj.values)}
                </div>
                ))}
            </div>
        )
    }
}
