export function MenuIsOpen() {
    return (
        <div className="container">
            <button
                onClick={() => {
                    setIsOpen(prevent => !prevent);
                    setClassMenu('menu-close');
                }}
            >
            <AiOutlineClose />

            </button>

            <h2>Menu</h2> 
        </div>
    )
}