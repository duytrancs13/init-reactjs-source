import React, { Component } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/actions'

class Home extends Component {
    onClick = () => {
        const { count } = this.props.data
        this.props.onClick({ count: count + 1 });
    }
    render() {
        const { data } = this.props;
        return (
            <div >
                <p className="home">
                    Count: {data.count}
                </p>
                <button className="btn btn-primary" onClick={this.onClick}>Click</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (count) => {
            dispatch(actions.click(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);