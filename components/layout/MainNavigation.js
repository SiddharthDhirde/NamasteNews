import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Namaste News</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All News</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
