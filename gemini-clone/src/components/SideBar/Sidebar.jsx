import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
    const [extended, setExtended] = useState(false)

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} className="menu" alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent_title">recent</p>
                        <div className="recent_entry">
                            <img src={assets.message_icon} />
                            <p>Wht is react..?</p>
                        </div>
                    </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom_item recent_entry">
                    <img src={assets.question_icon} />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets.history_icon} />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets.setting_icon} />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
