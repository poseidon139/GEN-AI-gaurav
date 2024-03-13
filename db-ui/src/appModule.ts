import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { UserViewComponent } from './app/user-view/user-view.component';
import { TopicViewComponent } from './app/topic-view/topic-view.component';
import { AddTopicUserComponent } from './app/add-topic-user/add-topic-user.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserViewComponent,
        TopicViewComponent,
        AddTopicUserComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }