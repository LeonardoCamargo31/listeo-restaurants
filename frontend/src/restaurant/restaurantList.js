import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//A connect()função conecta um componente React a um repositório Redux.

import { getList, showUpdate, showDelete } from './restaurantActions'

class RestaurantList extends Component {
    componentDidMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(restaurant => (
            <li>
                <div class="list-box-listing">
                    <div class="list-box-listing-img"><a href="#"><img src="assets/images/listing-item-06.jpg" alt="" /></a></div>
                    <div class="list-box-listing-content">
                        <div class="inner">
                            <h3>{restaurant.name}</h3>
                            <span>{restaurant.address}</span>
                            <div class="star-rating" data-rating="5.0">
                                <div class="rating-counter">(31 reviews)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-to-right">
                    <a onClick={() => this.props.showUpdate(restaurant)} class="button gray"><i class="sl sl-icon-note"></i> Editar</a>
                    <a onClick={() => this.props.showDelete(restaurant)} class="button gray"><i class="sl sl-icon-close"></i> Deletar</a>
                </div>
            </li>
        ))
    }


    render() {
        //se isso this.props.list estiver nulo/undefined false, ele assume o valor []
        const list = this.props.list || []
        console.log(list)
        return (
            

                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="dashboard-list-box margin-top-0">
                            <h4>Listagem de restaurantes</h4>
                            <ul>
                                {this.renderRows()}
                            </ul>
                        </div>
                    </div>

                    
                </div>
        )
    }
}

//state.billingCycle esse state é justamente state =>que é justamente o que você acabou de receber 
//esse state => é a junção de todos os seus reducers, e o billingCycle que é um reducer 
const mapStateToProps = state => ({ list: state.restaurant.list })

//sempre que getlist for chamado, automaticamente faz o dispach e chama os reducers
const mapDispatchToProps = dispatch => bindActionCreators({ getList , showUpdate, showDelete}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)