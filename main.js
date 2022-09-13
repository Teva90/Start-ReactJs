// Parent Component
class App extends React.Component {

    state = {
        name : 'App Component'
    }

    render() {
        return (
        <div>
            <p>{this.state.name}</p>
            <Header name="Header"/>
            <Content name="Content" />
            <Footer  name="Footer"/>
        </div>
        )
    }
}
// Child Component
class Header extends React.Component {
    state = {
        name : 'Header component'
    }
    render() {
        return (
            <header>{this.props.name} and state {this.state.name}</header>
        )
    }
}
// Child Component
class Content extends React.Component {
    state = {
        name : 'Content component'
    }
    render() {
        return (
            <main>{this.props.name} and state {this.state.name}</main>
        )
    }
}
// Child Component
class Footer extends React.Component {
    state = {
        name : 'Footer component'
    }
    render() {
        return (
            <footer>{this.props.name} and state {this.state.name}</footer>
                
        )
    }
}




ReactDOM.render(<App />,document.getElementById("app"))