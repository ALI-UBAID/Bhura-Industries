import logoImage from '@/images/logo.jpg';

interface LogoProps {
  size?: number;
  variant?: 'light' | 'dark';
}

export default function Logo({ size = 80 }: LogoProps) {
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src={logoImage}
        alt="Bhura Industries Logo"
        width={size}
        height={size}
        className="rounded-full object-contain drop-shadow-md"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
