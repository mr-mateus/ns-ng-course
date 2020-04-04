import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "tns-core-modules/application-settings";

@Component({
    selector: "ns-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    webViewSrc = "http://192.168.15.4:4200/login";

    constructor(private router: Router) {}

    onLoadFinished(event: any) {
        const url = event.url as string;
        if (url.includes("token")) {
            setString("token", "autenticado");
            this.router.navigate(["items"]);
        }
    }

    goItems(){
        this.router.navigate(['items']);
    }
}
