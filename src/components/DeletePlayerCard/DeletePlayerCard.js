import './DeletePlayerCard.scss';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { deleteIcon } from '../../assets/icons/indexIcons';

export default class DeletePlayerCard extends Component {
    refreshPage = () => {
        window.location.reload();
    }

    deletePlayer = () => {
        this.refreshPage();
    }

    render() {
        return (
            <Popup trigger={<input type="image" name="trashBin" src={deleteIcon} alt="Delete portfolio icon" className='portfolioCard__icon'></input>} modal nested>
                {close => (
                    <div className="popup">
                        <button className="popup__close" onClick={close}>&times;</button>
                        <div className="popup__text">
                            <h1 className="popup__title">Delete {this.props.name} Player from the database? </h1>
                            <p className="popup__content">Please confirm that you’d like to delete Player {this.props.name} from your roster of players. You won’t be able to undo this action.</p>
                        </div>
                        <div className="popup__actions">
                            <button className="popup__button-cancel" onClick={() => { close() }}>Cancel</button>
                            <button className="popup__button-delete" onClick={this.deletePlayer}>Delete</button>
                        </div>
                    </div>
                )}
            </Popup>
        );
    }

}