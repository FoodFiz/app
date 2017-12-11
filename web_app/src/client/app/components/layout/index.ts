import { MainComponent } from './main.component';
import { SidenavComponent } from '../+sidenav/sidenav.component';
import { CategoriesComponent } from '../+categories/categories.component';
import { SubscribeComponent } from '../+subscribe/subscribe.component';
import { FooterComponent } from '../+footer/footer.component';

export const LAYOUT_COMPONENTS: Array<any> = [
  MainComponent,
  SidenavComponent,
  CategoriesComponent,
  FooterComponent,
  SubscribeComponent
];

export * from './main.component';
