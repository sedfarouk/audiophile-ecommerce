import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <div className="flex-shrink-0 lg:flex-1">
            <Link to="/" className="text-h5 font-bold text-white tracking-wide hover:text-audiophile-orange transition-colors duration-200">
                audiophile
            </Link>
        </div>
    )
}
