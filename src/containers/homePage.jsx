import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../style/style.scss"

export class homePage extends Component {
    render() {
        return (
            <div>
                Home page;
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage)
