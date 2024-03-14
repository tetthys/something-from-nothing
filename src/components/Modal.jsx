import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({ open, onCloseHandler, children }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCloseHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="p-8 w-full max-w-xl transform overflow-hidden rounded-2xl bg-white bg-opacity-80 shadow-xl transition-all">
                <div className="mt-2">
                  <h3 className="text-center text-3xl text-gray-600">
                    {children}
                  </h3>
                </div>

                <div className="mt-8 flex gap-x-4 justify-center">
                  <button className="text-3xl focus:outline-none text-success hover:opacity-80">
                    Yes
                  </button>
                  <button className="text-3xl focus:outline-none text-danger hover:opacity-80">
                    No
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
