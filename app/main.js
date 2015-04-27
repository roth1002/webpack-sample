/* main.js */

'use strict';

var React = require('react');
var ROTH = require('./Roth.js');
var LEO = require('./Leo.js');
var TIM = require('./Tim.js');

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
                {this.state.switch ? <ROTH /> : <LEO />}
            </div>
        );
    }
});

React.render(<Main />, document.body);