// Implement function in progress

export default function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800">
          Confirm Sign Out
        </h2>
        <p className="text-gray-600 mt-2">Are you sure you want to sign out?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
