import React, { Component } from 'react'

import { Loading } from './Loading'

export class DynamicImport extends Component {
  state = {
    Component: null,
  }

  componentDidMount() {
    this.loadModule()
  }

  componentDidUpdate({ name }) {
    if (name !== this.props.name) {
      this.loadModule()
    }
  }

  loadModule = async () => {
    const { load, name } = this.props
    const module = await load()
    this.setState({ Component: module[name] })
  }

  render() {
    const { load, name, children, ...props } = this.props
    const { Component } = this.state

    if (children) {
      return children(Component)
    }
    return Component ? <Component {...props} /> : <Loading />
  }
}
DynamicImport.defaultProps = {
  name: 'default',
}
