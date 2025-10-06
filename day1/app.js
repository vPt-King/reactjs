const postItem = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement('h2', {title: "Hoc react"}, 'hoc react vui'),
    React.createElement('p', null, 'hoc react nang cao')
)
ReactDOM.render(postItem, document.getElementById('root'))