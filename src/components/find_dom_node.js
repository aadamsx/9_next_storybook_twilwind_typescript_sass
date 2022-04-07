// Which is the preferred option between callback refs and findDOMNode()?
// Answer
// Callback refs are preferred over the findDOMNode() API, due to the fact that findDOMNode() prevents certain improvements in React in the future.

// Legacy approach using findDOMNode()
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />;
  }
}

// Recommended approach using callback refs
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return <div ref={(node) => (this.node = node)} />;
  }
}

// Callback refs are preferred over findDOMNode().
