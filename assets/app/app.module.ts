import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./message/message.component";
import {MessageListComponent} from "./message/mesage-list.component";
import {MessageInputComponent} from "./message/message-input.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}