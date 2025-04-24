import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSwatchbook, faMap, faWifi, faImage, faMapMarkerAlt, faVideo, faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="navbar container flex items-center justify-between">
      <div className="flex items-center">
        <img src="/assets/logo.svg" alt="Godrej Horizon" style={{ height: 25 }} />
        <h6 className="ml-2 font-bold">GODREJ HORIZON WADALA</h6>
      </div>
      <ul className="flex items-center space-x-4 text-sm">
        {[
          ['Home', faHome],
          ['Price', faSwatchbook],
          ['Site & Floor Plan', faMap],
          ['Amenities', faWifi],
          ['Gallery', faImage],
          ['Location', faMapMarkerAlt],
          ['Virtual Site Visit', faVideo],
          ['Download Brochure', faDownload],
        ].map(([label, icon]) => (
          <li key={label} className="flex items-center cursor-pointer hover:text-green-700">
            <FontAwesomeIcon icon={icon} className="mr-1" /> {label}
          </li>
        ))}
      </ul>
      <button className="button">Pre Register</button>
    </nav>
  )
}
