import Dashboard from  "../pages/backend/Dashboard";
import { ProductCreate, ProductEdit,ProductList,Category, Brand, Topic,Page, Post, PostCreate, Banner,Contact, ContactCreate, BannerCreate,Menu,MenuCreate, Order, OrderDetail,OrderCreate, PageCreate, User,UserCreate } from "../pages/backend/product";
import reader from "../pages/backend/Reader";
import orders from "../pages/backend/Orders";
import functions from "../pages/backend/function";
import products from "../pages/backend/products";
import users from "../pages/backend/users";
import statistics from "../pages/backend/statistics";

const BackendRouter = [
    { path: "/admin", component: Dashboard },
    { path: "/admin/product", component: ProductList},
    { path: "/admin/product/create", component: ProductCreate },
    { path: "/admin/product/edit/:id", component: ProductEdit },
    { path: "/admin/category", component: Category},
    { path: "/admin/brand", component: Brand},
    { path: "/admin/topic", component: Topic},
    { path: "/admin/page", component: Page},
    { path: "/admin/page/create", component: PageCreate},
    { path: "/admin/post", component: Post},
    { path: "/admin/post/create", component: PostCreate},
    { path: "/admin/banner", component: Banner},
    { path: "/admin/banner/create", component: BannerCreate},
    { path: "/admin/contact", component: Contact},
    { path: "/admin/contact/create", component: ContactCreate},
    { path: "/admin/menu", component: Menu},
    { path: "/admin/menu/create", component: MenuCreate},
    { path: "/admin/order", component: Order},
    { path: "/admin/order/create", component: OrderCreate},
    { path: "/admin/orderdetail", component: OrderDetail},
    { path: "/admin/user", component: User},
    { path: "/admin/user/create", component: UserCreate},


    { path: "/admin/reader", component: reader},
    { path: "/admin/orders", component: orders},
    { path: "/admin/function", component: functions},
    { path: "/admin/products", component: products},
    { path: "/admin/users", component: users},
    { path: "/admin/statistics", component: statistics},

];

export default BackendRouter;