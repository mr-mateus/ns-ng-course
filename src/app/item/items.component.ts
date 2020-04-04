import { Component, OnInit, ViewChild } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
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
import { Router } from "@angular/router";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService, private router: Router) {}

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    deslogar() {
        remove("token");
        this.router.navigate(['items/item/1']);
    }
}
