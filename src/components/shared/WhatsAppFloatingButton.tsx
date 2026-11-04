export function WhatsAppFloatingButton() {
  const whatsappUrl =
    "https://wa.me/916381010282?text=Hello%20Pep%20Software%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services!";

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (6381010282)"
        className="fixed bottom-6 right-6 z-50 flex items-center cursor-pointer select-none"
      >
        {/* Main WhatsApp Round Button (Clean, static, no animation) */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/35 transition-colors duration-200">
          {/* WhatsApp Vector Icon */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.58L5.06 16.27C4.24 14.96 3.81 13.46 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.44C16.32 14.32 15.1 13.72 14.87 13.63C14.65 13.55 14.48 13.51 14.32 13.76C14.15 14.01 13.67 14.57 13.53 14.74C13.38 14.9 13.23 14.92 12.98 14.8C12.73 14.67 11.93 14.41 10.98 13.56C10.24 12.9 9.74 12.08 9.59 11.83C9.44 11.58 9.57 11.45 9.7 11.32C9.81 11.21 9.94 11.04 10.07 10.89C10.19 10.74 10.23 10.63 10.31 10.47C10.39 10.3 10.35 10.16 10.29 10.04C10.23 9.92 9.74 8.71 9.53 8.21C9.33 7.73 9.13 7.79 8.98 7.78C8.84 7.77 8.67 7.77 8.51 7.77C8.34 7.77 8.07 7.83 7.85 8.08C7.62 8.32 6.98 8.92 6.98 10.15C6.98 11.38 7.87 12.56 8 12.73C8.12 12.9 9.76 15.42 12.26 16.5C12.85 16.76 13.32 16.91 13.67 17.02C14.27 17.21 14.82 17.18 15.25 17.12C15.73 17.05 16.73 16.51 16.94 15.93C17.14 15.35 17.14 14.86 17.08 14.74C17.02 14.63 16.82 14.56 16.57 14.44Z" />
          </svg>
        </div>
      </a>
    </aside>
  );
}
