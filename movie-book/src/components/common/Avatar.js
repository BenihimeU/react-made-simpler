
export const Avatar = ({ url, title, className }) => <img className={["avatar", className || ""].join(' ')} src={url} alt={title} />