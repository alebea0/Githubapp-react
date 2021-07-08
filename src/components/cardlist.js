import React from 'react';
import Card from './Card';

const testData = [
    {
    id: 5025309,
    name: "Jorge L Chuc Lopez",
    avatar_url: "https://avatars.githubusercontent.com/u/5025309?v=4",
    company: "GISoft"
    },
    {
    id: 25519322,
    name: "Jorge Chuc Lopez",
    avatar_url: "https://avatars.githubusercontent.com/u/25519322?v=4",
    company: "UACam"
    },
    {
    id: 25960217,
    name: "Jorge Luis Chuc Lopez",
    avatar_url: "https://avatars.githubusercontent.com/u/81385825?v=4",
    company: "ITCampeche"
    }
];


class CardList extends React.Component {
     render() {
        return (
         <div>
            {testData.map(profile =><Card key={profile.id} {...profile} />)}
        </div>
        );
    }
}
export default CardList;
