import { Outlet } from "react-router-dom";

export default function Layout(props) {
    return (<div>
        <header>
            <h1>Title 2</h1>
        </header>
        <Outlet />

    </div>)
}