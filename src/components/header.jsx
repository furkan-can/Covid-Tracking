import { useState } from "react";
import PropTypes from "prop-types"
import Logo from "./logo";
import MenuItem from "./menuitem";

const Header = ({ activeTitle, onMenuChange }) => {
    const [_activeTitle, setActiveTitle] = useState(activeTitle);

    const [menuItems] = useState(
        [
            {
                title: "Corona Values by Country",
                value: 1
            },
            {
                title: "All Recorded Corona Values",
                value: 2
            },
            {
                title: "Corona Values by Continent",
                value: 3
            }
        ]
    )

    return (
        <nav className="bg-gray-800 border-gray-200 px-2 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo />
                <div className="w-auto block">
                    <ul className="flex flex-row mt-0 font-seminold text-xs space-x-8 ">
                        {
                            menuItems.map((menuItem) => {
                                return <MenuItem key={menuItem.value} active={menuItem.title === _activeTitle}
                                    onClick={(title) => {
                                        setActiveTitle(title)
                                        onMenuChange(menuItem.value)
                                    }}
                                    title={menuItem.title} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}


Header.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func
};

Header.defaultProps = {
    activeTitle: "Corona Values by Country",
    onMenuChange: () => null,
};

export default Header;