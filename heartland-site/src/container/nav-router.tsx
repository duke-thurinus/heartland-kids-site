import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/landing-page/landing-page';

export interface RouteLabelProps {
    label: string;
    route: string;
}
export const RouteLabels: RouteLabelProps[] = [
    {
        label: 'What We Know',
        route: '/',
    },
    {
        label: 'About Us',
        route: 'about-us',
    },
    {
        label: 'More Info',
        route: 'more-info',
    },
    {
        label: 'Additional Resources',
        route: 'additional-resoures',
    },
    {
        label: 'Petition',
        route: 'petition',
    },
];

const AboutUsPage = () => <div>About us page</div>;
const MoreInfoPage = () => <div>More info  page</div>;
const ResourcesPage = () => <div>Resoures  page</div>;
const PetitionPage = () => <div>Petition</div>;

const NavRouter = () => (
  <Switch>
    <Route exact={true} path="/" component={LandingPage} />
    <Route path="/about-us" component={AboutUsPage} />
    <Route path="/more-info" component={MoreInfoPage} />
    <Route path="/additional-resoures" component={ResourcesPage} />
    <Route path="/petition" component={PetitionPage} />
  </Switch>
);

export default NavRouter;