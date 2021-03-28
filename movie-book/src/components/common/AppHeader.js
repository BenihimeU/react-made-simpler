import './common.css';
//App Header component Common to most of pages

export default function AppHeader(props) {
    return <h2 className="AppHeader">{props.title}</h2>;
}