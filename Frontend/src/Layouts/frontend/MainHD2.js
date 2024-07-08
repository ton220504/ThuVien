import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuService from "../../services/MenuService";

const MainHD2 = (props) => {
    const menu = props.menu;
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await menuService.list(menu.id, 6);
            setMenus(result.menus);
            //console.log(result);
        })();
    }, []);
    if (menus && menus.length > 0) {
        return (
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" >
                    {menu.name}
                </Link>
                <ul className="dropdown-menu">
                    {menus.map((submenu, index)=>{
                        return(
                            <li key={index}>
                                <Link className="dropdown-item">
                                    {submenu.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </li>

        );
    } else {
        return (
            <li className="nav-item ">
                <Link className="nav-link active"  aria-current="page" role="button" to={menu.Link} >{menu.name}</Link>
            </li>
        );
    };
}
export default MainHD2;