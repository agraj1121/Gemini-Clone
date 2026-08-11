

function Card({ text, icon, onClick }) {

    return (
        <div
            className="card"
            onClick={onClick}
        >

            <p>{text}</p>

            <img
                src={icon}
                alt=""
            />

        </div>
    );
}

export default Card;