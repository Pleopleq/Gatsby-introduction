import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import useInstagram from '../hooks/use-instagram'


const Insta = () => {
    const instaPhotos = useInstagram()
    const { username } = instaPhotos[0]

    return(
        <>
        <h2>Instagram posts from @{username}</h2>
        <div
        css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1f1 1fr 1fr;
        grid-gap: 1.5rem;
        `}
        >
            {instaPhotos.map(photo => (
                <a 
                href={`https://instagram.com/p/${photo.id}/`}
                css={css`
                box-shadow: 0;
                display:block;
                margin 0.5rem;
                max-width: 120px;
                width: 120px;
                `}>
                    <Image
                    fluid={photo.fluid}
                    alt={photo.caption}
                    css={css`
                    width: 150%;
                    
                    *{
                        margin-top: 0;
                    }`
                    }>
                    </Image>
                </a>
            ))}
        </div>
        <a href={`https://instagram.com/${username}`}> See more on instagram</a>
        </>
    )
}

export default Insta