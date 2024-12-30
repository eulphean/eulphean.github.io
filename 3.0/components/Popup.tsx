import { ReactNode } from "react";

type PopupProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export enum PopupContentType {
    About = "About",
    Statement = "Statement"
}

export default function VideoPlayer (props: PopupProps) {
    if (!props.isOpen) return null;
    return (
        <div className="overflow-hidden fixed inset-0 z-50 flex flex-col items-center justify-center">
          {/* Overlay */}
          <div 
            className="fixed overflow-hidden inset-0 bg-black bg-opacity-85 transition-opacity"
            onClick={props.onClose}
          />
          
          {/* Popup Content */}
          <div className="relative flex flex-col items-center h-auto bg-gray-900 bg-opacity-95 rounded-lg shadow-xl max-w-4xl w-[100dvw] mx-4 z-50 max-h-[90vh] overflow-y-auto my-4">
            {/* Header */}
            <div className="flex flex-row items-baseline w-full justify-between p-4 border-b border-red-200 text-white">
              {<h2 className="text-xl font-semibold">{props.title}</h2>}
              <button
                onClick={props.onClose}
                className="text-gray-400 hover:text-red-600 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-4 text-white text-lg xl:text-xl font-medium cursor-pointer">
              {props.children}
            </div>

            {/* Close button */}
            <button 
              onClick={props.onClose}
              className="px-4 mb-4 w-fit py-2 bg-white text-black rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      );
}