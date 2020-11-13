import VueRouter from "vue-router";

import Bookables from "./bookables/Bookables";
import AnotherExample from "./components/AnotherExample";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/another",
        component: AnotherExample,
        name: "another"
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;
