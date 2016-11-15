const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render(){
    let time = React.createElement('p', {}, 'Two grannies having the time of their life!')
    let passengers = React.createElement('p', {}, 'Passengers:')
    let ul = React.createElement('ul', {},
    [
      React.createElement('li', {}, 'Agnes'),
      React.createElement('li', {}, 'Muriel'),
    ]);
    return React.createElement('div', {className: "oldercoaster"}, [time, passengers, ul])
  }
});

class InFrontOfYou extends React.Component {
  render() {
    let look = React.createElement('p', {}, `You shouldn't look too far.`)
    let solution = React.createElement('p', {}, ["Sometimes, the solution is ", React.createElement('strong', {}, "right in front of you.")])
    return React.createElement('div', {}, [look, solution])
  }
};

class ButcherShop extends React.Component {
  render() {
    let li = BUTCHER_PRODUCTS.map(function(element, index){
      return React.createElement('li', {key:`${index}`}, element)
    })
    let p = React.createElement('p', {key:"5"}, "Hello! We have the following products for sale today:")
    let ul = React.createElement('ul', {key:"6"}, li)
    return React.createElement('div', {className:"butcher-shop", key:"7"}, [p, ul])
  }
}



ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
