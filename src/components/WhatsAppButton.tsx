import { companyInfo } from "@/lib/data";

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    "Hello, I would like to inquire about your baking trays and moulds.",
  )}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-green-500/40"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="relative z-10 h-7 w-7 fill-current text-white"
      >
        <path d="M12.004 2.003a9.99 9.99 0 0 0-8.497 15.252L2 22l4.863-1.463a9.99 9.99 0 1 0 5.141-18.534Zm0 18.313a8.32 8.32 0 0 1-4.247-1.164l-.305-.181-2.886.867.889-2.812-.199-.289a8.332 8.332 0 1 1 7.548 3.579Zm5.468-5.937c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.198.297-.768.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.478-.883-.787-1.479-1.76-1.652-2.057-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.095 3.2 5.077 4.491.71.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
      </svg>
      {/* Pulse ring */}
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      {/* Tooltip */}
      <span className="absolute right-16 z-10 whitespace-nowrap rounded-lg bg-ink-950 px-3 py-2 text-sm font-medium text-cream-50 opacity-0 transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
