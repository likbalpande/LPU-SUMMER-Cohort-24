const NavbarR = ({ setText }) => {
    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
        </div>
    );
};

export default NavbarR;
