import { useState } from 'react';
import BrawlerEdit from './BrawlerEdit'

function BrawlerShow({ brawler, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(brawler.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newName) => {
        setShowEdit(false);
        onEdit(id, newName)
    };

    let content = <h3>{brawler.name}</h3>;
    if (showEdit) {
        content = <BrawlerEdit onSubmit={handleSubmit} brawler={brawler} />;
    }

    return (
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${brawler.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BrawlerShow;