import React from 'react';

type GithubProfileInfoProps = {
    name: string;
    thumbnail: string;
    blog: string;
    bio: string;
}
const GithubProfileInfo = ({name, thumbnail, blog, bio}: GithubProfileInfoProps) => {
    return (
        <div>
            <div>
                <img src={thumbnail} alt="img" />
                <div>{name}</div>
            </div>
            <p>{bio}</p>
            <div>{blog !== '' && <a href={blog} />}</div>
        </div>
    );
};

export default GithubProfileInfo;