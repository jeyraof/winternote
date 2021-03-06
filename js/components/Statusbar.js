/*jshint node: true*/
'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    var selectionInfo = this.props.selection.inspect();
    var bodyInfo = this.props.document.inspect();

    return <div className="note-statusbar">
      <div>Range: {selectionInfo}</div>
      <div className="note-test-body-info"><pre>{bodyInfo}</pre></div>
    </div>;
  }
});
