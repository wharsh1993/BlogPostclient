import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/blogs', pathMatch: 'full' },
    { path: 'blogs', component: BlogListComponent },
    { path: 'blogedit/:id', component: BlogFormComponent },
    { path: 'blogdetail/:id', component: BlogDetailComponent },
];
