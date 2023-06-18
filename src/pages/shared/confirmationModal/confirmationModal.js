const ConfirmationModal = ({title,message,successAction,successButtonName,closeModal}) => {
    return (
        <div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label onClick={() => successAction()} htmlFor="confirmation-modal" className="btn">yes</label>
      <button onClick={closeModal}>Close</button>
    </div>
  </div>
</div>

        </div>
    )
}
export default ConfirmationModal;