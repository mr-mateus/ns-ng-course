import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth-guard/auth-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "items", 
        children: [
            {
                path: "",
                component: ItemsComponent
            },
            { path: "item/:id", component: ItemDetailComponent }
        ],
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
