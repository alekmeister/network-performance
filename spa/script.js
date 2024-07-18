const momentScript = document.createElement('script');
momentScript.src = 'moment.light.js';
document.body.appendChild(momentScript);

function Moment() {
  const [date, setDate] = React.useState();

  return React.createElement(
    'div',
    {},
    React.createElement('input', { type: 'date', onChange: (e) => setDate(e.target.value) }),
    date ? moment(date).format("dddd, MMMM Do YYYY") : ''
  );
}

ReactDOM.render(
  React.createElement(Moment),
  document.getElementById('root')
)
