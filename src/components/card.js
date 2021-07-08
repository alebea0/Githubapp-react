import React from 'react';
    class Card extends React.Component {
        render() {
            return (
                <div className="github-profile">
                    <img src="https://place-hold.it/75" />
                    <div className="info">
                        <div className="name">Aquí irá el nombre</div>
                        <div className="company">Aquí irá la organización</div>
                    </div>
                </div>
            );
        }
    }