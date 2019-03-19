import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { getList, showUpdate, showDelete } from './categoryActions'


class CategoryList extends Component {
    componentDidMount() {
        this.props.getList()
    }

    render() {
        const list = this.props.list || []
        return (
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="dashboard-list-box margin-top-0">
                        <h4>Listagem de categorias</h4>
                        <table class="basic-table">
                            <tbody>
                                <tr>
                                    <th>Nome</th>
                                    <th>Ações</th>
                                </tr>
                                {list.map(category => (
                                    <tr>
                                        <td data-label="Column 1">{category.title}</td>
                                        <td data-label="Column 2">
                                            <a onClick={() => this.props.showUpdate(category)} class="button gray"><i class="sl sl-icon-note"></i> Editar</a>
                                            <a onClick={() => this.props.showDelete(category)} class="button gray"><i class="sl sl-icon-note"></i> Exluir</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.category.list })

const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)