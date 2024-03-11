import { routes } from "../communication/routes";
import { Menu } from "./interfaces/Menu.interface";

export const MenuList: Menu[] = [
    {
        path: routes.DASHBOARD,
        name: "Dashboard"
    },
    {
        path: routes.NEWS,
        name: "News"
    },
    {
        path: routes.COSMETICS,
        name: "Cosmetics"
    }
]

export const NewsCategories = ["br", "creative", "stw"];