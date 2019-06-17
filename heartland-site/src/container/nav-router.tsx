import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ExternalLink from 'common/external-links';
import LandingPage from 'pages/landing-page/landing-page';
import AboutUsPage from 'pages/about-us/about-us-page';
import MoreInfoPage from 'pages/more-info-page/more-info-page';
import ResourcesPage from 'pages/additional-resources/additional-resources-page';
import { Link } from '@material-ui/core';
import externalLinks from 'common/external-links';

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
        label: 'Resources',
        route: 'additional-resoures',
    },
    {
        label: 'Petition',
        route: 'petition',
    },
];

const PetitionPage = () => <Link component="a" href={externalLinks.petition}>Petition</Link>;

const NavRouter = () => (
  <Switch>
    <Route exact={true} path="/" component={LandingPage} />
    <Route path="/about-us" component={AboutUsPage} />
    <Route path="/more-info" component={MoreInfoPage} />
    <Route path="/additional-resoures" component={ResourcesPage} />
    <Route 
      path="/petition" 
      component={() => {
        // FIXME GROSS ****
        window.location.href = 'https://actionnetwork.org/petitions/freeheartlandkids'; 
        return null;
      }}
    />
  </Switch>
);

export default NavRouter;