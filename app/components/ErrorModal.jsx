var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Error Title'
    };
  },
  // https://facebook.github.io/react/docs/reusable-components.html
  propTypes : {
    title : React.PropTypes.string,
    message : React.PropTypes.string.isRequired,
  },
  // https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
  componentDidMount : function () {
    var {title, message} = this.props;

    var modalMarkup = (
      // all this WAS in render()
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>Our error message for you.</p>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            O.K.
          </button>
        </p>
      </div>
    );

// jQuery selector
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
// returns DOM Node where "this" component is ...
    $(ReactDOM.findDOMNode(this)).html($modal);

     var modal = new Foundation.Reveal($('#error-modal')); // could also use refs ... hmm
     modal.open();
   },
   // hmm data-reveal vs. data-reveal="" ??
   // hmm data-close vs. data-close="" ??
  //  Only with the  =""  did the OK button actually close it. hmm.
  render : function () {
    return (
      <div>
        // empty. min requirement.
        // we've moved it all up to componentDidMount
        // why? Foundation is Modifying the DOM, and that goofs up React.
        // so, as I understand it, we use ReactDOMServer to create the component's markup on the server
        // Sounds like, once rendered, by React, in that fashion (done on the server), React
        // no longer expects the resultant DOM to be minded by React (on the client)
        // So, if it changes (by Foundation), React (on the client) doesn't expect anything, and nothing breaks. Hmm.
        // I do not claim to understand this, so very much ...
      </div>
    );
  }
});

module.exports = ErrorModal;
