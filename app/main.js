/* main.js */

'use strict';

var React = require('react');
    ROTH = require('./Roth.js');
    LEO = require('./Leo.js');
    TIM = require('./Tim.js');

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true
        };
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },
    render() {
        return (
            <div>
                <input type="button" onClick={this._toggle} value="點我"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}
            </div>
        );
    }
});

React.render(<Main />, document.body);