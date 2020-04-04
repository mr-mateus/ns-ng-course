import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
} from "@angular/router";
import { Injectable } from "@angular/core";
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

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router) {

    }    

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | boolean
        | import("@angular/router").UrlTree
        | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
        | Promise<boolean | import("@angular/router").UrlTree> {
        const token = getString("token");
        alert("main route token: " +  token);
        if (token) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        const token = getString("token");
        alert("child route token: " +  token);
        if (token) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
