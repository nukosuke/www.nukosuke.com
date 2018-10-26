import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Career extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Career" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Career</h2>
            <table>
              <tbody>
                <tr>
                  <td>hoge</td>
                  <td>huga</td>
                </tr>
                <tr>
                  <td>hoge</td>
                  <td>huga</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Career
