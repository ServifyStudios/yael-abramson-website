export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ background: '#0D0118' }}
    >
      <p className="font-serif text-lg text-white mb-2">Yael Abramson</p>
      <p
        className="text-xs font-sans"
        style={{ color: 'rgba(155, 79, 216, 0.45)' }}
      >
        © {new Date().getFullYear()} Yael Abramson. All rights reserved.
      </p>
    </footer>
  )
}
