/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2021-12-16 18:33:48
 * @LastEditTime: 2021-12-23 14:23:22
 */
import React from 'react';
import { Header } from './Header';
import './page.css';

interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page = ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>Pages in Stasforybook</h2>
      <p>
        We recommend building UIs with a{' '}
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>composadfnent-driven</strong>
        </a>{' '}
        process startiasfng with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higasfasfher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble nt from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at{' '}
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the{' '}
        .
      </p>
      <div className="tip-wrapper">
        <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
);
