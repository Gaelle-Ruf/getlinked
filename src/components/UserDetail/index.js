/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import ArtisteDetailComp from 'src/components/ArtisteDetailComp';
import PromoterDetailComp from 'src/components/PromoterDetailComp';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  function findUser(users, searchedSlug) {
    const user = users.find((testedUser) => {
      return testedUser.slug.toLowerCase() === searchedSlug.toLowerCase();
    });
    return user;
  }

  const { slug } = useParams();
  const user = useSelector((state) => findUser(state.users, slug));

  if (user.type === 'artiste') {
    return (
      <ArtisteDetailComp userDetail={user} />
    );
  }
  if (user.type === 'organisateur') {
    return (
      <PromoterDetailComp userDetail={user} />
    );
  }
};

export default UserDetail;
