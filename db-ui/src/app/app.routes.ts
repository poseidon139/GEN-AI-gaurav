import { Routes } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { TopicViewComponent } from './topic-view/topic-view.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/userview', 
        pathMatch: 'full'
    },
    {
        path: 'userview',
        component: UserViewComponent
    },
    {
        path: 'topicview',
        component: TopicViewComponent
    },
];
