import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Info</h2>
            <dl className="alt">
                <dt>Workplace</dt>
                <dd>Shibuya &bull; Tokyo &bull; Japan</dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/pg_nukosuke" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/nukosuke" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://medium.com/@nukosuke" className="icon fa-medium alt"><span className="label">Medium</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; nukosuke.com</p>
    </footer>
)

export default Footer
