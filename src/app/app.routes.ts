import { Routes } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then(
            (c) => c.AboutComponent
          ),
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./pages/support/support.component').then(
            (c) => c.SupportComponent
          ),
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./pages/pricing/pricing.component').then(
            (c) => c.PricingComponent
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth-login/auth-login.component').then(
        (c) => c.AuthLoginComponent
      ),
  },
  {
    path: 'recovery',
    loadComponent: () =>
      import('./pages/auth-recovery/auth-recovery.component').then(
        (c) => c.AuthRecoveryComponent
      ),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/hero/hero.component').then(
            (c) => c.HeroComponent
          ),
      },
      {
        path: 'quiz',
        loadComponent: () =>
          import('./pages/quizz/quizz.component').then(
            (c) => c.QuizzComponent
          ),
      },
      {
        path: 'challenge1',
        loadComponent: () =>
          import('./pages/challenge1/challenge1.component').then(
            (c) => c.Challenge1Component
          ),
      },
      {
        path: 'challenge2',
        loadComponent: () =>
          import('./pages/challenge2/challenge2.component').then(
            (c) => c.Challenge2Component
          ),
      },
      {
        path: 'challenge3',
        loadComponent: () =>
          import('./pages/challenge3/challenge3.component').then(
            (c) => c.Challenge3Component
          ),
      },
      {
        path: 'leaderboard',
        loadComponent: () =>
          import('./pages/leaderboard/leaderboard.component').then(
            (c) => c.LeaderboardComponent
          ),
      },
      {
        path: 'rewards',
        loadComponent: () =>
          import('./pages/rewards/rewards.component').then(
            (c) => c.RewardsComponent
          ),
      },
    ]
  },
  {
    path: 'company',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/company/company-dashboard/company-dashboard.component').then(c => c.CompanyDashboardComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/company/company-home/company-home.component').then(c => c.CompanyHomeComponent),
      },
      {
        path: 'employee',
        loadComponent: () => import('./pages/company/company-employee/company-employee.component').then(c => c.CompanyEmployeeComponent),
      },
      {
        path: 'employee/:id',
        loadComponent: () => import('./pages/company/company-employee/company-employee-new/company-employee-new.component').then(c => c.CompanyEmployeeNewComponent),
      },
      {
        path: 'challenge',
        loadComponent: () => import('./pages/company/company-challenge/company-challenge.component').then(c => c.CompanyChallengeComponent),
      },
      {
        path: 'reporting',
        loadComponent: () => import('./pages/company/company-reporting/company-reporting.component').then(c => c.CompanyReportingComponent  ),
      },
      {
        path: 'rewards',
        loadComponent: () => import('./pages/company/company-rewards/company-rewards.component').then(c => c.CompanyRewardsComponent  ),
      },
      {
        path: 'performance',
        loadComponent: () => import('./pages/company/company-performace/company-performace.component').then(c => c.CompanyPerformaceComponent  ),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/company/company-settings/company-settings.component').then(c => c.CompanySettingsComponent  ),
      },
      {
        path: 'subscription',
        loadComponent: () => import('./pages/company/company-subscription/company-subscription.component').then(c => c.CompanySubscriptionComponent  ),
      },
    ]
  }
];
