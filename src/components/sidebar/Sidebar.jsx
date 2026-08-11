import './sidebar.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/Context';

function Sidebar({ extended, setExtended }) {

    const {
        previousPrompts,
        onSent,
        newChat
    } = useContext(Context);

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>

            <div className="menu-container">

                <img
                    className="menu-icon"
                    src={assets.menu_icon}
                    alt="Menu"
                    onClick={() => setExtended(prev => !prev)}
                />

                <div
                    className="new-chat"
                    onClick={newChat}
                >

                    <img
                        src={assets.plus_icon}
                        alt="New Chat"
                    />

                    {extended && <p>New Chat</p>}

                </div>

                {extended && (
                    <div className="recent">

                        <p className="recent-title">
                            Recent
                        </p>

                        {previousPrompts.map((item, index) => (

                            <div
                                className="recent-entry"
                                key={index}
                                onClick={() => onSent(item)}
                            >

                                <img
                                    src={assets.message_icon}
                                    alt=""
                                />

                                <p>
                                    {item.slice(0, 18)}
                                    {item.length > 18 ? "..." : ""}
                                </p>

                            </div>

                        ))}

                    </div>
                )}

            </div>

            <div className="bottom">

                <div className="bottom-item recent-entry">

                    <img
                        src={assets.question_icon}
                        alt=""
                    />

                    {extended && <p>Help</p>}

                </div>

                <div className="bottom-item recent-entry">

                    <img
                        src={assets.history_icon}
                        alt=""
                    />

                    {extended && <p>Activity</p>}

                </div>

                <div className="bottom-item recent-entry">

                    <img
                        src={assets.setting_icon}
                        alt=""
                    />

                    {extended && <p>Settings</p>}

                </div>

            </div>

        </div>
    );
}

export default Sidebar;