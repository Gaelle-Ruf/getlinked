import './styles.scss';

import mug from './images/mug.png';

const ErrorPage = () => (
  <div className="errorpage">
    <p className="errorpage__title">404 mug not found</p>
    <img src={mug} alt="" className="errorpage__img" />
  </div>
);

export default ErrorPage;
