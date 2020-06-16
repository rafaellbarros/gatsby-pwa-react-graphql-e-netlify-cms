import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

const Profile = () => (
    <StaticQuery 
        query={graphql`
            query MySiteMetadata {
                site {
                    siteMetadata {
                        title
                        position
                        description
                    }
                }
            }
        `}
        render={({ site: {siteMetadata: {title, position, description }}}) =>(
            <div className="Profile-wrapper">
                <h1>{title}</h1>
                <h2>{position}</h2>
                <p>{description}</p>
            </div>
        )}
    />
)

export default Profile