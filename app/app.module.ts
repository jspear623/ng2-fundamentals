import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { EventsAppComponent} from "./events-app.component";
import {NavbarComponent} from "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.component";
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolver,
    EventRouteActivatorService
} from "./events/index";

import {AuthService} from "./user/auth.service";

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivatorService,
        EventsListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule{

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event. Do you really want to cancel?');
    return true;
}