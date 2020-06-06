import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
    background-repeat: no-repeat;
    background-position: top 25% center;
    background-size: cover;
    height: 45vh;

    + * {
        margin-top: 0;
    } 
`

const TextBox = styled('div')`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px)/ 2) 2rem;
    width:100%;
`

const Hero = () => {
    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "Apatzingán-Michoacán-900x500.jpg"}){
            sharp: childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`)

    return (
        <ImageBackground Tag="section" fluid={image.sharp.fluid} >
            <TextBox>
            <h1>Frontend Masters Gatsby Intro</h1>
            <p><Link to="/about/">Learn about me</Link></p>
            </TextBox>
        </ImageBackground>
    )
}

export default Hero