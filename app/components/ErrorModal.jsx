var React = require('react');

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
     var modal = new Foundation.Reveal($('#error-modal')); // could also use refs ... hmm
     modal.open();
   },
   // hmm data-reveal vs. data-reveal="" ??
   // hmm data-close vs. data-close="" ??
  //  Only with the  =""  did the OK button actually close it. hmm.
  render : function () {
    var {title, message} = this.props;
    return (
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
  }
});

module.exports = ErrorModal;
