import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';;
import { BlogComponent } from './components/blog/blog.component';;
import { UpdatesComponent } from './components/updates/updates.component';;
import { FaqComponent } from './components/faq/faq.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomepageComponent},
    { path: 'about', component: AboutComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'updates', component: UpdatesComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'support', component: SupportComponent}
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}