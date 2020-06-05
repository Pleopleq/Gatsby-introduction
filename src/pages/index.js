import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
<Layout>
    <h1>Home</h1>
    <div>Hey Frontend Masters!</div>
    <Link to="/about">About &rarr;</Link>
</Layout>
)