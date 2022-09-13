// Parent Component
class App extends React.Component {
    render() {
        return (
        <div>
            <Header name="Header"/>
            <Content name="Content" />
            <Footer  name="Footer"/>
        </div>
        )
    }
}
// Child Component
class Header extends React.Component {
    render() {
        return (
            <header>{this.props.name}</header>
        )
    }
}
// Child Component
class Content extends React.Component {
    render() {
        return (
            <main>{this.props.name}</main>
        )
    }
}
// Child Component
class Footer extends React.Component {
    render() {
        return (
            <footer>{this.props.name}</footer>
                
        )
    }
}




ReactDOM.render(<App />,document.getElementById("app"))