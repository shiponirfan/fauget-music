
const Modal = ({ children, isVisible, onClose }) => {
    if (!isVisible) return null;
    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    }
    return (
        <div className="fixed inset—0 w-full h-full top-0 left-0 bg-black bg-opacity-50  flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[600px]">
                <div className="bg-secondary-bg rounded-xl p-12">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal