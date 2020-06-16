import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Profile = () => {
    const { 
        site: {
            siteMetadata: {title, position, description },
        },
    } = useStaticQuery(graphql`
            query MySiteMetadata {
                site {
                    siteMetadata {
                        title
                        position
                        description
                    }
                }
            }
        `)
    return (
        <div className="Profile-wrapper">
            <h1>{title}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
    )     
}

export default Profile