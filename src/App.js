import React, { Component } from 'react'
import styles from './App.css'

import Failbuk from './components/failbukLogin'

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Failbuk />
        
      </div>
    )
  }
}

export default App